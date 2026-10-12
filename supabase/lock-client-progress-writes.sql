-- =====================================================================
-- Lock client writes on progress / history / shared tutor cache
-- =====================================================================
-- Learners may SELECT their own rows; all mutations go through the
-- Next.js server with SUPABASE_SERVICE_ROLE_KEY.
--
-- Apply in Supabase SQL editor (or migration pipeline) AFTER
-- exercise-progress-schema.sql and tutor-cache-schema.sql.
-- Requires SERVICE_ROLE on the app for progress writes.
-- =====================================================================

-- learning_progress: read own, no client write/delete
DROP POLICY IF EXISTS "learning_progress_insert_own" ON public.learning_progress;
DROP POLICY IF EXISTS "learning_progress_update_own" ON public.learning_progress;
DROP POLICY IF EXISTS "learning_progress_delete_own" ON public.learning_progress;

-- exercise_progress
DROP POLICY IF EXISTS "exercise_progress_insert_own" ON public.exercise_progress;
DROP POLICY IF EXISTS "exercise_progress_update_own" ON public.exercise_progress;
DROP POLICY IF EXISTS "exercise_progress_delete_own" ON public.exercise_progress;

-- daily_activity
DROP POLICY IF EXISTS "daily_activity_insert_own" ON public.daily_activity;
DROP POLICY IF EXISTS "daily_activity_update_own" ON public.daily_activity;
DROP POLICY IF EXISTS "daily_activity_delete_own" ON public.daily_activity;

-- exercises_history: insert was client-forgeable for homework gates
DROP POLICY IF EXISTS "exercises_history_insert_own" ON public.exercises_history;
DROP POLICY IF EXISTS "exercises_history_update_own" ON public.exercises_history;
DROP POLICY IF EXISTS "exercises_history_delete_own" ON public.exercises_history;

-- Shared FAQ cache must not be poisonable by any authenticated user
DROP POLICY IF EXISTS "tutor_cache_insert_auth" ON public.tutor_cache;
DROP POLICY IF EXISTS "tutor_cache_update_auth" ON public.tutor_cache;
DROP POLICY IF EXISTS "tutor_cache_delete_auth" ON public.tutor_cache;

-- Keep SELECT for authenticated FAQ hits (optional; server prefers admin).
-- If the select policy is missing, recreate read-only:
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
END $$;

-- Speed up chapter-complete gate: equality on chapter segment in exercise_id
-- IDs look like "<course>:<chapterSlug>:<n>" — prefix search still needs LIKE,
-- but an expression index helps common patterns when chapter_slug is extracted.
CREATE INDEX IF NOT EXISTS idx_exercise_progress_user_course_seen
  ON public.exercise_progress(user_id, course_id)
  WHERE times_seen > 0;

COMMENT ON TABLE public.learning_progress IS
  'Server-owned chapter progress; clients have SELECT-only RLS.';
COMMENT ON TABLE public.exercise_progress IS
  'Server-owned attempt counters; clients have SELECT-only RLS.';
