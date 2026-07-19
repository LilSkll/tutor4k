import type { ExerciseType, StaticExercise } from "@/types";

/** Target depth for the permanent adaptive bank (per type, per chapter). */
export const TARGET_EXERCISES_PER_TYPE = 20;

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
