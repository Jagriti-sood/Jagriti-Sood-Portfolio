/**
 * Build 640×400 thumbnail.webp for each RBC study from its cover image.
 * Usage: node scripts/generate-picker-thumbnails.mjs [project-id ...]
 * Then: npm run protect:group -- rbc
 */
import sharp from "sharp";
import path from "path";
import { access, readFile } from "fs/promises";
import { fileURLToPath } from "url";

const root = fileURLToPath(new URL("../", import.meta.url));
const ids = process.argv.slice(2);
const defaultIds = ["rbc-newcomer-hub", "rbc-credit-cards-newcomers", "rbc-account-opening"];
const projects = ids.length ? ids : defaultIds;

async function coverPath(projectId) {
  const dir = path.join(root, ".private", projectId);
  const study = JSON.parse(await readFile(path.join(dir, "study.json"), "utf8"));
  const asset = study.cover?.asset;
  if (!asset) throw new Error(`${projectId}: study.json has no cover.asset`);
  const resolved = path.join(dir, asset);
  await access(resolved);
  return resolved;
}

for (const id of projects) {
  const src = await coverPath(id);
  const out = path.join(root, ".private", id, "thumbnail.webp");
  await sharp(src)
    .resize(640, 400, { fit: "cover", position: "centre" })
    .webp({ quality: 85 })
    .toFile(out);
  console.log(`Wrote .private/${id}/thumbnail.webp`);
}

console.log("Run: npm run protect:group -- rbc");
