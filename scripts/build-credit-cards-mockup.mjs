/**
 * Place the Credit Cards desktop + mobile pages into a distinct lifestyle
 * mockup (laptop + phone) in the same photographic theme as the other RBC studies.
 *
 * Screenshots keep their original proportions (cover-fit) and are only rotated
 * to match the device, so UI is not stretched into the camera's foreshortening.
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { access } from "node:fs/promises";

const root = fileURLToPath(new URL("../", import.meta.url));
const studyDir = path.join(root, ".private", "rbc-credit-cards-newcomers");
const imagesDir = path.join(studyDir, "images");
const deskScene = path.join(imagesDir, "desk-scene.jpg");
const desktopCapture = path.join(imagesDir, "screen-capture.png");
const mobileCapture = path.join(imagesDir, "mobile-capture.png");

const OUT_W = 2000;
const OUT_H = 1333;
const SCREEN_THRESH = 236;
/** Crop the cookie banner off the desktop capture without changing the page layout. */
const DESKTOP_CROP_H = 770;

await access(deskScene);
await access(desktopCapture);
await access(mobileCapture);

function sampleBilinear(src, sw, sh, x, y) {
  if (x < 0 || y < 0 || x >= sw - 1 || y >= sh - 1) return null;
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const dx = x - x0;
  const dy = y - y0;
  const idx = (xx, yy) => (yy * sw + xx) * 4;
  const mix = (a, b, t) => a + (b - a) * t;
  const out = [0, 0, 0];
  for (let c = 0; c < 3; c++) {
    const p00 = src[idx(x0, y0) + c];
    const p10 = src[idx(x0 + 1, y0) + c];
    const p01 = src[idx(x0, y0 + 1) + c];
    const p11 = src[idx(x0 + 1, y0 + 1) + c];
    out[c] = mix(mix(p00, p10, dx), mix(p01, p11, dx), dy);
  }
  return out;
}

function sampleClamped(src, sw, sh, x, y) {
  return sampleBilinear(
    src,
    sw,
    sh,
    Math.min(sw - 1.001, Math.max(0, x)),
    Math.min(sh - 1.001, Math.max(0, y)),
  );
}

function isWhitePixel(data, W, x, y) {
  const i = (y * W + x) * 4;
  return data[i] > 248 && data[i + 1] > 248 && data[i + 2] > 248;
}

function isScreenPixel(data, W, x, y, t = SCREEN_THRESH) {
  const i = (y * W + x) * 4;
  return data[i] > t && data[i + 1] > t && data[i + 2] > t;
}

function whiteBlobs(data, W, H) {
  const seen = new Uint8Array(W * H);
  const blobs = [];
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const k = y * W + x;
      if (seen[k] || !isWhitePixel(data, W, x, y)) continue;
      let minX = x,
        maxX = x,
        minY = y,
        maxY = y,
        n = 0;
      const stack = [[x, y]];
      seen[k] = 1;
      while (stack.length) {
        const [cx, cy] = stack.pop();
        n++;
        minX = Math.min(minX, cx);
        maxX = Math.max(maxX, cx);
        minY = Math.min(minY, cy);
        maxY = Math.max(maxY, cy);
        for (const [nx, ny] of [
          [cx + 1, cy],
          [cx - 1, cy],
          [cx, cy + 1],
          [cx, cy - 1],
        ]) {
          if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
          const nk = ny * W + nx;
          if (seen[nk] || !isWhitePixel(data, W, nx, ny)) continue;
          seen[nk] = 1;
          stack.push([nx, ny]);
        }
      }
      if (n > 4000) blobs.push({ minX, maxX, minY, maxY, n, w: maxX - minX + 1, h: maxY - minY + 1 });
    }
  }
  return blobs.sort((a, b) => b.n - a.n);
}

function collectScreenPixels(mask, W, H, blob) {
  const pad = 10;
  const minX = Math.max(0, blob.minX - pad);
  const maxX = Math.min(W - 1, blob.maxX + pad);
  const minY = Math.max(0, blob.minY - pad);
  const maxY = Math.min(H - 1, blob.maxY + pad);
  const pixels = [];
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      if (!isScreenPixel(mask, W, x, y)) continue;
      pixels.push(x, y);
    }
  }
  return pixels;
}

/** Rotation that makes the screen's bounding box smallest, i.e. the device tilt. */
function screenAngle(pixels, cx, cy) {
  let best = 0;
  let bestArea = Infinity;
  for (let deg = -10; deg <= 10; deg += 0.25) {
    const a = (deg * Math.PI) / 180;
    const cos = Math.cos(a);
    const sin = Math.sin(a);
    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;
    for (let i = 0; i < pixels.length; i += 8) {
      const dx = pixels[i] - cx;
      const dy = pixels[i + 1] - cy;
      const lx = dx * cos + dy * sin;
      const ly = -dx * sin + dy * cos;
      if (lx < minX) minX = lx;
      if (lx > maxX) maxX = lx;
      if (ly < minY) minY = ly;
      if (ly > maxY) maxY = ly;
    }
    const area = (maxX - minX) * (maxY - minY);
    if (area < bestArea) {
      bestArea = area;
      best = a;
    }
  }
  return best;
}

