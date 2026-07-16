import { createSupabaseServerClient } from "@/lib/supabase-server";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import type { InterfaceLanguage, Level } from "@/types";
import type { SupabaseClient } from "@supabase/supabase-js";

// =====================================================================
// Shared tutor-response cache (cross-user, token saver)
// ---------------------------------------------------------------------
// Flow: User A asks "разница ser / estar" → LLM once → save to tutor_cache.
//       User B asks the same (normalized) → answer from DB, 0 LLM tokens.
//
// Key = normalized question + CEFR level + course + interface language.
// Progress fingerprint is intentionally NOT in the key — personalization
// must not fragment the shared FAQ cache.
// =====================================================================

const TTL_HOURS = 24 * 30; // 30 days — grammar FAQ stays stable
const MIN_QUERY_LEN = 12;
const MAX_QUERY_LEN = 400;

/** Personal / homework asks — never share across users. */
const NON_CACHEABLE = [
  "реши",
  "решить",
  "сделай за",
  "дай ответ",
  "за меня",
  "haz por mi",
  "dame la respuesta",
  "resuelve",
  "hacer por",
  "переведи это",
  "traduce esto",
  "исправь ошибку",
  "corrige",
  "мой ответ",
  "my answer",
  "моя домашка",
  "my homework",
  "у меня в упражнении",
  "in my exercise",
  "как у меня",
  "мой прогресс",
  "my progress",
  "моя глава",
  "my chapter",
  "что мне учить",
  "what should i study",
];

/** Filler words stripped so near-duplicates share one key. */
const STOPWORDS_RAW = [
  "пожалуйста",
  "просто",
  "скажи",
  "подскажи",
  "объясни",
  "расскажи",
  "мне",
  "please",
  "just",
  "tell",
  "explain",
  "me",
  "can",
  "you",
  "could",
  "would",
  "favor",
  "explica",
  "dime",
  "и",
  "а",
  "the",
  "a",
];

function fold(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const STOPWORDS = new Set(STOPWORDS_RAW.map((w) => fold(w)));

/**
 * Normalize a user question into a stable shared cache key.
 */
export function normalizeQuery(query: string): string {
  let q = fold(query.toLowerCase().trim());
  q = q.replace(/[^\p{L}\p{N}\s]/gu, " ");
  q = q
    .split(/\s+/)
    .filter((w) => w.length > 0 && !STOPWORDS.has(w))
    .join(" ")
    .trim();
  return q;
}

/** FNV-1a hash → hex string. */
function hash(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, "0");
}

function buildCacheKey(
  query: string,
  level: Level | null,
  courseId?: string | null,
  interfaceLanguage?: InterfaceLanguage | null,
): { norm: string; queryHash: string } {
  const norm = normalizeQuery(query);
  const queryHash = hash(
    [
      norm,
      level ?? "any",
      courseId ?? "spanish",
      interfaceLanguage ?? "ru",
    ].join("|"),
  );
  return { norm, queryHash };
}

/** Should this query enter the shared cross-user cache? */
export function isCacheable(query: string): boolean {
  const raw = query.toLowerCase().trim();
  const norm = normalizeQuery(query);
  if (norm.length < MIN_QUERY_LEN || norm.length > MAX_QUERY_LEN) return false;
  return !NON_CACHEABLE.some((kw) => raw.includes(kw) || norm.includes(kw));
}

/**
 * Prefer service-role so cache read/write works reliably across users
 * (shared table; not user-scoped data).
 */
async function getCacheClient(): Promise<SupabaseClient> {
  const admin = createSupabaseAdminClient();
  if (admin) return admin;
  return createSupabaseServerClient();
}

/**
 * Look up a shared cached answer. Hit = no LLM tokens.
 */
export async function getCachedTutorResponse(
  query: string,
  level: Level | null,
  courseId?: string | null,
  interfaceLanguage?: InterfaceLanguage | null,
  /** @deprecated Ignored — kept so old call sites compile. Shared FAQ must not key on progress. */
  _progressFingerprint?: string | null,
): Promise<string | null> {
  void _progressFingerprint;
  if (!isCacheable(query)) return null;

  const { queryHash } = buildCacheKey(
    query,
    level,
    courseId,
    interfaceLanguage,
  );

  try {
    const supabase = await getCacheClient();
    const cutoff = new Date(Date.now() - TTL_HOURS * 3600_000).toISOString();

    const { data, error } = await supabase
      .from("tutor_cache")
      .select("id, response, created_at")
      .eq("query_hash", queryHash)
      .gte("created_at", cutoff)
      .maybeSingle();

    if (error || !data) return null;

    void supabase.rpc("bump_tutor_cache", { p_id: data.id });

    return data.response as string;
  } catch {
    return null;
  }
}

/**
 * Store an answer for other users (and future sessions) to reuse.
 */
export async function setCachedTutorResponse(
  query: string,
  level: Level | null,
  response: string,
  courseId?: string | null,
  interfaceLanguage?: InterfaceLanguage | null,
  /** @deprecated Ignored — shared cache is progress-agnostic. */
  _progressFingerprint?: string | null,
): Promise<void> {
  void _progressFingerprint;
  if (!isCacheable(query) || !response.trim()) return;
  // Don't cache infra / outage messages.
  if (response.startsWith("⚠️") || response.startsWith("😔")) return;

  const { norm, queryHash } = buildCacheKey(
    query,
    level,
    courseId,
    interfaceLanguage,
  );

  try {
    const supabase = await getCacheClient();
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

/**
 * Only reuse shared cache for standalone FAQ turns.
 * Multi-turn dialogue depends on prior context — must hit the LLM.
 */
export function shouldUseSharedTutorCache(messages: { role: string }[]): boolean {
  const userTurns = messages.filter((m) => m.role === "user").length;
  return userTurns <= 1;
}
