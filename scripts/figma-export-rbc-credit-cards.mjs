/**
 * Export RBC Credit Cards frames from Figma into .private/rbc-credit-cards-newcomers/images/
 *
 * Requires a Figma personal access token with file access:
 *   export FIGMA_ACCESS_TOKEN=…
 *   node scripts/figma-export-rbc-credit-cards.mjs
 *
 * File: https://www.figma.com/design/P0c5NOydu7EkEzDI3dln7z/RBC
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const token = process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
  throw new Error("Set FIGMA_ACCESS_TOKEN (Figma → Settings → Security → Personal access tokens).");
}

const FILE_KEY = "P0c5NOydu7EkEzDI3dln7z";
const root = fileURLToPath(new URL("../", import.meta.url));
const outDir = path.join(root, ".private", "rbc-credit-cards-newcomers", "images");

/** nodeId in URL form → API id */
const frames = [
  { file: "cover-final.webp", id: "1:19764", label: "Case study cover / hero final" },
  { file: "wireframe-full.webp", id: "1:19764", label: "Original wireframe (adjust node id if needed)" },
  { file: "final-desktop-full.webp", id: "1:19764", label: "Final desktop (adjust node id if needed)" },
  { file: "final-mobile.webp", id: "1:19764", label: "Final mobile (adjust node id if needed)" },
];

async function figma(pathname) {
  const response = await fetch(`https://api.figma.com/v1${pathname}`, {
    headers: { "X-Figma-Token": token },
  });
  if (!response.ok) {
    throw new Error(`Figma API ${response.status}: ${await response.text()}`);
  }
  return response.json();
}

await mkdir(outDir, { recursive: true });

const ids = [...new Set(frames.map((f) => f.id))].join(",");
const images = await figma(`/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=webp&scale=2`);

for (const frame of frames) {
  const url = images.images[frame.id];
  if (!url) throw new Error(`No render URL for ${frame.id} (${frame.file}). Update node ids in the script.`);
  const bin = await fetch(url).then((r) => {
    if (!r.ok) throw new Error(`Download failed for ${frame.file}`);
    return r.arrayBuffer();
  });
  await writeFile(path.join(outDir, frame.file), Buffer.from(bin));
  console.log(`Saved images/${frame.file} — ${frame.label}`);
}

console.log("\nUpdate study.json figure paths if you rename files. Then run:");
console.log("  npm run protect:case-study -- rbc-credit-cards-newcomers");
console.log("  npm run protect:group -- rbc");
