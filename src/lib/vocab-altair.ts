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

/** Stable uint32 hash for string keys (deterministic across runtimes). */
export function hashTopicSlugToUint32(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
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
  const s = slug.trim() || "default";
  const idx = hashTopicSlugToUint32(s) % pack.length;
  return pack[idx]!;
}
