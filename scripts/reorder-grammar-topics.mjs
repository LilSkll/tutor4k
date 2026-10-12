#!/usr/bin/env node
/** Reorder GRAMMAR_TOPICS array in grammar.ts to match curriculum order. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const grammarPath = path.join(root, "src/config/grammar.ts");

const orderSrc = fs.readFileSync(
  path.join(root, "src/config/grammar-curriculum-order.ts"),
  "utf8",
);
const slugs = [...orderSrc.matchAll(/"([a-z0-9-]+)"/g)]
  .map((m) => m[1])
  .filter((s) => s.includes("-"));

let src = fs.readFileSync(grammarPath, "utf8");
const start = src.indexOf("export const GRAMMAR_TOPICS: GrammarTopic[] = [");
const end = src.indexOf("\n];", start);
if (start < 0 || end < 0) throw new Error("GRAMMAR_TOPICS block not found");

const arrayBody = src.slice(start, end + 3);
const slugStarts = [...arrayBody.matchAll(/\n  \{\n    slug: "([^"]+)"/g)];

/** @type {Map<string, string>} */
const topics = new Map();
for (let i = 0; i < slugStarts.length; i++) {
  const match = slugStarts[i];
  const slug = match[1];
  const blockStart = match.index;
  const blockEnd =
    i + 1 < slugStarts.length
      ? slugStarts[i + 1].index
      : arrayBody.lastIndexOf("\n  },");
  let block = arrayBody.slice(blockStart, blockEnd).trimEnd();
  topics.set(slug, block);
}

const missing = slugs.filter((s) => !topics.has(s));
if (missing.length) throw new Error(`Missing topics: ${missing.join(", ")}`);

const reordered = slugs.map((slug) => topics.get(slug)).join(",\n");
const newBlock = `export const GRAMMAR_TOPICS: GrammarTopic[] = [\n${reordered},\n];`;
src = src.slice(0, start) + newBlock + src.slice(end + 3);
fs.writeFileSync(grammarPath, src);
console.log(`Reordered ${slugs.length} grammar topics`);
