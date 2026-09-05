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
 * With `per-type`, each exercise type may reuse the same finished sentence
 * (needed for English packs where MC/FB/TR share stems).
 */
export function exerciseContentFingerprint(
  ex: Draft,
  scope: "shared" | "per-type" = "shared",
): string {
  const stem = normalizeStem(exerciseTargetSentence(ex));
  if (scope === "per-type") return `${ex.type ?? "x"}|${stem}`;
  return `stem|${stem}`;
}

export type ExpandChapterBankOptions = {
  /** Default `shared` (Spanish). Use `per-type` for English pack density. */
  contentScope?: "shared" | "per-type";
};

/**
 * Expand a chapter bank toward TARGET_EXERCISES_PER_TYPE for every type.
 * Keeps curated items first; appends supplemental packs without duplicates
 * (same finished sentence across types is skipped unless per-type scope).
 */
export function expandChapterBank(
  curated: Draft[],
  packs: Partial<Record<ExerciseType, Draft[]>>,
  typeTargets?: Partial<Record<ExerciseType, number>>,
  options?: ExpandChapterBankOptions,
): Draft[] {
  const contentScope = options?.contentScope ?? "shared";
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
    const content = exerciseContentFingerprint(cleaned, contentScope);
    if (!content.endsWith("|") && seenContent.has(content)) return false;
    seenExact.add(exact);
    if (!content.endsWith("|")) seenContent.add(content);
    byType[cleaned.type].push(cleaned);
    return true;
  };

  // Curated first, but round-robin by type so a SB-heavy curated list
  // does not lock every stem before TR/MC/FB get a chance.
  const curatedByType: Record<ExerciseType, Draft[]> = {
    multiple_choice: [],
    fill_blank: [],
    translation: [],
    error_correction: [],
    sentence_building: [],
  };
  for (const ex of curated) {
    if (ex.type in curatedByType) curatedByType[ex.type as ExerciseType].push(ex);
  }
  const types = Object.keys(byType) as ExerciseType[];
  let curatedProgress = true;
  const curatedCursor: Record<ExerciseType, number> = {
    multiple_choice: 0,
    fill_blank: 0,
    translation: 0,
    error_correction: 0,
    sentence_building: 0,
  };
  while (curatedProgress) {
    curatedProgress = false;
    for (const type of types) {
      const list = curatedByType[type];
      while (curatedCursor[type] < list.length) {
        const ex = list[curatedCursor[type]++]!;
        if (tryAdd(ex)) {
          curatedProgress = true;
          break;
        }
      }
    }
  }

  // Round-robin across types from packs so one sentence family does not
  // exhaust the shared stem set for later types.
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

  // Soft-cap sentence_building when other types are thin so the chapter
  // guide does not read as «19 SB / 1 TR».
  const otherCount =
    byType.multiple_choice.length +
    byType.fill_blank.length +
    byType.translation.length +
    byType.error_correction.length;
  if (otherCount > 0) {
    const maxSb = Math.max(6, otherCount);
    if (byType.sentence_building.length > maxSb) {
      byType.sentence_building = byType.sentence_building.slice(0, maxSb);
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
  // Keep bank order scrambled so raw packs never ship answer-order tiles.
  // Session prep also re-shuffles at serve time.
  const options = [...tokens];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j]!, options[i]!];
  }
  if (
    options.length >= 2 &&
    options.every((t, i) => t === tokens[i]) &&
    options.length > 1
  ) {
    [options[0], options[options.length - 1]] = [
      options[options.length - 1]!,
      options[0]!,
    ];
  }
  return {
    type: "sentence_building",
    question: tokens.join(" / "),
    options,
    answer,
    acceptableAnswers,
    instruction,
    explanation,
  };
}
