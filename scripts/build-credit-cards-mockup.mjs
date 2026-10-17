/**
 * Place the Credit Cards desktop + mobile pages into a lifestyle mockup
 * (laptop + phone) in the same photographic theme as the other RBC studies.
 *
 * Screenshots are mapped onto the real screen corners and clipped to the
 * glass, so they sit edge to edge without stretching past the bezel.
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
const SCREEN_THRESH = 240;
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

function fitX(pts) {
  const n = pts.length;
  let sy = 0,
    sx = 0,
    syy = 0,
    sxy = 0;
  for (const p of pts) {
    sy += p.y;
    sx += p.x;
    syy += p.y * p.y;
    sxy += p.x * p.y;
  }
  const m = (n * sxy - sy * sx) / (n * syy - sy * sy);
  const c = (sx - m * sy) / n;
  return { m, c, xAt: (y) => m * y + c };
}

function intersectEdgeAndSlope(edge, x0, y0, s) {
  const den = 1 - edge.m * s;
  const x = (edge.m * y0 - edge.m * s * x0 + edge.c) / den;
  const y = y0 + s * (x - x0);
  return [x, y];
}

/** Four screen corners from the glass edges, including rounded-corner extrema. */
function fitDeviceQuad(data, W, H, blob, { tilt = false } = {}) {
  const pad = 6;
  const minX = Math.max(0, blob.minX - pad);
  const maxX = Math.min(W - 1, blob.maxX + pad);
  const minY = Math.max(0, blob.minY - pad);
  const maxY = Math.min(H - 1, blob.maxY + pad);
  const rows = [];
  for (let y = minY; y <= maxY; y++) {
    let a = null;
    let b = null;
    for (let x = minX; x <= maxX; x++) {
      if (!isScreenPixel(data, W, x, y)) continue;
      if (a === null) a = x;
      b = x;
    }
    if (a !== null && b - a > 40) rows.push({ y, a, b, span: b - a });
  }
  if (rows.length < 20) throw new Error("Screen edges not found");
  const spans = rows.map((r) => r.span).sort((a, b) => a - b);
  const median = spans[spans.length >> 1];
  const straight = rows.filter((r) => r.span > median * 0.9 && r.span < median * 1.08);
  if (straight.length < 10) throw new Error("Straight screen edges not found");
  const left = fitX(straight.map((r) => ({ x: r.a, y: r.y })));
  const right = fitX(straight.map((r) => ({ x: r.b, y: r.y })));
  const topY = rows[0].y;
  const botY = rows[rows.length - 1].y;
  if (!tilt) {
    return [
      [left.xAt(topY), topY],
      [right.xAt(topY), topY],
      [right.xAt(botY), botY],
      [left.xAt(botY), botY],
    ];
  }
  // Top and bottom of the glass follow the phone tilt, not the laptop horizon.
  const s = -(left.m + right.m) / 2;
  const topLeft = [left.xAt(topY), topY];
  const botLeft = [left.xAt(botY), botY];
  const topRight = intersectEdgeAndSlope(right, topLeft[0], topLeft[1], s);
  const botRight = intersectEdgeAndSlope(right, botLeft[0], botLeft[1], s);
  return [topLeft, topRight, botRight, botLeft];
}

