-- =====================================================================
-- AI Spanish Tutor — Supabase schema
-- Postgres 15 compatible (uses DO blocks instead of CREATE TYPE IF NOT EXISTS).
-- Run this in the Supabase SQL editor.
-- =====================================================================

-- ---------- Enum types (safe create) -------------------------------

DO $$ BEGIN
  CREATE TYPE user_level AS ENUM ('A1', 'A2', 'B1', 'B2', 'C1');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE user_goal AS ENUM ('TRAVEL','WORK','RELOCATION','UNIVERSITY','DELE','GENERAL');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE interface_language AS ENUM ('ru', 'en', 'es');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE progress_status AS ENUM ('not_started','in_progress','completed');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE exercise_type AS ENUM ('multiple_choice','fill_blank','translation','error_correction','sentence_building');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- ---------- profiles ------------------------------------------------

DO $$ BEGIN
  CREATE TABLE public.profiles (
    id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email text NOT NULL,
    name text NOT NULL DEFAULT '',
    level user_level,
    goal user_goal,
    interface_language interface_language NOT NULL DEFAULT 'ru',
    daily_goal_minutes integer NOT NULL DEFAULT 15,
    onboarded boolean NOT NULL DEFAULT false,
    streak integer NOT NULL DEFAULT 0,
    last_active_date date,
    created_at timestamptz NOT NULL DEFAULT now()
  );
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

-- ---------- learning_progress --------------------------------------

DO $$ BEGIN
  CREATE TABLE public.learning_progress (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    topic text NOT NULL,
    level user_level NOT NULL,
    score integer NOT NULL DEFAULT 0,
    status progress_status NOT NULL DEFAULT 'not_started',
    created_at timestamptz NOT NULL DEFAULT now()
  );
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

-- ---------- vocabulary ---------------------------------------------

DO $$ BEGIN
  CREATE TABLE public.vocabulary (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    word text NOT NULL,
    translation text NOT NULL DEFAULT '',
    example text NOT NULL DEFAULT '',
    level user_level NOT NULL DEFAULT 'A1',
    created_at timestamptz NOT NULL DEFAULT now()
  );
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

-- ---------- exercises_history --------------------------------------

DO $$ BEGIN
  CREATE TABLE public.exercises_history (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    exercise text NOT NULL,
    exercise_type exercise_type NOT NULL,
    level user_level NOT NULL,
    user_answer text NOT NULL DEFAULT '',
    correct boolean NOT NULL DEFAULT false,
    feedback text NOT NULL DEFAULT '',
    created_at timestamptz NOT NULL DEFAULT now()
  );
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

-- ---------- chat history -------------------------------------------

DO $$ BEGIN
  CREATE TABLE public.chat_conversations (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title text NOT NULL DEFAULT 'Conversation',
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
  );
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

DO $$ BEGIN
  CREATE TABLE public.chat_messages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id uuid NOT NULL REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
    role text NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
    content text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
  );
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

-- ---------- daily_activity -----------------------------------------

DO $$ BEGIN
  CREATE TABLE public.daily_activity (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    activity_date date NOT NULL,
    lessons_completed integer NOT NULL DEFAULT 0,
    minutes_studied integer NOT NULL DEFAULT 0,
    UNIQUE (user_id, activity_date)
  );
EXCEPTION WHEN duplicate_table THEN NULL; END $$;

-- ---------- Indexes ------------------------------------------------

