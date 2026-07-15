import type { Level, VocabTopic, VocabWord } from "@/types";

const MAX_VOCAB_CHARS = 1800;
const MAX_MATCHES = 10;

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreWord(query: string, entry: VocabWord): number {
  const q = normalize(query);
  if (!q) return 0;

  let score = 0;
  const word = normalize(entry.word);
  const translation = normalize(entry.translation);

  if (word === q) score += 100;
  else if (word.startsWith(q)) score += 60;
  else if (word.includes(q)) score += 40;

  if (translation.includes(q)) score += 30;

  for (const tag of entry.tags ?? []) {
    if (normalize(tag).includes(q)) score += 15;
  }
  for (const syn of entry.synonyms ?? []) {
    if (normalize(syn).includes(q)) score += 20;
  }

  const tokens = q.split(" ").filter((t) => t.length > 2);
  if (tokens.length > 1) {
    const haystack = [word, translation, ...(entry.tags ?? [])].join(" ");
    if (tokens.every((t) => haystack.includes(t))) score += 25;
  }

  return score;
}

function formatEntry(entry: VocabWord): string {
  const lines = [
    `• **${entry.word}** ${entry.transcription ?? ""} (${entry.partOfSpeech ?? "word"}) — ${entry.translation}`,
    `  Level: ${entry.level ?? "—"} | Frequency: ${entry.frequency ?? "—"} | Tags: ${(entry.tags ?? []).join(", ") || "—"}`,
  ];

  const examples = entry.examples ?? (entry.example ? [entry.example] : []);
  if (examples.length > 0) {
    lines.push(`  Examples: ${examples.map((e) => `"${e}"`).join("; ")}`);
  }
  if (entry.synonyms?.length) {
    lines.push(`  Synonyms: ${entry.synonyms.join(", ")}`);
  }
  if (entry.commonMistakes?.length) {
    lines.push(`  Common mistakes: ${entry.commonMistakes.join(" ")}`);
  }
  if (entry.chapterSlug) {
    lines.push(`  Chapter: ${entry.chapterSlug}`);
  }

  return lines.join("\n");
}

/**
 * Find relevant course vocabulary for a tutor query.
 * Returns formatted context for the system prompt.
 */
export function retrieveVocabularyContext(
  query: string,
  topics: VocabTopic[],
  level?: Level | null,
): string {
  if (!topics.length) return "";

  const allWords = topics.flatMap((t) => t.words);
  const ranked = allWords
    .map((entry) => ({ entry, score: scoreWord(query, entry) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  let selected: VocabWord[] = ranked.slice(0, MAX_MATCHES).map((r) => r.entry);

  if (selected.length === 0 && level) {
    const order: Level[] = ["A1", "A2", "B1", "B2", "C1"];
    const idx = order.indexOf(level);
    selected = allWords
      .filter((w) => {
        const wl = w.level ?? "A1";
        if (wl === "C2") return idx >= order.indexOf("C1");
        return order.indexOf(wl as Level) <= idx + 1;
      })
      .slice(0, 6);
  }

  if (selected.length === 0) return "";

  const parts: string[] = [];
  let used = 0;

  for (const entry of selected) {
    const block = formatEntry(entry);
    if (used + block.length > MAX_VOCAB_CHARS) break;
    parts.push(block);
    used += block.length;
  }

  if (parts.length === 0) return "";

  return `# COURSE VOCABULARY (use these words and examples when relevant)\n${parts.join("\n")}`;
}
