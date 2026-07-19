-- =====================================================================
-- Permanent adaptive exercise bank — per-user progress tracking
-- Run in Supabase SQL Editor.
-- =====================================================================

-- Optional columns on attempt history (backward compatible).
ALTER TABLE public.exercises_history
  ADD COLUMN IF NOT EXISTS exercise_id text,
  ADD COLUMN IF NOT EXISTS course_id text;

CREATE INDEX IF NOT EXISTS idx_exercises_history_exercise_id
  ON public.exercises_history(user_id, exercise_id)
  WHERE exercise_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_exercises_history_course
  ON public.exercises_history(user_id, course_id)
  WHERE course_id IS NOT NULL;

-- Aggregated mastery stats for adaptive selection.
DO $$ BEGIN
  CREATE TABLE public.exercise_progress (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    course_id text NOT NULL DEFAULT 'spanish',
    exercise_id text NOT NULL,
    times_seen integer NOT NULL DEFAULT 0,
    times_correct integer NOT NULL DEFAULT 0,
    times_wrong integer NOT NULL DEFAULT 0,
    last_seen date,
    mastered boolean NOT NULL DEFAULT false,
    updated_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE (user_id, course_id, exercise_id)
  );
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

CREATE INDEX IF NOT EXISTS idx_exercise_progress_user_course
  ON public.exercise_progress(user_id, course_id);

ALTER TABLE public.exercise_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "exercise_progress_select_own" ON public.exercise_progress;
CREATE POLICY "exercise_progress_select_own" ON public.exercise_progress
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "exercise_progress_insert_own" ON public.exercise_progress;
CREATE POLICY "exercise_progress_insert_own" ON public.exercise_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "exercise_progress_update_own" ON public.exercise_progress;
CREATE POLICY "exercise_progress_update_own" ON public.exercise_progress
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "exercise_progress_delete_own" ON public.exercise_progress;
CREATE POLICY "exercise_progress_delete_own" ON public.exercise_progress
  FOR DELETE USING (auth.uid() = user_id);
