import type { InterfaceLanguage, VocabTopic, VocabWord } from "@/types";
import { ENGLISH_VOCAB } from "@/config/courses/english/vocabulary";
import { ENGLISH_VOCAB_DEFINITION } from "@/config/courses/english/vocabulary/definitions";
import { ENGLISH_VOCAB_GLOSS } from "@/config/courses/english/vocabulary/glosses";
import { SPANISH_VOCAB_DEFINITION } from "@/config/courses/spanish/vocabulary/definitions";
import { SPANISH_VOCAB_GLOSS } from "@/config/courses/spanish/vocabulary/glosses";
import { SPANISH_TOPIC_TITLES_EN } from "@/config/courses/spanish/vocabulary/topic-titles";
import { VOCAB_TOPICS } from "@/config/vocabulary-topics";

function hasCyrillic(text: string): boolean {
  return /[\u0400-\u04FF]/.test(text);
}

function isLatinScript(text: string): boolean {
  return !hasCyrillic(text);
}

/** Topic title in the user's interface language. */
export function getVocabTopicTitle(
  topic: VocabTopic,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string,
): string {
  switch (interfaceLanguage) {
    case "ru":
      return topic.topic;
    case "es":
      return topic.topicEs;
    case "en":
    case "de":
      if (courseId === "spanish") {
        return SPANISH_TOPIC_TITLES_EN[topic.slug] ?? topic.topicEs;
      }
      return (
        topic.topicEn ??
        (isLatinScript(topic.topicEs) ? topic.topicEs : topic.topic)
      );
    default:
      return topic.topic;
  }
}

/** Secondary line: target-language topic name when it differs from the primary title. */
export function getVocabTopicSubtitle(
  topic: VocabTopic,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string,
): string | null {
  const primary = getVocabTopicTitle(topic, interfaceLanguage, courseId);

  // English course: target subtitle is always English (never Spanish topicEs leftovers).
  if (courseId === "english") {
    const enTitle =
      topic.topicEn?.trim() ||
      (isLatinScript(topic.topicEs) && !looksSpanishTopicTitle(topic.topicEs)
        ? topic.topicEs
        : "") ||
      (isLatinScript(topic.topic) ? topic.topic : "");
    return enTitle && enTitle !== primary ? enTitle : null;
  }

  if (interfaceLanguage === "ru") {
    return topic.topicEs !== primary ? topic.topicEs : null;
  }

  if (interfaceLanguage === "es") {
    return null;
  }

  if (interfaceLanguage === "en" || interfaceLanguage === "de") {
    return topic.topicEs !== primary ? topic.topicEs : null;
  }

  return null;
}

function looksSpanishTopicTitle(s: string): boolean {
  return /\b(Información|Familia|Hogar|Objetos|Rutina|Ciudad|Viajes|Trabajo|Compras|Salud|Cuerpo|Emociones|Personalidad)\b/i.test(
    s,
  );
}

/** Word gloss in the user's interface language. */
export function getWordGloss(
  word: VocabWord,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string,
): string {
  if (word.translations?.[interfaceLanguage]) {
    return word.translations[interfaceLanguage]!;
  }

  if (interfaceLanguage === "ru") {
    return word.translation;
  }

  const key = word.word.trim().toLowerCase();

  if (courseId === "english") {
    const gloss = ENGLISH_VOCAB_GLOSS[interfaceLanguage]?.[key];
    if (gloss) return gloss;
  }

  if (courseId === "spanish") {
    const gloss = SPANISH_VOCAB_GLOSS[interfaceLanguage]?.[key];
    if (gloss) return gloss;
  }

  // Last resort: keep authored translation even if still Russian.
  return word.translation;
}

/**
 * Short dictionary-style definition in the user's interface language.
 * Returns null when no definition is available (do not fall back to gloss).
 */
export function getWordDefinition(
  word: VocabWord,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string,
): string | null {
  const inline = word.definitions?.[interfaceLanguage]?.trim();
  if (inline) return inline;

  const key = word.word.trim().toLowerCase();

  if (courseId === "english") {
    const def = ENGLISH_VOCAB_DEFINITION[interfaceLanguage]?.[key]?.trim();
    if (def) return def;
  }

  if (courseId === "spanish") {
    const def = SPANISH_VOCAB_DEFINITION[interfaceLanguage]?.[key]?.trim();
    if (def) return def;
  }

  return null;
}

export type WordHint = {
  lemma: string;
  gloss: string;
  definition?: string;
};

const ARTICLE_RE = /^(el|la|los|las|un|una|unos|unas|the|a|an)\s+/i;

