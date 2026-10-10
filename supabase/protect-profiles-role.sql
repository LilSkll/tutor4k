-- =====================================================================
-- Lock profiles.role against client self-promotion (student → teacher).
-- Apply in Supabase SQL editor after teacher-role-migration.sql.
--
-- IMPORTANT: Do NOT allow via current_user=postgres — SECURITY DEFINER
-- triggers run as the owner (postgres), which previously bypassed the check.
-- Allow only: service_role JWT (Next.js admin) OR non-PostgREST SQL sessions.
-- =====================================================================

CREATE OR REPLACE FUNCTION public.protect_profiles_role()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  claims text;
  jwt_role text;
BEGIN
  IF TG_OP <> 'UPDATE' OR NEW.role IS NOT DISTINCT FROM OLD.role THEN
    RETURN NEW;
  END IF;

  BEGIN
    claims := current_setting('request.jwt.claims', true);
  EXCEPTION WHEN OTHERS THEN
    claims := NULL;
  END;

  -- Direct SQL (Dashboard / migrations): no PostgREST JWT → allow.
  IF claims IS NULL OR claims = '' THEN
    RETURN NEW;
  END IF;

  jwt_role := coalesce(claims::json ->> 'role', '');

  -- Next.js service-role client → allow.
  IF jwt_role = 'service_role' THEN
    RETURN NEW;
  END IF;

  RAISE EXCEPTION 'profiles.role cannot be changed by clients'
    USING ERRCODE = '42501';
END;
$$;

DROP TRIGGER IF EXISTS profiles_protect_role ON public.profiles;
CREATE TRIGGER profiles_protect_role
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profiles_role();

COMMENT ON FUNCTION public.protect_profiles_role() IS
  'Rejects PostgREST client UPDATEs that change profiles.role; service_role / SQL only.';
