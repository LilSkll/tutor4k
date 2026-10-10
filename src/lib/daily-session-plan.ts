import {
  exerciseStemKey,
  orderEarlyLevelPractice,
  pickUniqueStemBatch,
  seededShuffle,
} from "@/lib/exercise-bank";
import type { GrammarLevel, StaticExercise } from "@/types";

export const DAILY_REVIEW_COUNT = 3;
export const DAILY_PRACTICE_COUNT = 5;

function withoutIds(
  bank: StaticExercise[],
  excludeIds: Set<string>,
): StaticExercise[] {
  if (excludeIds.size === 0) return bank;
  return bank.filter((ex) => !excludeIds.has(ex.id));
}

/**
 * Pure planner: up to 3 review + up to 5 practice with no shared stems
 * across blocks when the bank allows.
 *
 * `rotationSeed` should change per day AND per Daily open (run nonce)
 * so the same first-five do not repeat. `excludeIds` skips recently
 * served items until the bank is exhausted.
 */
export function buildDailyExerciseBlocks(input: {
  revisionExercises: StaticExercise[];
  chapterExercises: StaticExercise[];
  level: GrammarLevel;
  /** Day + run key — changes the practice window. */
  rotationSeed?: string;
  /** Exercise ids shown in recent Daily opens (same chapter/day). */
  excludeIds?: Iterable<string>;
}): {
  reviewExercises: StaticExercise[];
  practiceExercises: StaticExercise[];
  /** True when we had to ignore exclusions because the bank was exhausted. */
  exhaustedExclusions: boolean;
} {
  const seed = input.rotationSeed?.trim() || "daily";
  const excludeIds = new Set(
    [...(input.excludeIds ?? [])].map((id) => id.trim()).filter(Boolean),
  );

  let exhaustedExclusions = false;

  const revisionFresh = withoutIds(input.revisionExercises, excludeIds);
  let revisionSource = revisionFresh;
  if (
    input.revisionExercises.length > 0 &&
    revisionFresh.length <
      Math.min(DAILY_REVIEW_COUNT, input.revisionExercises.length)
  ) {
    revisionSource = input.revisionExercises;
    exhaustedExclusions = true;
  }

  const reviewExercises = seededShuffle(
    revisionSource,
    `${seed}:review`,
  ).slice(0, DAILY_REVIEW_COUNT);

  const reviewStems = new Set(
    reviewExercises.map((ex) => exerciseStemKey(ex)).filter(Boolean),
  );

  const ordered = orderEarlyLevelPractice(
    input.chapterExercises,
    input.level,
  );
  const practiceFresh = withoutIds(ordered, excludeIds);
  let practicePool = practiceFresh;
  if (
    ordered.length > 0 &&
    practiceFresh.length < Math.min(DAILY_PRACTICE_COUNT, ordered.length)
  ) {
    practicePool = ordered;
    exhaustedExclusions = true;
  }

  const shuffledPractice = seededShuffle(practicePool, `${seed}:practice`);
  const { batch: practiceExercises } = pickUniqueStemBatch(
    shuffledPractice,
    0,
    DAILY_PRACTICE_COUNT,
    reviewStems,
  );

  return { reviewExercises, practiceExercises, exhaustedExclusions };
}