function normalizeHintToken(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/^[¿¡«"'(]+/, "")
    .replace(/[»"'.,!?;:…)\]}]+$/u, "")
    .trim();
}

function stripArticle(lemma: string): string {
  return lemma.replace(ARTICLE_RE, "").trim();
}

type LemmaIndex = {
  /** token / bare lemma → canonical catalog key */
  byToken: Map<string, string>;
  /** canonical key → Russian gloss from authored catalog */
  ruByLemma: Map<string, string>;
};

let spanishHintIndex: LemmaIndex | null = null;
let englishHintIndex: LemmaIndex | null = null;

/**
 * Index a catalog lemma for tap-to-translate.
 * Never map a single token inside a multi-word idiom onto the whole phrase
 * (that made «tres» resolve to «no ver tres en un burro»).
 * Slash alternatives («el primo / la prima») are registered separately.
 */
function addLemmaToIndex(index: LemmaIndex, lemma: string, ruGloss?: string) {
  const gloss = ruGloss?.trim() || undefined;
  const alternatives = lemma
    .split(/\s*\/\s*/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  for (const key of alternatives) {
    registerExactLemma(index, key, gloss);
  }
}

function registerExactLemma(
  index: LemmaIndex,
  key: string,
  ruGloss?: string,
) {
  if (!key) return;
  // Prefer an existing exact single-word lemma over a later multi-word overwrite.
  const existing = index.byToken.get(key);
  if (existing && !existing.includes(" ") && key.includes(" ")) {
    return;
  }
  index.byToken.set(key, key);
  const bare = stripArticle(key);
  if (bare && bare !== key) {
    const bareExisting = index.byToken.get(bare);
    // Keep a dedicated short lemma (e.g. «hora») over phrase leftovers.
    if (!bareExisting || bareExisting.includes(" ") || bareExisting === bare) {
      index.byToken.set(bare, key);
    }
  }
  if (ruGloss) index.ruByLemma.set(key, ruGloss);
}

function getSpanishHintIndex(): LemmaIndex {
  if (spanishHintIndex) return spanishHintIndex;
  const index: LemmaIndex = { byToken: new Map(), ruByLemma: new Map() };
  for (const map of Object.values(SPANISH_VOCAB_GLOSS)) {
    if (!map) continue;
    for (const lemma of Object.keys(map)) addLemmaToIndex(index, lemma);
  }
  for (const map of Object.values(SPANISH_VOCAB_DEFINITION)) {
    if (!map) continue;
    for (const lemma of Object.keys(map)) addLemmaToIndex(index, lemma);
  }
  for (const topic of VOCAB_TOPICS) {
    for (const word of topic.words) {
      addLemmaToIndex(index, word.word, word.translation);
    }
  }
  spanishHintIndex = index;
  return index;
}

function getEnglishHintIndex(): LemmaIndex {
  if (englishHintIndex) return englishHintIndex;
  const index: LemmaIndex = { byToken: new Map(), ruByLemma: new Map() };
  for (const map of Object.values(ENGLISH_VOCAB_GLOSS)) {
    if (!map) continue;
    for (const lemma of Object.keys(map)) addLemmaToIndex(index, lemma);
  }
  for (const map of Object.values(ENGLISH_VOCAB_DEFINITION)) {
    if (!map) continue;
    for (const lemma of Object.keys(map)) addLemmaToIndex(index, lemma);
  }
  for (const topic of ENGLISH_VOCAB) {
    for (const word of topic.words) {
      addLemmaToIndex(index, word.word, word.translation);
    }
  }
  englishHintIndex = index;
  return index;
}

function glossForLemma(
  lemma: string,
  interfaceLanguage: InterfaceLanguage,
  courseId: string,
  ruByLemma: Map<string, string>,
): string | null {
  if (courseId === "english") {
    if (interfaceLanguage === "ru") {
      return (
        ENGLISH_VOCAB_GLOSS.ru?.[lemma] ??
        ruByLemma.get(lemma) ??
        null
      );
    }
    return ENGLISH_VOCAB_GLOSS[interfaceLanguage]?.[lemma] ?? null;
  }

  if (courseId === "spanish") {
    if (interfaceLanguage === "ru") {
      return ruByLemma.get(lemma) ?? null;
    }
    return SPANISH_VOCAB_GLOSS[interfaceLanguage]?.[lemma] ?? null;
  }

  return null;
}

function definitionForLemma(
  lemma: string,
  interfaceLanguage: InterfaceLanguage,
  courseId: string,
): string | undefined {
  if (courseId === "english") {
    return ENGLISH_VOCAB_DEFINITION[interfaceLanguage]?.[lemma];
  }
  if (courseId === "spanish") {
    return SPANISH_VOCAB_DEFINITION[interfaceLanguage]?.[lemma];
  }
  return undefined;
}

/**
 * Resolve a clicked token to a UI-language gloss (and optional definition)
 * using the active course vocabulary maps.
 */
export function lookupWordHint(
  rawToken: string,
  interfaceLanguage: InterfaceLanguage,
  courseId?: string,
): WordHint | null {
  const token = normalizeHintToken(rawToken);
  if (!token || token.length < 2) return null;

  const course = courseId === "english" ? "english" : "spanish";
  const index = course === "english" ? getEnglishHintIndex() : getSpanishHintIndex();

  const candidates = [token, stripArticle(token)].filter(Boolean);
  let lemma: string | undefined;
  for (const c of candidates) {
    lemma = index.byToken.get(c);
    if (lemma) break;
  }
  if (!lemma) return null;

  const gloss = glossForLemma(
    lemma,
    interfaceLanguage,
    course,
    index.ruByLemma,
  );
  if (!gloss) return null;

  // Don't show a "hint" that is basically the same as the clicked word.
  const glossNorm = normalizeHintToken(gloss);
  if (glossNorm === token || glossNorm === normalizeHintToken(lemma)) {
    const definition = definitionForLemma(lemma, interfaceLanguage, course);
    if (!definition) return null;
    return { lemma, gloss, definition };
  }

  const definition = definitionForLemma(lemma, interfaceLanguage, course);
  return definition ? { lemma, gloss, definition } : { lemma, gloss };
}
