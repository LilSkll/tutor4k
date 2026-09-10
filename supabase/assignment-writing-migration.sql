-- =====================================================================
-- Writing homework: letters / essays (no auto AI grade)
-- Apply in Supabase SQL editor after teacher-assignments-migration.sql
-- =====================================================================

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_enum e
    JOIN pg_type t ON t.oid = e.enumtypid
    WHERE t.typname = 'teacher_assignment_kind'
      AND e.enumlabel = 'writing'
  ) THEN
    ALTER TYPE public.teacher_assignment_kind ADD VALUE 'writing';
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.assignment_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id uuid NOT NULL UNIQUE
    REFERENCES public.teacher_assignments(id) ON DELETE CASCADE,
  student_id uuid NOT NULL
    REFERENCES public.profiles(id) ON DELETE CASCADE,
  body text NOT NULL CHECK (char_length(body) > 0 AND char_length(body) <= 20000),
  submitted_at timestamptz NOT NULL DEFAULT now(),
  ai_analysis text NULL,
  ai_analyzed_at timestamptz NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_assignment_submissions_student
  ON public.assignment_submissions(student_id);

CREATE INDEX IF NOT EXISTS idx_assignment_submissions_assignment
  ON public.assignment_submissions(assignment_id);

ALTER TABLE public.assignment_submissions ENABLE ROW LEVEL SECURITY;

-- Cross-user access goes through service-role APIs (same pattern as assignments).
DROP POLICY IF EXISTS assignment_submissions_deny_all ON public.assignment_submissions;
CREATE POLICY assignment_submissions_deny_all ON public.assignment_submissions
  FOR ALL USING (false) WITH CHECK (false);
