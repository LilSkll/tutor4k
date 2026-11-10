/**
 * Course-specific Altair sticker packs for vocabulary topic cards.
 * Assets live under /public/altair/{spanish|russian}/ — cut from sticker sheets.
 * English course reuses the Spanish pedagogical pack (no separate sheet yet).
 */

export const VOCAB_TOPIC_ALTAIR_ASSETS_BY_COURSE: Record<string, readonly string[]> = {
  spanish: [
    "/altair/spanish/altair-es-01.webp",
    "/altair/spanish/altair-es-02.webp",
    "/altair/spanish/altair-es-03.webp",
    "/altair/spanish/altair-es-04.webp",
    "/altair/spanish/altair-es-05.webp",
    "/altair/spanish/altair-es-06.webp",
    "/altair/spanish/altair-es-07.webp",
    "/altair/spanish/altair-es-08.webp",
    "/altair/spanish/altair-es-09.webp",
    "/altair/spanish/altair-es-10.webp",
    "/altair/spanish/altair-es-11.webp",
    "/altair/spanish/altair-es-12.webp",
    "/altair/spanish/altair-es-13.webp",
    "/altair/spanish/altair-es-14.webp",
    "/altair/spanish/altair-es-15.webp",
  ],
  russian: [
    "/altair/russian/altair-ru-01.webp",
    "/altair/russian/altair-ru-02.webp",
    "/altair/russian/altair-ru-03.webp",
    "/altair/russian/altair-ru-04.webp",
    "/altair/russian/altair-ru-05.webp",
    "/altair/russian/altair-ru-06.webp",
    "/altair/russian/altair-ru-07.webp",
    "/altair/russian/altair-ru-08.webp",
    "/altair/russian/altair-ru-09.webp",
    "/altair/russian/altair-ru-10.webp",
    "/altair/russian/altair-ru-11.webp",
    "/altair/russian/altair-ru-12.webp",
  ],
  english: [
    "/altair/spanish/altair-es-01.webp",
    "/altair/spanish/altair-es-02.webp",
    "/altair/spanish/altair-es-03.webp",
    "/altair/spanish/altair-es-04.webp",
    "/altair/spanish/altair-es-05.webp",
    "/altair/spanish/altair-es-08.webp",
    "/altair/spanish/altair-es-09.webp",
    "/altair/spanish/altair-es-10.webp",
    "/altair/spanish/altair-es-11.webp",
    "/altair/spanish/altair-es-12.webp",
  ],
};

/** @deprecated Prefer course-aware packs; kept for tests that only check path shape. */
export const VOCAB_TOPIC_ALTAIR_ASSETS = [
  ...VOCAB_TOPIC_ALTAIR_ASSETS_BY_COURSE.spanish,
  ...VOCAB_TOPIC_ALTAIR_ASSETS_BY_COURSE.russian,
] as const;

export type VocabTopicAltairSrc = string;

/**
 * Stronger mixed hash than plain FNV — folds courseId so the same slug can
 * land on different stickers across courses, and spreads nearby slug names.
 */
export function hashTopicSlugToUint32(
  slug: string,
  courseId?: string | null,
): number {
  const key = `${(courseId ?? "").trim()}::${slug.trim() || "default"}`;
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  // Extra avalanche mixing (Murmur-inspired finalizer).
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}

function packForCourse(courseId?: string | null): readonly string[] {
  const id = (courseId ?? "spanish").trim() || "spanish";
  return (
    VOCAB_TOPIC_ALTAIR_ASSETS_BY_COURSE[id] ??
    VOCAB_TOPIC_ALTAIR_ASSETS_BY_COURSE.spanish
  );
}

export function getVocabTopicAltairSrc(
  slug: string,
  courseId?: string | null,
): VocabTopicAltairSrc {
  const pack = packForCourse(courseId);
  const idx = hashTopicSlugToUint32(slug, courseId) % pack.length;
  return pack[idx]!;
}

/**
 * Assign stickers for a visible topic list so immediate neighbors in a CSS
 * grid (left / above) rarely share the same asset. Deterministic per
 * (courseId, slug order, column count).
 */
export function assignVocabAltairSrcs(
  slugs: readonly string[],
  courseId?: string | null,
  columns = 3,
): Record<string, VocabTopicAltairSrc> {
  const pack = packForCourse(courseId);
  const cols = Math.max(1, columns | 0);
  const out: Record<string, VocabTopicAltairSrc> = {};
  const assigned: string[] = [];

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i]!;
    const preferred = hashTopicSlugToUint32(slug, courseId) % pack.length;
    const left = i % cols !== 0 ? assigned[i - 1] : undefined;
    const above = i >= cols ? assigned[i - cols] : undefined;
    const forbidden = new Set(
      [left, above].filter((s): s is string => typeof s === "string"),
    );

    let chosen = pack[preferred]!;
    if (forbidden.has(chosen) && pack.length > 1) {
      // Walk the pack from a secondary offset so we stay deterministic.
      const step =
        (hashTopicSlugToUint32(`${slug}::spread`, courseId) % (pack.length - 1)) +
        1;
      for (let k = 0; k < pack.length; k++) {
        const idx = (preferred + step * (k + 1)) % pack.length;
        const candidate = pack[idx]!;
        if (!forbidden.has(candidate)) {
          chosen = candidate;
          break;
        }
      }
    }
    assigned.push(chosen);
    out[slug] = chosen;
  }
  return out;
}
