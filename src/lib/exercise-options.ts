import type { StaticExercise } from "@/types";

/** Fisher–Yates shuffle (returns a new array). */
export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sameOrder(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((word, i) => word === b[i]);
}

/** Jumble word tiles for sentence_building; bank options are the source of truth. */
export function shuffleSentenceBuildingOptions(
  exercise: Pick<StaticExercise, "type" | "options" | "answer">,
): string[] | undefined {
  if (exercise.type !== "sentence_building") return exercise.options;

  const tokens =
    exercise.options?.filter((t) => t.trim().length > 0) ??
    exercise.answer?.trim().split(/\s+/).filter(Boolean) ??
    [];
  if (tokens.length < 2) return exercise.options;

  const canonicalOrder = [...tokens];
  let shuffled = shuffleArray(tokens);
  let attempts = 0;
  while (
    attempts < 10 &&
    tokens.length >= 3 &&
    sameOrder(shuffled, canonicalOrder)
  ) {
    shuffled = shuffleArray(tokens);
    attempts++;
  }
  return shuffled;
}

/** Randomize presentation fields for a static bank item (per session). */
export function prepareExerciseForSession<T extends StaticExercise>(exercise: T): T {
  if (exercise.type !== "sentence_building") return exercise;
  return {
    ...exercise,
    options: shuffleSentenceBuildingOptions(exercise),
  };
}

export function prepareExercisesForSession<T extends StaticExercise>(
  exercises: T[],
): T[] {
  return exercises.map(prepareExerciseForSession);
}
