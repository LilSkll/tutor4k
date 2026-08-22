#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = path.join(import.meta.dirname, "..");
const { getExercisePool, pickStaticExercise } = await import(
  pathToFileURL(path.join(root, "src/lib/exercise-pool.ts")).href
);

const types = [
  "translation",
  "error_correction",
  "sentence_building",
  "multiple_choice",
  "fill_blank",
];
const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

const t0 = performance.now();
const poolEs = await getExercisePool("spanish");
const poolEn = await getExercisePool("english");
const loadMs = performance.now() - t0;

const t1 = performance.now();
let misses = 0;
for (let i = 0; i < 500; i++) {
  for (const level of levels) {
    for (const type of types) {
      const es = await pickStaticExercise({ courseId: "spanish", type, level });
      const en = await pickStaticExercise({ courseId: "english", type, level });
      if (!es || !en) misses++;
    }
  }
}
const pickMs = performance.now() - t1;

console.log("Pool sizes: spanish", poolEs.length, "english", poolEn.length);
console.log("Load pools:", loadMs.toFixed(1), "ms");
console.log(
  "12000 pickStaticExercise:",
  pickMs.toFixed(1),
  "ms",
  `(${(pickMs / 12000).toFixed(3)} ms/pick)`,
  "misses:",
  misses,
);