function hideFigmaOverlay(buf, W, H, ch) {
  const x0 = Math.floor(W * 0.77);
  const y0 = Math.floor(H * 0.86);
  for (let y = y0; y < H; y++) {
    for (let x = x0; x < W; x++) {
      const i = (y * W + x) * ch;
      buf[i] = 255;
      buf[i + 1] = 255;
      buf[i + 2] = 255;
      if (ch === 4) buf[i + 3] = 255;
    }
  }
}

/**
 * Draw the screenshot onto the device's white screen. Cover-fit keeps the
 * original aspect ratio; only rotation matches the photo.
 */
function paintCoverOnMask(dest, mask, W, blob, srcBuf, sw, sh, { alignY = 0, rotate = true } = {}) {
  const pixels = collectScreenPixels(mask, W, dest.length / (W * 4), blob);
  if (pixels.length < 100) throw new Error("Screen pixels not found");
  const cx = (blob.minX + blob.maxX) / 2;
  const cy = (blob.minY + blob.maxY) / 2;
  const angle = rotate ? screenAngle(pixels, cx, cy) : 0;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  let minLx = Infinity,
    maxLx = -Infinity,
    minLy = Infinity,
    maxLy = -Infinity;
  const local = new Float64Array(pixels.length);
  for (let i = 0; i < pixels.length; i += 2) {
    const dx = pixels[i] - cx;
    const dy = pixels[i + 1] - cy;
    const lx = dx * cos + dy * sin;
    const ly = -dx * sin + dy * cos;
    local[i] = lx;
    local[i + 1] = ly;
    if (lx < minLx) minLx = lx;
    if (lx > maxLx) maxLx = lx;
    if (ly < minLy) minLy = ly;
    if (ly > maxLy) maxLy = ly;
  }

  const destW = maxLx - minLx;
  const destH = maxLy - minLy;
  const scale = Math.max(destW / sw, destH / sh);
  const placedW = sw * scale;
  const placedH = sh * scale;
  const ox = minLx + (destW - placedW) / 2;
  const oy = minLy + (destH - placedH) * alignY;

  for (let i = 0; i < pixels.length; i += 2) {
    const sx = (local[i] - ox) / scale;
    const sy = (local[i + 1] - oy) / scale;
    const rgba = sampleClamped(srcBuf, sw, sh, sx, sy);
    if (!rgba) continue;
    const di = (pixels[i + 1] * W + pixels[i]) * 4;
    dest[di] = rgba[0];
    dest[di + 1] = rgba[1];
    dest[di + 2] = rgba[2];
    dest[di + 3] = 255;
  }

  return { angle, destW, destH, scale };
}

const sceneMeta = await sharp(deskScene).metadata();
const scaledH = Math.round((OUT_W / sceneMeta.width) * sceneMeta.height);
const cropTop = Math.max(0, Math.round((scaledH - OUT_H) * 0.42));

const scene = await sharp(deskScene)
  .resize(OUT_W, scaledH, { kernel: "lanczos3" })
  .extract({ left: 0, top: cropTop, width: OUT_W, height: OUT_H })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const dest = scene.data;
const W = scene.info.width;
const H = scene.info.height;
const screenMask = Buffer.from(dest);
const blobs = whiteBlobs(dest, W, H);
if (blobs.length < 2) throw new Error(`Expected laptop + phone white screens, found ${blobs.length}`);

const deskMeta = await sharp(desktopCapture).metadata();
const desktop = await sharp(desktopCapture)
  .extract({
    left: 0,
    top: 0,
    width: deskMeta.width,
    height: Math.min(DESKTOP_CROP_H, deskMeta.height),
  })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const mobile = await sharp(mobileCapture).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
hideFigmaOverlay(mobile.data, mobile.info.width, mobile.info.height, mobile.info.channels);

const laptop = paintCoverOnMask(
  dest,
  screenMask,
  W,
  blobs[0],
  desktop.data,
  desktop.info.width,
  desktop.info.height,
  { alignY: 0, rotate: false },
);
const phone = paintCoverOnMask(
  dest,
  screenMask,
  W,
  blobs[1],
  mobile.data,
  mobile.info.width,
  mobile.info.height,
  { alignY: 0, rotate: true },
);

const mockup = await sharp(dest, { raw: { width: W, height: H, channels: 4 } })
  .webp({ quality: 92 })
  .toBuffer();

await sharp(mockup).toFile(path.join(imagesDir, "cover-mockup.webp"));
await sharp(mockup).toFile(path.join(imagesDir, "cover-final.webp"));
await sharp(mockup)
  .resize(640, 400, { fit: "cover", position: "centre" })
  .webp({ quality: 88 })
  .toFile(path.join(studyDir, "thumbnail.webp"));

console.log("Laptop", laptop);
console.log("Phone", phone);
console.log("Wrote cover mockup + thumbnail on the desk scene.");
