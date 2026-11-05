-- Optional columns for personal dictionary morph notes (RKI / all courses).
-- Safe to re-run. course_id already added in multicourse-migration.sql.

ALTER TABLE public.vocabulary
  ADD COLUMN IF NOT EXISTS notes text;

ALTER TABLE public.vocabulary
  ADD COLUMN IF NOT EXISTS part_of_speech text;

COMMENT ON COLUMN public.vocabulary.notes IS
  'Free-form grammar notes: gender, aspect, case forms, government, etc.';
COMMENT ON COLUMN public.vocabulary.part_of_speech IS
  'Optional POS label (noun, verb, adjective, …).';
