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

function isRussianChapterSlug(slug: string): boolean {
  return slug.startsWith("ru-ch") || slug.startsWith("rus-ch");
}

/**
 * Story for the chapter intro screen, or null when not authored / locale missing.
 *
 * Russian course (ru-ch*): never silent-fallback to another UI language —
 * missing locale must surface as null so audits/tests catch the gap.
 * Other courses keep a soft EN fallback for historically incomplete DE/ES files.
 */
export async function getChapterStory(
  slug: string,
  language: InterfaceLanguage,
): Promise<string | null> {
  const entry = await loadStoryLocale(slug);
  if (!entry) return null;

  const exact = entry[language]?.trim();
  if (exact) return exact;

  if (isRussianChapterSlug(slug)) {
    return null;
  }

  return entry.en?.trim() || null;
}
