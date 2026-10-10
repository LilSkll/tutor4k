#!/usr/bin/env node
/** Patch english/chapters.ts: insert 18 curriculum chapters and renumber. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const chaptersPath = path.join(root, "src/config/courses/english/chapters.ts");

const INSERT_AFTER = {
  "eng-ch1-first-steps": ["eng-ch26-articles", "eng-ch27-possessives"],
  "eng-ch5-choices": ["eng-ch28-countable", "eng-ch29-pp-intro"],
  "eng-ch7-future-plans": ["eng-ch30-conditionals-review"],
  "eng-ch9-real-world": ["eng-ch31-reported-speech", "eng-ch32-relative-clauses"],
  "eng-ch11-passive": ["eng-ch33-passive-advanced"],
  "eng-ch15-mastery": [
    "eng-ch34-modals-deduction",
    "eng-ch35-ielts-informal",
    "eng-ch36-ielts-formal",
    "eng-ch37-cambridge-letter",
    "eng-ch38-ielts-task1",
    "eng-ch39-ielts-essay",
    "eng-ch40-ielts-cohesion",
    "eng-ch41-cambridge-essay",
    "eng-ch42-ielts-opinion",
    "eng-ch43-register-shift",
  ],
};

const PREREQ_OVERRIDES = {
  "eng-ch2-routines": "eng-ch27-possessives",
  "eng-ch20-going-to": "eng-ch29-pp-intro",
  "eng-ch22-modals": "eng-ch30-conditionals-review",
  "eng-ch10-what-if": "eng-ch32-relative-clauses",
  "eng-ch12-beyond-borders": "eng-ch33-passive-advanced",
  "eng-ch16-ielts": "eng-ch43-register-shift",
};

const snippet = fs.readFileSync(
  path.join(root, "scripts/.bootstrap-english-chapters-snippet.ts.txt"),
  "utf8",
);

const chapterBlocks = new Map();
for (const block of snippet.split(/\n  \},\n/)) {
  let part = block.trim();
  if (!part.startsWith("{")) part = "  " + part;
  if (!part.endsWith("}")) part = part.replace(/,\s*$/, "");
  const slug = part.match(/slug: "([^"]+)"/)?.[1];
  if (slug) chapterBlocks.set(slug, part);
}

let src = fs.readFileSync(chaptersPath, "utf8");
const arrayMatch = src.match(
  /export const ENGLISH_CHAPTERS: Chapter\[\] = \[([\s\S]*?)\n\];/,
);
if (!arrayMatch) throw new Error("ENGLISH_CHAPTERS not found");

const blockRe = /\n  \{[\s\S]*?\n  \},(?=\n)/g;
const blocks = arrayMatch[1].match(blockRe);
if (!blocks) throw new Error("No chapter blocks");

const bySlug = new Map();
for (const block of blocks) {
  const slug = block.match(/slug: "([^"]+)"/)?.[1];
  if (slug) bySlug.set(slug, block.trim());
}

for (const [slug, prereq] of Object.entries(PREREQ_OVERRIDES)) {
  let block = bySlug.get(slug);
  if (!block) continue;
  block = block.replace(/prereqChapter: "[^"]+"/, `prereqChapter: "${prereq}"`);
  bySlug.set(slug, block);
}

const originalOrder = [...bySlug.keys()];
const finalOrder = [];
for (const slug of originalOrder) {
  finalOrder.push(slug);
  for (const ins of INSERT_AFTER[slug] ?? []) {
    if (!chapterBlocks.has(ins)) throw new Error(`Missing ${ins}`);
    finalOrder.push(ins);
  }
}

let n = 1;
const outBlocks = finalOrder.map((slug) => {
  const block = chapterBlocks.get(slug) ?? bySlug.get(slug);
  if (!block) throw new Error(`Unknown ${slug}`);
  const renumbered = block.replace(/number: \d+,/, `number: ${n},`);
  n++;
  return renumbered.startsWith("  {") ? renumbered : "  " + renumbered;
});

src = src.replace(
  /export const ENGLISH_CHAPTERS: Chapter\[\] = \[[\s\S]*?\n\];/,
  `export const ENGLISH_CHAPTERS: Chapter[] = [\n${outBlocks.join(",\n")},\n];`,
);
fs.writeFileSync(chaptersPath, src);
console.log(`Patched english chapters.ts: ${finalOrder.length} chapters`);
