-- =====================================================================
-- Signup role: handle_new_user reads role from auth metadata
-- Run AFTER teacher-role-migration.sql (profiles.role must exist).
-- Allowed self-serve values: student | teacher (never school_admin from signup).
-- =====================================================================

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
    -- Teachers skip Student Journey onboarding.
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
