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

function normalizeJoined(tokens: string[]): string {
  return tokens
    .join(" ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[¿?¡!.,;:'"«»„""''`´…]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** True when tiles left-to-right already spell the graded answer. */
export function sentenceBuildingTilesSpoilAnswer(
  tokens: string[],
  answer?: string | null,
): boolean {
  if (tokens.length < 2) return false;
  const joined = normalizeJoined(tokens);
  if (!joined) return false;
  if (answer?.trim()) {
    return joined === normalizeJoined(answer.trim().split(/\s+/));
  }
  return false;
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
  const answer = exercise.answer ?? "";
  let shuffled = shuffleArray(tokens);
  let attempts = 0;
  while (
    attempts < 24 &&
    tokens.length >= 2 &&
    (sameOrder(shuffled, canonicalOrder) ||
      sentenceBuildingTilesSpoilAnswer(shuffled, answer))
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
