#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const TYPES = ["multiple_choice", "fill_blank", "translation", "error_correction", "sentence_building"];
const TARGET = 20;

async function thinChapters(label, chapters, getExercises) {
  const rows = [];
  for (const ch of chapters) {
    const by = Object.fromEntries(TYPES.map((t) => [t, 0]));
    for (const ex of getExercises(ch.slug)) by[ex.type]++;
    const min = Math.min(...TYPES.map((t) => by[t]));
    if (min < TARGET) {
      const gaps = TYPES.filter((t) => by[t] < TARGET).map((t) => `${t}:${by[t]}`).join(", ");
      rows.push({ level: ch.level, slug: ch.slug, min, gaps });
    }
  }
  rows.sort((a, b) => a.min - b.min || a.slug.localeCompare(b.slug));
  console.log(`\n=== ${label} (${rows.length}) ===`);
  for (const r of rows) console.log(`${r.min}\t${r.level}\t${r.slug}\t${r.gaps}`);
}

const { CHAPTERS } = await import(pathToFileURL(path.join(root, "src/config/chapters.ts")).href);
const { getChapterExercises } = await import(pathToFileURL(path.join(root, "src/config/chapter-exercises.ts")).href);
const { ENGLISH_CHAPTERS } = await import(pathToFileURL(path.join(root, "src/config/courses/english/chapters.ts")).href);
const { getEnglishExercises } = await import(pathToFileURL(path.join(root, "src/config/courses/english/exercises.ts")).href);

await thinChapters("SPANISH", CHAPTERS, getChapterExercises);
await thinChapters("ENGLISH", ENGLISH_CHAPTERS, getEnglishExercises);
