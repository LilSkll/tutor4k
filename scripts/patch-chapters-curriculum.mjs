#!/usr/bin/env node
/** Patch chapters.ts: insert 15 curriculum chapters and renumber journey. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const chaptersPath = path.join(root, "src/config/chapters.ts");

const INSERT_AFTER = {
  "chapter-20-preguntas": ["chapter-31-verbos-frecuentes"],
  "chapter-13-condicional": [
    "chapter-32-pronombre-se",
    "chapter-33-relativos",
    "chapter-34-pluscuamperfecto",
    "chapter-35-subjuntivo-imperfecto",
    "chapter-36-pronombres-objetos",
    "chapter-37-adverbios",
  ],
  "chapter-15-voz-pasiva": [
    "chapter-38-subjuntivo-compuestos",
    "chapter-39-condicionales-compuestos",
    "chapter-40-relativos-avanzado",
    "chapter-41-conectores-discursivos",
  ],
  "chapter-17-dele": [
    "chapter-42-subjuntivo-avanzado",
    "chapter-43-indirecto-avanzado",
    "chapter-44-pronombres-avanzado",
    "chapter-45-ser-estar-matices",
  ],
};

const PREREQ_OVERRIDES = {
  "chapter-7-pasado-perfecto": "chapter-31-verbos-frecuentes",
  "chapter-23-cronicas": "chapter-37-adverbios",
  "chapter-25-conectores": "chapter-41-conectores-discursivos",
  "chapter-27-hendidas": "chapter-45-ser-estar-matices",
};

const snippet = fs.readFileSync(
  path.join(root, "scripts/.bootstrap-chapters-snippet.ts.txt"),
  "utf8",
);

/** @type {Map<string, string>} */
const chapterBlocks = new Map();
const rawBlocks = snippet.split(/\n  \},\n/).map((part, i, arr) => {
  if (i < arr.length - 1) return part + "\n  }";
  return part.replace(/,\s*$/, "");
});
for (let block of rawBlocks) {
  block = block.trim();
  if (!block.startsWith("{")) block = "  " + block;
  const slugMatch = block.match(/slug: "([^"]+)"/);
  if (slugMatch) chapterBlocks.set(slugMatch[1], block);
}

let src = fs.readFileSync(chaptersPath, "utf8");

// Extract chapter objects from CHAPTERS array
const arrayMatch = src.match(
  /export const CHAPTERS: Chapter\[\] = \[([\s\S]*?)\n\];/,
);
if (!arrayMatch) throw new Error("CHAPTERS array not found");

const blockRe = /\n  \{[\s\S]*?\n  \},(?=\n)/g;
const blocks = arrayMatch[1].match(blockRe);
if (!blocks) throw new Error("No chapter blocks");

/** @type {Map<string, string>} */
const bySlug = new Map();
for (const block of blocks) {
  const slug = block.match(/slug: "([^"]+)"/)?.[1];
  if (slug) bySlug.set(slug, block.trim());
}

// Apply prereq overrides
for (const [slug, prereq] of Object.entries(PREREQ_OVERRIDES)) {
  let block = bySlug.get(slug);
  if (!block) continue;
  block = block.replace(
    /prereqChapter: "[^"]+"/,
    `prereqChapter: "${prereq}"`,
  );
  bySlug.set(slug, block);
}

// Build ordered slug list from original order + insertions
const originalOrder = [...bySlug.keys()];
/** @type {string[]} */
const finalOrder = [];
for (const slug of originalOrder) {
  finalOrder.push(slug);
  const inserts = INSERT_AFTER[slug];
  if (inserts) {
    for (const ins of inserts) {
      if (!chapterBlocks.has(ins)) throw new Error(`Missing block for ${ins}`);
      finalOrder.push(ins);
    }
  }
}

// Renumber and assemble
let n = 1;
const outBlocks = finalOrder.map((slug) => {
  const block =
    chapterBlocks.get(slug) ?? bySlug.get(slug)?.replace(/^  /, "");
  if (!block) throw new Error(`Unknown slug ${slug}`);
  const renumbered = block.replace(/number: \d+,/, `number: ${n},`);
  n++;
  return renumbered.startsWith("  {") ? renumbered : "  " + renumbered;
});

const newArray = `export const CHAPTERS: Chapter[] = [\n${outBlocks.join(",\n")},\n];`;
src = src.replace(/export const CHAPTERS: Chapter\[\] = \[[\s\S]*?\n\];/, newArray);

fs.writeFileSync(chaptersPath, src);
console.log(`Patched chapters.ts: ${finalOrder.length} chapters`);
