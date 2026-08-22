#!/usr/bin/env node
/** List C1/C2 chapters with translation or error_correction below TARGET (default 30). */
import { CHAPTERS } from "../src/config/chapters.ts";
import { ENGLISH_CHAPTERS } from "../src/config/courses/english/chapters.ts";
import { getChapterExercises } from "../src/config/chapter-exercises.ts";
import { getEnglishExercises } from "../src/config/courses/english/exercises.ts";

const TARGET = Number(process.argv[2] ?? 30);
const TYPES = ["translation", "error_correction"];

function gaps(chapters, getExercises, label) {
  console.log(`\n=== ${label} (TR/EC below ${TARGET}) ===`);
  let n = 0;
  for (const ch of chapters.filter((c) => c.level === "C1" || c.level === "C2")) {
    const by = Object.fromEntries(TYPES.map((t) => [t, 0]));
    for (const ex of getExercises(ch.slug)) {
      if (by[ex.type] !== undefined) by[ex.type]++;
    }
    const min = Math.min(...TYPES.map((t) => by[t]));
    if (min < TARGET) {
      n++;
      const detail = TYPES.map((t) => `${t}:${by[t]}`).join(", ");
      console.log(`${min}\t${ch.level}\t${ch.slug}\t${detail}`);
    }
  }
  if (n === 0) console.log("(none)");
  return n;
}

gaps(CHAPTERS, getChapterExercises, "SPANISH");
gaps(ENGLISH_CHAPTERS, getEnglishExercises, "ENGLISH");
