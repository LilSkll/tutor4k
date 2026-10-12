-- =====================================================================
-- Add C2 to user_level enum (chapter / exercise history support)
-- Apply in Supabase SQL editor. Safe to re-run.
-- =====================================================================

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_enum e
    JOIN pg_type t ON t.oid = e.enumtypid
    WHERE t.typname = 'user_level'
      AND e.enumlabel = 'C2'
  ) THEN
    ALTER TYPE public.user_level ADD VALUE 'C2';
  END IF;
END $$;
