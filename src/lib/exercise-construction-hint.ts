import type { ExerciseType, InterfaceLanguage } from "@/types";

const GENERIC_INSTRUCTION =
  /^(переведите|translate|traduce|traduzca|übersetze|заполните|fill|completa|completa el|исправьте|correct|corrige|выберите|choose|elige|соберите|build|arma|используйте|use)\b/i;

const FORMULA_SIGNAL =
  /(\+|→|->|subj|condic|imperfect|pluscuam|presente|pret[eé]rito|futuro|perfecto|indicativ|gerund|infinitiv|condicional|subjuntivo|first conditional|second conditional|third conditional|si\s*\+|if\s*\+|would|will\b|have\s*\+|haber\s*\+)/i;

/**
 * True when text looks like a tense/construction formula rather than a
 * generic "translate the sentence" task label.
 */
export function looksLikeConstructionFormula(text: string): boolean {
  const t = text.trim();
  if (t.length < 6 || t.length > 120) return false;
  if (GENERIC_INSTRUCTION.test(t)) return false;
  return FORMULA_SIGNAL.test(t) || /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s+→\-/>.,:()]+$/.test(t) && /\+/.test(t);
}

export function resolveConstructionHint(input: {
  instruction?: string | null;
  explanation?: string | null;
}): string | null {
  const instruction = input.instruction?.trim() ?? "";
  const explanation = input.explanation?.trim() ?? "";

  if (instruction && looksLikeConstructionFormula(instruction)) {
    return instruction;
  }

  if (explanation && looksLikeConstructionFormula(explanation)) {
    const cleaned = explanation.replace(/[.!?]+$/u, "").trim();
    // Prefer the whole formula string — don't split on "imperf." / "subj." abbreviations.
    if (looksLikeConstructionFormula(cleaned) || FORMULA_SIGNAL.test(cleaned)) {
      return cleaned;
    }
  }

  // Pull a formula substring out of a longer explanation.
  const match = explanation.match(
    /((?:Si|If)\s*\+[^!?\n]{4,90}|[A-Za-zÁÉÍÓÚáéíóúÑñ]+\s*\+\s*[A-Za-zÁÉÍÓÚáéíóúÑñ+][^!?\n]{0,70})/,
  );
  if (match?.[1]) {
    const candidate = match[1].trim().replace(/[.!?]+$/u, "");
    if (looksLikeConstructionFormula(candidate) || FORMULA_SIGNAL.test(candidate)) {
      return candidate;
    }
  }

  return null;
}

/** Free-text items where several correct wordings are normal. */
export function shouldSoftCheckEquivalents(type: ExerciseType): boolean {
  return type === "translation" || type === "error_correction";
}

const VARIANT_NOTE: Record<InterfaceLanguage, string> = {
  ru: "Другие формулировки с той же конструкцией тоже возможны — смотрим на времена и шаблон.",
  en: "Other wordings with the same construction can also be fine — we check the tense pattern.",
  es: "Otras formulaciones con la misma construcción también valen — miramos el patrón de tiempos.",
  de: "Andere Formulierungen mit derselben Konstruktion gehen auch — wir prüfen das Zeitmuster.",
};

const CONSTRUCTION_LEAD: Record<InterfaceLanguage, string> = {
  ru: "Конструкция:",
  en: "Construction:",
  es: "Construcción:",
  de: "Konstruktion:",
};

/** Enrich bank feedback with an explicit construction formula when available. */
export function enrichFeedbackWithConstruction(input: {
  language?: InterfaceLanguage;
  correct: boolean;
  feedback: string;
  instruction?: string | null;
  explanation?: string | null;
  exerciseType?: ExerciseType;
}): string {
  const lang = input.language ?? "ru";
  const hint = resolveConstructionHint({
    instruction: input.instruction,
    explanation: input.explanation,
  });
  const parts: string[] = [input.feedback.trim()];

  if (hint && !parts[0]!.toLowerCase().includes(hint.toLowerCase())) {
    parts.push(`${CONSTRUCTION_LEAD[lang] ?? CONSTRUCTION_LEAD.en} ${hint}`);
  }

  if (
    !input.correct &&
    input.exerciseType &&
    shouldSoftCheckEquivalents(input.exerciseType)
  ) {
    const note = VARIANT_NOTE[lang] ?? VARIANT_NOTE.en;
    if (!parts.join(" ").includes(note.slice(0, 24))) {
      parts.push(note);
    }
  }

  return parts.filter(Boolean).join(" ");
}
