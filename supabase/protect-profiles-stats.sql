-- =====================================================================
-- Protect forgeable profile stats / journey fields from client UPDATE
-- =====================================================================
-- Complements protect-profiles-role.sql. Learners may still update name,
-- interface_language, active_course_id, etc. via their own UPDATE policy;
-- privileged counters are restored unless the caller is service_role.
-- =====================================================================

CREATE OR REPLACE FUNCTION public.protect_profiles_stats()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  jwt_role text;
BEGIN
  BEGIN
    jwt_role := coalesce(
      auth.jwt() ->> 'role',
      current_setting('request.jwt.claim.role', true)
    );
  EXCEPTION WHEN OTHERS THEN
    jwt_role := NULL;
  END;

  IF jwt_role IN ('service_role', 'postgres') OR current_user IN ('postgres', 'supabase_admin') THEN
    RETURN NEW;
  END IF;

  IF TG_OP = 'UPDATE' THEN
    NEW.streak := OLD.streak;
    NEW.last_active_date := OLD.last_active_date;
    NEW.journey_finds := OLD.journey_finds;
    NEW.learning_profile := OLD.learning_profile;
    -- CEFR band on profile is set by server progress flows, not the client.
    NEW.level := OLD.level;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_protect_profiles_stats ON public.profiles;
CREATE TRIGGER trg_protect_profiles_stats
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profiles_stats();

COMMENT ON FUNCTION public.protect_profiles_stats() IS
  'Blocks client UPDATEs to streak/journey/learning_profile/level; service_role only.';
