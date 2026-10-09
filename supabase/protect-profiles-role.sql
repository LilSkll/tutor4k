-- =====================================================================
-- Lock profiles.role against client self-promotion (student → teacher).
-- Apply in Supabase SQL editor after teacher-role-migration.sql.
-- Service-role / dashboard SQL can still change roles.
-- =====================================================================

CREATE OR REPLACE FUNCTION public.protect_profiles_role()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  jwt_role text;
BEGIN
  IF TG_OP = 'UPDATE' AND NEW.role IS DISTINCT FROM OLD.role THEN
    jwt_role := coalesce(
      auth.jwt() ->> 'role',
      current_setting('request.jwt.claim.role', true),
      ''
    );
    -- Allow service_role (admin client / SQL as postgres). Block authenticated.
    IF jwt_role IS DISTINCT FROM 'service_role' AND current_user IS DISTINCT FROM 'postgres' THEN
      RAISE EXCEPTION 'profiles.role cannot be changed by clients'
        USING ERRCODE = '42501';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS profiles_protect_role ON public.profiles;
CREATE TRIGGER profiles_protect_role
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profiles_role();

COMMENT ON FUNCTION public.protect_profiles_role() IS
  'Rejects client UPDATEs that change profiles.role; service_role / postgres only.';
