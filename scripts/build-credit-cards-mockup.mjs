/**
 * Laptop-on-desk cover + picker thumbnail (matches account-opening mockup).
 *
 * Reuses .private/rbc-account-opening/images/cover-mockup.webp and replaces
 * the laptop screen with the credit-cards hero capture.
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

/** Inner laptop LCD bounds on the 2000×1333 account-opening artboard. */
const SCREEN = { left: 450, top: 280, width: 1100, height: 680 };

/** Hero band on a 1440×900 full-page capture (headline + lifestyle photo). */
const HERO = { left: 0, top: 360, height: 400 };

async function pickCapture() {
  for (const p of [screenCapture, path.join(imagesDir, "screen-design.png")]) {
    try {
      await access(p);
      return p;
    } catch {}
  }
  throw new Error(`Missing screen capture. Save a 1440×900 PNG to ${screenCapture}`);
}

await access(accountCover);
const capturePath = await pickCapture();
const captureMeta = await sharp(capturePath).metadata();

const heroTop = Math.min(HERO.top, captureMeta.height - 1);
const heroHeight = Math.min(HERO.height, captureMeta.height - heroTop);

const hero = await sharp(capturePath)
  .extract({
    left: HERO.left,
    top: heroTop,
    width: captureMeta.width - HERO.left,
    height: heroHeight,
  })
  .png()
  .toBuffer();

const screenSized = await sharp(hero)
  .resize(SCREEN.width, SCREEN.height, { fit: "cover", position: "left" })
  .png()
  .toBuffer();

const mockup = await sharp(accountCover)
  .composite([{ input: screenSized, left: SCREEN.left, top: SCREEN.top }])
  .webp({ quality: 92 })
  .toBuffer();

const coverMockupPath = path.join(imagesDir, "cover-mockup.webp");
await sharp(mockup).toFile(coverMockupPath);
await sharp(mockup).toFile(path.join(imagesDir, "cover-final.webp"));

await sharp(mockup)
  .resize(640, 400, { fit: "cover", position: "centre" })
  .webp({ quality: 88 })
  .toFile(path.join(studyDir, "thumbnail.webp"));

console.log(`Updated cover mockup + thumbnail from ${capturePath}`);
