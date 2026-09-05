import type { ExerciseType, InterfaceLanguage } from "@/types";
import { enrichFeedbackWithConstruction } from "@/lib/exercise-construction-hint";

const CYRILLIC = /[\u0400-\u04FF]/;

const PRAISE: Record<InterfaceLanguage, string[]> = {
  ru: [
    "Отлично!",
    "Молодец!",
    "Супер, так держать!",
    "Верно — красиво!",
    "Да, именно так!",
  ],
  en: [
    "Excellent!",
    "Well done!",
    "Nice work!",
    "That's right!",
    "Great job!",
  ],
  es: [
    "¡Excelente!",
    "¡Muy bien!",
    "¡Así se hace!",
    "¡Correcto!",
    "¡Buen trabajo!",
  ],
  de: [
    "Ausgezeichnet!",
    "Gut gemacht!",
    "Sehr schön!",
    "Richtig!",
    "Toll!",
  ],
};

const MISTAKE_INTRO: Record<InterfaceLanguage, string[]> = {
  ru: [
    "Почти — вот где ошибка.",
    "Не совсем. Смотри внимательно:",
    "Давай разберём ошибку:",
    "Хорошая попытка, но есть нюанс:",
  ],
  en: [
    "Almost — here's the issue.",
    "Not quite. Take a look:",
    "Let's fix this together:",
    "Good try, but there's a nuance:",
  ],
  es: [
    "Casi — aquí está el error.",
    "No del todo. Mira con atención:",
    "Vamos a corregirlo:",
    "Buen intento, pero hay un matiz:",
  ],
  de: [
    "Fast — hier liegt der Fehler.",
    "Nicht ganz. Schau genau hin:",
    "Lass uns das korrigieren:",
    "Guter Versuch, aber es gibt eine Nuance:",
  ],
};

const EXPLANATION_FALLBACK: Record<InterfaceLanguage, string> = {
  ru: "Сравни с правильным ответом выше.",
  en: "Compare with the correct answer above.",
  es: "Compara con la respuesta correcta de arriba.",
  de: "Vergleiche mit der richtigen Antwort oben.",
};

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)] ?? arr[0];
}

/**
 * Bank explanations are often authored in Russian (with target-language forms).
 * For non-RU UI: keep short construction formulas; drop foreign prose.
 */
export function localizeBankExplanation(
  explanation: string,
  language: InterfaceLanguage,
): string {
  const trimmed = explanation.trim();
  if (!trimmed) {
    return EXPLANATION_FALLBACK[language] ?? EXPLANATION_FALLBACK.en;
  }
  if (language === "ru") return trimmed;

  // Strip Cyrillic commentary; keep Latin forms / formulas when useful.
  let kept = trimmed;
  if (CYRILLIC.test(trimmed)) {
    kept = trimmed
      .split(/(?<=[.!?…])\s+/)
      .map((s) => s.trim())
      .filter((s) => s && !CYRILLIC.test(s))
      .join(" ")
      .trim();
    if (!kept) {
      kept = trimmed
        .replace(/[\u0400-\u04FF]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
  }

  if (!kept || kept.length < 4) {
    return EXPLANATION_FALLBACK[language] ?? EXPLANATION_FALLBACK.en;
  }

  // Long Spanish prose on a non-Spanish UI is confusing — keep only short formulas.
  const looksSpanishProse =
    /\b(el|la|los|las|que|como|está|están|para|por|también|siempre|nunca)\b/i.test(
      kept,
    ) && kept.split(/\s+/).length >= 8;
  if (language !== "es" && looksSpanishProse && !/[→+]/.test(kept)) {
    return EXPLANATION_FALLBACK[language] ?? EXPLANATION_FALLBACK.en;
  }

  // Long English prose on a non-English UI — same rule.
  const looksEnglishProse =
    /\b(the|and|with|that|this|have|has|was|were|from|into)\b/i.test(kept) &&
    kept.split(/\s+/).length >= 10 &&
    !/[→+]/.test(kept);
  if (language !== "en" && looksEnglishProse) {
    return EXPLANATION_FALLBACK[language] ?? EXPLANATION_FALLBACK.en;
  }

  return kept;
}

/**
 * Tutor-style framing around bank explanations (no AI generation of items).
 * For free-text items, appends the construction formula and a short note that
 * equivalent wordings with the same tense pattern can also be acceptable.
 */
export function formatBankTutorFeedback(input: {
  language?: InterfaceLanguage;
  correct: boolean;
  explanation: string;
  instruction?: string | null;
  exerciseType?: ExerciseType;
}): string {
  const lang = input.language ?? "ru";
  const explanation = localizeBankExplanation(input.explanation, lang);
  const instruction = localizeBankExplanation(input.instruction ?? "", lang);
  const base = input.correct
    ? `${pick(PRAISE[lang] ?? PRAISE.ru)} ${explanation}`
    : `${pick(MISTAKE_INTRO[lang] ?? MISTAKE_INTRO.ru)} ${explanation}`;

  return enrichFeedbackWithConstruction({
    language: lang,
    correct: input.correct,
    feedback: base,
    instruction: instruction === (EXPLANATION_FALLBACK[lang] ?? "") ? null : instruction || null,
    explanation,
    exerciseType: input.exerciseType,
  });
}

/** Short session wrap-up after a round of N bank exercises. */
export function formatSessionTutorSummary(input: {
  language?: InterfaceLanguage;
  correctCount: number;
  total: number;
  mistakes: {
    question: string;
    userAnswer: string;
    correctAnswer: string;
    explanation: string;
  }[];
}): string {
  const lang = input.language ?? "ru";
  const { correctCount, total, mistakes } = input;
  const lines: string[] = [];

  if (lang === "en") {
    if (correctCount === total) {
      lines.push(
        `Perfect round — ${correctCount}/${total} correct. Keep this pace!`,
      );
    } else if (correctCount >= Math.ceil(total * 0.6)) {
      lines.push(
        `Solid work: ${correctCount}/${total} correct. Here's what to review:`,
      );
    } else {
      lines.push(
        `You got ${correctCount}/${total}. Let's tighten these points:`,
      );
    }
  } else if (lang === "es") {
    if (correctCount === total) {
      lines.push(`¡Ronda perfecta — ${correctCount}/${total}! Sigue así.`);
    } else if (correctCount >= Math.ceil(total * 0.6)) {
      lines.push(`Buen trabajo: ${correctCount}/${total}. Repasa esto:`);
    } else {
      lines.push(`Has acertado ${correctCount}/${total}. Reforcemos:`);
    }
  } else if (lang === "de") {
    if (correctCount === total) {
      lines.push(`Perfekte Runde — ${correctCount}/${total}. Weiter so!`);
    } else if (correctCount >= Math.ceil(total * 0.6)) {
      lines.push(
        `Gute Arbeit: ${correctCount}/${total}. Bitte nochmals ansehen:`,
      );
    } else {
      lines.push(
        `${correctCount}/${total} richtig. Lass uns das festigen:`,
      );
    }
  } else if (correctCount === total) {
    lines.push(`Идеальный раунд — ${correctCount}/${total}! Так держать.`);
  } else if (correctCount >= Math.ceil(total * 0.6)) {
    lines.push(`Хорошая работа: ${correctCount}/${total}. Разберём ошибки:`);
  } else {
    lines.push(`Верно ${correctCount}/${total}. Давай закрепим слабые места:`);
  }

  for (const m of mistakes.slice(0, 5)) {
    const expl = localizeBankExplanation(m.explanation, lang);
    lines.push(`• «${m.question}» → ${m.correctAnswer}. ${expl}`);
  }

  return lines.join("\n");
}
