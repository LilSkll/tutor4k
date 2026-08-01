-- =====================================================================
-- Teacher Studio — Stage 6: teacher_ai_reports (AI analysis cache)
-- ---------------------------------------------------------------------
-- No teacher_id (ADR-002). Soft delete via deleted_at only.
-- source_fingerprint: varchar(64) SHA-256 hex (ADR-003).
-- locale: interface language of the report text (ru|en|es|de).
-- Apply after teacher-links-migration.sql
-- =====================================================================

CREATE TABLE IF NOT EXISTS public.teacher_ai_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id text NOT NULL DEFAULT 'spanish',
  locale text NOT NULL DEFAULT 'en',
  generated_at timestamptz NOT NULL DEFAULT now(),
  summary text NOT NULL DEFAULT '',
  recommendations jsonb NOT NULL DEFAULT '[]'::jsonb,
  weak_topics jsonb NOT NULL DEFAULT '[]'::jsonb,
  next_steps jsonb NOT NULL DEFAULT '[]'::jsonb,
  source_fingerprint varchar(64) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_teacher_ai_reports_live
  ON public.teacher_ai_reports(student_id, course_id, locale)
  WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_teacher_ai_reports_student
  ON public.teacher_ai_reports(student_id, course_id)
  WHERE deleted_at IS NULL;

ALTER TABLE public.teacher_ai_reports ENABLE ROW LEVEL SECURITY;

-- Reads/writes go through service role in Teacher API (authz via teacher_students).
-- No broad authenticated policies — avoids leaking student analysis.
DROP POLICY IF EXISTS teacher_ai_reports_deny_all ON public.teacher_ai_reports;
-- Intentionally no authenticated policies; service_role bypasses RLS.