function quadSize(quad) {
  const top = Math.hypot(quad[1][0] - quad[0][0], quad[1][1] - quad[0][1]);
  const bot = Math.hypot(quad[2][0] - quad[3][0], quad[2][1] - quad[3][1]);
  const left = Math.hypot(quad[3][0] - quad[0][0], quad[3][1] - quad[0][1]);
  const right = Math.hypot(quad[2][0] - quad[1][0], quad[2][1] - quad[1][1]);
  return { w: (top + bot) / 2, h: (left + right) / 2 };
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

function paintToGlass(dest, mask, W, H, blob, quad, srcBuf, sw, sh) {
  const srcQuad = [
    [0, 0],
    [sw - 1, 0],
    [sw - 1, sh - 1],
    [0, sh - 1],
  ];
  const Hmap = homography(quad, srcQuad);
  const pad = 8;
  const minX = Math.max(0, Math.min(blob.minX, ...quad.map((p) => p[0])) - pad);
  const maxX = Math.min(W - 1, Math.max(blob.maxX, ...quad.map((p) => p[0])) + pad);
  const minY = Math.max(0, Math.min(blob.minY, ...quad.map((p) => p[1])) - pad);
  const maxY = Math.min(H - 1, Math.max(blob.maxY, ...quad.map((p) => p[1])) + pad);
  for (let y = Math.floor(minY); y <= Math.ceil(maxY); y++) {
    for (let x = Math.floor(minX); x <= Math.ceil(maxX); x++) {
      const i = (y * W + x) * 4;
      if (mask[i] <= SCREEN_THRESH || mask[i + 1] <= SCREEN_THRESH || mask[i + 2] <= SCREEN_THRESH) continue;
      const [sx, sy] = applyH(Hmap, x + 0.5, y + 0.5);
      const rgba = sampleClamped(srcBuf, sw, sh, sx, sy);
      if (!rgba) continue;
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
const screenMask = Buffer.from(dest);
const blobs = whiteBlobs(dest, W, H);
if (blobs.length < 2) throw new Error(`Expected laptop + phone white screens, found ${blobs.length}`);

const laptopQuad = fitDeviceQuad(dest, W, H, blobs[0]);
const phoneQuad = fitDeviceQuad(dest, W, H, blobs[1], { tilt: true });
const laptopSize = quadSize(laptopQuad);
const phoneSize = quadSize(phoneQuad);

const deskMeta = await sharp(desktopCapture).metadata();
const deskCropH = Math.min(DESKTOP_CROP_H, deskMeta.height);
const deskCropW = Math.min(deskMeta.width, Math.round(deskCropH * (laptopSize.w / laptopSize.h)));
const deskLeft = Math.max(0, Math.round((deskMeta.width - deskCropW) / 2));
const desktop = await sharp(desktopCapture)
  .extract({ left: deskLeft, top: 0, width: deskCropW, height: deskCropH })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const mobileMeta = await sharp(mobileCapture).metadata();
const phoneAspect = phoneSize.h / phoneSize.w;
const mobileCropH = Math.min(mobileMeta.height, Math.round(mobileMeta.width * phoneAspect));
const mobileCropW = Math.min(mobileMeta.width, Math.round(mobileCropH / phoneAspect));
const mobileLeft = Math.max(0, Math.round((mobileMeta.width - mobileCropW) / 2));
const mobile = await sharp(mobileCapture)
  .extract({ left: mobileLeft, top: 0, width: mobileCropW, height: mobileCropH })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
hideFigmaOverlay(mobile.data, mobile.info.width, mobile.info.height, mobile.info.channels);

paintToGlass(dest, screenMask, W, H, blobs[0], laptopQuad, desktop.data, desktop.info.width, desktop.info.height);
paintToGlass(dest, screenMask, W, H, blobs[1], phoneQuad, mobile.data, mobile.info.width, mobile.info.height);

const mockup = await sharp(dest, { raw: { width: W, height: H, channels: 4 } })
  .webp({ quality: 92 })
  .toBuffer();

await sharp(mockup).toFile(path.join(imagesDir, "cover-mockup.webp"));
await sharp(mockup).toFile(path.join(imagesDir, "cover-final.webp"));
await sharp(mockup)
  .resize(640, 400, { fit: "cover", position: "centre" })
  .webp({ quality: 88 })
  .toFile(path.join(studyDir, "thumbnail.webp"));

console.log("Laptop quad", laptopQuad, laptopSize);
console.log("Phone quad", phoneQuad, phoneSize);
console.log("Desktop crop", { left: deskLeft, width: deskCropW, height: deskCropH });
console.log("Mobile crop", { left: mobileLeft, width: mobileCropW, height: mobileCropH });
console.log("Wrote cover mockup + thumbnail.");
