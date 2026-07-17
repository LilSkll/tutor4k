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

-- Copy consent from auth metadata when profile is created (new signups).
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    name,
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
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;
