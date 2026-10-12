/** Normalize grammar topic slugs for loose chapter ↔ exercise matching. */
export function normalizeGrammarTopicKey(raw: string): string {
  return raw
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/^a[12]-|^b[12]-|^c[12]-|^dele-/, "")
    .replace(/_/g, "-");
}

export function matchesChapterGrammar(
  chapterTopic: string,
  exerciseTopic?: string | null,
): boolean {
  if (!exerciseTopic?.trim()) return true;
  const chapter = normalizeGrammarTopicKey(chapterTopic);
  const exercise = normalizeGrammarTopicKey(exerciseTopic);
  if (chapter === exercise) return true;
  if (chapter.includes(exercise) || exercise.includes(chapter)) return true;
  const chapterTail = chapter.split("-").slice(-2).join("-");
  const exerciseTail = exercise.split("-").slice(-2).join("-");
  return chapterTail === exerciseTail;
}
