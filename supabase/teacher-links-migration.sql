-- =====================================================================
-- Teacher Studio — Stage 3: invites + teacher_students
-- ---------------------------------------------------------------------
-- Soft delete: deleted_at IS NULL = live. No is_deleted column.
-- Apply after teacher-role-migration.sql
-- =====================================================================

-- ---------- enums ----------------------------------------------------

DO $$ BEGIN
  CREATE TYPE public.teacher_student_role AS ENUM ('student', 'trial', 'alumni');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.teacher_link_status AS ENUM ('pending', 'active', 'revoked');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.teacher_link_created_by AS ENUM ('teacher', 'school_admin', 'system');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.teacher_invite_status AS ENUM ('open', 'closed');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- ---------- teacher_groups (scaffold; UI later) ----------------------

CREATE TABLE IF NOT EXISTS public.teacher_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  school_id uuid NULL,
  name text NOT NULL DEFAULT 'Group',
  course_id text NOT NULL DEFAULT 'spanish',
  created_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz NULL
);

CREATE INDEX IF NOT EXISTS idx_teacher_groups_teacher
  ON public.teacher_groups(teacher_id)
  WHERE deleted_at IS NULL;

-- ---------- teacher_invites ------------------------------------------

CREATE TABLE IF NOT EXISTS public.teacher_invites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  group_id uuid NULL REFERENCES public.teacher_groups(id) ON DELETE SET NULL,
  course_id text NOT NULL DEFAULT 'spanish',
  code text NOT NULL,
  token uuid NOT NULL DEFAULT gen_random_uuid(),
  max_uses integer NULL,
  uses_count integer NOT NULL DEFAULT 0,
  expires_at timestamptz NULL,
  status public.teacher_invite_status NOT NULL DEFAULT 'open',
  created_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_teacher_invites_code_live
  ON public.teacher_invites(code)
  WHERE deleted_at IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS uq_teacher_invites_token_live
  ON public.teacher_invites(token)
  WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_teacher_invites_teacher
  ON public.teacher_invites(teacher_id)
  WHERE deleted_at IS NULL;

-- ---------- teacher_students -----------------------------------------

CREATE TABLE IF NOT EXISTS public.teacher_students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  student_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  group_id uuid NULL REFERENCES public.teacher_groups(id) ON DELETE SET NULL,
  course_id text NOT NULL DEFAULT 'spanish',
  role public.teacher_student_role NOT NULL DEFAULT 'student',
  status public.teacher_link_status NOT NULL DEFAULT 'pending',
  created_by public.teacher_link_created_by NOT NULL DEFAULT 'teacher',
  invited_at timestamptz NOT NULL DEFAULT now(),
  accepted_at timestamptz NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz NULL,
  CONSTRAINT teacher_students_no_self CHECK (teacher_id <> student_id)
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_teacher_students_active
  ON public.teacher_students(teacher_id, student_id, course_id)
  WHERE deleted_at IS NULL AND status = 'active';

CREATE INDEX IF NOT EXISTS idx_teacher_students_teacher
  ON public.teacher_students(teacher_id)
  WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_teacher_students_student
  ON public.teacher_students(student_id)
  WHERE deleted_at IS NULL;

-- ---------- RLS: own rows only (cross-user reads via server/service role)

ALTER TABLE public.teacher_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_invites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_students ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS teacher_groups_own ON public.teacher_groups;
CREATE POLICY teacher_groups_own ON public.teacher_groups
  FOR ALL USING (auth.uid() = teacher_id)
  WITH CHECK (auth.uid() = teacher_id);

DROP POLICY IF EXISTS teacher_invites_own ON public.teacher_invites;
CREATE POLICY teacher_invites_own ON public.teacher_invites
  FOR ALL USING (auth.uid() = teacher_id)
  WITH CHECK (auth.uid() = teacher_id);

DROP POLICY IF EXISTS teacher_students_teacher ON public.teacher_students;
CREATE POLICY teacher_students_teacher ON public.teacher_students
  FOR ALL USING (auth.uid() = teacher_id)
  WITH CHECK (auth.uid() = teacher_id);

DROP POLICY IF EXISTS teacher_students_student_select ON public.teacher_students;
CREATE POLICY teacher_students_student_select ON public.teacher_students
  FOR SELECT USING (auth.uid() = student_id);

DROP POLICY IF EXISTS teacher_students_student_update ON public.teacher_students;
CREATE POLICY teacher_students_student_update ON public.teacher_students
  FOR UPDATE USING (auth.uid() = student_id);
