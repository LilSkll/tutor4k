import type { ExerciseType, InterfaceLanguage } from "@/types";

const GENERIC_INSTRUCTION =
  /^(переведите|translate|traduce|traduzca|übersetze|заполните|fill|completa|completa el|исправьте|correct|corrige|выберите|choose|elige|соберите|build|arma|используйте|use)(\s|$)/i;

const FORMULA_SIGNAL =
  /(\+|→|->|subj|condic|imperfect|pluscuam|presente|pret[eé]rito|futuro|perfecto|indicativ|gerund|infinitiv|condicional|subjuntivo|first conditional|second conditional|third conditional|si\s*\+|if\s*\+|would|will\b|have\s*\+|haber\s*\+)/i;

/** Person → conjugated form spoilers (Yo → tengo). */
const CONJUGATION_SPOILER =
  /\b(?:yo|tú|tu|él|ella|usted|nosotros|nosotras|vosotros|vosotras|ellos|ellas|ustedes)\s*→\s*\p{L}+/iu;

/** Infinitive/lemma → form spoilers that give the blank away (Hablar → hables). */
const LEMMA_FORM_SPOILER =
  /\b[A-Za-záéíóúñüÁÉÍÓÚÑÜ]{3,}\s*→\s*[A-Za-záéíóúñüÁÉÍÓÚÑÜ]{3,}(?:\s*\([^)]*\))?/;

/**
 * True when text looks like a tense/construction formula rather than a
 * generic "translate the sentence" task label.
 */
export function looksLikeConstructionFormula(text: string): boolean {
  const t = text.trim();
  if (t.length < 6 || t.length > 120) return false;
  if (GENERIC_INSTRUCTION.test(t)) return false;
  if (CONJUGATION_SPOILER.test(t)) return false;
  return FORMULA_SIGNAL.test(t) || /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s+→\-/>.,:()]+$/.test(t) && /\+/.test(t);
}

/** Strip answer-giving conjugation tips from a candidate hint. */
export function stripConjugationSpoilers(text: string): string {
  return text
    .replace(CONJUGATION_SPOILER, "")
    .replace(LEMMA_FORM_SPOILER, (m) =>
      /(presente|imperfecto|indefinido|perfecto|futuro|condicional|subjuntivo|indicativo)\s*→/i.test(
        m,
      )
        ? m
        : "",
    )
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.!?])/g, "$1")
    .trim();
}

export function resolveConstructionHint(input: {
  instruction?: string | null;
  explanation?: string | null;
  /** When set, hints that contain this form are dropped (pre-answer UI). */
  answer?: string | null;
}): string | null {
  const instruction = input.instruction?.trim() ?? "";
  const explanation = input.explanation?.trim() ?? "";
  const answer = (input.answer ?? "").trim().replace(/[¡!¿?.,]/g, "");

  const usable = (raw: string): string | null => {
    const t = stripConjugationSpoilers(raw);
    if (!t || t.length < 4) return null;
    if (CONJUGATION_SPOILER.test(t)) return null;
    if (answer.length >= 3) {
      const re = new RegExp(
        `(^|[^\\p{L}])${answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^\\p{L}]|$)`,
        "iu",
      );
      if (re.test(t)) return null;
    }
    return t;
  };

  if (instruction && looksLikeConstructionFormula(instruction)) {
    return usable(instruction);
  }
  // Compact bank instructions like "tener · presente" are good pre-answer hints.
  if (
    instruction &&
    instruction.length <= 48 &&
    !GENERIC_INSTRUCTION.test(instruction) &&
    !CONJUGATION_SPOILER.test(instruction)
  ) {
    const fromInstr = usable(instruction);
    if (fromInstr) return fromInstr;
  }

  if (explanation && looksLikeConstructionFormula(explanation)) {
    const cleaned = stripConjugationSpoilers(
      explanation.replace(/[.!?]+$/u, "").trim(),
    );
    if (cleaned && (looksLikeConstructionFormula(cleaned) || FORMULA_SIGNAL.test(cleaned))) {
      return usable(cleaned);
    }
  }

  const match = explanation.match(
    /((?:Si|If)\s*\+[^!?\n]{4,90}|[A-Za-zÁÉÍÓÚáéíóúÑñ]+\s*\+\s*[A-Za-zÁÉÍÓÚáéíóúÑñ+][^!?\n]{0,70})/,
  );
  if (match?.[1]) {
    const candidate = stripConjugationSpoilers(
      match[1].trim().replace(/[.!?]+$/u, ""),
    );
    if (
      candidate &&
      (looksLikeConstructionFormula(candidate) || FORMULA_SIGNAL.test(candidate))
    ) {
      return usable(candidate);
    }
  }

  return null;
}

/** Free-text items where several correct wordings are normal. */
export function shouldSoftCheckEquivalents(type: ExerciseType): boolean {
  return type === "translation" || type === "error_correction";
}

const VARIANT_NOTE: Record<InterfaceLanguage, string> = {
  ru: "Синонимичные связки с тем же смыслом тоже засчитываются.",
  en: "Synonym linkers with the same meaning also count.",
  es: "Los conectores sinónimos con el mismo sentido también cuentan.",
  de: "Synonyme Konnektoren mit derselben Bedeutung zählen auch.",
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
  answer?: string | null;
}): string {
  const lang = input.language ?? "ru";
  const hint = resolveConstructionHint({
    instruction: input.instruction,
    explanation: input.explanation,
    answer: input.correct ? null : input.answer,
  });
  const parts: string[] = [input.feedback.trim()];

  if (hint && !parts[0]!.toLowerCase().includes(hint.toLowerCase())) {
    parts.push(`${CONSTRUCTION_LEAD[lang] ?? CONSTRUCTION_LEAD.en} ${hint}`);
  }

  if (
    input.correct &&
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
