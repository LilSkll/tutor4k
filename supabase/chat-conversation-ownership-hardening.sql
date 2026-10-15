-- Chat conversation ownership hardening (documentation + optional policies).
-- Service-role (admin) clients BYPASS RLS — application code in
-- src/server/ai/tutor-conversation.ts MUST filter chat_conversations by
-- (id, user_id) before any chat_messages insert/update via service role.
--
-- Do NOT apply blindly to production without review. Existing RLS for
-- authenticated users already scopes rows to auth.uid().

-- Ensure delete policy exists for conversation owners (cascade cleans messages).
DROP POLICY IF EXISTS "chat_conversations_delete_own" ON public.chat_conversations;
CREATE POLICY "chat_conversations_delete_own" ON public.chat_conversations
  FOR DELETE TO authenticated USING (public.is_owner(user_id));

-- Optional: allow owners to delete their own messages (export/reset flows).
DROP POLICY IF EXISTS "chat_messages_delete_own" ON public.chat_messages;
CREATE POLICY "chat_messages_delete_own" ON public.chat_messages
  FOR DELETE TO authenticated USING (
    EXISTS (
      SELECT 1 FROM public.chat_conversations c
      WHERE c.id = chat_messages.conversation_id
        AND public.is_owner(c.user_id)
    )
  );

COMMENT ON TABLE public.chat_conversations IS
  'Private tutor threads. Service-role writers must enforce user_id ownership in app code.';

COMMENT ON TABLE public.chat_messages IS
  'Messages for chat_conversations. Never insert via service-role without verifying conversation ownership.';
