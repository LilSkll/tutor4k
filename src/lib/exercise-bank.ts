import type { ExerciseType, GrammarLevel, StaticExercise } from "@/types";

/** Target depth for the permanent adaptive bank (per type, per chapter). */
export const TARGET_EXERCISES_PER_TYPE = 20;

/** Thicker TR/EC pool for advanced / exam chapters on /exercises. */
export const THICK_TR_EC_TARGET = 30;

/** Thicker TR/EC pool for C2 English chapters on /exercises. */
export const ENGLISH_C2_TR_EC_TARGET = THICK_TR_EC_TARGET;

export const ENGLISH_C2_THICK_CHAPTERS = new Set([
  "eng-ch23-spotlight",
  "eng-ch24-unspoken",
  "eng-ch25-between-lines",
]);

/** Thicker pool for Spanish C2 chapters on /exercises. */
export const SPANISH_C2_TR_EC_TARGET = THICK_TR_EC_TARGET;

export const SPANISH_C1_THICK_CHAPTERS = new Set([
  "chapter-16-perifrasis",
  "chapter-17-dele",
  "chapter-42-subjuntivo-avanzado",
  "chapter-43-indirecto-avanzado",
  "chapter-44-pronombres-avanzado",
  "chapter-45-ser-estar-matices",
]);

export const SPANISH_C2_THICK_CHAPTERS = new Set([
  "chapter-27-hendidas",
  "chapter-28-conjetura",
  "chapter-29-culto",
  "chapter-30-ironia",
]);

export const ENGLISH_C1_EXAM_THICK_CHAPTERS = new Set([
  "eng-ch13-advanced-structures",
  "eng-ch14-art-language",
  "eng-ch15-mastery",
  "eng-ch16-ielts",
  "eng-ch35-ielts-informal",
  "eng-ch36-ielts-formal",
  "eng-ch37-cambridge-letter",
  "eng-ch38-ielts-task1",
  "eng-ch39-ielts-essay",
  "eng-ch40-ielts-cohesion",
  "eng-ch41-cambridge-essay",
  "eng-ch42-ielts-opinion",
  "eng-ch43-register-shift",
]);

/** How many bank items one practice round serves (per type / lesson block). */
export const SESSION_EXERCISES = 5;

export const ALL_EXERCISE_TYPES: ExerciseType[] = [
  "multiple_choice",
  "fill_blank",
  "translation",
  "error_correction",
  "sentence_building",
];

type ExerciseDraft = Omit<StaticExercise, "id"> & { id?: string };

/**
 * Assign stable ids: `{courseId}:{chapterSlug}:{type}:{n}`.
 * Keeps existing ids when already set.
 */
export function withExerciseIds(
  courseId: string,
  chapterSlug: string,
  exercises: ExerciseDraft[],
): StaticExercise[] {
  const counters: Partial<Record<ExerciseType, number>> = {};
  return exercises.map((ex) => {
    const n = (counters[ex.type] ?? 0) + 1;
    counters[ex.type] = n;
    const id =
      ex.id && ex.id.trim().length > 0
        ? ex.id
        : `${courseId}:${chapterSlug}:${ex.type}:${String(n).padStart(2, "0")}`;
    return { ...ex, id };
  });
}

export function countByType(
  exercises: StaticExercise[],
): Record<ExerciseType, number> {
  const out = Object.fromEntries(
    ALL_EXERCISE_TYPES.map((t) => [t, 0]),
  ) as Record<ExerciseType, number>;
  for (const ex of exercises) out[ex.type] += 1;
  return out;
}

export function bankCoverageSummary(exercises: StaticExercise[]): {
  total: number;
  byType: Record<ExerciseType, number>;
  missingTowardTarget: Record<ExerciseType, number>;
} {
  const byType = countByType(exercises);
  const missingTowardTarget = Object.fromEntries(
    ALL_EXERCISE_TYPES.map((t) => [
      t,
      Math.max(0, TARGET_EXERCISES_PER_TYPE - byType[t]),
    ]),
  ) as Record<ExerciseType, number>;
  return {
    total: exercises.length,
    byType,
    missingTowardTarget,
  };
}

/** A1–A2: phrase + translation drills appear in the first practice rounds. */
const EARLY_LEVEL_TYPE_PRIORITY: ExerciseType[] = [
  "sentence_building",
  "translation",
  "fill_blank",
  "multiple_choice",
  "error_correction",
];

/** Soft content key: finished target sentence shared across exercise types. */
function softContentKey(ex: StaticExercise): string {
  const filled =
    ex.type === "multiple_choice" || ex.type === "fill_blank"
      ? /___+/.test(ex.question)
        ? ex.question.replace(/___+/g, ex.answer)
        : ex.question
      : ex.answer || ex.question;
  return filled
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\([^)]*\)/g, " ")
    .replace(/___+/g, "_")
    .replace(/[^\p{L}\p{N}\s_()]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function orderEarlyLevelPractice(
  exercises: StaticExercise[],
  level: GrammarLevel,
): StaticExercise[] {
  if (level !== "A1" && level !== "A2" && level !== "B1" && level !== "B2") {
    // Still dedupe by finished stem for advanced levels.
    return dedupeByTargetStem(exercises);
  }

  const buckets = Object.fromEntries(
    ALL_EXERCISE_TYPES.map((t) => [t, [] as StaticExercise[]]),
  ) as Record<ExerciseType, StaticExercise[]>;

  for (const ex of exercises) buckets[ex.type].push(ex);

  const ordered: StaticExercise[] = [];
  const usedSoft = new Set<string>();
  const cursor: Record<ExerciseType, number> = {
    multiple_choice: 0,
    fill_blank: 0,
    translation: 0,
    error_correction: 0,
    sentence_building: 0,
  };

  let progress = true;
  while (progress) {
    progress = false;
    for (const type of EARLY_LEVEL_TYPE_PRIORITY) {
      const bucket = buckets[type];
      while (cursor[type] < bucket.length) {
        const item = bucket[cursor[type]++];
        const key = softContentKey(item);
        if (key && usedSoft.has(key)) continue;
        if (key) usedSoft.add(key);
        ordered.push(item);
        progress = true;
        break;
      }
    }
  }

  return ordered.length > 0 ? ordered : exercises;
}

/** Keep first occurrence of each finished target sentence. */
export function dedupeByTargetStem(
  exercises: StaticExercise[],
): StaticExercise[] {
  const seen = new Set<string>();
  const out: StaticExercise[] = [];
  for (const ex of exercises) {
    const key = softContentKey(ex);
    if (key && seen.has(key)) continue;
    if (key) seen.add(key);
    out.push(ex);
  }
  return out;
}

/**
 * Pick up to `count` exercises from `fromCursor`, skipping finished-sentence
 * duplicates within the batch (and advancing past used stems).
 */
export function pickUniqueStemBatch(
  bank: StaticExercise[],
  fromCursor: number,
  count: number,
): { batch: StaticExercise[]; nextCursor: number } {
  const batch: StaticExercise[] = [];
  const used = new Set<string>();
  let i = Math.max(0, fromCursor);
  while (i < bank.length && batch.length < count) {
    const item = bank[i++];
    const key = softContentKey(item);
    if (key && used.has(key)) continue;
    if (key) used.add(key);
    batch.push(item);
  }
  return { batch, nextCursor: i };
}
