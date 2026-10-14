/**
 * Place the Credit Cards desktop + mobile pages into a distinct lifestyle
 * mockup (laptop + phone) in the same photographic theme as the other RBC studies.
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
const DESKTOP_CROP_H = 770;

await access(deskScene);
await access(desktopCapture);
await access(mobileCapture);

function solve(A, b) {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]]);
  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let r = col + 1; r < n; r++) if (Math.abs(M[r][col]) > Math.abs(M[pivot][col])) pivot = r;
    [M[col], M[pivot]] = [M[pivot], M[col]];
    const div = M[col][col];
    for (let c = col; c <= n; c++) M[col][c] /= div;
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const f = M[r][col];
      for (let c = col; c <= n; c++) M[r][c] -= f * M[col][c];
    }
  }
  return M.map((row) => row[n]);
}

function homography(destPts, srcPts) {
  const A = [];
  const b = [];
  for (let i = 0; i < 4; i++) {
    const [x, y] = destPts[i];
    const [u, v] = srcPts[i];
    A.push([x, y, 1, 0, 0, 0, -u * x, -u * y]);
    b.push(u);
    A.push([0, 0, 0, x, y, 1, -v * x, -v * y]);
    b.push(v);
  }
  const h = solve(A, b);
  h.push(1);
  return h;
}

function applyH(h, x, y) {
  const w = h[6] * x + h[7] * y + h[8];
  return [(h[0] * x + h[1] * y + h[2]) / w, (h[3] * x + h[4] * y + h[5]) / w];
}

function insideQuad(p, quad) {
  let sign = 0;
  for (let i = 0; i < 4; i++) {
    const [ax, ay] = quad[i];
    const [bx, by] = quad[(i + 1) % 4];
    const z = (bx - ax) * (p[1] - ay) - (by - ay) * (p[0] - ax);
    const s = Math.sign(z) || sign;
    if (sign === 0) sign = s;
    else if (s !== 0 && s !== sign) return false;
  }
  return true;
}

function inRoundedUV(u, v, radius) {
  if (u < 0 || v < 0 || u > 1 || v > 1) return false;
  const r = radius;
  const dx = u < r ? r - u : u > 1 - r ? u - (1 - r) : 0;
  const dy = v < r ? r - v : v > 1 - r ? v - (1 - r) : 0;
  if (dx === 0 || dy === 0) return true;
  return dx * dx + dy * dy <= r * r;
}

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

function isWhitePixel(data, W, x, y) {
  const i = (y * W + x) * 4;
  return data[i] > 248 && data[i + 1] > 248 && data[i + 2] > 248;
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

function blobToQuad(data, W, blob) {
  const { minX, maxX, minY, maxY, w } = blob;
  const thresh = w * 0.72;
  const span = (y) => {
    let a = null,
      b = null;
    for (let x = minX; x <= maxX; x++) {
      if (isWhitePixel(data, W, x, y)) {
        if (a === null) a = x;
        b = x;
      }
    }
    return [a, b];
  };
  let top = null,
    bot = null;
  for (let y = minY; y <= maxY; y++) {
    const [a, b] = span(y);
    if (a !== null && b - a > thresh) {
      if (top === null) top = y;
      bot = y;
    }
  }
  const [tl, tr] = span(top);
  const [bl, br] = span(bot);
  return [
    [tl, top],
    [tr, top],
    [br, bot],
    [bl, bot],
  ];
}

function paintQuad(dest, W, H, quad, srcBuf, sw, sh, round = 0.04) {
  const srcQuad = [
    [0, 0],
    [sw - 1, 0],
    [sw - 1, sh - 1],
    [0, sh - 1],
  ];
  const Hmap = homography(quad, srcQuad);
  const xs = quad.map((p) => p[0]);
  const ys = quad.map((p) => p[1]);
  const minX = Math.max(0, Math.floor(Math.min(...xs)));
  const maxX = Math.min(W - 1, Math.ceil(Math.max(...xs)));
  const minY = Math.max(0, Math.floor(Math.min(...ys)));
  const maxY = Math.min(H - 1, Math.ceil(Math.max(...ys)));
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      if (!insideQuad([x + 0.5, y + 0.5], quad)) continue;
      const [sx, sy] = applyH(Hmap, x + 0.5, y + 0.5);
      const u = sx / (sw - 1);
      const v = sy / (sh - 1);
      if (!inRoundedUV(u, v, round)) continue;
      const rgba = sampleBilinear(srcBuf, sw, sh, sx, sy);
      if (!rgba) continue;
      const i = (y * W + x) * 4;
      dest[i] = rgba[0];
      dest[i + 1] = rgba[1];
      dest[i + 2] = rgba[2];
      dest[i + 3] = 255;
    }
  }
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
const blobs = whiteBlobs(dest, W, H);
if (blobs.length < 2) throw new Error(`Expected laptop + phone white screens, found ${blobs.length}`);

const laptopQuad = blobToQuad(dest, W, blobs[0]);
const phoneQuad = blobToQuad(dest, W, blobs[1]);

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

paintQuad(dest, W, H, laptopQuad, desktop.data, desktop.info.width, desktop.info.height, 0.03);
paintQuad(dest, W, H, phoneQuad, mobile.data, mobile.info.width, mobile.info.height, 0.12);

const mockup = await sharp(dest, { raw: { width: W, height: H, channels: 4 } })
  .webp({ quality: 92 })
  .toBuffer();

await sharp(mockup).toFile(path.join(imagesDir, "cover-mockup.webp"));
await sharp(mockup).toFile(path.join(imagesDir, "cover-final.webp"));
await sharp(mockup)
  .resize(640, 400, { fit: "cover", position: "centre" })
  .webp({ quality: 88 })
  .toFile(path.join(studyDir, "thumbnail.webp"));

console.log("Laptop quad", laptopQuad);
console.log("Phone quad", phoneQuad);
console.log("Wrote cover mockup + thumbnail on the new desk scene.");
