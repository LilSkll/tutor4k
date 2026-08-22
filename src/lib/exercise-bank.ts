import type { ExerciseType, GrammarLevel, StaticExercise } from "@/types";

/** Target depth for the permanent adaptive bank (per type, per chapter). */
export const TARGET_EXERCISES_PER_TYPE = 20;

/** Thicker TR/EC pool for C2 English chapters on /exercises. */
export const ENGLISH_C2_TR_EC_TARGET = 30;

export const ENGLISH_C2_THICK_CHAPTERS = new Set([
  "eng-ch23-spotlight",
  "eng-ch24-unspoken",
  "eng-ch25-between-lines",
]);

/** Thicker pool for Spanish C2 chapters on /exercises. */
export const SPANISH_C2_TR_EC_TARGET = 30;

export const SPANISH_C2_THICK_CHAPTERS = new Set([
  "chapter-27-hendidas",
  "chapter-28-conjetura",
  "chapter-29-culto",
  "chapter-30-ironia",
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

export function orderEarlyLevelPractice(
  exercises: StaticExercise[],
  level: GrammarLevel,
): StaticExercise[] {
  if (level !== "A1" && level !== "A2" && level !== "B1" && level !== "B2") {
    return exercises;
  }

  const buckets = Object.fromEntries(
    ALL_EXERCISE_TYPES.map((t) => [t, [] as StaticExercise[]]),
  ) as Record<ExerciseType, StaticExercise[]>;

  for (const ex of exercises) buckets[ex.type].push(ex);

  const ordered: StaticExercise[] = [];
  let round = 0;
  const maxLen = Math.max(...ALL_EXERCISE_TYPES.map((t) => buckets[t].length));
  while (round < maxLen) {
    for (const type of EARLY_LEVEL_TYPE_PRIORITY) {
      const item = buckets[type][round];
      if (item) ordered.push(item);
    }
    round += 1;
  }

  return ordered.length > 0 ? ordered : exercises;
}
