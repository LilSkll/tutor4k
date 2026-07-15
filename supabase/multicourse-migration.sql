-- =====================================================================
-- Stage 2: Multi-course database migration
-- ---------------------------------------------------------------------
-- Adds course_id to all user-data tables. Existing data is backfilled
-- with course_id = 'spanish'. Spanish course continues to work.
--
-- Run this in Supabase SQL Editor.
-- =====================================================================

-- ---------- New table: courses -------------------------------------

DO $$ BEGIN
  CREATE TABLE public.courses (
    id            text PRIMARY KEY,
    language_code text NOT NULL,
    title         text NOT NULL,
    title_native  text,
    description   text,
    flag          text,
    prompt_id     text,
    is_active     boolean DEFAULT true,
    created_at    timestamptz DEFAULT now()
  );
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

-- Insert courses (idempotent)
INSERT INTO public.courses (id, language_code, title, title_native, description, flag, prompt_id)
VALUES ('spanish', 'es', 'Испанский язык', 'Español', 'Изучай испанский язык с ИИ-репетитором', '🇪🇸', 'spanish')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.courses (id, language_code, title, title_native, description, flag, prompt_id)
VALUES ('english', 'en', 'Английский язык', 'English', 'Learn English with AI tutor', '🇬🇧', 'english')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.courses (id, language_code, title, title_native, description, flag, prompt_id)
VALUES ('russian', 'ru', 'Русский язык', 'Русский', 'Изучай русский язык с ИИ', '🇷🇺', 'russian')
ON CONFLICT (id) DO NOTHING;

-- RLS: all authenticated users can read courses
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "courses_select_auth" ON public.courses;
CREATE POLICY "courses_select_auth" ON public.courses
  FOR SELECT TO authenticated USING (true);

-- ---------- Add course_id to user tables ---------------------------

-- profiles: track active course
DO $$ BEGIN
  ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS active_course_id text DEFAULT 'spanish';
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

-- learning_progress
DO $$ BEGIN
  ALTER TABLE public.learning_progress ADD COLUMN IF NOT EXISTS course_id text DEFAULT 'spanish';
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

-- exercises_history
DO $$ BEGIN
  ALTER TABLE public.exercises_history ADD COLUMN IF NOT EXISTS course_id text DEFAULT 'spanish';
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

-- vocabulary
DO $$ BEGIN
  ALTER TABLE public.vocabulary ADD COLUMN IF NOT EXISTS course_id text DEFAULT 'spanish';
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

-- daily_activity
DO $$ BEGIN
  ALTER TABLE public.daily_activity ADD COLUMN IF NOT EXISTS course_id text DEFAULT 'spanish';
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

-- chat_conversations
DO $$ BEGIN
  ALTER TABLE public.chat_conversations ADD COLUMN IF NOT EXISTS course_id text DEFAULT 'spanish';
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

-- knowledge_chunks
DO $$ BEGIN
  ALTER TABLE public.knowledge_chunks ADD COLUMN IF NOT EXISTS course_id text DEFAULT 'spanish';
EXCEPTION WHEN duplicate_column THEN NULL; END $$;

-- ---------- Backfill existing data ---------------------------------

UPDATE public.profiles SET active_course_id = 'spanish' WHERE active_course_id IS NULL;
UPDATE public.learning_progress SET course_id = 'spanish' WHERE course_id IS NULL;
UPDATE public.exercises_history SET course_id = 'spanish' WHERE course_id IS NULL;
UPDATE public.vocabulary SET course_id = 'spanish' WHERE course_id IS NULL;
UPDATE public.daily_activity SET course_id = 'spanish' WHERE course_id IS NULL;
UPDATE public.chat_conversations SET course_id = 'spanish' WHERE course_id IS NULL;
UPDATE public.knowledge_chunks SET course_id = 'spanish' WHERE course_id IS NULL;

-- ---------- Indexes for course filtering ---------------------------

CREATE INDEX IF NOT EXISTS idx_learning_progress_course ON public.learning_progress(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_exercises_history_course ON public.exercises_history(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_vocabulary_course ON public.vocabulary(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_daily_activity_course ON public.daily_activity(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_knowledge_chunks_course ON public.knowledge_chunks(course_id);
CREATE INDEX IF NOT EXISTS idx_chat_conversations_course ON public.chat_conversations(user_id, course_id);

-- ---------- Verify -------------------------------------------------

SELECT 'courses' as table_name, count(*) as rows FROM public.courses
UNION ALL
SELECT 'profiles with course', count(*) FROM public.profiles WHERE active_course_id IS NOT NULL
UNION ALL
SELECT 'learning_progress backfilled', count(*) FROM public.learning_progress WHERE course_id = 'spanish';
