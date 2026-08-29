/**
 * Quality gates for bank exercises — reject synthetic pack-generator garbage.
 */

const CYRILLIC = /[\u0400-\u04FF]/;
const INDEX_MARK = /\[\d+\]/;
const HASH_N = /#\d+/;
const COMPLETA_STUB =
  /^(Completa|Complete)\s*\([^)]*\)(\s*#\d+)?\s*:/i;
const FAKE_X = /\b[A-Za-záéíóúñüÁÉÍÓÚÑÜ]{1,16}x\b/i;
const KNOWN_X_WORDS = new Set([
  "box",
  "fax",
  "tax",
  "mix",
  "six",
  "fix",
  "flux",
  "crux",
  "lynx",
  "onyx",
]);

function stripNoise(s: string): string {
  return s
    .replace(/\[\d+\]/g, "")
    .replace(/[¿?¡!.,;:'"«»„""''`´…()]/g, "")
    .replace(/[-–—_/\\|→]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function hasFakeXToken(s: string): boolean {
  const m = s.match(FAKE_X);
  if (!m) return false;
  return !KNOWN_X_WORDS.has(m[0].toLowerCase());
}

function isTokenDump(q: string): boolean {
  return (q.match(/ \/? /g) ?? []).length >= 2;
}

export type BankExerciseLike = {
  type?: string;
  question?: string;
  answer?: string;
  options?: string[];
};

/** True when question/answer look like a real error-correction item. */
export function isUsableErrorCorrection(ex: {
  question?: string;
  answer?: string;
}): boolean {
  const q = (ex.question ?? "").trim();
  const a = (ex.answer ?? "").trim();
  if (q.length < 4 || a.length < 4) return false;
  if (CYRILLIC.test(q) || CYRILLIC.test(a)) return false;
  if (INDEX_MARK.test(q) || INDEX_MARK.test(a)) return false;
  if (HASH_N.test(q) || HASH_N.test(a)) return false;
  if (COMPLETA_STUB.test(q) || COMPLETA_STUB.test(a)) return false;
  if (hasFakeXToken(q) || hasFakeXToken(a)) return false;
  if (isTokenDump(q)) return false;
  if (/\?\?/.test(q) || /\?\?/.test(a)) return false;
  if (stripNoise(q) === stripNoise(a)) return false;
  if (q.includes("→")) {
    const qAfter = q.split("→").pop()?.trim() ?? "";
    const aAfter = a.includes("→")
      ? (a.split("→").pop()?.trim() ?? "")
      : a;
    if (!qAfter || stripNoise(qAfter) === stripNoise(aAfter || a)) return false;
  }
  return true;
}

const GRAMMAR_LABEL_PROMPT =
  /^(Ser(\s*\/\s*Estar)?|Estar|Imperativo|Subjuntivo|Perfecto|Pluscuamperfecto|Condicional|Futuro|Indicativo|Presente|Pasiva|Pasivo|Relativ|Cuyo|OD|OI|CD|CI|Se(\s|$)|Perífrasis|Estilo indirecto|Modal|Venir|Ojalá|Hacerse|Seguir|Estar por|Deber|Исправьте|Выберите|Заполните)\b/i;

const SECTION_HEADER_PROMPT =
  /^(Возвратное|Безличное|Взаимное|Пассивн|Indicativo|Subjuntivo|Perfecto|Imperfecto|Condicional|Futuro|Ser\s*\/\s*Estar|Se reflexivo|Se impersonal|Se pasivo|Se accidental|Se prohibición)/i;

/** True when instruction is a grammar tag that spoils what to write. */
export function isGrammarCategoryInstruction(instruction: string): boolean {
  const inst = instruction.trim();
  if (!inst) return false;
  // Real learner prompts — keep them.
  if (
    /^(Выберите|Заполните|Вставьте|Переведите|Исправьте|Найдите|Составьте|Choose|Fill|Complete|Translate|Rewrite|Find|Build|Elige|Completa|Traduce|Reescribe|Ordena|Wähle|Fülle|Übersetze|Finde|Bilde)\b/i.test(
      inst,
    )
  ) {
    // “Переведите с donde / se pasiva” still spoils the construction.
    if (/^переведите с\b/i.test(inst)) return true;
    return false;
  }
  if (/относительн|притяжательн/i.test(inst) && inst.length <= 40) return true;
  if (/^[A-Za-záéíóúñüÁÉÍÓÚÑÜ]+\s*\/\s*[A-Za-záéíóúñüÁÉÍÓÚÑÜ]+/i.test(inst) && inst.length <= 28) {
    return true;
  }
  if (SECTION_HEADER_PROMPT.test(inst)) return true;
  if (
    /^(Возвратное|Взаимное|Безличное|Пассивн)\b/i.test(inst)
  ) {
    return true;
  }
  if (
    /^(Perfecto|Imperfecto|Pluscuamperfecto|Condicional|Futuro|Subjuntivo|Indicativo|Presente|Pasiva|Pasivo|Imperativo|Se|Ser(\s*\/\s*Estar)?|Estar|Hacerse|Relativ|Cuyo|OD|OI|CD|CI|Irreal|Demasiado|Quizás|Muy|Mucho|Adverbio)\b/i.test(
      inst,
    ) &&
    inst.length <= 48
  ) {
    return true;
  }
  // Formula tags: "Demasiado + adj.", "Quizás + subj."
  if (/\+\s*(adj|adv|verb|noun|subj|n|v|inf|ger|pp)\b\.?/i.test(inst) && inst.length <= 40) {
    return true;
  }
  // English curriculum/pack grammar tags (spoil the construction).
  if (
    inst.length <= 56 &&
    /^(Zero article|Backshift|No backshift|Tense backshift|Reported question|Tell \+|Saxon genitive|Past simple|Present (simple|perfect|continuous)|Countable|Uncountable|Quantifier|Relative|Passive|Modal|Conditional|Register|Opening|Sign-off|Overview|Thesis|Trend|Comparison|Cohesion|Informal|Formal|Semi-formal|Have something done|Participio|Its vs|Day's|Parents'|Just \+|PP vs|Yet |Ever |Already |Who |Whose|Where relative|Must |Might |Can't )/i.test(
      inst,
    )
  ) {
    return true;
  }
  // Short "Label — detail" tags: "Past simple — go", "Countable noun"
  if (inst.length <= 48 && /^[A-Za-z][\w'’+\s/]{0,30}\s+[—–-]\s+\S/.test(inst)) {
    return true;
  }
  if (
    inst.length <= 40 &&
    /^(Countable|Uncountable|Zero article|Articles?|Possessives?|Quantifiers?|Modals?|Passives?|Conditionals?)\b/i.test(
      inst,
    ) &&
    !/\b(choose|fill|complete|translate|rewrite|build|find)\b/i.test(inst)
  ) {
    return true;
  }
  // Remaining short English curriculum tags (IELTS labels, grammar names)
  // that are not real learner prompts. Keep Cyrillic/Spanish prompts alone —
  // they are handled above or by language-specific rules.
  if (
    inst.length <= 42 &&
    !/[.?!¿¡]/.test(inst) &&
    !CYRILLIC.test(inst) &&
    !/^(Choose|Fill|Complete|Translate|Rewrite|Find|Build|Fix|Add|Put|Elige|Completa|Traduce|Reescribe|Ordena|Wähle|Fülle|Übersetze|Finde|Bilde|Forma|Pon|Escribe|Corrige|Marca|Señala|Indica|Haz|Lee|Pasa)\b/i.test(
      inst,
    ) &&
    !/\b(choose|fill|complete|translate|rewrite|find|build|fix|add|put|correct|select|write|use|frase|verbo|opción|hueco|palabra|estilo|indirecto|directo)\b/i.test(
      inst,
    ) &&
    /^[A-Za-z]/.test(inst)
  ) {
    return true;
  }
  return false;
}

function instructionSpoilsAnswer(instruction: string, answer: string): boolean {
  const a = answer.trim();
  if (a.length < 2 || a.length > 14) return false;
  if (/\s/.test(a)) return false;
  const escaped = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(^|[^\\p{L}])${escaped}([^\\p{L}]|$)`, "iu");
  return re.test(instruction);
}

/** Cyrillic letter stuck to Latin (Габrielем / Барcelona). */
export function hasScriptMixedToken(text: string): boolean {
  return /[\u0400-\u04FF][A-Za-záéíóúñüÁÉÍÓÚÑÜ]|[A-Za-záéíóúñüÁÉÍÓÚÑÜ][\u0400-\u04FF]/.test(
    text,
  );
}

/**
 * Spanish closed-class / content leaked into a Cyrillic L1 translation prompt
 * (e.g. «То, что сказал el profesor, es importante.»).
 */
const SPANISH_LEAK_IN_CYRILLIC =
  /\b(el|la|los|las|un|una|unos|unas|es|son|está|están|fue|fueron|dijo|dijeron|profesor|profesora|hay|también|muy|más|para|por|con|sin|del|al|me|te|se|lo|la|le|nos|os|les|yo|tú|él|ella|nosotros|vosotros|ellos|ellas|si|sí|no|ya|esto|esta|este|aquí|allí)\b/iu;

/** Grammar jargon often kept in Latin inside Russian meta prompts (not sentences). */
const LATIN_GRAMMAR_JARGON =
  /^(pretérito|perfecto|imperfecto|indefinido|subjuntivo|condicional|presente|participio|infinitivo|gerundio|futuro|conjetura|imperativo|indicativo|pluscuamperfecto|compuesto|simple|reflexivo|relativo|conectores?|hendida|leísmo|loísmo|dele|ielts)$/i;

/**
 * True when a would-be L1 prompt mixes Cyrillic with Spanish wording.
 */
export function hasMixedLanguageTranslationPrompt(question: string): boolean {
  const q = question.trim();
  if (!q || !CYRILLIC.test(q)) return false;
  if (hasScriptMixedToken(q)) return true;
  if (SPANISH_LEAK_IN_CYRILLIC.test(q)) return true;
  // Latin content words (≥5) that are not grammar jargon — e.g. alentadores.
  const latinWords = q.match(/[A-Za-záéíóúñüÁÉÍÓÚÑÜ]{5,}/g) ?? [];
  if (latinWords.some((w) => !LATIN_GRAMMAR_JARGON.test(w))) return true;
  return false;
}

/** True when translation prompt/answer look usable. */
export function isUsableTranslation(ex: {
  question?: string;
  answer?: string;
}): boolean {
  const q = (ex.question ?? "").trim();
  const a = (ex.answer ?? "").trim();
  if (q.length < 2 || a.length < 2) return false;
  if (INDEX_MARK.test(q) || INDEX_MARK.test(a)) return false;
  if (HASH_N.test(q) || HASH_N.test(a)) return false;
  if (COMPLETA_STUB.test(q) || COMPLETA_STUB.test(a)) return false;
  if (hasFakeXToken(a)) return false;
  if (CYRILLIC.test(a)) return false;
  if (SECTION_HEADER_PROMPT.test(q) || GRAMMAR_LABEL_PROMPT.test(q)) return false;
  if (isGrammarCategoryInstruction(q)) return false;
  // Pack generator leaks SB/EC instructions as "translation" prompts.
  if (isMetaOrFormulaPrompt(q)) return false;
  // Hybrid RU+ES source sentences confuse learners and grading.
  if (hasMixedLanguageTranslationPrompt(q)) return false;
  // Grammar-tag dumps used as “prompts” (2–3 words, no real sentence)
  const words = q.split(/\s+/).filter(Boolean);
  // Ignore abbreviation dots (adj. / subj.) when judging "has sentence punctuation"
  const qNoAbbrev = q.replace(/\b[a-záéíóúñü]{1,6}\./gi, "");
  if (CYRILLIC.test(q)) {
    const looksLikeSentence =
      /[.?!…,]/.test(qNoAbbrev) || words.length >= 4;
    if (!looksLikeSentence) return false;
    // UI/meta imperatives are not source sentences to translate.
    if (
      /^(Соберите|Составьте|Выберите|Заполните|Вставьте|Исправьте|Найдите|Переведите)(\s|$)/i.test(
        q,
      )
    ) {
      return false;
    }
  } else {
    const looksLikeSentence =
      /[.?!¿¡]/.test(qNoAbbrev) || words.length >= 5;
    if (!looksLikeSentence) return false;
    if (
      /^(Choose|Fill|Complete|Translate|Rewrite|Find|Build|Fix|Elige|Completa|Traduce|Reescribe|Ordena)\b/i.test(
        q,
      )
    ) {
      return false;
    }
  }
  // Tiny pronoun-only "translations"
  if (a.length <= 3 && /^(se|lo|la|le|me|te|nos|os|que)$/i.test(a)) return false;
  return true;
}

/** Instruction / grammar-formula leaked as a learner prompt. */
export function isMetaOrFormulaPrompt(text: string): boolean {
  const q = text.trim();
  if (!q) return false;
  if (/\+\s*(adj|adv|verb|noun|subj|n|v|inf|ger|pp)\b\.?/i.test(q)) return true;
  if (/^[A-Za-záéíóúñüÁÉÍÓÚÑÜ][\wáéíóúñüÁÉÍÓÚÑÜ'’]*\s*\+\s*\S/i.test(q) && q.length <= 40) {
    return true;
  }
  // Abbreviated grammar tags used as prompts (Pluscuam. subj. nos.)
  if (/^(Pluscuam|Pretérito|Imperf|Condic|Futuro|Presente|Subj|Imperat)\b/i.test(q) && q.length <= 48) {
    return true;
  }
  // Note: JS \b does not treat Cyrillic as word chars — use whitespace/end anchors.
  if (
    /^(Соберите|Составьте|Выберите|Заполните|Вставьте|Исправьте|Найдите|Переведите|Поставьте|Спрягите|Утвердительное|Вежливое|Косвенная|Обратите|Внимание|Формальный|Гипотеза|Какое выражение|Какой артикль)(\s|$)/i.test(
      q,
    )
  ) {
    return true;
  }
  if (/^После\s+(es |el |la |un |una |de |haber |que )/i.test(q)) return true;
  if (/^(Build|Choose|Fill|Complete|Rewrite|Fix|Translate|Conjugate|Put|Select)\b/i.test(q) && q.length <= 56) {
    return true;
  }
  // Glossary-style “Наречие «X»” / “Слово «X»” — not a sentence to translate.
  if (/^(Наречие|Прилагательное|Существительное|Глагол|Слово|Форма|Конструкция)(\s|$|[«"])/i.test(q)) {
    return true;
  }
  return false;
}

/** True when a fill-blank stem is a real sentence with a blank. */
export function isUsableFillBlank(ex: {
  question?: string;
  answer?: string;
  instruction?: string;
}): boolean {
  const q = (ex.question ?? "").trim();
  const a = (ex.answer ?? "").trim();
  const inst = (ex.instruction ?? "").trim();
  if (!q || !a) return false;
  if (isPlaceholderToken(a)) return false;
  if (!/___+/.test(q)) return false;
  if (COMPLETA_STUB.test(q)) return false;
  if (INDEX_MARK.test(q) || HASH_N.test(q)) return false;
  if (CYRILLIC.test(q)) return false;
  if (hasFakeXToken(a)) return false;
  if (/^(Completa|Complete)\b/i.test(q) && q.replace(/___+/g, "").trim().length < 8) {
    return false;
  }
  if (instructionSpoilsAnswer(inst, a)) return false;
  if (isGrammarCategoryInstruction(inst)) return false;
  return true;
}

/** Em dash / empty placeholders that teach nothing. */
function isPlaceholderToken(s: string): boolean {
  const t = s.trim();
  return (
    t === "" ||
    t === "—" ||
    t === "–" ||
    t === "-" ||
    t === "—?" ||
    t === "–?"
  );
}

/** Junk distractors: Answer?, case-only twin of answer, duplicate noise. */
function hasJunkMcOptions(answer: string, options: string[]): boolean {
  const a = answer.trim();
  const aLower = a.toLowerCase();
  let distinctLower = 0;
  const seen = new Set<string>();
  for (const raw of options) {
    const o = raw.trim();
    if (isPlaceholderToken(o)) return true;
    if (o === `${a}?` || o === `${aLower}?`) return true;
    const low = o.toLowerCase();
    if (!seen.has(low)) {
      seen.add(low);
      distinctLower += 1;
    }
  }
  // ["many","Many","many?"] collapses to one real choice
  if (distinctLower < 2) return true;
  return false;
}

/**
 * Pack generators sometimes turn error stems into MC with the first word
 * as the "answer" (e.g. "How much apples…?" → answer "How").
 */
function isFirstWordFakeMc(question: string, answer: string): boolean {
  if (/___+/.test(question)) return false;
  const a = answer.trim();
  if (!a || /\s/.test(a)) return false;
  const first = question.trim().split(/\s+/)[0]?.replace(/[¿?¡!.,;:'"]/g, "") ?? "";
  return first.toLowerCase() === a.toLowerCase() && question.trim().split(/\s+/).length >= 4;
}

/** True when MC is a real target-language stem with options. */
export function isUsableMultipleChoice(ex: {
  question?: string;
  answer?: string;
  options?: string[];
  instruction?: string;
}): boolean {
  const q = (ex.question ?? "").trim();
  const a = (ex.answer ?? "").trim();
  const inst = (ex.instruction ?? "").trim();
  const options = ex.options ?? [];
  if (!q || !a) return false;
  if (isPlaceholderToken(a)) return false;
  if (INDEX_MARK.test(q) || HASH_N.test(q)) return false;
  if (COMPLETA_STUB.test(q)) return false;
  if (CYRILLIC.test(q) && !/«/.test(q)) {
    // Allow MC that quotes Spanish and asks in Russian, e.g. «Se me rompió…» выражает…
    // but reject pure Cyrillic stems that belong to translation.
    if (!/[a-záéíóúñü]/i.test(q)) return false;
  }
  if (isTokenDump(q)) return false;
  if (options.length < 2) return false;
  // Case-only duplicates ("that"/"That") confuse learners and waste options.
  const optKeys = options.map((o) => String(o).trim().toLowerCase()).filter(Boolean);
  if (new Set(optKeys).size < optKeys.length) return false;
  if (hasFakeXToken(a) || options.some((o) => hasFakeXToken(o))) return false;
  if (hasJunkMcOptions(a, options)) return false;
  if (isFirstWordFakeMc(q, a)) return false;
  // Need a blank, a question, or a quoted phrase to analyse — not a full spoiled sentence
  if (!/___+/.test(q) && !/[?？]/.test(q) && !/«/.test(q)) return false;
  if (instructionSpoilsAnswer(inst, a) && a.length <= 4) return false;
  if (isGrammarCategoryInstruction(inst)) return false;
  return true;
}

/** True when sentence-building has enough tokens and a sentence answer. */
export function isUsableSentenceBuilding(ex: {
  question?: string;
  answer?: string;
  options?: string[];
}): boolean {
  const a = (ex.answer ?? "").trim();
  const options = ex.options ?? [];
  if (!a || CYRILLIC.test(a)) return false;
  if (isPlaceholderToken(a)) return false;
  if (INDEX_MARK.test(a) || HASH_N.test(a)) return false;
  if (hasFakeXToken(a)) return false;
  if (/\?\?/.test(a) || /→/.test(a) || /→/.test(ex.question ?? "")) return false;
  // Meta labels, not learner sentences
  if (/^(which|what) is (uncountable|countable|correct)\b/i.test(a)) return false;
  // Lone em-dash tiles (zero-article junk), not prose dashes inside answers
  if (options.some((o) => isPlaceholderToken(String(o)))) return false;
  if (options.length < 3) return false;
  return true;
}

/** Route by exercise type (defaults to requiring non-empty Q/A). */
export function isUsableBankExercise(ex: BankExerciseLike): boolean {
  const type = ex.type ?? "";
  switch (type) {
    case "error_correction":
      return isUsableErrorCorrection(ex);
    case "fill_blank":
      return isUsableFillBlank(ex);
    case "multiple_choice":
      return isUsableMultipleChoice(ex);
    case "translation":
      return isUsableTranslation(ex);
    case "sentence_building":
      return isUsableSentenceBuilding(ex);
    default:
      return Boolean(ex.question?.trim() && ex.answer?.trim());
  }
}

/** Strip generator index marks like `[12]` from display/grade strings. */
export function stripExerciseIndexMarks(s: string): string {
  return s
    .replace(/\s*\[\d+\]/g, "")
    .replace(/\s*\(#\d+\)/g, "")
    .replace(/\s*#\d+\b/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.?!])$/u, "$1")
    .trim();
}

/** Clean string fields and drop items that fail bank quality gates. */
export function sanitizeBankExercise<T extends BankExerciseLike>(ex: T): T | null {
  const cleaned = {
    ...ex,
    question: stripExerciseIndexMarks(String(ex.question ?? "")),
    answer: stripExerciseIndexMarks(String(ex.answer ?? "")),
    options: Array.isArray(ex.options)
      ? ex.options.map((o) => stripExerciseIndexMarks(String(o)))
      : ex.options,
  } as T;
  const alts = (ex as BankExerciseLike & { acceptableAnswers?: string[] })
    .acceptableAnswers;
  if (Array.isArray(alts)) {
    (cleaned as BankExerciseLike & { acceptableAnswers?: string[] }).acceptableAnswers =
      alts.map((a) => stripExerciseIndexMarks(a));
  }
  return isUsableBankExercise(cleaned) ? cleaned : null;
}

/** Sanitize a chapter map of draft exercises (curated / supplements). */
export function sanitizeChapterExerciseMap<T extends BankExerciseLike>(
  data: Record<string, T[]>,
): { cleaned: Record<string, T[]>; dropped: number } {
  const cleaned: Record<string, T[]> = {};
  let dropped = 0;
  for (const [slug, items] of Object.entries(data)) {
    const next: T[] = [];
    for (const ex of items) {
      const ok = sanitizeBankExercise(ex);
      if (ok) next.push(ok);
      else dropped += 1;
    }
    if (next.length > 0) cleaned[slug] = next;
  }
  return { cleaned, dropped };
}