CREATE INDEX IF NOT EXISTS idx_learning_progress_user ON public.learning_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_vocabulary_user ON public.vocabulary(user_id);
CREATE INDEX IF NOT EXISTS idx_exercises_history_user ON public.exercises_history(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_conversations_user ON public.chat_conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_conversation ON public.chat_messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_daily_activity_user ON public.daily_activity(user_id, activity_date);

-- ---------- Row-Level Security -------------------------------------

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercises_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_activity ENABLE ROW LEVEL SECURITY;

-- ---------- Policies ------------------------------------------------

-- profiles
DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- helper function
CREATE OR REPLACE FUNCTION private.is_owner(user_uuid uuid)
RETURNS boolean LANGUAGE sql STABLE AS $$
  SELECT auth.uid() = user_uuid;
$$;

-- learning_progress
DROP POLICY IF EXISTS "learning_progress_select_own" ON public.learning_progress;
CREATE POLICY "learning_progress_select_own" ON public.learning_progress
  FOR SELECT USING (private.is_owner(user_id));
DROP POLICY IF EXISTS "learning_progress_insert_own" ON public.learning_progress;
CREATE POLICY "learning_progress_insert_own" ON public.learning_progress
  FOR INSERT WITH CHECK (private.is_owner(user_id));
DROP POLICY IF EXISTS "learning_progress_update_own" ON public.learning_progress;
CREATE POLICY "learning_progress_update_own" ON public.learning_progress
  FOR UPDATE USING (private.is_owner(user_id));
DROP POLICY IF EXISTS "learning_progress_delete_own" ON public.learning_progress;
CREATE POLICY "learning_progress_delete_own" ON public.learning_progress
  FOR DELETE USING (private.is_owner(user_id));

-- vocabulary
DROP POLICY IF EXISTS "vocabulary_select_own" ON public.vocabulary;
CREATE POLICY "vocabulary_select_own" ON public.vocabulary
  FOR SELECT USING (private.is_owner(user_id));
DROP POLICY IF EXISTS "vocabulary_insert_own" ON public.vocabulary;
CREATE POLICY "vocabulary_insert_own" ON public.vocabulary
  FOR INSERT WITH CHECK (private.is_owner(user_id));
DROP POLICY IF EXISTS "vocabulary_update_own" ON public.vocabulary;
CREATE POLICY "vocabulary_update_own" ON public.vocabulary
  FOR UPDATE USING (private.is_owner(user_id));
DROP POLICY IF EXISTS "vocabulary_delete_own" ON public.vocabulary;
CREATE POLICY "vocabulary_delete_own" ON public.vocabulary
  FOR DELETE USING (private.is_owner(user_id));

-- exercises_history
DROP POLICY IF EXISTS "exercises_history_select_own" ON public.exercises_history;
CREATE POLICY "exercises_history_select_own" ON public.exercises_history
  FOR SELECT USING (private.is_owner(user_id));
DROP POLICY IF EXISTS "exercises_history_insert_own" ON public.exercises_history;
CREATE POLICY "exercises_history_insert_own" ON public.exercises_history
  FOR INSERT WITH CHECK (private.is_owner(user_id));

-- chat_conversations
DROP POLICY IF EXISTS "chat_conversations_select_own" ON public.chat_conversations;
CREATE POLICY "chat_conversations_select_own" ON public.chat_conversations
  FOR SELECT USING (private.is_owner(user_id));
DROP POLICY IF EXISTS "chat_conversations_insert_own" ON public.chat_conversations;
CREATE POLICY "chat_conversations_insert_own" ON public.chat_conversations
  FOR INSERT WITH CHECK (private.is_owner(user_id));
DROP POLICY IF EXISTS "chat_conversations_update_own" ON public.chat_conversations;
CREATE POLICY "chat_conversations_update_own" ON public.chat_conversations
  FOR UPDATE USING (private.is_owner(user_id));
DROP POLICY IF EXISTS "chat_conversations_delete_own" ON public.chat_conversations;
CREATE POLICY "chat_conversations_delete_own" ON public.chat_conversations
  FOR DELETE USING (private.is_owner(user_id));

-- chat_messages
DROP POLICY IF EXISTS "chat_messages_select_own" ON public.chat_messages;
CREATE POLICY "chat_messages_select_own" ON public.chat_messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.chat_conversations c
      WHERE c.id = chat_messages.conversation_id
        AND private.is_owner(c.user_id)
    )
  );
DROP POLICY IF EXISTS "chat_messages_insert_own" ON public.chat_messages;
CREATE POLICY "chat_messages_insert_own" ON public.chat_messages
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.chat_conversations c
      WHERE c.id = chat_messages.conversation_id
        AND private.is_owner(c.user_id)
    )
  );

-- daily_activity
DROP POLICY IF EXISTS "daily_activity_select_own" ON public.daily_activity;
CREATE POLICY "daily_activity_select_own" ON public.daily_activity
  FOR SELECT USING (private.is_owner(user_id));
DROP POLICY IF EXISTS "daily_activity_insert_own" ON public.daily_activity;
CREATE POLICY "daily_activity_insert_own" ON public.daily_activity
  FOR INSERT WITH CHECK (private.is_owner(user_id));
DROP POLICY IF EXISTS "daily_activity_update_own" ON public.daily_activity;
CREATE POLICY "daily_activity_update_own" ON public.daily_activity
  FOR UPDATE USING (private.is_owner(user_id));

-- ---------- Auto-create profile on signup --------------------------

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'name', ''))
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
