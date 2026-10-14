/**
 * Package the credit-cards study and refresh the RBC group picker order.
 *
 * Prerequisites:
 * - .private/rbc/password.txt (same password as the live site)
 * - Existing studies bootstrapped: node scripts/bootstrap-private.mjs .private/rbc/password.txt
 * - Figma exports in .private/rbc-credit-cards-newcomers/images/ (see sources.md)
 */
import { access, readFile, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const groupPasswordPath = path.join(root, ".private/rbc/password.txt");
const newStudy = "rbc-credit-cards-newcomers";

await access(groupPasswordPath).catch(() => {
  throw new Error("Create .private/rbc/password.txt with your existing RBC case-study password first.");
});

const creditCover = path.join(root, ".private", newStudy, "images", "cover-final.webp");
await access(creditCover).catch(() => {
  throw new Error(
    `Missing ${creditCover}. Export from Figma (sources.md) or run scripts/figma-export-rbc-credit-cards.mjs.`,
  );
});

const pwd = (await readFile(groupPasswordPath, "utf8")).replace(/\r?\n$/, "");
await writeFile(path.join(root, ".private", newStudy, "password.txt"), pwd + "\n");

function run(script, ...args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(root, script), ...args], {
      stdio: "inherit",
      cwd: root,
    });
    child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`${script} exited ${code}`))));
  });
}

await run("scripts/package-case-study.mjs", newStudy);
await run("scripts/package-protected-group.mjs", "rbc");

console.log("Done. Commit public/protected/*.json and push to deploy.");
