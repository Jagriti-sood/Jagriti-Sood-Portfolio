import { readFile, writeFile, mkdir, realpath } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { decryptCaseStudy, encryptCaseStudy } from "../src/app/lib/protected-case-study.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const groupId = process.argv[2];
if (!groupId || !/^[a-z0-9-]+$/.test(groupId)) {
  throw new Error("Usage: npm run protect:group -- <group-id>");
}

const readPassword = async (dir) =>
  (await readFile(path.join(dir, "password.txt"), "utf8")).replace(/\r?\n$/, "");

const groupDir = await realpath(path.join(root, ".private", groupId));
const { projects } = JSON.parse(await readFile(path.join(groupDir, "group.json"), "utf8"));
if (!Array.isArray(projects) || projects.length === 0 || !projects.every((id) => /^[a-z0-9-]+$/.test(id))) {
  throw new Error("group.json needs a non-empty \"projects\" list of URL-safe case-study IDs.");
}

// One password opens every case study in the group, so each study must have
// been packaged with that same password.
const password = await readPassword(groupDir);
for (const id of projects) {
  if (await readPassword(path.join(root, ".private", id)) !== password) {
    throw new Error(`.private/${id}/password.txt must match the ${groupId} group password.`);
  }
  // The published study must also open with the group password, or the picker would fail after unlock.
  const published = JSON.parse(await readFile(path.join(root, "public", "protected", `${id}.json`), "utf8"));
  await decryptCaseStudy(published, password, id).catch(() => {
    throw new Error(`public/protected/${id}.json does not open with the ${groupId} password. Run: npm run protect:case-study -- ${id}`);
  });
}

// Optional picker thumbnails (.private/<id>/thumbnail.webp) travel inside the
// encrypted file, so no readable design artwork is public.
const thumbnails = {};
for (const id of projects) {
  try {
    const data = await readFile(path.join(root, ".private", id, "thumbnail.webp"));
    thumbnails[id] = { mime: "image/webp", data: data.toString("base64") };
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

// The group file holds no case-study text. Decrypting it confirms the password
// before a visitor picks a study, without downloading any study.
const encrypted = await encryptCaseStudy({ group: groupId, projects, thumbnails }, password, groupId);
const output = path.join(root, "public", "protected", `${groupId}.json`);
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, JSON.stringify(encrypted));
console.log(`Encrypted the ${groupId} access check for ${projects.length} case studies (${Object.keys(thumbnails).length} thumbnails) into public/protected/${groupId}.json.`);
