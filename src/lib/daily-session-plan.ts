import {
  exerciseStemKey,
  orderEarlyLevelPractice,
  pickUniqueStemBatch,
  rotateBankBySeed,
  seededShuffle,
} from "@/lib/exercise-bank";
import type { GrammarLevel, StaticExercise } from "@/types";

export const DAILY_REVIEW_COUNT = 3;
export const DAILY_PRACTICE_COUNT = 5;

/**
 * Pure planner: up to 3 review + up to 5 practice with no shared stems
 * across blocks when the bank allows.
 *
 * `rotationSeed` (e.g. course+chapter+localDate) rotates which items appear
 * so Daily is not stuck on the same first five forever.
 */
export function buildDailyExerciseBlocks(input: {
  revisionExercises: StaticExercise[];
  chapterExercises: StaticExercise[];
  level: GrammarLevel;
  /** Stable day key — changes the practice window without Math.random. */
  rotationSeed?: string;
}): {
  reviewExercises: StaticExercise[];
  practiceExercises: StaticExercise[];
} {
  const seed = input.rotationSeed?.trim() || "daily";
  const reviewExercises = seededShuffle(
    input.revisionExercises,
    `${seed}:review`,
  ).slice(0, DAILY_REVIEW_COUNT);
  const reviewStems = new Set(
    reviewExercises.map((ex) => exerciseStemKey(ex)).filter(Boolean),
  );
  const orderedBank = rotateBankBySeed(
    orderEarlyLevelPractice(input.chapterExercises, input.level),
    `${seed}:practice`,
  );
  const { batch: practiceExercises } = pickUniqueStemBatch(
    orderedBank,
    0,
    DAILY_PRACTICE_COUNT,
    reviewStems,
  );
  return { reviewExercises, practiceExercises };
}
