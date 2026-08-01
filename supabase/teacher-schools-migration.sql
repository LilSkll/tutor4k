-- =====================================================================
-- Teacher Studio — Stage 9: schools + school_members
-- ---------------------------------------------------------------------
-- Hierarchy: School → Teacher → Group → Students
-- Teachers can still work with school_id NULL (personal groups).
-- Soft delete: deleted_at IS NULL = live.
-- Apply after teacher-links-migration.sql
-- =====================================================================

DO $$ BEGIN
  CREATE TYPE public.school_member_role AS ENUM ('owner', 'admin', 'teacher');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.schools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_schools_slug_live
  ON public.schools(slug)
  WHERE deleted_at IS NULL;

CREATE TABLE IF NOT EXISTS public.school_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id uuid NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  member_role public.school_member_role NOT NULL DEFAULT 'teacher',
  created_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_school_members_live
  ON public.school_members(school_id, user_id)
  WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_school_members_user
  ON public.school_members(user_id)
  WHERE deleted_at IS NULL;

-- Wire teacher_groups.school_id → schools (was unbound uuid)
DO $$ BEGIN
  ALTER TABLE public.teacher_groups
    ADD CONSTRAINT teacher_groups_school_id_fkey
    FOREIGN KEY (school_id) REFERENCES public.schools(id) ON DELETE SET NULL;
EXCEPTION
  WHEN duplicate_object THEN NULL;
  WHEN undefined_column THEN NULL;
END $$;

ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_members ENABLE ROW LEVEL SECURITY;

-- Membership-scoped access; cross-school ops also via service role in APIs.
DROP POLICY IF EXISTS schools_member_select ON public.schools;
CREATE POLICY schools_member_select ON public.schools
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.school_members m
      WHERE m.school_id = schools.id
        AND m.user_id = auth.uid()
        AND m.deleted_at IS NULL
    )
  );

DROP POLICY IF EXISTS school_members_self_select ON public.school_members;
CREATE POLICY school_members_self_select ON public.school_members
  FOR SELECT USING (
    user_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public.school_members m
      WHERE m.school_id = school_members.school_id
        AND m.user_id = auth.uid()
        AND m.member_role IN ('owner', 'admin')
        AND m.deleted_at IS NULL
    )
  );
