-- =====================================================================
-- Teacher Studio — Stage 2: profiles.role
-- ---------------------------------------------------------------------
-- Apply in Supabase SQL editor (or CLI) before relying on Teacher Studio.
-- Promote a user manually:
--   UPDATE public.profiles SET role = 'teacher' WHERE email = 'you@example.com';
-- school_admin is reserved for Stage 9; same Studio access for now.
-- =====================================================================

DO $$ BEGIN
  CREATE TYPE public.user_role AS ENUM ('student', 'teacher', 'school_admin');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS role public.user_role NOT NULL DEFAULT 'student';

COMMENT ON COLUMN public.profiles.role IS
  'Platform role: student (Student Journey), teacher | school_admin (Teacher Studio).';

-- Existing rows already get DEFAULT 'student' via NOT NULL DEFAULT.
