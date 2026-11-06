/**
 * Deterministic Altair (hippogriff) illustration for vocabulary topic cards.
 * Uses only existing public assets under /.
 */
export const VOCAB_TOPIC_ALTAIR_ASSETS = [
  "/hippogriff-icon.webp",
  "/hippogriff-hero-768.webp",
  "/landing-founder-hippogriff.jpg",
] as const;

export type VocabTopicAltairSrc = (typeof VOCAB_TOPIC_ALTAIR_ASSETS)[number];

/** Stable uint32 hash for string keys (deterministic across runtimes). */
export function hashTopicSlugToUint32(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function getVocabTopicAltairSrc(slug: string): VocabTopicAltairSrc {
  const s = slug.trim() || "default";
  const idx = hashTopicSlugToUint32(s) % VOCAB_TOPIC_ALTAIR_ASSETS.length;
  return VOCAB_TOPIC_ALTAIR_ASSETS[idx]!;
}
