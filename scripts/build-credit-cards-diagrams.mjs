/**
 * Process diagrams for the Credit Cards for Newcomers case study.
 * Run: node scripts/build-credit-cards-diagrams.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const images = path.join(root, ".private", "rbc-credit-cards-newcomers", "images");

const C = {
  bg: "#FBF7F8",
  card: "#FFFFFF",
  ink: "#111827",
  muted: "#6B7280",
  line: "#EDE4E8",
  accent: "#E8699A",
  accentDark: "#C2547C",
  panel: "#FDF5F8",
  rose: "#F8E7EE",
  ok: "#F3F4F6",
};

const FONT = "Plus Jakarta Sans, Inter, Helvetica Neue, Arial, sans-serif";

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function wrap(text, max) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

function tspan(lines, x, y, lineHeight = 20) {
  return lines
    .map((line, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(line)}</tspan>`)
    .join("");
}

function roundRect(x, y, w, h, r, fill, extra = "") {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" ${extra} />`;
}

function label(text, x, y, fill = C.accent) {
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="${FONT}" font-size="12" font-weight="700" letter-spacing="1.8">${esc(text).toUpperCase()}</text>`;
}

function heading(text, x, y) {
  return `<text x="${x}" y="${y}" fill="${C.ink}" font-family="${FONT}" font-size="28" font-weight="700">${esc(text)}</text>`;
}

function sub(text, x, y, max = 88) {
  const lines = wrap(text, max);
  return `<text fill="${C.muted}" font-family="${FONT}" font-size="15">${tspan(lines, x, y, 22)}</text>`;
}

function frame(width, height, title, kicker, caption, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${roundRect(0, 0, width, height, 0, C.bg)}
  ${label(kicker, 48, 48)}
  ${heading(title, 48, 88)}
  ${sub(caption, 48, 118)}
  ${body}
</svg>`;
}

async function writeWebp(name, svg) {
  const file = path.join(images, name);
  await sharp(Buffer.from(svg)).webp({ quality: 92 }).toFile(file);
  const meta = await sharp(file).metadata();
  console.log(name, meta.width, "x", meta.height);
}

function originalIa() {
  const blocks = [
    { title: "Hero · featured card", note: "Sells one product first", problem: true },
    { title: "What is a credit card?", note: "Definitions before context", problem: false },
    { title: "Popular credit cards", note: "Choice #1", problem: true },
    { title: "More credit card options", note: "Choice #2", problem: true },
    { title: "Student credit cards", note: "Choice #3", problem: true },
    { title: "How credit works in Canada", note: "Education arrives late", problem: true },
    { title: "Features and benefits", note: "Repeats product detail", problem: false },
    { title: "Guides and articles", note: "More reading", problem: false },
    { title: "FAQ group 1", note: "Answers split from the page", problem: true },
    { title: "FAQ group 2", note: "Overlaps the education block", problem: true },
  ];
  const startY = 168;
  const rows = blocks.map((block, i) => {
    const y = startY + i * 58;
    const fill = block.problem ? C.rose : C.card;
    const stroke = block.problem ? C.accent : C.line;
    return `
      <text x="48" y="${y + 30}" fill="${C.muted}" font-family="${FONT}" font-size="13" font-weight="700">${String(i + 1).padStart(2, "0")}</text>
      ${roundRect(88, y, 1040, 48, 12, fill, `stroke="${stroke}"`)}
      <text x="112" y="${y + 22}" fill="${C.ink}" font-family="${FONT}" font-size="15" font-weight="700">${esc(block.title)}</text>
      <text x="112" y="${y + 40}" fill="${C.muted}" font-family="${FONT}" font-size="12">${esc(block.note)}</text>`;
  }).join("");

  const callouts = `
    ${roundRect(1180, 168, 372, 196, 16, C.card, `stroke="${C.line}"`)}
    <text x="1204" y="204" fill="${C.accent}" font-family="${FONT}" font-size="12" font-weight="700" letter-spacing="1.6">THE ISSUE</text>
    <text fill="${C.ink}" font-family="${FONT}" font-size="16" font-weight="700">${tspan(wrap("Three product grids appear before eligibility or a starting point.", 32), 1204, 236, 22)}</text>
    <text fill="${C.muted}" font-family="${FONT}" font-size="14">${tspan(wrap("Newcomers were asked to compare cards before they knew whether they could get one, or which question to ask first.", 34), 1204, 292, 20)}</text>
  `;

  return frame(
    1600,
    860,
    "Original information architecture",
    "Audit",
    "How the marketing wireframe was structured. Card sections came first. Eligibility and how credit works sat further down.",
    `${rows}${callouts}`,
  );
}

function researchMap() {
  const cards = [
    {
      q: "Can I get a card with no Canadian credit history?",
      a: "Show requirements early, before asking people to compare products.",
    },
    {
      q: "Which card is actually right for me?",
      a: "Show fewer cards, and put fees, rewards, and benefits in one comparison.",
    },
    {
      q: "How does credit work in Canada?",
      a: "Keep this short, and put it next to what you need to apply.",
    },
    {
      q: "What happens after I apply?",
      a: "Show mobile tools and rewards after the decision, and keep a way to talk to someone.",
    },
  ];
  const body = cards.map((card, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 48 + col * 760;
    const y = 168 + row * 220;
    return `
      ${roundRect(x, y, 728, 196, 20, C.card, `stroke="${C.line}"`)}
      ${roundRect(x, y, 8, 196, 0, C.accent)}
      <text x="${x + 36}" y="${y + 40}" fill="${C.accent}" font-family="${FONT}" font-size="12" font-weight="700" letter-spacing="1.6">QUESTION 0${i + 1}</text>
      <text fill="${C.ink}" font-family="${FONT}" font-size="20" font-weight="700">${tspan(wrap(card.q, 42), x + 36, y + 76, 26)}</text>
      <text fill="${C.muted}" font-family="${FONT}" font-size="15">${tspan(wrap(card.a, 52), x + 36, y + 140, 22)}</text>
    `;
  }).join("");

  return frame(
    1600,
    640,
    "What people need before they compare cards",
    "Research",
    "I did not have customer interviews on this project. I used secondary research, the wireframe, and the questions newcomers usually ask.",
    body,
  );
}

function decisionFlow() {
  const steps = [
    { n: "01", title: "I need a card", body: "A card is for everyday spending and a way to start Canadian credit history." },
    { n: "02", title: "Which one fits?", body: "Three relevant cards, with fees, rewards, and benefits in the same pattern." },
    { n: "03", title: "Am I eligible?", body: "Requirements and limited credit history, before a push to apply." },
    { n: "04", title: "How does it work?", body: "Spend, pay, and build credit — next to what you need to apply." },
    { n: "05", title: "I’m ready", body: "A direct apply path, plus tools, rewards, and a person if they still want help." },
  ];
  const body = steps.map((step, i) => {
    const x = 48 + i * 308;
    const arrow = i < steps.length - 1
      ? `<path d="M ${x + 284} 300 L ${x + 304} 300" stroke="${C.accent}" stroke-width="2" fill="none" marker-end="url(#arrow)" />`
      : "";
    return `
      ${roundRect(x, 176, 276, 268, 20, C.card, `stroke="${C.line}"`)}
      <circle cx="${x + 36}" cy="216" r="18" fill="${C.panel}" stroke="${C.accent}" />
      <text x="${x + 36}" y="221" text-anchor="middle" fill="${C.accentDark}" font-family="${FONT}" font-size="12" font-weight="700">${step.n}</text>
      <text fill="${C.ink}" font-family="${FONT}" font-size="18" font-weight="700">${tspan(wrap(step.title, 16), x + 24, 258, 24)}</text>
      <text fill="${C.muted}" font-family="${FONT}" font-size="14">${tspan(wrap(step.body, 28), x + 24, 318, 20)}</text>
      ${arrow}
    `;
  }).join("");

  return frame(
    1600,
    520,
    "How I structured the page",
    "Approach",
    "Five steps, in the order someone would actually think through them.",
    `<defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="${C.accent}" /></marker></defs>${body}`,
  );
}

function iaCompare() {
  const left = [
    "Featured card hero",
    "Definitions",
    "Popular cards",
    "More cards",
    "Student cards",
    "How credit works",
    "Feature lists",
    "Guides",
    "FAQ group 1",
    "FAQ group 2",
  ];
  const right = [
    "Hero · why credit history",
    "One comparison of 3 cards",
    "Why RBC, in short",
    "How cards work + what to apply",
    "Mobile and credit tools",
    "Avion rewards",
    "Compare / choose tools",
    "Guides in one place",
    "One FAQ set",
    "Talk to a person",
  ];
  const col = (items, x, title, kicker, accented) => {
    const rows = items.map((item, i) => {
      const y = 236 + i * 44;
      const fill = accented ? (i < 4 ? C.rose : C.card) : (i < 5 ? C.ok : C.card);
      const bar = accented && i < 4 ? C.accent : accented ? C.line : i < 2 ? "#D1D5DB" : C.line;
      return `
        ${roundRect(x, y, 520, 36, 10, fill, `stroke="${C.line}"`)}
        <rect x="${x}" y="${y}" width="6" height="36" rx="3" fill="${bar}" />
        <text x="${x + 24}" y="${y + 24}" fill="${C.ink}" font-family="${FONT}" font-size="14" font-weight="${i < 4 && accented ? 700 : 500}">${esc(item)}</text>
      `;
    }).join("");
    return `
      <text x="${x}" y="176" fill="${C.accent}" font-family="${FONT}" font-size="12" font-weight="700" letter-spacing="1.6">${esc(kicker)}</text>
      <text x="${x}" y="204" fill="${C.ink}" font-family="${FONT}" font-size="20" font-weight="700">${esc(title)}</text>
      ${rows}
    `;
  };

  return frame(
    1600,
    760,
    "Original structure and the structure I proposed",
    "Structure",
    "I kept the products, education, and apply paths from the brief. I changed when they show up.",
    `${col(left, 48, "Marketing wireframe", "ORIGINAL", false)}${col(right, 860, "Proposed page flow", "REDESIGN", true)}
     <text x="800" y="470" text-anchor="middle" fill="${C.accent}" font-family="${FONT}" font-size="28" font-weight="700">→</text>`,
  );
}

function pageOrder() {
  // Qualitative positions on the page, not survey metrics.
  const rows = [
    { label: "Why a card matters", before: [4, 18], after: [4, 16] },
    { label: "Compare relevant cards", before: [18, 52], after: [16, 38] },
    { label: "Am I eligible?", before: [52, 64], after: [38, 52] },
    { label: "How credit works here", before: [48, 62], after: [38, 52] },
    { label: "Tools after applying", before: [64, 78], after: [52, 68] },
    { label: "Help / a person", before: [86, 98], after: [82, 96] },
  ];
  const chartX = 420;
  const chartW = 1080;
  const rowH = 64;
  const startY = 200;

  const header = `
    <text x="${chartX}" y="176" fill="${C.muted}" font-family="${FONT}" font-size="12" font-weight="700" letter-spacing="1.4">TOP OF PAGE</text>
    <text x="${chartX + chartW}" y="176" text-anchor="end" fill="${C.muted}" font-family="${FONT}" font-size="12" font-weight="700" letter-spacing="1.4">BOTTOM OF PAGE</text>
    <line x1="${chartX}" y1="186" x2="${chartX + chartW}" y2="186" stroke="${C.line}" />
  `;

  const body = rows.map((row, i) => {
    const y = startY + i * rowH;
    const bx = chartX + (row.before[0] / 100) * chartW;
    const bw = ((row.before[1] - row.before[0]) / 100) * chartW;
    const ax = chartX + (row.after[0] / 100) * chartW;
    const aw = ((row.after[1] - row.after[0]) / 100) * chartW;
    return `
      <text x="48" y="${y + 28}" fill="${C.ink}" font-family="${FONT}" font-size="14" font-weight="600">${esc(row.label)}</text>
      ${roundRect(bx, y + 8, Math.max(bw, 8), 14, 7, "#D1D5DB")}
      ${roundRect(ax, y + 28, Math.max(aw, 8), 14, 7, C.accent)}
    `;
  }).join("");

  const legend = `
    ${roundRect(48, 590, 14, 14, 7, "#D1D5DB")}
    <text x="70" y="602" fill="${C.muted}" font-family="${FONT}" font-size="13">Wireframe</text>
    ${roundRect(180, 590, 14, 14, 7, C.accent)}
    <text x="202" y="602" fill="${C.muted}" font-family="${FONT}" font-size="13">Approved structure</text>
  `;

  return frame(
    1600,
    640,
    "Where the answers sit on the page",
    "Page order",
    "A simple map of where each answer sat in the wireframe, and where it sits in the redesign.",
    `${header}${body}${legend}`,
  );
}

const desktop = path.join(images, "final-desktop-full.webp");
await sharp(desktop).extract({ left: 0, top: 0, width: 1920, height: 700 }).webp({ quality: 84 }).toFile(path.join(images, "highlight-hero.webp"));
await sharp(desktop).extract({ left: 0, top: 760, width: 1920, height: 1320 }).webp({ quality: 84 }).toFile(path.join(images, "highlight-compare.webp"));
await sharp(desktop).extract({ left: 0, top: 2520, width: 1920, height: 700 }).webp({ quality: 84 }).toFile(path.join(images, "highlight-education.webp"));
console.log("cropped UI highlights");

await writeWebp("diagram-original-ia.webp", originalIa());
await writeWebp("diagram-research.webp", researchMap());
await writeWebp("diagram-decision-flow.webp", decisionFlow());
await writeWebp("diagram-ia-compare.webp", iaCompare());
await writeWebp("diagram-page-order.webp", pageOrder());
