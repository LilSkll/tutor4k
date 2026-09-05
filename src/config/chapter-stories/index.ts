import type { InterfaceLanguage } from "@/types";

type StoryLocale = Record<InterfaceLanguage, string>;

const cache = new Map<string, StoryLocale>();

/**
 * Load one chapter story by slug.
 * Uses a constrained dynamic import so Next/Vercel traces `./data/*.json`.
 */
async function loadStoryLocale(slug: string): Promise<StoryLocale | null> {
  const cached = cache.get(slug);
  if (cached) return cached;

  try {
    const mod = (await import(`./data/${slug}.json`)) as {
      default?: StoryLocale;
    } & StoryLocale;
    const locale = (mod.default ?? mod) as StoryLocale;
    cache.set(slug, locale);
    return locale;
  } catch {
    return null;
  }
}

/** Story for the chapter intro screen, or null when not authored. */
export async function getChapterStory(
  slug: string,
  language: InterfaceLanguage,
): Promise<string | null> {
  const entry = await loadStoryLocale(slug);
  if (!entry) return null;
  return entry[language] ?? entry.en ?? null;
}
