/**
 * Prefer English-course ES/DE L1 cache over generic translation prompts.
 * Generic prompts.json often stores English as `es` (spoiler for EN course).
 */
import type { InterfaceLanguage } from "@/types";
import prompts from "@/config/exercise-translation-prompts.json";
import l1Cache from "@/config/exercise-banks/data/english-tr-l1-cache.json";

type PromptMap = Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>
>;

type L1Cache = Record<string, { es?: string; de?: string }>;

const MAP = prompts as PromptMap;
const CACHE = l1Cache as L1Cache;

const LATIN_LETTER = /[A-Za-zÀ-ÿ]/;
const CYRILLIC = /[\u0400-\u04FF]/;

function normalize(s: string): string {
  return s
    .replace(/[¿?¡!.,;:'"«»„""''`´…]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/** True when a supposed ES/DE string is actually English (spoiler / bad fill). */
export function looksLikeEnglishSpoiler(
  localized: string,
  englishAnswer?: string | null,
): boolean {
  const loc = localized.trim();
  if (!loc) return true;
  if (CYRILLIC.test(loc)) return true;
  if (englishAnswer && normalize(loc) === normalize(englishAnswer)) return true;
  // Heuristic: Spanish/German prompts almost always have accents or non-ASCII
  // articles; bare ASCII English answers fail this when compared to known EN.
  if (englishAnswer) {
    const enWords = new Set(
      normalize(englishAnswer)
        .split(" ")
        .filter((w) => w.length > 2),
    );
    const locWords = normalize(loc).split(" ").filter((w) => w.length > 2);
    if (
      locWords.length >= 2 &&
      locWords.filter((w) => enWords.has(w)).length >= Math.ceil(locWords.length * 0.7)
    ) {
      return true;
    }
  }
  // Pure ASCII without Spanish/German markers is suspicious for es/de of a RU stem.
  if (
    LATIN_LETTER.test(loc) &&
    !/[áéíóúüñ¿¡äöüß]/i.test(loc) &&
    englishAnswer &&
    normalize(loc) === normalize(englishAnswer)
  ) {
    return true;
  }
  return false;
}

function pickLang(
  entry: Partial<Record<"en" | "es" | "de", string>> | undefined,
  lang: Exclude<InterfaceLanguage, "ru">,
  englishAnswer?: string | null,
): string | null {
  if (!entry) return null;
  const direct = entry[lang]?.trim();
  if (direct) {
    if (
      (lang === "es" || lang === "de") &&
      looksLikeEnglishSpoiler(direct, englishAnswer ?? entry.en)
    ) {
      return null;
    }
    return direct;
  }
  // Never fall back to English for es/de — that spoils EN-course TR.
  if (lang === "es" || lang === "de") return null;
  return entry.en?.trim() ?? null;
}

/** Localized source sentence for a RU-authored translation exercise. */
export function lookupTranslationPrompt(
  russianQuestion: string,
  interfaceLanguage: InterfaceLanguage,
  englishAnswer?: string | null,
): string | null {
  if (interfaceLanguage === "ru") return null;
  const key = russianQuestion.trim();
  if (!key) return null;

  const fromCache = pickLang(CACHE[key], interfaceLanguage, englishAnswer);
  if (fromCache) return fromCache;

  return pickLang(MAP[key], interfaceLanguage, englishAnswer);
}

/** Attach ES/DE L1 prompts onto an English-course translation draft. */
export function attachEnglishTrL1<
  T extends {
    type?: string;
    question?: string;
    answer?: string;
    questionTranslations?: Partial<Record<InterfaceLanguage, string>>;
  },
>(exercise: T): T {
  if (exercise.type !== "translation") return exercise;
  const ru = exercise.question?.trim() ?? "";
  if (!CYRILLIC.test(ru)) return exercise;
  const answer = exercise.answer ?? "";
  const es =
    exercise.questionTranslations?.es?.trim() ||
    lookupTranslationPrompt(ru, "es", answer);
  const de =
    exercise.questionTranslations?.de?.trim() ||
    lookupTranslationPrompt(ru, "de", answer);
  if (!es && !de) return exercise;
  const questionTranslations: Partial<Record<InterfaceLanguage, string>> = {
    ...(exercise.questionTranslations ?? {}),
  };
  if (es && !looksLikeEnglishSpoiler(es, answer)) questionTranslations.es = es;
  if (de && !looksLikeEnglishSpoiler(de, answer)) questionTranslations.de = de;
  return { ...exercise, questionTranslations };
}
