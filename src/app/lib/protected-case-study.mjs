// Shared by the browser and the offline packaging script. No password or
// unencrypted case-study material belongs in a public JS module.
const ITERATIONS = 600_000;
const encoder = new TextEncoder();

function toBase64(bytes) {
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 8192) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
  }
  return btoa(binary);
}

export function fromBase64(value) {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}

async function deriveKey(password, salt, usage) {
  const material = await crypto.subtle.importKey(
    "raw", encoder.encode(password), "PBKDF2", false, ["deriveKey"],
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" },
    material, { name: "AES-GCM", length: 256 }, false, [usage],
  );
}

function context(projectId) {
  return encoder.encode(`jagriti-case-study:v1:${projectId}`);
}

export async function encryptCaseStudy(study, password, projectId) {
  if (password.length < 8) throw new Error("Use a unique password of at least 8 characters.");
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt, "encrypt");
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv, additionalData: context(projectId) },
    key, encoder.encode(JSON.stringify(study)),
  );
  return { version: 1, projectId, salt: toBase64(salt), iv: toBase64(iv), ciphertext: toBase64(new Uint8Array(ciphertext)) };
}

export async function decryptCaseStudy(envelope, password, projectId) {
  if (envelope?.version !== 1 || envelope.projectId !== projectId ||
      typeof envelope.salt !== "string" || typeof envelope.iv !== "string" ||
      typeof envelope.ciphertext !== "string") {
    throw new Error("Invalid case-study file.");
  }
  const salt = fromBase64(envelope.salt);
  const iv = fromBase64(envelope.iv);
  if (salt.length !== 16 || iv.length !== 12) throw new Error("Invalid case-study file.");
  const key = await deriveKey(password, salt, "decrypt");
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv, additionalData: context(projectId) },
    key, fromBase64(envelope.ciphertext),
  );
  return JSON.parse(new TextDecoder().decode(plaintext));
}
