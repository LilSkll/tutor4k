#!/usr/bin/env node
/**
 * Audit exercise bank depth per chapter and per level/type.
 * Run: npx tsx scripts/audit-exercise-coverage.mjs
 */
import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const TARGET = 20;
const TYPES = [
  "multiple_choice",
  "fill_blank",
  "translation",
  "error_correction",
  "sentence_building",
];
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

async function main() {
  const { CHAPTERS } = await import(pathToFileURL(path.join(root, "src/config/chapters.ts")).href);
  const { getChapterExercises } = await import(
    pathToFileURL(path.join(root, "src/config/chapter-exercises.ts")).href
  );
  const { ENGLISH_CHAPTERS } = await import(
    pathToFileURL(path.join(root, "src/config/courses/english/chapters.ts")).href
  );
  const { getEnglishExercises } = await import(
    pathToFileURL(path.join(root, "src/config/courses/english/exercises.ts")).href
  );

  function auditCourse(label, chapters, getExercises) {
    console.log(`\n=== ${label} ===`);
    const levelGrid = Object.fromEntries(
      LEVELS.map((l) => [l, Object.fromEntries(TYPES.map((t) => [t, 0]))]),
    );

    let thinChapters = 0;
    let measuredChapters = 0;
    for (const ch of chapters) {
      const exs = getExercises(ch.slug);
      const byType = Object.fromEntries(TYPES.map((t) => [t, 0]));
      for (const ex of exs) byType[ex.type]++;
      for (const t of TYPES) levelGrid[ch.level][t] += byType[t];

      // Only score types the chapter actually enables (missing types are intentional).
      const enabled =
        Array.isArray(ch.exerciseTypes) && ch.exerciseTypes.length > 0
          ? TYPES.filter((t) => ch.exerciseTypes.includes(t))
          : TYPES;
      if (enabled.length === 0) continue;
      measuredChapters++;

      const min = Math.min(...enabled.map((t) => byType[t]));
      if (min < TARGET) {
        thinChapters++;
        const gaps = enabled
          .filter((t) => byType[t] < TARGET)
          .map((t) => `${t}:${byType[t]}`)
          .join(", ");
        if (min < 10 || enabled.some((t) => byType[t] < 12)) {
          console.log(`  ${ch.level} ${ch.slug} → ${gaps}`);
        }
      }
    }

    console.log("\nBy level (pool totals):");
    console.log(
      "Level".padEnd(6),
      TYPES.map((t) => t.slice(0, 8).padEnd(10)).join(""),
      "TOTAL",
    );
    for (const l of LEVELS) {
      const row = TYPES.map((t) => String(levelGrid[l][t]).padStart(10));
      const total = TYPES.reduce((s, t) => s + levelGrid[l][t], 0);
      console.log(l.padEnd(6), row.join(""), String(total).padStart(6));
    }
    console.log(
      `\nChapters below ${TARGET}/enabled-type: ${thinChapters}/${measuredChapters} (of ${chapters.length} total)`,
    );
  }

  auditCourse("SPANISH", CHAPTERS, getChapterExercises);
  auditCourse("ENGLISH", ENGLISH_CHAPTERS, getEnglishExercises);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
