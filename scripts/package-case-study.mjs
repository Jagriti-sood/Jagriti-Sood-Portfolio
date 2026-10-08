import { access, readFile, writeFile, mkdir, realpath } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { encryptCaseStudy } from "../src/app/lib/protected-case-study.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const projectId = process.argv[2];
if (!projectId || !/^[a-z0-9-]+$/.test(projectId)) {
  throw new Error("Usage: npm run protect:case-study -- <project-id>");
}

const privateDir = await realpath(path.join(root, ".private", projectId));
// Group access files share public/protected/, so a study must never use a group's ID.
if (await access(path.join(privateDir, "group.json")).then(() => true, () => false)) {
  throw new Error(`"${projectId}" is a group. Package it with: npm run protect:group -- ${projectId}`);
}
const study = JSON.parse(await readFile(path.join(privateDir, "study.json"), "utf8"));
const password = (await readFile(path.join(privateDir, "password.txt"), "utf8")).replace(/\r?\n$/, "");

if (!study.title || !study.subtitle || !study.summary || !Array.isArray(study.tags) ||
    !Array.isArray(study.meta) || !Array.isArray(study.sections) || study.sections.length === 0) {
  throw new Error("The source needs a title, subtitle, summary, tags, metadata, and sections.");
}
const ids = new Set();
for (const section of study.sections) {
  if (!section.id || !/^[a-z0-9-]+$/.test(section.id) || ids.has(section.id) ||
      !section.label || !section.title || !Array.isArray(section.paragraphs)) {
    throw new Error("Each section needs a unique URL-safe id, label, title, and paragraphs.");
  }
  ids.add(section.id);
}

// Only raster images are packed, and only from the ignored source directory.
// The public site receives one encrypted file, never the original screenshots.
const mimeTypes = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif" };
const figures = [study.cover, ...study.sections.flatMap((section) => section.figures ?? [])].filter(Boolean);
study.assets = {};
for (const figure of figures) {
  if (!figure.alt || !figure.asset) throw new Error("Each figure needs an asset path and descriptive alt text.");
  if (Object.hasOwn(study.assets, figure.asset)) continue;
  const source = await realpath(path.resolve(privateDir, figure.asset));
  if (!source.startsWith(privateDir + path.sep)) throw new Error("Images must stay inside the private project directory.");
  const mime = mimeTypes[path.extname(source).toLowerCase()];
  if (!mime) throw new Error("Only PNG, JPEG, WebP, or AVIF images are supported.");
  study.assets[figure.asset] = { mime, data: (await readFile(source)).toString("base64") };
}

const encrypted = await encryptCaseStudy(study, password, projectId);
const output = path.join(root, "public", "protected", `${projectId}.json`);
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, JSON.stringify(encrypted));
console.log(`Encrypted ${study.sections.length} sections and ${Object.keys(study.assets).length} images into public/protected/${projectId}.json.`);
