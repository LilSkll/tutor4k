-- Journey finds: easter eggs, chapter badges, level/course certificates.
-- Safe to re-run. Stores per-user JSON keyed by courseId.
DO $$ BEGIN
  ALTER TABLE public.profiles
    ADD COLUMN IF NOT EXISTS journey_finds jsonb NOT NULL DEFAULT '{}'::jsonb;
EXCEPTION WHEN duplicate_column THEN NULL; END $$;
