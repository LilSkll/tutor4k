import type { ExerciseType, InterfaceLanguage, StaticExercise } from "@/types";
import { lookupTranslationPrompt } from "@/config/exercise-translation-prompts";

// =====================================================================
// Interface-language handling for the static exercise bank.
// Bank sources are single-language: Spanish-course items are authored in
// Russian, English-course items in English. When the user's interface
// language differs, we (a) swap the instruction for a localized generic
// one and (b) drop items that are unusable in that language (e.g.
// "translate from Russian" when the UI is not Russian).
//
// Curated question gloss JSON stays server-side (exercise-gloss-attach).
// Client gloss UI reads exercise.questionTranslations only.
// =====================================================================

const CYRILLIC = /[\u0400-\u04FF]/;

export function hasCyrillicText(s: string | undefined | null): boolean {
  return !!s && CYRILLIC.test(s);
}

/** Best-effort source language of an authored bank string. */
export function detectSourceLanguage(s: string): "ru" | "en" {
  return hasCyrillicText(s) ? "ru" : "en";
}

/**
 * Interface-language gloss for the exercise prompt (shown in parentheses).
 * Uses inline questionTranslations only (populated on the server).
 */
export function getQuestionGloss(
  exercise: Pick<
    StaticExercise,
    "question" | "type" | "questionTranslations"
  >,
  interfaceLanguage: InterfaceLanguage,
): string | null {
  const q = exercise.question?.trim() ?? "";
  if (!q) return null;

  // Never show gloss for error correction — curated/inferred glosses often
  // contain the corrected sentence and leak the answer.
  if (exercise.type === "error_correction") return null;

  const gloss =
    exercise.questionTranslations?.[interfaceLanguage]?.trim() ?? "";
  if (!gloss) return null;

  if (normalizeForCompare(gloss) === normalizeForCompare(q)) return null;

  // Spanish prompt → always show meaning in the learner's language when available.
  if (
    exercise.type !== "translation" &&
    !hasCyrillicText(q) &&
    interfaceLanguage !== "es"
  ) {
    return gloss;
  }

  if (
    exercise.type === "translation" &&
    detectSourceLanguage(q) === interfaceLanguage
  ) {
    return null;
  }

  return gloss;
}

function normalizeForCompare(s: string): string {
  return s.replace(/\s+/g, " ").trim().toLowerCase();
}

/** Render "question (gloss)" when a gloss exists. */
export function formatQuestionWithGloss(
  exercise: Pick<
    StaticExercise,
    "question" | "type" | "questionTranslations"
  >,
  interfaceLanguage: InterfaceLanguage,
): { question: string; gloss: string | null } {
  // Slash-separated token prompts leak the correct word order for tile exercises.
  if (exercise.type === "sentence_building") {
    return { question: "", gloss: null };
  }

  return {
    question: exercise.question,
    gloss: getQuestionGloss(exercise, interfaceLanguage),
  };
}

const ERROR_CORRECTION_FULL: Record<InterfaceLanguage, string> = {
  ru: "Перепишите предложение целиком, исправив грамматическую ошибку",
  en: "Rewrite the full sentence and fix the grammar mistake",
  es: "Reescribe la frase completa corrigiendo el error gramatical",
  de: "Schreibe den ganzen Satz neu und korrigiere den Grammatikfehler",
};

const GENERIC_INSTRUCTION: Record<
  InterfaceLanguage,
  Record<ExerciseType, string>
