-- =====================================================================
-- Legal consent fields on profiles
-- Run in Supabase SQL Editor after deploying legal/compliance features.
-- =====================================================================

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS terms_accepted_at timestamptz,
  ADD COLUMN IF NOT EXISTS privacy_accepted_at timestamptz,
  ADD COLUMN IF NOT EXISTS marketing_consent boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS marketing_consent_at timestamptz;

COMMENT ON COLUMN public.profiles.terms_accepted_at IS 'User accepted Terms of Service';
COMMENT ON COLUMN public.profiles.privacy_accepted_at IS 'User accepted Privacy Policy';
COMMENT ON COLUMN public.profiles.marketing_consent IS 'Optional marketing / product updates consent';

-- Copy consent + role from auth metadata when profile is created (new signups).
-- Keep in sync with signup-role-trigger.sql (role must not be dropped).
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  meta_role text;
  resolved_role public.user_role;
BEGIN
  meta_role := lower(COALESCE(NEW.raw_user_meta_data->>'role', 'student'));
  IF meta_role = 'teacher' THEN
    resolved_role := 'teacher';
  ELSE
    resolved_role := 'student';
  END IF;

  INSERT INTO public.profiles (
    id,
    email,
    name,
    role,
    onboarded,
    terms_accepted_at,
    privacy_accepted_at,
    marketing_consent,
    marketing_consent_at
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(
      NULLIF(NEW.raw_user_meta_data->>'name', ''),
      NULLIF(NEW.raw_user_meta_data->>'full_name', ''),
      NULLIF(NEW.raw_user_meta_data->>'user_name', ''),
      split_part(NEW.email, '@', 1)
    ),
    resolved_role,
    CASE WHEN resolved_role = 'teacher' THEN true ELSE false END,
    CASE
      WHEN NEW.raw_user_meta_data->>'terms_accepted_at' IS NOT NULL
      THEN (NEW.raw_user_meta_data->>'terms_accepted_at')::timestamptz
      ELSE NULL
    END,
    CASE
      WHEN NEW.raw_user_meta_data->>'privacy_accepted_at' IS NOT NULL
      THEN (NEW.raw_user_meta_data->>'privacy_accepted_at')::timestamptz
      ELSE NULL
    END,
    COALESCE((NEW.raw_user_meta_data->>'marketing_consent')::boolean, false),
    CASE
      WHEN NEW.raw_user_meta_data->>'marketing_consent_at' IS NOT NULL
      THEN (NEW.raw_user_meta_data->>'marketing_consent_at')::timestamptz
      ELSE NULL
    END
  )
  ON CONFLICT (id) DO UPDATE SET
    role = EXCLUDED.role,
    onboarded = CASE
      WHEN EXCLUDED.role = 'teacher' THEN true
      ELSE public.profiles.onboarded
    END,
    terms_accepted_at = COALESCE(public.profiles.terms_accepted_at, EXCLUDED.terms_accepted_at),
    privacy_accepted_at = COALESCE(public.profiles.privacy_accepted_at, EXCLUDED.privacy_accepted_at),
    marketing_consent = EXCLUDED.marketing_consent,
    marketing_consent_at = COALESCE(public.profiles.marketing_consent_at, EXCLUDED.marketing_consent_at);
  RETURN NEW;
END;
$$;
