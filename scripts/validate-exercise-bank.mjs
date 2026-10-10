#!/usr/bin/env node
/**
 * Data integrity checks for exercise banks.
 * Run: npx tsx scripts/validate-exercise-bank.mjs [--course spanish|english|both]
 */
import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const TYPES = [
  "multiple_choice",
  "fill_blank",
  "translation",
  "error_correction",
  "sentence_building",
];

const courseArg = process.argv.find((a) => a.startsWith("--course="));
const courseFilter = courseArg?.split("=")[1] ?? "both";

function tokensBuildAnswer(options, normalizeAnswer) {
  return options.map((o) => normalizeAnswer(o)).join(" ");
}

function answerMatchesOptions(answer, options, normalizeAnswer, answersMatch) {
  const built = options.join(" ");
  if (answersMatch(built, [answer])) return true;
  // Multi-word tiles: each option may be a phrase
  const normBuilt = tokensBuildAnswer(options, normalizeAnswer);
  const normAnswer = normalizeAnswer(answer);
  return normBuilt === normAnswer;
}

async function validateCourse(label, chapters, getExercises) {
  const { normalizeAnswer, answersMatch } = await import(
    pathToFileURL(path.join(root, "src/lib/normalize-answer.ts")).href
  );

  const issues = [];

  for (const ch of chapters) {
    for (const ex of getExercises(ch.slug)) {
      if (!ex.answer?.trim()) {
        const alts = ex.acceptableAnswers?.filter((a) => a?.trim()) ?? [];
        if (alts.length === 0) {
          issues.push({ kind: "empty-answer", slug: ch.slug, type: ex.type });
        }
      }
      if (!ex.question?.trim()) {
        issues.push({ kind: "empty-question", slug: ch.slug, type: ex.type });
      }
      if (ex.type === "sentence_building") {
        if (!ex.options?.length) {
          issues.push({ kind: "sb-no-options", slug: ch.slug });
        } else if (
          !answerMatchesOptions(ex.answer, ex.options, normalizeAnswer, answersMatch)
        ) {
          issues.push({
            kind: "sb-answer-mismatch",
            slug: ch.slug,
            answer: ex.answer,
            built: ex.options.join(" "),
          });
        }
      }
      if (ex.type === "multiple_choice" && (!ex.options || ex.options.length < 2)) {
        issues.push({ kind: "mc-too-few-options", slug: ch.slug });
      }
    }

    const byType = Object.fromEntries(TYPES.map((t) => [t, 0]));
    for (const ex of getExercises(ch.slug)) byType[ex.type]++;
    for (const t of ch.exerciseTypes ?? []) {
      if (byType[t] === 0) {
        issues.push({ kind: "type-enabled-empty", slug: ch.slug, type: t });
      }
    }
  }

  console.log(`\n=== ${label} ===`);
  console.log("Issues:", issues.length);
  const byKind = {};
  for (const i of issues) byKind[i.kind] = (byKind[i.kind] ?? 0) + 1;
  for (const [k, n] of Object.entries(byKind).sort()) console.log(`  ${k}: ${n}`);

  const fatalKinds = new Set([
    "empty-answer",
    "empty-question",
    "sb-no-options",
    "sb-answer-mismatch",
    "mc-too-few-options",
  ]);
  const fatal = issues.filter((i) => fatalKinds.has(i.kind));
  if (fatal.length) {
    console.log("\nFatal (first 10):");
    for (const i of fatal.slice(0, 10)) console.log(" ", i);
  }

  const emptyTypes = issues.filter((i) => i.kind === "type-enabled-empty");
  if (emptyTypes.length) {
    console.log(`\nEnabled but empty (${emptyTypes.length}):`);
    for (const i of emptyTypes.slice(0, 15)) console.log(`  ${i.slug} → ${i.type}`);
    if (emptyTypes.length > 15) console.log(`  … +${emptyTypes.length - 15} more`);
  }

  return { issues, fatal: fatal.length > 0 };
}

async function main() {
  const { CHAPTERS } = await import(
    pathToFileURL(path.join(root, "src/config/chapters.ts")).href
  );
  const { getChapterExercises } = await import(
    pathToFileURL(path.join(root, "src/config/chapter-exercises.ts")).href
  );
  const { ENGLISH_CHAPTERS } = await import(
    pathToFileURL(path.join(root, "src/config/courses/english/chapters.ts")).href
  );
  const { getEnglishExercises } = await import(
    pathToFileURL(path.join(root, "src/config/courses/english/exercises.ts")).href
  );
  const { getExercisePool, pickStaticExercise } = await import(
    pathToFileURL(path.join(root, "src/lib/exercise-pool.ts")).href
  );

  let failed = false;

  if (courseFilter === "spanish" || courseFilter === "both") {
    const r = await validateCourse("SPANISH", CHAPTERS, getChapterExercises);
    failed ||= r.fatal;

    const pool = await getExercisePool("spanish");
    const ids = new Map();
    for (const ex of pool) ids.set(ex.id, (ids.get(ex.id) ?? 0) + 1);
    const dups = [...ids.entries()].filter(([, c]) => c > 1);
    console.log("Pool:", pool.length, "Duplicate IDs:", dups.length);
    failed ||= dups.length > 0;

    for (const level of ["A1", "A2", "B1", "B2", "C1", "C2"]) {
      for (const type of TYPES) {
        const picked = await pickStaticExercise({ courseId: "spanish", type, level });
        if (!picked) {
          console.log("pickStaticExercise miss:", level, type);
          failed = true;
        }
      }
    }
  }

  if (courseFilter === "english" || courseFilter === "both") {
    const r = await validateCourse("ENGLISH", ENGLISH_CHAPTERS, getEnglishExercises);
    failed ||= r.fatal;
  }

  // Raw curated/supplements must pass the same quality gates as packs.
  {
    const { isUsableBankExercise, sanitizeBankExercise } = await import(
      pathToFileURL(path.join(root, "src/lib/exercise-quality.ts")).href
    );
    const { SPANISH_CURATED_SUPPLEMENTS } = await import(
      pathToFileURL(
        path.join(root, "src/config/exercise-seeds/spanish-curated-supplements.ts"),
      ).href
    );
    const { ENGLISH_CURATED_SUPPLEMENTS } = await import(
      pathToFileURL(
        path.join(root, "src/config/exercise-seeds/english-curated-supplements.ts"),
      ).href
    );

    const checkSupplements = (label, data) => {
      let bad = 0;
      const samples = [];
      for (const [slug, items] of Object.entries(data)) {
        for (const ex of items) {
          const cleaned = sanitizeBankExercise(ex);
          if (!cleaned || !isUsableBankExercise(cleaned)) {
            bad += 1;
            if (samples.length < 8) {
              samples.push({
                slug,
                type: ex.type,
                q: String(ex.question ?? "").slice(0, 60),
              });
            }
          }
        }
      }
      console.log(`\n=== ${label} curated quality ===`);
      console.log("Unusable items:", bad);
      if (bad) {
        for (const s of samples) console.log(" ", s);
        failed = true;
      }
    };

    if (courseFilter === "spanish" || courseFilter === "both") {
      checkSupplements("SPANISH", SPANISH_CURATED_SUPPLEMENTS);
    }
    if (courseFilter === "english" || courseFilter === "both") {
      checkSupplements("ENGLISH", ENGLISH_CURATED_SUPPLEMENTS);
    }
  }

  if (failed) {
    console.log("\n❌ Validation failed");
    process.exit(1);
  }
  console.log("\n✅ Validation passed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
