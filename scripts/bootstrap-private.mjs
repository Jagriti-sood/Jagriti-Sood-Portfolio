/**
 * Rebuild .private/ from committed encrypted artifacts (one-time setup or recovery).
 * Usage: RBC_PROTECT_PASSWORD='…' node scripts/bootstrap-private.mjs
 * Or: node scripts/bootstrap-private.mjs path/to/password.txt
 */
import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { decryptCaseStudy } from "../src/app/lib/protected-case-study.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const groupId = "rbc";

async function readPassword() {
  const arg = process.argv[2];
  if (arg && !arg.startsWith("-")) {
    return (await readFile(path.resolve(arg), "utf8")).replace(/\r?\n$/, "");
  }
  const env = process.env.RBC_PROTECT_PASSWORD;
  if (env) return env;
  throw new Error("Set RBC_PROTECT_PASSWORD or pass a password file path.");
}

async function writeStudy(projectId, password) {
  const envelope = JSON.parse(
    await readFile(path.join(root, "public", "protected", `${projectId}.json`), "utf8"),
  );
  const study = await decryptCaseStudy(envelope, password, projectId);
  const dir = path.join(root, ".private", projectId);
  const imagesDir = path.join(dir, "images");
  await mkdir(imagesDir, { recursive: true });

  const { assets, ...rest } = study;
  for (const [assetPath, { mime, data }] of Object.entries(assets ?? {})) {
    const dest = path.join(dir, assetPath);
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(data, "base64"));
  }

  await writeFile(path.join(dir, "study.json"), JSON.stringify(rest, null, 2) + "\n");
  await writeFile(path.join(dir, "password.txt"), password + "\n");
  console.log(`Wrote .private/${projectId}/ (${Object.keys(assets ?? {}).length} images)`);
}

const password = await readPassword();
const groupEnvelope = JSON.parse(await readFile(path.join(root, "public", "protected", `${groupId}.json`), "utf8"));
const groupPayload = await decryptCaseStudy(groupEnvelope, password, groupId);
const projects = groupPayload.projects;
if (!Array.isArray(projects) || projects.length === 0) {
  throw new Error("Group file did not list any projects.");
}

await mkdir(path.join(root, ".private", groupId), { recursive: true });
await writeFile(
  path.join(root, ".private", groupId, "group.json"),
  JSON.stringify({ projects }, null, 2) + "\n",
);
await writeFile(path.join(root, ".private", groupId, "password.txt"), password + "\n");

for (const id of projects) {
  await writeStudy(id, password);
}

console.log(`Group order: ${projects.join(" → ")}`);
