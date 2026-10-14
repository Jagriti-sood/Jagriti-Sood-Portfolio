/**
 * Place the Credit Cards page into the same laptop-on-desk mockup used for
 * account-opening: perspective-map the full page onto the laptop LCD.
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { access } from "node:fs/promises";

const root = fileURLToPath(new URL("../", import.meta.url));
const studyDir = path.join(root, ".private", "rbc-credit-cards-newcomers");
const imagesDir = path.join(studyDir, "images");
const accountCover = path.join(root, ".private", "rbc-account-opening", "images", "cover-mockup.webp");
const screenCapture = path.join(imagesDir, "screen-capture.png");

/** Inner LCD corners on the 2000×1333 account-opening artboard (tl, tr, br, bl). */
const SCREEN_QUAD = [
  [487, 342],
  [1382, 342],
  [1408, 872],
  [492, 872],
];

/** Drop the cookie banner from the 1440×900 capture. */
const PAGE_CROP = { left: 0, top: 0, width: 1440, height: 770 };

async function pickCapture() {
  for (const p of [screenCapture, path.join(imagesDir, "screen-design.png")]) {
    try {
      await access(p);
      return p;
    } catch {}
  }
  throw new Error(`Missing screen capture at ${screenCapture}`);
}

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

/** Homography mapping dest pixels → source pixels. */
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

function sampleBilinear(src, sw, sh, x, y) {
  if (x < 0 || y < 0 || x >= sw - 1 || y >= sh - 1) return null;
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const dx = x - x0;
  const dy = y - y0;
  const idx = (xx, yy) => (yy * sw + xx) * 4;
  const mix = (a, b, t) => a + (b - a) * t;
  const out = [0, 0, 0, 255];
  for (let c = 0; c < 3; c++) {
    const p00 = src[idx(x0, y0) + c];
    const p10 = src[idx(x0 + 1, y0) + c];
    const p01 = src[idx(x0, y0 + 1) + c];
    const p11 = src[idx(x0 + 1, y0 + 1) + c];
    out[c] = mix(mix(p00, p10, dx), mix(p01, p11, dx), dy);
  }
  return out;
}

await access(accountCover);
const capturePath = await pickCapture();
const captureMeta = await sharp(capturePath).metadata();

const crop = {
  left: PAGE_CROP.left,
  top: PAGE_CROP.top,
  width: Math.min(PAGE_CROP.width, captureMeta.width),
  height: Math.min(PAGE_CROP.height, captureMeta.height - PAGE_CROP.top),
};

const page = await sharp(capturePath).extract(crop).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const sw = page.info.width;
const sh = page.info.height;

const base = await sharp(accountCover).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { data: dest, info } = base;
const W = info.width;
const H = info.height;

const srcQuad = [
  [0, 0],
  [sw - 1, 0],
  [sw - 1, sh - 1],
  [0, sh - 1],
];
const Hmap = homography(SCREEN_QUAD, srcQuad);

const xs = SCREEN_QUAD.map((p) => p[0]);
const ys = SCREEN_QUAD.map((p) => p[1]);
const minX = Math.max(0, Math.floor(Math.min(...xs)));
const maxX = Math.min(W - 1, Math.ceil(Math.max(...xs)));
const minY = Math.max(0, Math.floor(Math.min(...ys)));
const maxY = Math.min(H - 1, Math.ceil(Math.max(...ys)));

for (let y = minY; y <= maxY; y++) {
  for (let x = minX; x <= maxX; x++) {
    if (!insideQuad([x + 0.5, y + 0.5], SCREEN_QUAD)) continue;
    const [sx, sy] = applyH(Hmap, x + 0.5, y + 0.5);
    const rgba = sampleBilinear(page.data, sw, sh, sx, sy);
    if (!rgba) continue;
    const i = (y * W + x) * 4;
    dest[i] = rgba[0];
    dest[i + 1] = rgba[1];
    dest[i + 2] = rgba[2];
    dest[i + 3] = 255;
  }
}

const mockup = await sharp(dest, { raw: { width: W, height: H, channels: 4 } })
  .webp({ quality: 92 })
  .toBuffer();

await sharp(mockup).toFile(path.join(imagesDir, "cover-mockup.webp"));
await sharp(mockup).toFile(path.join(imagesDir, "cover-final.webp"));
await sharp(mockup)
  .resize(640, 400, { fit: "cover", position: "centre" })
  .webp({ quality: 88 })
  .toFile(path.join(studyDir, "thumbnail.webp"));

console.log(`Perspective-mapped ${path.basename(capturePath)} onto the laptop screen.`);
