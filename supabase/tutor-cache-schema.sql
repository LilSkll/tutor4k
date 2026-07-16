-- =====================================================================
-- Shared tutor response cache (SAFE first-run script)
-- ---------------------------------------------------------------------
-- Creates table + indexes + RLS policies + bump helper.
-- Does NOT drop tables, does NOT delete user data, does NOT touch
-- profiles / chat / progress.
--
-- Safe to run in Supabase SQL Editor. If something already exists,
-- IF NOT EXISTS / exception handlers skip it.
-- =====================================================================

-- 1) Table
CREATE TABLE IF NOT EXISTS public.tutor_cache (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  query_hash       text        NOT NULL,
  normalized_query text        NOT NULL,
  level            user_level,
  response         text        NOT NULL,
  hit_count        integer     NOT NULL DEFAULT 1,
  created_at       timestamptz NOT NULL DEFAULT now(),
  last_hit_at      timestamptz NOT NULL DEFAULT now()
);

-- 2) Unique indexes (one cached answer per hash + level)
CREATE UNIQUE INDEX IF NOT EXISTS idx_tutor_cache_query_level
  ON public.tutor_cache(query_hash)
  WHERE level IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS idx_tutor_cache_query_level_l
  ON public.tutor_cache(query_hash, level);

-- 3) RLS — shared FAQ cache, readable/writable by logged-in users
ALTER TABLE public.tutor_cache ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'tutor_cache'
      AND policyname = 'tutor_cache_select_auth'
  ) THEN
    CREATE POLICY "tutor_cache_select_auth" ON public.tutor_cache
      FOR SELECT TO authenticated USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'tutor_cache'
      AND policyname = 'tutor_cache_insert_auth'
  ) THEN
    CREATE POLICY "tutor_cache_insert_auth" ON public.tutor_cache
      FOR INSERT TO authenticated WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'tutor_cache'
      AND policyname = 'tutor_cache_update_auth'
  ) THEN
    CREATE POLICY "tutor_cache_update_auth" ON public.tutor_cache
      FOR UPDATE TO authenticated USING (true);
  END IF;
END $$;

-- 4) Hit counter (called when a cached answer is reused)
CREATE OR REPLACE FUNCTION public.bump_tutor_cache(p_id uuid)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.tutor_cache
  SET hit_count = hit_count + 1,
      last_hit_at = now()
  WHERE id = p_id;
$$;

-- Optional later (NOT included here to avoid "destructive" warning):
-- CREATE FUNCTION purge_old_tutor_cache(...) — only run manually when you
-- want to clean stale cache rows. It never touches user progress/chat.
