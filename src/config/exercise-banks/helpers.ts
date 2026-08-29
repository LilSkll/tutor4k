import type { ExerciseType, StaticExercise } from "@/types";
import { TARGET_EXERCISES_PER_TYPE } from "@/lib/exercise-bank";
import {
  isUsableBankExercise,
  sanitizeBankExercise,
} from "@/lib/exercise-quality";

type Draft = Omit<StaticExercise, "id"> & { id?: string };

function packItemOk(ex: Draft): boolean {
  return isUsableBankExercise(ex);
}

/** Collapse accents/punct so the same sentence is not reused across types. */
export function normalizeStem(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\([^)]*\)/g, " ")
    .replace(/___+/g, "_")
    .replace(/\s*\/\s*/g, " ")
    .replace(/[¿?¡!.,;:'"«»„""''`´…]/g, "")
    .replace(/[-–—]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Finished target-language sentence for an exercise (shared across types).
 * MC/FB fill the blank; TR/EC/SB use the answer.
 */
export function exerciseTargetSentence(ex: {
  type?: string;
  question?: string;
  answer?: string;
}): string {
  const type = ex.type ?? "";
  const answer = (ex.answer ?? "").trim();
  const question = (ex.question ?? "").trim();
  if (type === "multiple_choice" || type === "fill_blank") {
    if (/___+/.test(question) && answer) {
      return question.replace(/___+/g, answer);
    }
    return question;
  }
  if (type === "translation" || type === "error_correction" || type === "sentence_building") {
    return answer || question;
  }
  return answer || question;
}

/**
 * Content fingerprint shared across ALL types for the same finished sentence,
 * so a chapter does not recycle one phrase as TR then SB then MC.
 */
export function exerciseContentFingerprint(ex: Draft): string {
  return `stem|${normalizeStem(exerciseTargetSentence(ex))}`;
}

/**
 * Expand a chapter bank toward TARGET_EXERCISES_PER_TYPE for every type.
 * Keeps curated items first; appends supplemental packs without duplicates
 * (same finished sentence across types is skipped).
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
    const cleaned = sanitizeBankExercise(ex);
    if (!cleaned || !packItemOk(cleaned)) return false;
    const exact = `${cleaned.type}|${cleaned.question.trim().toLowerCase()}`;
    if (seenExact.has(exact)) return false;
    const content = exerciseContentFingerprint(cleaned);
    if (!content.endsWith("|") && seenContent.has(content)) return false;
    seenExact.add(exact);
    if (!content.endsWith("|")) seenContent.add(content);
    byType[cleaned.type].push(cleaned);
    return true;
  };

  for (const ex of curated) {
    tryAdd(ex);
  }

  // Round-robin across types from packs so one sentence family does not
  // exhaust the shared stem set for later types.
  const types = Object.keys(byType) as ExerciseType[];
  let added = true;
  while (added) {
    added = false;
    for (const type of types) {
      if (byType[type].length >= targetFor(type)) continue;
      const pack = packs[type] ?? [];
      const have = new Set(
        byType[type].map((e) => `${e.question.trim().toLowerCase()}`),
      );
      for (const ex of pack) {
        if (byType[type].length >= targetFor(type)) break;
        if (have.has(ex.question.trim().toLowerCase())) continue;
        if (tryAdd(ex)) {
          have.add(ex.question.trim().toLowerCase());
          added = true;
          break;
        }
      }
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
