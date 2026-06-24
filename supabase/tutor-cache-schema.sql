-- =====================================================================
-- AI Spanish Tutor — Shared tutor response cache
-- Run AFTER schema.sql. Stores identical tutor answers so that repeated
-- questions (e.g. 10 users asking "ser vs estar") hit ONE Groq call,
-- not ten. Cuts AI load 3-5x for popular grammar questions.
-- =====================================================================

-- ---------- tutor_cache table -------------------------------------

DO $$ BEGIN
  CREATE TABLE public.tutor_cache (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    query_hash      text        NOT NULL,   -- sha1(normalized_query + level)
    normalized_query text       NOT NULL,   -- for debugging / inspection
    level           user_level,             -- CEFR level (NULL = any)
    response        text        NOT NULL,   -- cached tutor answer
    hit_count       integer     NOT NULL DEFAULT 1,
    created_at      timestamptz NOT NULL DEFAULT now(),
    last_hit_at     timestamptz NOT NULL DEFAULT now()
  );
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

-- One row per (query, level) combination.
CREATE UNIQUE INDEX IF NOT EXISTS idx_tutor_cache_query_level
  ON public.tutor_cache(query_hash)
  WHERE level IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS idx_tutor_cache_query_level_l
  ON public.tutor_cache(query_hash, level);

-- ---------- RLS: readable + writable by all authenticated users ----
-- This is a SHARED cache (answers are identical for the same question),
-- so every logged-in user can read AND write. The content never reveals
-- personal data (questions are grammar/vocab, answers are generic).

ALTER TABLE public.tutor_cache ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "tutor_cache_select_auth" ON public.tutor_cache;
CREATE POLICY "tutor_cache_select_auth" ON public.tutor_cache
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "tutor_cache_insert_auth" ON public.tutor_cache;
CREATE POLICY "tutor_cache_insert_auth" ON public.tutor_cache
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "tutor_cache_update_auth" ON public.tutor_cache;
CREATE POLICY "tutor_cache_update_auth" ON public.tutor_cache
  FOR UPDATE TO authenticated USING (true);

-- ---------- Helper: bump hit count + last_hit_at -------------------

CREATE OR REPLACE FUNCTION public.bump_tutor_cache(p_id uuid)
RETURNS void LANGUAGE sql AS $$
  UPDATE public.tutor_cache
  SET hit_count = hit_count + 1, last_hit_at = now()
  WHERE id = p_id;
$$;

-- ---------- Helper: purge stale entries (run manually / cron) ------

CREATE OR REPLACE FUNCTION public.purge_old_tutor_cache(max_age_days integer DEFAULT 30)
RETURNS integer LANGUAGE sql AS $$
  WITH deleted AS (
    DELETE FROM public.tutor_cache
    WHERE last_hit_at < now() - (max_age_days || ' days')::interval
    RETURNING 1
  )
  SELECT count(*)::integer FROM deleted;
$$;
