-- =====================================================================
-- Teacher Studio — Stage 7: assignments + notifications
-- ---------------------------------------------------------------------
-- Soft delete: deleted_at IS NULL = live.
-- source: teacher | ai (AI homework only after teacher confirm — ADR).
-- Apply after teacher-links-migration.sql
-- =====================================================================

DO $$ BEGIN
  CREATE TYPE public.teacher_assignment_kind AS ENUM ('chapter', 'exercise_set');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.teacher_assignment_status AS ENUM ('assigned', 'completed', 'cancelled');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.teacher_assignment_source AS ENUM ('teacher', 'ai');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.teacher_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  student_id uuid NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  group_id uuid NULL REFERENCES public.teacher_groups(id) ON DELETE SET NULL,
  course_id text NOT NULL DEFAULT 'spanish',
  kind public.teacher_assignment_kind NOT NULL,
  source public.teacher_assignment_source NOT NULL DEFAULT 'teacher',
  payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  due_at timestamptz NULL,
  status public.teacher_assignment_status NOT NULL DEFAULT 'assigned',
  created_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz NULL,
  deleted_at timestamptz NULL,
  CONSTRAINT teacher_assignments_target CHECK (
    student_id IS NOT NULL OR group_id IS NOT NULL
  )
);

CREATE INDEX IF NOT EXISTS idx_teacher_assignments_teacher
  ON public.teacher_assignments(teacher_id)
  WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_teacher_assignments_student
  ON public.teacher_assignments(student_id)
  WHERE deleted_at IS NULL AND student_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_teacher_assignments_status
  ON public.teacher_assignments(status)
  WHERE deleted_at IS NULL;

CREATE TABLE IF NOT EXISTS public.notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  type text NOT NULL,
  payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  read_at timestamptz NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz NULL
);

CREATE INDEX IF NOT EXISTS idx_notifications_user
  ON public.notifications(user_id, created_at DESC)
  WHERE deleted_at IS NULL;

ALTER TABLE public.teacher_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Cross-user access via service role in Teacher/Student APIs.
DROP POLICY IF EXISTS teacher_assignments_teacher ON public.teacher_assignments;
CREATE POLICY teacher_assignments_teacher ON public.teacher_assignments
  FOR ALL USING (auth.uid() = teacher_id)
  WITH CHECK (auth.uid() = teacher_id);

DROP POLICY IF EXISTS teacher_assignments_student_select ON public.teacher_assignments;
CREATE POLICY teacher_assignments_student_select ON public.teacher_assignments
  FOR SELECT USING (auth.uid() = student_id);

DROP POLICY IF EXISTS teacher_assignments_student_update ON public.teacher_assignments;
CREATE POLICY teacher_assignments_student_update ON public.teacher_assignments
  FOR UPDATE USING (auth.uid() = student_id);

DROP POLICY IF EXISTS notifications_own ON public.notifications;
CREATE POLICY notifications_own ON public.notifications
  FOR ALL USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
