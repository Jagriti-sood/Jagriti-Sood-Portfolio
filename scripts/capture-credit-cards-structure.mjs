/**
 * Capture Structure-section images:
 * - original wireframe (local HTML reconstruction of the marketing IA)
 * - final desktop (live Credit Cards for Newcomers page)
 */
import { chromium } from "playwright";
import sharp from "sharp";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const images = path.join(root, ".private", "rbc-credit-cards-newcomers", "images");
const wireHtml = path.join(images, "original-wireframe.html");
const wireOut = path.join(images, "wireframe-full.webp");
const finalOut = path.join(images, "final-desktop-full.webp");
const mobileSrc = path.join(images, "mobile-capture.png");
const mobileOut = path.join(images, "final-mobile.webp");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

await page.goto(pathToFileURL(wireHtml).href, { waitUntil: "networkidle" });
const wirePng = await page.locator(".page").screenshot({ type: "png" });
await sharp(wirePng).webp({ quality: 86 }).toFile(wireOut);
const wireMeta = await sharp(wireOut).metadata();
console.log("wireframe", wireMeta.width, wireMeta.height);

await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("https://www.rbcroyalbank.com/new-to-canada/credit-cards/index.html", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForTimeout(2500);
await page.evaluate(() => {
  for (const el of document.querySelectorAll("button")) {
    if (/accept all cookies/i.test(el.textContent || "")) el.click();
  }
});
await page.waitForTimeout(800);
await page.addStyleTag({
  content: `
    [id*="onetrust"], [class*="onetrust"], [id*="cookie"], [class*="cookie-banner"],
    iframe[title*="chat" i], [id*="lpChat"], [class*="embeddedMessaging"] { display: none !important; }
  `,
});
const finalPng = await page.screenshot({ fullPage: true, type: "png", animations: "disabled" });
await sharp(finalPng).resize({ width: 1440 }).webp({ quality: 82 }).toFile(finalOut);
const finalMeta = await sharp(finalOut).metadata();
console.log("final desktop", finalMeta.width, finalMeta.height);

try {
  await sharp(mobileSrc).webp({ quality: 86 }).toFile(mobileOut);
  const m = await sharp(mobileOut).metadata();
  console.log("final mobile", m.width, m.height);
} catch {
  console.warn("mobile capture missing; skipped");
}

await browser.close();
