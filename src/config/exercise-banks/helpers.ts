import type { ExerciseType, StaticExercise } from "@/types";
import { TARGET_EXERCISES_PER_TYPE } from "@/lib/exercise-bank";
import { isUsableBankExercise } from "@/lib/exercise-quality";

type Draft = Omit<StaticExercise, "id"> & { id?: string };

function packItemOk(ex: Draft): boolean {
  return isUsableBankExercise(ex);
}

/** Collapse accents/punct so the same sentence is not reused across types. */
function normalizeStem(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/___+/g, "_")
    .replace(/\s*\/\s*/g, " ")
    .replace(/[¿?¡!.,;:'"«»„""''`´…]/g, "")
    .replace(/[-–—]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Content fingerprint shared across MC/FB (same blank stem) and across
 * EC/SB (same finished sentence) so chapters do not recycle one phrase.
 */
export function exerciseContentFingerprint(ex: Draft): string {
  switch (ex.type) {
    case "sentence_building":
    case "error_correction":
      return `sent|${normalizeStem(ex.answer)}`;
    case "translation":
      return `tr|${normalizeStem(ex.question)}`;
    case "multiple_choice":
    case "fill_blank":
      return `blank|${normalizeStem(ex.question)}`;
    default:
      return `${ex.type}|${normalizeStem(ex.question)}`;
  }
}

/**
 * Expand a chapter bank toward TARGET_EXERCISES_PER_TYPE for every type.
 * Keeps curated items first; appends supplemental packs without duplicates
 * (same blank stem or finished sentence across types is skipped).
 */
export function expandChapterBank(
  curated: Draft[],
  packs: Partial<Record<ExerciseType, Draft[]>>,
  typeTargets?: Partial<Record<ExerciseType, number>>,
): Draft[] {
  const targetFor = (type: ExerciseType) =>
    typeTargets?.[type] ?? TARGET_EXERCISES_PER_TYPE;
  const seenExact = new Set<string>();
  const seenContent = new Set<string>();
  const byType: Record<ExerciseType, Draft[]> = {
    multiple_choice: [],
    fill_blank: [],
    translation: [],
    error_correction: [],
    sentence_building: [],
  };

  const tryAdd = (ex: Draft): boolean => {
    if (!packItemOk(ex)) return false;
    const exact = `${ex.type}|${ex.question.trim().toLowerCase()}`;
    if (seenExact.has(exact)) return false;
    const content = exerciseContentFingerprint(ex);
    if (seenContent.has(content)) return false;
    seenExact.add(exact);
    seenContent.add(content);
    byType[ex.type].push(ex);
    return true;
  };

  for (const ex of curated) {
    tryAdd(ex);
  }

  for (const type of Object.keys(byType) as ExerciseType[]) {
    const pack = packs[type] ?? [];
    for (const ex of pack) {
      if (byType[type].length >= targetFor(type)) break;
      tryAdd(ex);
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
