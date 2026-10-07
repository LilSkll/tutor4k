import {
  exerciseStemKey,
  orderEarlyLevelPractice,
  pickUniqueStemBatch,
} from "@/lib/exercise-bank";
import type { GrammarLevel, StaticExercise } from "@/types";

export const DAILY_REVIEW_COUNT = 3;
export const DAILY_PRACTICE_COUNT = 5;

/**
 * Pure planner: up to 3 review + up to 5 practice with no shared stems
 * across blocks when the bank allows.
 */
export function buildDailyExerciseBlocks(input: {
  revisionExercises: StaticExercise[];
  chapterExercises: StaticExercise[];
  level: GrammarLevel;
}): {
  reviewExercises: StaticExercise[];
  practiceExercises: StaticExercise[];
} {
  const reviewExercises = input.revisionExercises.slice(0, DAILY_REVIEW_COUNT);
  const reviewStems = new Set(
    reviewExercises.map((ex) => exerciseStemKey(ex)).filter(Boolean),
  );
  const orderedBank = orderEarlyLevelPractice(
    input.chapterExercises,
    input.level,
  );
  const { batch: practiceExercises } = pickUniqueStemBatch(
    orderedBank,
    0,
    DAILY_PRACTICE_COUNT,
    reviewStems,
  );
  return { reviewExercises, practiceExercises };
}
