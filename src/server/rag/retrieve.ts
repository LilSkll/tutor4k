import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { Level } from "@/types";

// =====================================================================
// Runtime retrieval (used by server actions at query time)
// ---------------------------------------------------------------------
// Runs entirely in the Vercel runtime via Supabase RPC — NO model load.
// Uses full-text search (match_knowledge) with a trigram fallback
// (match_knowledge_fuzzy). Vector search is wired but dormant unless a
// query embedding source becomes available.
// =====================================================================

export interface RetrievedChunk {
  source: string;
  sourceTitle: string;
  page: number;
  section: string;
  level: Level | null;
  content: string;
  rank: number;
}

const MAX_CONTEXT_CHARS = 2400; // ~600 tokens budget for retrieved context
const MIN_RANK = 0.01;

/**
 * Retrieve the most relevant knowledge chunks for a user query and format
 * them into a single context string for the system prompt.
 *
 * Returns an empty string if the knowledge base is empty or nothing
 * matches — callers should proceed without context in that case.
 */
export async function retrieveContext(
  query: string,
  level?: Level | null,
  topK = 5,
): Promise<string> {
  const chunks = await retrieveChunks(query, level, topK);
  if (chunks.length === 0) return "";
  return formatContext(chunks);
}

/** Retrieve raw chunks (FTS first, trigram fallback). */
export async function retrieveChunks(
  query: string,
  level?: Level | null,
  topK = 5,
): Promise<RetrievedChunk[]> {
  const supabase = await createSupabaseServerClient();
  const cleaned = cleanQuery(query);
  if (!cleaned) return [];

  // 1) Full-text search.
  const { data: ftsRows, error: ftsErr } = await supabase.rpc(
    "match_knowledge",
    {
      query_text: cleaned,
      match_count: topK,
      filter_level: level ?? null,
    },
  );

  if (ftsErr) {
    console.warn("[retrieve] FTS error:", ftsErr.message);
  }

  if (ftsRows && ftsRows.length > 0) {
    return (ftsRows as RetrievedChunk[])
      .filter((r) => r.rank >= MIN_RANK)
      .map(normalizeRow);
  }

  // 2) Trigram fuzzy fallback (no level filter — broader recall).
  const { data: fuzzyRows, error: fuzzyErr } = await supabase.rpc(
    "match_knowledge_fuzzy",
    { query_text: cleaned, match_count: topK },
  );

  if (fuzzyErr) {
    console.warn("[retrieve] fuzzy error:", fuzzyErr.message);
    return [];
  }

  return ((fuzzyRows ?? []) as RetrievedChunk[]).map(normalizeRow);
}

/** Format retrieved chunks into a single string for the prompt. */
function formatContext(chunks: RetrievedChunk[]): string {
  const parts: string[] = [];
  let used = 0;

  for (const chunk of chunks) {
    const header = `📚 ${chunk.sourceTitle}${chunk.page ? `, стр. ${chunk.page}` : ""}${chunk.section ? ` (${chunk.section})` : ""}:`;
    const body = truncateToSentence(chunk.content, 500);
    const block = `${header}\n${body}`;
    if (used + block.length > MAX_CONTEXT_CHARS) break;
    parts.push(block);
    used += block.length;
  }

  return parts.join("\n\n---\n\n");
}

/** Cast a DB row (which may have extra fields) to our clean shape. */
function normalizeRow(row: RetrievedChunk): RetrievedChunk {
  return {
    source: row.source ?? "",
    sourceTitle: row.sourceTitle ?? row.source ?? "",
    page: row.page ?? 0,
    section: row.section ?? "",
    level: row.level ?? null,
    content: row.content ?? "",
    rank: row.rank ?? 0,
  };
}

/** Strip noise from a user query before searching. */
function cleanQuery(query: string): string {
  return query
    .replace(/^(expl[ií]came|объясни|расскажи|как |когда |в чем|в чём|что такое)\s*/i, "")
    .replace(/[?.!]+$/g, "")
    .trim();
}

/** Cut text to ~max chars, ending at the last sentence boundary. */
function truncateToSentence(text: string, max: number): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const stop = Math.max(
    slice.lastIndexOf(". "),
    slice.lastIndexOf("! "),
    slice.lastIndexOf("? "),
  );
  return (stop > max * 0.5 ? slice.slice(0, stop + 1) : slice).trim() + "…";
}
