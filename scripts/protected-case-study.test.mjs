import test from "node:test";
import assert from "node:assert/strict";
import { encryptCaseStudy, decryptCaseStudy } from "../src/app/lib/protected-case-study.mjs";

// Synthetic content only. Never put a real case study or its password in tests.
const password = "test-only-passphrase-12345";
const study = { title: "Private fixture", summary: "Confidential text with accents: café.", assets: { "sample.webp": { mime: "image/webp", data: "aW1hZ2UtYnl0ZXM=" } } };

test("encrypted text and images round-trip without plaintext in the envelope", async () => {
  const encrypted = await encryptCaseStudy(study, password, "test");
  const serialized = JSON.stringify(encrypted);
  assert.ok(!serialized.includes(study.title));
  assert.ok(!serialized.includes(study.assets["sample.webp"].data));
  assert.ok(!serialized.includes(password));
  assert.deepEqual(await decryptCaseStudy(encrypted, password, "test"), study);
});

test("wrong passwords and modified ciphertext cannot reveal content", async () => {
  const encrypted = await encryptCaseStudy(study, password, "test");
  await assert.rejects(decryptCaseStudy(encrypted, "a-different-password", "test"), { name: "OperationError" });
  const bytes = Buffer.from(encrypted.ciphertext, "base64");
  bytes[0] ^= 1;
  await assert.rejects(decryptCaseStudy({ ...encrypted, ciphertext: bytes.toString("base64") }, password, "test"), { name: "OperationError" });
});

test("each packaging run uses new randomness and binds ciphertext to its project", async () => {
  const a = await encryptCaseStudy(study, password, "test");
  const b = await encryptCaseStudy(study, password, "test");
  assert.notEqual(a.salt, b.salt);
  assert.notEqual(a.iv, b.iv);
  assert.notEqual(a.ciphertext, b.ciphertext);
  await assert.rejects(decryptCaseStudy(a, password, "different"));
  await assert.rejects(decryptCaseStudy({ ...a, projectId: "different" }, password, "different"), { name: "OperationError" });
});

test("unsupported envelopes and short publishing passwords are rejected", async () => {
  await assert.rejects(decryptCaseStudy(null, password, "test"));
  await assert.rejects(decryptCaseStudy({ version: 2 }, password, "test"));
  await assert.rejects(encryptCaseStudy(study, "short", "test"));
});
