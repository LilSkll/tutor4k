-- =====================================================================
-- Student Learning Profile (persistent cognitive model)
-- Extends profiles — no new tables.
-- Run in Supabase SQL Editor after base schema.
-- =====================================================================

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS learning_profile jsonb NOT NULL DEFAULT '{}'::jsonb;

COMMENT ON COLUMN public.profiles.learning_profile IS
  'Course-scoped StudentLearningProfile JSON: grammar/vocab evidence, skills, weaknesses, preferences, recommendations.';
