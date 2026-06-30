-- =====================================================================
-- DIAGNOSE + FIX: profile creation trigger and progress recording
-- Run this in the Supabase SQL Editor to fix the "progress not saving"
-- bug. The root cause is almost certainly that the handle_new_user
-- trigger is missing or broken, so no profile row is created on signup,
-- which means recordStudySession() has nothing to update.
-- =====================================================================

-- ---------- 1. DIAGNOSE: what exists? --------------------------------

-- Show the trigger status.
SELECT
  tgname AS trigger_name,
  tgrelid::regclass AS table_name,
  tgenabled AS enabled
FROM pg_trigger
WHERE tgname = 'on_auth_user_created';

-- Show the function status.
SELECT proname, prosrc IS NOT NULL AS has_body
FROM pg_proc
WHERE proname = 'handle_new_user';

-- Count auth users (real signups).
SELECT count(*) AS total_auth_users FROM auth.users;

-- Count profiles (should match auth users if trigger works).
SELECT count(*) AS total_profiles FROM public.profiles;

-- ---------- 2. RECREATE the trigger function (robust version) --------

-- Drop and recreate the function with a bulletproof body that handles:
--  - users without raw_user_meta_data
--  - duplicate inserts (ON CONFLICT)
--  - the email field from auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(
      NULLIF(NEW.raw_user_meta_data->>'name', ''),
      NULLIF(NEW.raw_user_meta_data->>'full_name', ''),
      NULLIF(NEW.raw_user_meta_data->>'user_name', ''),
      split_part(NEW.email, '@', 1)
    )
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

-- ---------- 3. RECREATE the trigger ----------------------------------

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ---------- 4. BACKFILL missing profiles ----------------------------
-- Create a profile for every auth user that is missing one. This fixes
-- users who signed up before the trigger was working.
INSERT INTO public.profiles (id, email, name)
SELECT
  u.id,
  u.email,
  COALESCE(
    NULLIF(u.raw_user_meta_data->>'name', ''),
    NULLIF(u.raw_user_meta_data->>'full_name', ''),
    split_part(u.email, '@', 1)
  )
FROM auth.users u
LEFT JOIN public.profiles p ON p.id = u.id
WHERE p.id IS NULL
ON CONFLICT (id) DO NOTHING;

-- ---------- 5. VERIFY -----------------------------------------------

SELECT count(*) AS profiles_after_backfill FROM public.profiles;

-- ---------- 6. ENSURE RLS policies allow progress writes -------------
-- (re-applied defensively; harmless if already present)

-- daily_activity: authenticated users can read + insert + update their own
DROP POLICY IF EXISTS "daily_activity_select_own" ON public.daily_activity;
CREATE POLICY "daily_activity_select_own" ON public.daily_activity
  FOR SELECT TO authenticated USING (public.is_owner(user_id));
DROP POLICY IF EXISTS "daily_activity_insert_own" ON public.daily_activity;
CREATE POLICY "daily_activity_insert_own" ON public.daily_activity
  FOR INSERT TO authenticated WITH CHECK (public.is_owner(user_id));
DROP POLICY IF EXISTS "daily_activity_update_own" ON public.daily_activity;
CREATE POLICY "daily_activity_update_own" ON public.daily_activity
  FOR UPDATE TO authenticated USING (public.is_owner(user_id));

-- exercises_history: authenticated users can read + insert their own
DROP POLICY IF EXISTS "exercises_history_select_own" ON public.exercises_history;
CREATE POLICY "exercises_history_select_own" ON public.exercises_history
  FOR SELECT TO authenticated USING (public.is_owner(user_id));
DROP POLICY IF EXISTS "exercises_history_insert_own" ON public.exercises_history;
CREATE POLICY "exercises_history_insert_own" ON public.exercises_history
  FOR INSERT TO authenticated WITH CHECK (public.is_owner(user_id));

-- chat tables: read + insert
DROP POLICY IF EXISTS "chat_conversations_select_own" ON public.chat_conversations;
CREATE POLICY "chat_conversations_select_own" ON public.chat_conversations
  FOR SELECT TO authenticated USING (public.is_owner(user_id));
DROP POLICY IF EXISTS "chat_conversations_insert_own" ON public.chat_conversations;
CREATE POLICY "chat_conversations_insert_own" ON public.chat_conversations
  FOR INSERT TO authenticated WITH CHECK (public.is_owner(user_id));
DROP POLICY IF EXISTS "chat_conversations_update_own" ON public.chat_conversations;
CREATE POLICY "chat_conversations_update_own" ON public.chat_conversations
  FOR UPDATE TO authenticated USING (public.is_owner(user_id));

DROP POLICY IF EXISTS "chat_messages_select_own" ON public.chat_messages;
CREATE POLICY "chat_messages_select_own" ON public.chat_messages
  FOR SELECT TO authenticated USING (
    EXISTS (
      SELECT 1 FROM public.chat_conversations c
      WHERE c.id = chat_messages.conversation_id
        AND public.is_owner(c.user_id)
    )
  );
DROP POLICY IF EXISTS "chat_messages_insert_own" ON public.chat_messages;
CREATE POLICY "chat_messages_insert_own" ON public.chat_messages
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.chat_conversations c
      WHERE c.id = chat_messages.conversation_id
        AND public.is_owner(c.user_id)
    )
  );
