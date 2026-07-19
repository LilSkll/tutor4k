import type { ExerciseType, StaticExercise } from "@/types";
import { TARGET_EXERCISES_PER_TYPE } from "@/lib/exercise-bank";

type Draft = Omit<StaticExercise, "id"> & { id?: string };

/**
 * Expand a chapter bank toward TARGET_EXERCISES_PER_TYPE for every type.
 * Keeps curated items first; appends supplemental packs without duplicates.
 */
export function expandChapterBank(
  curated: Draft[],
  packs: Partial<Record<ExerciseType, Draft[]>>,
): Draft[] {
  const seen = new Set(
    curated.map((e) => `${e.type}|${e.question.trim().toLowerCase()}`),
  );
  const byType: Record<ExerciseType, Draft[]> = {
    multiple_choice: [],
    fill_blank: [],
    translation: [],
    error_correction: [],
    sentence_building: [],
  };

  for (const ex of curated) {
    byType[ex.type].push(ex);
  }

  for (const type of Object.keys(byType) as ExerciseType[]) {
    const pack = packs[type] ?? [];
    for (const ex of pack) {
      if (byType[type].length >= TARGET_EXERCISES_PER_TYPE) break;
      const key = `${ex.type}|${ex.question.trim().toLowerCase()}`;
      if (seen.has(key)) continue;
      seen.add(key);
      byType[type].push(ex);
    }
  }

  return [
    ...byType.multiple_choice,
    ...byType.fill_blank,
    ...byType.translation,
    ...byType.error_correction,
    ...byType.sentence_building,
  ];
}

export function mc(
  question: string,
  options: string[],
  answer: string,
  instruction: string,
  explanation: string,
): Draft {
  return { type: "multiple_choice", question, options, answer, instruction, explanation };
}

export function fb(
  question: string,
  answer: string,
  instruction: string,
  explanation: string,
  acceptableAnswers?: string[],
): Draft {
  return {
    type: "fill_blank",
    question,
    answer,
    acceptableAnswers,
    instruction,
    explanation,
  };
}

export function tr(
  question: string,
  answer: string,
  instruction: string,
  explanation: string,
  acceptableAnswers?: string[],
): Draft {
  return {
    type: "translation",
    question,
    answer,
    acceptableAnswers,
    instruction,
    explanation,
  };
}

export function ec(
  question: string,
  answer: string,
  instruction: string,
  explanation: string,
  acceptableAnswers?: string[],
): Draft {
  return {
    type: "error_correction",
    question,
    answer,
    acceptableAnswers,
    instruction,
    explanation,
  };
}

/** Sentence building: options = shuffled tokens; answer = correct sentence. */
export function sb(
  tokens: string[],
  answer: string,
  instruction: string,
  explanation: string,
  acceptableAnswers?: string[],
): Draft {
  return {
    type: "sentence_building",
    question: tokens.join(" / "),
    options: tokens,
    answer,
    acceptableAnswers,
    instruction,
    explanation,
  };
}
