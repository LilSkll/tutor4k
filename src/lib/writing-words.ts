/** Count words for writing homework (letters / essays). */
export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

/** Suggested DELE/IELTS-style minimum when the linked grammar topic is writing. */
export function suggestedMinWordsForGrammarSlug(
  slug: string | undefined | null,
): number | undefined {
  if (!slug) return undefined;
  const s = slug.toLowerCase();
  if (
    s.includes("carta") ||
    s.includes("letter") ||
    s.includes("correo") ||
    s.includes("email")
  ) {
    return 80;
  }
  if (
    s.includes("ensayo") ||
    s.includes("essay") ||
    s.includes("redaccion") ||
    s.includes("article") ||
    s.includes("report") ||
    s.includes("task1") ||
    s.includes("task-1") ||
    s.includes("opinion") ||
    s.includes("register")
  ) {
    return 120;
  }
  return undefined;
}
