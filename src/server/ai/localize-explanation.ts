import type { InterfaceLanguage } from "@/types";
import { detectSourceLanguage } from "@/lib/exercise-localize";

// =====================================================================
// Bank exercise explanations are authored in one language (RU for the
// Spanish course, EN for the English course). When the interface language
// differs, translate the short explanation on the fly and cache it for
// the lifetime of the server instance.
// =====================================================================

const LANGUAGE_NAMES: Record<InterfaceLanguage, string> = {
  ru: "Russian",
  en: "English",
  es: "Spanish",
  de: "German",
};

const cache = new Map<string, string>();

function cacheKey(id: string, lang: InterfaceLanguage): string {
  return `${id}:${lang}`;
}

/**
 * Return the explanation in the interface language. Terms and example
 * words in the target language (es/en) inside the explanation stay as-is;
 * only the teaching text is translated. Falls back to the original text
 * when AI providers are unavailable.
 */
export async function localizeExerciseExplanation(input: {
  explanation: string;
  interfaceLanguage: InterfaceLanguage;
  exerciseId?: string;
  courseId?: string;
}): Promise<string> {
  const explanation = input.explanation?.trim() ?? "";
  if (!explanation) return explanation;

  const lang = input.interfaceLanguage;
  if (detectSourceLanguage(explanation) === lang) return explanation;
  // en-authored explanations are kept only for the en interface;
  // ru-authored only for ru. Everything else gets translated.

  const id = input.exerciseId || explanation.slice(0, 80);
  const key = cacheKey(id, lang);
  const cached = cache.get(key);
  if (cached) return cached;

  try {
    const { generateAIResponse } = await import("@/server/ai/orchestrator");
    const target = LANGUAGE_NAMES[lang] ?? "English";
    const res = await generateAIResponse({
      messages: [
        {
          role: "user",
          content: `Translate this short language-exercise explanation into ${target}. Keep the studied-language words, forms and grammar terms (e.g. "ser", "subjuntivo", "imperfecto", "present perfect") exactly as they are. Reply with ONLY the translated explanation, no preamble.\n\n${explanation}`,
        },
      ],
      interfaceLanguage: lang,
      temperature: 0.2,
      maxTokens: 300,
      skipGuard: true,
      courseId: input.courseId ?? "spanish",
    });
    const translated = res.content?.trim();
    if (translated && translated.length > 1) {
      cache.set(key, translated);
      return translated;
    }
  } catch {
    // Providers unavailable — fall through to the original text.
  }
  return explanation;
}
