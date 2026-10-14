/**
 * Export RBC Credit Cards frames from Figma into .private/rbc-credit-cards-newcomers/images/
 *
 * Token (file access): export FIGMA_ACCESS_TOKEN=…
 *   or put the token in .private/figma-token.txt (gitignored)
 *
 * File: https://www.figma.com/design/P0c5NOydu7EkEzDI3dln7z/RBC?node-id=1-19764
 */
import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const FILE_KEY = "P0c5NOydu7EkEzDI3dln7z";
const root = fileURLToPath(new URL("../", import.meta.url));
const outDir = path.join(root, ".private", "rbc-credit-cards-newcomers", "images");

async function token() {
  if (process.env.FIGMA_ACCESS_TOKEN) return process.env.FIGMA_ACCESS_TOKEN.trim();
  const file = path.join(root, ".private", "figma-token.txt");
  try {
    return (await readFile(file, "utf8")).replace(/\r?\n$/, "").trim();
  } catch {
    throw new Error(
      "Set FIGMA_ACCESS_TOKEN or create .private/figma-token.txt (Figma → Settings → Security → Personal access tokens).",
    );
  }
}

async function figmaApi(pathname, key) {
  const response = await fetch(`https://api.figma.com/v1${pathname}`, {
    headers: { "X-Figma-Token": key },
  });
  if (!response.ok) throw new Error(`Figma API ${response.status}: ${await response.text()}`);
  return response.json();
}

/** @param {unknown} node */
function walk(node, out = []) {
  if (node && typeof node === "object" && "id" in node && "name" in node) {
    out.push({ id: node.id, name: node.name, type: node.type });
  }
  for (const child of node?.children ?? []) walk(child, out);
  return out;
}

function pickNode(nodes, patterns) {
  const lower = (s) => s.toLowerCase();
  for (const pattern of patterns) {
    const re = typeof pattern === "string" ? new RegExp(pattern, "i") : pattern;
    const hit = nodes.find((n) => re.test(n.name) && (n.type === "FRAME" || n.type === "COMPONENT" || n.type === "SECTION"));
    if (hit) return hit.id;
  }
  return null;
}

/** @type {{ file: string; patterns: (string|RegExp)[]; label: string }[]} */
const targets = [
  { file: "cover-final.webp", label: "Cover / hero (final)", patterns: [/cover/i, /hero/i, /final.*desktop/i, /credit card.*final/i] },
  { file: "final-desktop-full.webp", label: "Final desktop page", patterns: [/final/i, /desktop/i, /credit card.*newcomer/i, /design final/i] },
  { file: "wireframe-full.webp", label: "Original wireframe", patterns: [/wireframe/i, /original/i, /before/i, /marketing wire/i] },
  { file: "final-mobile.webp", label: "Final mobile", patterns: [/mobile/i, /iphone/i, /375/i, /responsive/i] },
];

const key = await token();
await mkdir(outDir, { recursive: true });

const file = await figmaApi(`/files/${FILE_KEY}?depth=4`, key);
const nodes = walk(file.document);
console.log(`Found ${nodes.length} nodes in ${file.name ?? "RBC"}.`);

const exports = [];
for (const target of targets) {
  let id = pickNode(nodes, target.patterns);
  if (!id && target.file === "cover-final.webp") {
    id = "1:19764";
  }
  if (!id) {
    console.warn(`Skip ${target.file}: no matching frame. Rename a frame in Figma or edit scripts/figma-export-rbc-credit-cards.mjs`);
    continue;
  }
  exports.push({ ...target, id });
  console.log(`→ ${target.file}: ${id} (${nodes.find((n) => n.id === id)?.name ?? "?"})`);
}

const ids = [...new Set(exports.map((e) => e.id))].join(",");
const renders = await figmaApi(`/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=webp&scale=2`, key);

for (const item of exports) {
  const url = renders.images[item.id];
  if (!url) throw new Error(`No render URL for ${item.id} (${item.file}).`);
  const bin = await fetch(url).then((r) => {
    if (!r.ok) throw new Error(`Download failed for ${item.file}`);
    return r.arrayBuffer();
  });
  await writeFile(path.join(outDir, item.file), Buffer.from(bin));
  console.log(`Saved images/${item.file}`);
}

console.log("\nNext:");
console.log("  npm run protect:thumbnails");
console.log("  npm run protect:case-study -- rbc-credit-cards-newcomers");
console.log("  npm run protect:group -- rbc");
