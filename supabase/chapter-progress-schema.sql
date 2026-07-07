-- =====================================================================
-- MVP: Extend learning_progress for the chapter system
-- Run AFTER schema.sql. Adds chapter tracking columns to the existing
-- (currently unused) learning_progress table.
-- =====================================================================

-- Add columns for chapter-based learning (idempotent — DO blocks)
DO $$ BEGIN
  ALTER TABLE public.learning_progress ADD COLUMN IF NOT EXISTS chapter_slug text;
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

DO $$ BEGIN
  ALTER TABLE public.learning_progress ADD COLUMN IF NOT EXISTS started_at timestamptz;
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

DO $$ BEGIN
  ALTER TABLE public.learning_progress ADD COLUMN IF NOT EXISTS completed_at timestamptz;
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

DO $$ BEGIN
  ALTER TABLE public.learning_progress ADD COLUMN IF NOT EXISTS words_learned integer DEFAULT 0;
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

DO $$ BEGIN
  ALTER TABLE public.learning_progress ADD COLUMN IF NOT EXISTS exercises_completed integer DEFAULT 0;
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

-- Index for fast chapter lookups per user
CREATE INDEX IF NOT EXISTS idx_learning_progress_chapter
  ON public.learning_progress(user_id, chapter_slug);

-- Ensure one row per (user, chapter) pair
DO $$ BEGIN
  CREATE UNIQUE INDEX IF NOT EXISTS idx_learning_progress_user_chapter
    ON public.learning_progress(user_id, chapter_slug)
    WHERE chapter_slug IS NOT NULL;
EXCEPTION WHEN duplicate_table THEN NULL; END $$;
