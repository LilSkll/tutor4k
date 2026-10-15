-- Chat conversation ownership — DECISION (Oct 2026)
-- ---------------------------------------------------------------------
-- Service-role (admin) clients BYPASS RLS. Real protection for tutor
-- history writes is application code:
--   src/server/ai/tutor-conversation.ts  (resolve + append + touch)
--   wired from src/server/actions/ai.ts / src/app/api/tutor/route.ts
--
-- Authenticated-client RLS already scopes rows to auth.uid() in
-- supabase/schema.sql:
--   ✓ chat_conversations_select/insert/update/delete_own
--   ✓ chat_messages_select/insert_own
--   ✗ chat_messages_delete_own  (not present — see below)
--
-- APPLY THIS FILE?  →  No, not required for the ownership fix.
--
-- Extra delete policies below are OPTIONAL only. Skip them unless you
-- add a client-side "delete message / clear thread" feature that uses
-- the user JWT (not service role).
--
-- Current product paths:
--   • Export data  → SELECT only (account.ts)
--   • Delete account → auth.admin.deleteUser + DB CASCADE on conversations
--     (messages cascade via chat_messages.conversation_id FK)
--   • Tutor writes → service role + app ownership checks
-- So chat_messages_delete_own is unused today.
--
-- If you still want the optional policies for future UI:

-- DROP POLICY IF EXISTS "chat_conversations_delete_own" ON public.chat_conversations;
-- CREATE POLICY "chat_conversations_delete_own" ON public.chat_conversations
--   FOR DELETE TO authenticated USING (public.is_owner(user_id));
--
-- DROP POLICY IF EXISTS "chat_messages_delete_own" ON public.chat_messages;
-- CREATE POLICY "chat_messages_delete_own" ON public.chat_messages
--   FOR DELETE TO authenticated USING (
--     EXISTS (
--       SELECT 1 FROM public.chat_conversations c
--       WHERE c.id = chat_messages.conversation_id
--         AND public.is_owner(c.user_id)
--     )
--   );

COMMENT ON TABLE public.chat_conversations IS
  'Private tutor threads. Service-role writers must enforce user_id ownership in app code.';

COMMENT ON TABLE public.chat_messages IS
  'Messages for chat_conversations. Never insert via service-role without verifying conversation ownership.';
