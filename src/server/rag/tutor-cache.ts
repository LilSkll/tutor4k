import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { InterfaceLanguage, Level } from "@/types";

// =====================================================================
// Shared tutor-response cache
// ---------------------------------------------------------------------
// Identical tutor questions (after normalization) reuse a stored answer,
// so 10 users asking "разница ser estar" hit ONE Groq call, not ten.
// Lives in Supabase (shared across serverless instances / cold starts).
// =====================================================================

const TTL_HOURS = 24 * 7; // 7 days — grammar rules don't change
const MIN_QUERY_LEN = 15; // too short = not cacheable (greetings, etc.)
const MAX_QUERY_LEN = 400; // very long = likely a specific exercise, skip

// Words that make a query non-cacheable: the answer depends on the
// specific exercise / personal context, so a shared answer is wrong.
const NON_CACHEABLE = [
  "реши", "решить", "сделай за", "дай ответ", "за меня",
  "haz por mí", "dame la respuesta", "resuelve", "hacer por",
  "переведи это", "traduce esto", "исправь ошибку", "corrige",
];

/**
 * Normalize a user question into a stable cache key:
 * lowercase, strip punctuation/accents, drop stopwords, collapse spaces.
 */
export function normalizeQuery(query: string): string {
  let q = query.toLowerCase().trim();

  // Strip accents (á→a, ñ→n) so "subjuntivo" and "subjúntivo" match.
  q = q.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Replace punctuation with spaces.
  q = q.replace(/[^\p{L}\p{N}\s]/gu, " ");

  // Collapse whitespace.
  q = q.replace(/\s+/g, " ").trim();

  return q;
}

/** FNV-1a hash → hex string (cheap, deterministic). */
function hash(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, "0");
}

/** Should this query be cached at all? */
export function isCacheable(query: string): boolean {
  const norm = normalizeQuery(query);
  if (norm.length < MIN_QUERY_LEN || norm.length > MAX_QUERY_LEN) return false;
  return !NON_CACHEABLE.some((kw) => norm.includes(kw));
}

/**
 * Look up a cached tutor answer for the (query, level) pair.
 * Returns null on miss / stale / error.
 */
export async function getCachedTutorResponse(
  query: string,
  level: Level | null,
  courseId?: string | null,
  interfaceLanguage?: InterfaceLanguage | null,
  progressFingerprint?: string | null,
): Promise<string | null> {
  if (!isCacheable(query)) return null;

  const norm = normalizeQuery(query);
  const queryHash = hash(
    norm +
      "|" +
      (level ?? "any") +
      "|" +
      (courseId ?? "spanish") +
      "|" +
      (interfaceLanguage ?? "ru") +
      "|" +
      (progressFingerprint ?? "noprog"),
  );

  try {
    const supabase = await createSupabaseServerClient();
    const cutoff = new Date(Date.now() - TTL_HOURS * 3600_000).toISOString();

    const { data, error } = await supabase
      .from("tutor_cache")
      .select("id, response, created_at")
      .eq("query_hash", queryHash)
      .gte("created_at", cutoff)
      .maybeSingle();

    if (error || !data) return null;

    // Bump hit count (best-effort, fire-and-forget).
    void supabase.rpc("bump_tutor_cache", { p_id: data.id });

    return data.response as string;
  } catch {
    return null;
  }
}

/**
 * Store a tutor answer in the cache for future reuse.
 * Silent no-op on any error (caching is an optimization, not critical).
 */
export async function setCachedTutorResponse(
  query: string,
  level: Level | null,
  response: string,
  courseId?: string | null,
  interfaceLanguage?: InterfaceLanguage | null,
  progressFingerprint?: string | null,
): Promise<void> {
  if (!isCacheable(query) || !response.trim()) return;
  // Don't cache refusal / error messages.
  if (response.startsWith("⚠️") || response.startsWith("😔")) return;

  const norm = normalizeQuery(query);
  const queryHash = hash(
    norm +
      "|" +
      (level ?? "any") +
      "|" +
      (courseId ?? "spanish") +
      "|" +
      (interfaceLanguage ?? "ru") +
      "|" +
      (progressFingerprint ?? "noprog"),
  );

  try {
    const supabase = await createSupabaseServerClient();
    await supabase.from("tutor_cache").upsert(
      {
        query_hash: queryHash,
        normalized_query: norm,
        level,
        response,
        hit_count: 1,
        created_at: new Date().toISOString(),
        last_hit_at: new Date().toISOString(),
      },
      { onConflict: "query_hash,level" },
    );
  } catch {
    // Non-fatal.
  }
}
