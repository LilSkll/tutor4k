-- =====================================================================
-- Protect forgeable profile stats / journey fields from client UPDATE
-- =====================================================================
-- Complements protect-profiles-role.sql.
-- Same SECURITY DEFINER pitfall: never trust current_user=postgres.
-- =====================================================================

CREATE OR REPLACE FUNCTION public.protect_profiles_stats()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  claims text;
  jwt_role text;
BEGIN
  IF TG_OP <> 'UPDATE' THEN
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

  -- Authenticated / anon clients: restore privileged fields.
  NEW.streak := OLD.streak;
  NEW.last_active_date := OLD.last_active_date;
  NEW.journey_finds := OLD.journey_finds;
  NEW.learning_profile := OLD.learning_profile;
  NEW.level := OLD.level;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_protect_profiles_stats ON public.profiles;
CREATE TRIGGER trg_protect_profiles_stats
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profiles_stats();

COMMENT ON FUNCTION public.protect_profiles_stats() IS
  'Blocks PostgREST client UPDATEs to streak/journey/learning_profile/level.';
