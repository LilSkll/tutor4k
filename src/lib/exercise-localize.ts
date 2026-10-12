import type { ExerciseType, InterfaceLanguage, StaticExercise } from "@/types";
import { lookupTranslationPrompt } from "@/config/exercise-translation-prompts";
import { isGrammarCategoryInstruction } from "@/lib/exercise-quality";
import { localizeBankExplanation } from "@/lib/tutor-feedback";

// =====================================================================
// Interface-language handling for the static exercise bank.
// Bank TR stems are often authored in Russian. When the UI language is not
// Russian we (a) swap instructions to localized generics / keys, (b) replace
// Cyrillic TR prompts with EN/ES/DE L1 (never spoil the target answer), and
// (c) drop items that still cannot be shown without Russian.
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
  return s
    .replace(/[¿?¡!.,;:'"«»„""''`´…]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/**
 * L1 meaning for sentence-building without revealing tile order.
 * Uses questionTranslations already attached to the exercise.
 */
export function getSentenceBuildingMeaning(
  exercise: Pick<
    StaticExercise,
    "question" | "answer" | "type" | "questionTranslations"
  >,
  interfaceLanguage: InterfaceLanguage,
): string | null {
  if (exercise.type !== "sentence_building") return null;
  const gloss = exercise.questionTranslations?.[interfaceLanguage]?.trim() ?? "";
  if (!gloss) return null;
  const glossNorm = normalizeForCompare(gloss);
  if (!glossNorm) return null;
  if (glossNorm === normalizeForCompare(exercise.answer ?? "")) return null;
  const promptNorm = normalizeForCompare(
    (exercise.question ?? "").replace(/\s*\/\s*/g, " "),
  );
  if (promptNorm && glossNorm === promptNorm) return null;
  return gloss;
}

const SOURCE_LABEL: Record<
  "ru" | "es" | "de",
  Record<InterfaceLanguage, string>
> = {
  ru: {
    ru: "Источник: русский",
    en: "Source: Russian",
    es: "Origen: ruso",
    de: "Quelle: Russisch",
  },
  es: {
    ru: "Источник: испанский",
    en: "Source: Spanish",
    es: "Origen: español",
    de: "Quelle: Spanisch",
  },
  de: {
    ru: "Источник: немецкий",
    en: "Source: German",
    es: "Origen: alemán",
    de: "Quelle: Deutsch",
  },
};

function detectPromptSourceLang(
  prompt: string,
): "ru" | "es" | "de" | "en" | null {
  if (!prompt.trim()) return null;
  if (hasCyrillicText(prompt)) return "ru";
  if (/[äöüß]/i.test(prompt)) return "de";
  if (/[áéíóúüñ¿¡]/i.test(prompt)) return "es";
  // Unaccented Spanish still common as EN-course L1 (e.g. "Soy estudiante").
  if (
    /\b(el|la|los|las|un|una|unos|unas|es|está|estan|están|soy|eres|somos|tengo|tiene|hay|que|por|para|con|sin|muy|también|tambien)\b/i.test(
      prompt,
    )
  ) {
    return "es";
  }
  return "en";
}

/**
 * When the TR stem language differs from the UI (e.g. English course keeps a
 * Spanish L1 for EN UI so the English answer is not spoiled), label the source.
 */
export function getTranslationSourceLabel(
  exercise: Pick<StaticExercise, "question" | "type">,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string | null,
): string | null {
  if (exercise.type !== "translation") return null;
  if (courseId !== "english") return null;
  const source = detectPromptSourceLang(exercise.question ?? "");
  if (!source || source === "en") return null;
  if (source === interfaceLanguage) return null;
  return SOURCE_LABEL[source]?.[interfaceLanguage] ?? null;
}

/** Render "question (gloss)" when a gloss exists. */
export function formatQuestionWithGloss(
  exercise: Pick<
    StaticExercise,
    "question" | "answer" | "type" | "questionTranslations"
  >,
  interfaceLanguage: InterfaceLanguage,
): { question: string; gloss: string | null } {
  // Slash-separated token prompts leak the correct word order for tile exercises.
  // Still surface an L1 meaning when available so the task is not a blind puzzle.
  if (exercise.type === "sentence_building") {
    return {
      question: "",
      gloss: getSentenceBuildingMeaning(exercise, interfaceLanguage),
    };
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

const REPORTED_SPEECH_FULL: Record<InterfaceLanguage, string> = {
  ru: "Перепишите прямую речь в косвенную",
  en: "Rewrite the direct quote as reported speech",
  es: "Pasa el estilo directo al estilo indirecto",
  de: "Schreibe die direkte Rede in die indirekte Rede um",
};

/** Semantic instruction keys — keep pedagogy across UI languages. */
const INSTRUCTION_BY_KEY: Record<
  string,
  Record<InterfaceLanguage, string>
> = {
  reported_speech: REPORTED_SPEECH_FULL,
  por_para: {
    ru: "Выберите por или para",
    en: "Choose por or para",
    es: "Elige por o para",
    de: "Wähle por oder para",
  },
  ser_estar: {
    ru: "Выберите ser или estar",
    en: "Choose ser or estar",
    es: "Elige ser o estar",
    de: "Wähle ser oder estar",
  },
  pret_imp: {
    ru: "Выберите pretérito или imperfecto",
    en: "Choose pretérito or imperfecto",
    es: "Elige pretérito o imperfecto",
    de: "Wähle Pretérito oder Imperfecto",
  },
  subjunctive_trigger: {
    ru: "Поставьте глагол в нужное наклонение",
    en: "Put the verb in the correct mood",
    es: "Pon el verbo en el modo correcto",
    de: "Setze das Verb in den richtigen Modus",
  },
  translate_to_es: {
    ru: "Переведите на испанский",
    en: "Translate into Spanish",
    es: "Traduce al español",
    de: "Übersetze ins Spanische",
  },
  translate_to_en: {
    ru: "Переведите на английский",
    en: "Translate into English",
    es: "Traduce al inglés",
    de: "Übersetze ins Englische",
  },
  translate: {
    ru: "Переведите предложение",
    en: "Translate the sentence",
    es: "Traduce la frase",
    de: "Übersetze den Satz",
  },
  build_sentence: {
    ru: "Соберите предложение из слов ниже (не перевод и не ввод с клавиатуры)",
    en: "Build the sentence from the word tiles below (do not translate or type)",
    es: "Ordena las palabras de abajo (no traduzcas ni escribas)",
    de: "Baue den Satz aus den Wörtern unten (nicht übersetzen, nicht tippen)",
  },
  fill_conjugation: {
    ru: "Поставьте глагол в правильную форму",
    en: "Put the verb in the correct form",
    es: "Pon el verbo en la forma correcta",
    de: "Setze das Verb in die richtige Form",
  },
  choose_option: {
    ru: "Выберите один правильный вариант из списка",
    en: "Choose the correct option",
    es: "Elige la opción correcta",
    de: "Wähle die richtige Option",
  },
};

/** Map common RU authored instructions → instructionKey. */
function inferInstructionKey(instruction: string): string | null {
  const s = instruction.toLowerCase();
  if (
    /косвенн|estilo indirecto|pregunta indirecta|reported speech|reported question|прямую речь|backshift/.test(
      s,
    )
  ) {
    return "reported_speech";
  }
  if (/\bpor\b.*\bpara\b|\bpara\b.*\bpor\b/.test(s)) return "por_para";
  if (/\bser\b.*\bestar\b|\bestar\b.*\bser\b/.test(s)) return "ser_estar";
  // Contrast drills only — do not map plain "indefinido" / translate prompts here.
  if (
    /(pretérito|preterito|indefinido)/.test(s) &&
    /imperfecto/.test(s) &&
    /или|or|\/|\bvs\b/.test(s)
  ) {
    return "pret_imp";
  }
  if (/составьте|соберите|build|forma una|ordena|bilde/.test(s)) {
    return "build_sentence";
  }
  // Language-specific translate — never assume Spanish for every "переведите".
  if (
    /на испанск|into spanish|al español|ins spanische|to spanish/.test(s)
  ) {
    return "translate_to_es";
  }
  if (
    /на английск|into english|al inglés|ins englische|to english/.test(s)
  ) {
    return "translate_to_en";
  }
  if (/перевед|traduc|übersetz|translate/.test(s)) return "translate";
  if (
    /поставьте\b|conjugate|conjug|forma correcta|правильную форму|правильная форма/.test(
      s,
    )
  ) {
    return "fill_conjugation";
  }
  if (/сослагательн|subjuntiv|наклонен/.test(s)) return "subjunctive_trigger";
  return null;
}

const GENERIC_INSTRUCTION: Record<
  InterfaceLanguage,
  Record<ExerciseType, string>
> = {
  ru: {
    multiple_choice: "Выберите один правильный вариант из списка",
    fill_blank: "Впишите одно пропущенное слово или форму глагола",
    translation: "Переведите фразу на целевой язык в поле ввода",
    error_correction: "Найдите ошибку и напишите исправленное предложение целиком",
    sentence_building:
      "Соберите фразу, нажимая слова ниже по порядку — не переводите и не печатайте",
  },
  en: {
    multiple_choice: "Choose one correct option from the list",
    fill_blank: "Type the single missing word or verb form",
    translation: "Translate the phrase into the target language in the input",
    error_correction: "Find the mistake and write the full corrected sentence",
    sentence_building:
      "Tap the words below in order to build the phrase — do not translate or type",
  },
  es: {
    multiple_choice: "Elige una sola opción correcta de la lista",
    fill_blank: "Escribe la única palabra o forma verbal que falta",
    translation: "Traduce la frase al idioma objetivo en el campo de texto",
    error_correction: "Encuentra el error y escribe la oración corregida completa",
    sentence_building:
      "Toca las palabras abajo en orden para armar la frase — no traduzcas ni escribas",
  },
  de: {
    multiple_choice: "Wähle eine richtige Option aus der Liste",
    fill_blank: "Schreibe das eine fehlende Wort oder die Verbform",
    translation: "Übersetze die Phrase in die Zielsprache im Eingabefeld",
    error_correction: "Finde den Fehler und schreibe den ganzen korrigierten Satz",
    sentence_building:
      "Tippe die Wörter unten der Reihe nach an — nicht übersetzen und nicht tippen",
  },
};

/**
 * Direct quote → reported speech rewrite, wrongly stored as error_correction
 * in some packs. Not a grammar-error hunt.
 */
export function isReportedSpeechRewrite(
  exercise: Pick<
    StaticExercise,
    "type" | "question" | "answer" | "rewriteMode"
  >,
): boolean {
  if (exercise.rewriteMode === "reported_speech") return true;
  if (exercise.rewriteMode === "grammar_fix") return false;
  if (exercise.type !== "error_correction") return false;
  const q = exercise.question?.trim() ?? "";
  const a = exercise.answer?.trim() ?? "";
  if (!q || !a) return false;
  const hasQuote =
    /:\s*[«"“']/.test(q) || /[«"“][^»"”']+[»"”']/.test(q);
  if (!hasQuote) return false;
  // Spanish reported speech
  if (
    /\bque\b/i.test(a) ||
    /\b(dónde|como|cómo|qué|quién|cuándo|si)\b/i.test(a)
  ) {
    return true;
  }
  // English reported speech / reported questions
  return (
    /\b(said|told|asked|replied|answered|explained)\b/i.test(a) &&
    (/\bthat\b/i.test(a) ||
      /\b(if|whether|where|what|who|when|why|how)\b/i.test(a) ||
      /\b(she|he|they|I|we|you)\b.+\b(was|were|had|would|could|might)\b/i.test(
        a,
      ))
  );
}

/**
 * Instruction shown above the exercise. Keeps the authored instruction when
 * it is already in the interface language; otherwise falls back to a
 * localized generic instruction for the exercise type.
 *
 * Grammar-category tags (“Взаимное se”, “Se reflexivo”, “Perfecto — ya”)
 * spoil the answer — always replace those with a generic prompt.
 */
export function localizeExerciseInstruction(
  exercise: Pick<
    StaticExercise,
    "type" | "question" | "answer" | "rewriteMode"
  > & {
    instruction?: string;
    instructionKey?: string;
  },
  interfaceLanguage: InterfaceLanguage,
): string {
  if (isReportedSpeechRewrite(exercise)) {
    return (
      REPORTED_SPEECH_FULL[interfaceLanguage] ?? REPORTED_SPEECH_FULL.en
    );
  }

  const key =
    exercise.instructionKey?.trim() ||
    inferInstructionKey(exercise.instruction?.trim() ?? "");
  if (key && INSTRUCTION_BY_KEY[key]) {
    return (
      INSTRUCTION_BY_KEY[key][interfaceLanguage] ??
      INSTRUCTION_BY_KEY[key].en
    );
  }

  const instruction = exercise.instruction?.trim() ?? "";
  const fallback = (): string => {
    if (exercise.type === "error_correction") {
      return (
        ERROR_CORRECTION_FULL[interfaceLanguage] ?? ERROR_CORRECTION_FULL.en
      );
    }
    return (
      GENERIC_INSTRUCTION[interfaceLanguage]?.[exercise.type] ??
      GENERIC_INSTRUCTION.en[exercise.type]
    );
  };

  if (!instruction || isGrammarCategoryInstruction(instruction)) {
    return fallback();
  }
  const source = detectSourceLanguage(instruction);
  if (source === interfaceLanguage) return instruction;
  return fallback();
}

/**
 * Safe non-Cyrillic L1 for a RU-authored translation stem.
 * Never returns a prompt that equals the target answer (spoiler).
 */
function resolveNonCyrillicTranslationPrompt(
  exercise: Pick<
    StaticExercise,
    "question" | "answer" | "questionTranslations"
  >,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string | null,
): string | null {
  const answer = exercise.answer ?? "";
  const isSpoiler = (candidate: string) =>
    normalizeForCompare(candidate) === normalizeForCompare(answer);

  const tryLang = (lang: Exclude<InterfaceLanguage, "ru">): string | null => {
    const inline = exercise.questionTranslations?.[lang]?.trim();
    if (inline && !hasCyrillicText(inline) && !isSpoiler(inline)) return inline;
    const mapped = lookupTranslationPrompt(
      exercise.question,
      lang,
      courseId === "english" ? answer : null,
    );
    if (mapped && !hasCyrillicText(mapped) && !isSpoiler(mapped)) return mapped;
    return null;
  };

  // Preferred UI language first.
  if (interfaceLanguage !== "ru") {
    const preferred = tryLang(interfaceLanguage);
    if (preferred) return preferred;
  }

  // English course + EN UI: EN L1 spoils the English answer → use ES, then DE.
  if (courseId === "english" && interfaceLanguage === "en") {
    return tryLang("es") ?? tryLang("de");
  }

  // Spanish course + ES UI: Spanish L1 often equals the Spanish answer → EN, then DE.
  if (courseId === "spanish" && interfaceLanguage === "es") {
    return tryLang("en") ?? tryLang("de");
  }

  // Other mismatches: try remaining L1s so we never serve Cyrillic to non-RU UI.
  for (const lang of ["en", "es", "de"] as const) {
    if (lang === interfaceLanguage) continue;
    const alt = tryLang(lang);
    if (alt) return alt;
  }
  return null;
}

/**
 * True when an exercise makes sense for the given interface language.
 * Non-RU UI never receives Cyrillic questions/answers — TR items need a
 * localized L1 prompt (ES/DE/EN map), otherwise they are dropped.
 */
export function isExerciseUsableForLanguage(
  exercise: Pick<
    StaticExercise,
    "question" | "answer" | "type" | "questionTranslations"
  >,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string | null,
): boolean {
  if (interfaceLanguage === "ru") return true;
  if (hasCyrillicText(exercise.answer)) return false;

  if (exercise.type === "translation") {
    if (!hasCyrillicText(exercise.question)) return true;
    return (
      resolveNonCyrillicTranslationPrompt(
        exercise,
        interfaceLanguage,
        courseId,
      ) != null
    );
  }

  return !hasCyrillicText(exercise.question);
}

/** Swap RU translation prompts for the learner's interface language. */
export function localizeTranslationQuestion(
  exercise: Pick<
    StaticExercise,
    "question" | "answer" | "type" | "questionTranslations"
  >,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string | null,
): string {
  if (exercise.type !== "translation" || interfaceLanguage === "ru") {
    return exercise.question;
  }
  if (!hasCyrillicText(exercise.question)) return exercise.question;

  const resolved = resolveNonCyrillicTranslationPrompt(
    exercise,
    interfaceLanguage,
    courseId,
  );
  // Callers filter unusable items; keep original only as a last resort.
  return resolved ?? exercise.question;
}

/** Filter + localize a batch of bank exercises for the interface language. */
export function prepareExercisesForInterface<T extends StaticExercise>(
  exercises: T[],
  interfaceLanguage: InterfaceLanguage,
  courseId?: string | null,
): T[] {
  return exercises
    .filter((ex) =>
      isExerciseUsableForLanguage(ex, interfaceLanguage, courseId),
    )
    .map((ex) => ({
      ...ex,
      question: localizeTranslationQuestion(ex, interfaceLanguage, courseId),
      instruction: localizeExerciseInstruction(ex, interfaceLanguage),
      explanation: localizeBankExplanation(ex.explanation, interfaceLanguage),
    }));
}
