/** Count words for writing homework (letters / essays). */
export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

/** Suggested DELE-style minimum when the linked grammar topic is a letter. */
export function suggestedMinWordsForGrammarSlug(
  slug: string | undefined | null,
): number | undefined {
  if (!slug) return undefined;
  const s = slug.toLowerCase();
  if (s.includes("carta") || s.includes("letter") || s.includes("correo")) {
    return 80;
  }
  if (s.includes("ensayo") || s.includes("essay") || s.includes("redaccion")) {
    return 120;
  }
  return undefined;
}
