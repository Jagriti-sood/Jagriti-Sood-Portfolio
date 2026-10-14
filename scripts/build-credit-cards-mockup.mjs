/**
 * Build laptop-on-desk cover mockup + picker thumbnail for credit cards study.
 * Uses the same wood background as account-opening and a screen PNG (design export).
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { access, readFile } from "node:fs/promises";

const root = fileURLToPath(new URL("../", import.meta.url));
const studyDir = path.join(root, ".private", "rbc-credit-cards-newcomers");
const imagesDir = path.join(studyDir, "images");

async function pickScreenSource() {
  const candidates = [
    path.join(imagesDir, "screen-design.png"),
    path.join(imagesDir, "screen-design.webp"),
    path.join(root, ".private", "rbc-credit-cards-newcomers", "screen-import.png"),
    path.join(process.env.HOME, "Downloads", "credit-cards-screen.png"),
  ];
  for (const p of candidates) {
    try {
      await access(p);
      return p;
    } catch {}
  }
  throw new Error(
    "Add a design screen export as .private/rbc-credit-cards-newcomers/images/screen-design.png (1440px+ wide hero or full page).",
  );
}

const accountCover = path.join(root, ".private", "rbc-account-opening", "images", "cover-mockup.webp");
await access(accountCover);

const screenPath = await pickScreenSource();
// Prefer the hero band for the laptop screen (cleaner in the picker).
const screen = await sharp(screenPath)
  .extract({ left: 0, top: 0, width: (await sharp(screenPath).metadata()).width, height: 520 })
  .resize(1280, 800, { fit: "cover", position: "centre" })
  .png()
  .toBuffer();

// Reuse desk + laptop chrome from account-opening mockup; replace the screen rectangle.
const base = sharp(accountCover);
const baseMeta = await base.metadata();
const W = baseMeta.width;
const H = baseMeta.height;

// Screen placement tuned to match account-opening laptop (2000×1333 artboard).
const screenLeft = Math.round(W * 0.145);
const screenTop = Math.round(H * 0.155);
const screenWidth = Math.round(W * 0.71);
const screenHeight = Math.round(H * 0.52);

const screenSized = await sharp(screen).resize(screenWidth, screenHeight, { fit: "cover", position: "top" }).toBuffer();

const mockup = await base
  .composite([{ input: screenSized, left: screenLeft, top: screenTop }])
  .webp({ quality: 90 })
  .toBuffer();

const coverPath = path.join(imagesDir, "cover-final.webp");
const coverMockupPath = path.join(imagesDir, "cover-mockup.webp");
await sharp(mockup).toFile(coverPath);
await sharp(mockup).toFile(coverMockupPath);

const thumb = await sharp(mockup).resize(640, 400, { fit: "cover", position: "centre" }).webp({ quality: 85 }).toBuffer();
await sharp(thumb).toFile(path.join(studyDir, "thumbnail.webp"));

console.log(`Built ${coverMockupPath} and thumbnail.webp from ${screenPath}`);
