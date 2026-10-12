-- =====================================================================
-- ONE-SHOT production security (paste into Supabase SQL Editor → Run)
-- =====================================================================
-- Re-applies fixed profile protect triggers + invite RPC execute grants.
-- Safe to re-run. Fixes SECURITY DEFINER bypass via current_user=postgres.
-- =====================================================================

-- ---------- protect-profiles-role ----------
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

  IF claims IS NULL OR claims = '' THEN
    RETURN NEW;
  END IF;

  jwt_role := coalesce(claims::json ->> 'role', '');
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

-- ---------- protect-profiles-stats ----------
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

  IF claims IS NULL OR claims = '' THEN
    RETURN NEW;
  END IF;

  jwt_role := coalesce(claims::json ->> 'role', '');
  IF jwt_role = 'service_role' THEN
    RETURN NEW;
  END IF;

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

-- ---------- invite RPC: service_role only ----------
REVOKE ALL ON FUNCTION public.accept_teacher_invite(uuid, text, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.accept_teacher_invite(uuid, text, uuid) FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION public.accept_teacher_invite(uuid, text, uuid) TO service_role;

-- ---------- verification (read results) ----------
SELECT tgname, tgenabled
FROM pg_trigger
WHERE tgrelid = 'public.profiles'::regclass
  AND NOT tgisinternal
ORDER BY tgname;

SELECT
  p.proname,
  pg_get_function_identity_arguments(p.oid) AS args,
  r.rolname AS grantee,
  has_function_privilege(r.oid, p.oid, 'EXECUTE') AS can_execute
FROM pg_proc p
JOIN pg_namespace n ON n.oid = p.pronamespace
CROSS JOIN pg_roles r
WHERE n.nspname = 'public'
  AND p.proname = 'accept_teacher_invite'
  AND r.rolname IN ('anon', 'authenticated', 'service_role')
ORDER BY r.rolname;
