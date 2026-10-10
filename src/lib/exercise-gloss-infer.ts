import { lookupSpanishSentenceGloss } from "@/config/exercise-sentence-glosses";
import type { InterfaceLanguage, StaticExercise } from "@/types";
import { hasCyrillicText } from "@/lib/exercise-localize";

function normalizeSpanishKey(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[¿?¡!.,…]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Best-effort full Spanish sentence for gloss lookup. */
export function reconstructSpanishSentence(
  exercise: Pick<StaticExercise, "type" | "question" | "answer">,
): string | null {
  const q = exercise.question?.trim() ?? "";
  if (!q || hasCyrillicText(q)) return null;

  if (exercise.type === "sentence_building") {
    return exercise.answer?.trim() ?? null;
  }

  if (exercise.type === "error_correction") {
    return null;
  }

  if (exercise.type === "fill_blank" && q.includes("___")) {
    const filled = q
      .replace(/___+/g, exercise.answer?.trim() ?? "")
      .replace(/\s*\([^)]*\)/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return filled || null;
  }

  if (exercise.type === "multiple_choice" && !q.includes("___")) {
    return q.replace(/\s*\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
  }

  return null;
}

/** Infer interface-language gloss for Spanish-authored prompts. */
export function inferQuestionGloss(
  exercise: Pick<StaticExercise, "type" | "question" | "answer">,
  interfaceLanguage: InterfaceLanguage,
): string | null {
  const sentence = reconstructSpanishSentence(exercise);
  if (!sentence) return null;

  const variants = new Set<string>([
    sentence,
    sentence.replace(/^yo\s+/i, ""),
    sentence.replace(/^tú\s+/i, ""),
    sentence.replace(/^él\s+/i, ""),
    sentence.replace(/^ella\s+/i, ""),
  ]);

  for (const variant of variants) {
    const direct = lookupSpanishSentenceGloss(variant, interfaceLanguage);
    if (direct) return direct;
  }

  const key = normalizeSpanishKey(sentence);
  return lookupSpanishSentenceGloss(key, interfaceLanguage);
}