> = {
  ru: {
    multiple_choice: "Выберите правильный вариант",
    fill_blank: "Заполните пропуск",
    translation: "Переведите предложение",
    error_correction: "Найдите и исправьте ошибку",
    sentence_building: "Составьте предложение из слов",
  },
  en: {
    multiple_choice: "Choose the correct option",
    fill_blank: "Fill in the blank",
    translation: "Translate the sentence",
    error_correction: "Find and correct the mistake",
    sentence_building: "Build the sentence from the words",
  },
  es: {
    multiple_choice: "Elige la opción correcta",
    fill_blank: "Completa el hueco",
    translation: "Traduce la frase",
    error_correction: "Encuentra y corrige el error",
    sentence_building: "Ordena las palabras para formar la frase",
  },
  de: {
    multiple_choice: "Wähle die richtige Option",
    fill_blank: "Fülle die Lücke aus",
    translation: "Übersetze den Satz",
    error_correction: "Finde und korrigiere den Fehler",
    sentence_building: "Bilde den Satz aus den Wörtern",
  },
};

/**
 * Instruction shown above the exercise. Keeps the authored instruction when
 * it is already in the interface language; otherwise falls back to a
 * localized generic instruction for the exercise type.
 */
export function localizeExerciseInstruction(
  exercise: Pick<StaticExercise, "type"> & { instruction?: string },
  interfaceLanguage: InterfaceLanguage,
): string {
  const instruction = exercise.instruction?.trim() ?? "";
  if (!instruction) {
    if (exercise.type === "error_correction") {
      return (
        ERROR_CORRECTION_FULL[interfaceLanguage] ?? ERROR_CORRECTION_FULL.en
      );
    }
    return (
      GENERIC_INSTRUCTION[interfaceLanguage]?.[exercise.type] ??
      GENERIC_INSTRUCTION.en[exercise.type]
    );
  }
  const source = detectSourceLanguage(instruction);
  if (source === interfaceLanguage) return instruction;
  if (exercise.type === "error_correction") {
    return (
      ERROR_CORRECTION_FULL[interfaceLanguage] ?? ERROR_CORRECTION_FULL.en
    );
  }
  return (
    GENERIC_INSTRUCTION[interfaceLanguage]?.[exercise.type] ??
    GENERIC_INSTRUCTION.en[exercise.type]
  );
}

/**
 * True when an exercise makes sense for the given interface language.
 * Translation items with a localized prompt stay available for en/es/de.
 */
export function isExerciseUsableForLanguage(
  exercise: Pick<
    StaticExercise,
    "question" | "answer" | "type" | "questionTranslations"
  >,
  interfaceLanguage: InterfaceLanguage,
): boolean {
  if (interfaceLanguage === "ru") return true;
  if (hasCyrillicText(exercise.answer)) return false;

  if (exercise.type === "translation") {
    if (!hasCyrillicText(exercise.question)) return true;
    const localized =
      exercise.questionTranslations?.[interfaceLanguage]?.trim() ??
      lookupTranslationPrompt(exercise.question, interfaceLanguage);
    return Boolean(localized);
  }

  return !hasCyrillicText(exercise.question);
}

/** Swap RU translation prompts for the learner's interface language. */
export function localizeTranslationQuestion(
  exercise: Pick<
    StaticExercise,
    "question" | "type" | "questionTranslations"
  >,
  interfaceLanguage: InterfaceLanguage,
): string {
  if (exercise.type !== "translation" || interfaceLanguage === "ru") {
    return exercise.question;
  }
  const inline = exercise.questionTranslations?.[interfaceLanguage]?.trim();
  if (inline) return inline;
  if (!hasCyrillicText(exercise.question)) return exercise.question;
  return (
    lookupTranslationPrompt(exercise.question, interfaceLanguage) ??
    exercise.question
  );
}

/** Filter + localize a batch of bank exercises for the interface language. */
export function prepareExercisesForInterface<T extends StaticExercise>(
  exercises: T[],
  interfaceLanguage: InterfaceLanguage,
): T[] {
  return exercises
    .filter((ex) => isExerciseUsableForLanguage(ex, interfaceLanguage))
    .map((ex) => ({
      ...ex,
      question: localizeTranslationQuestion(ex, interfaceLanguage),
      instruction: localizeExerciseInstruction(ex, interfaceLanguage),
    }));
}
