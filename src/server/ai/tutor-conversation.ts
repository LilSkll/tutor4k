import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * Raised when a client-supplied conversationId is missing or belongs to
 * another user. Callers must not create a substitute conversation.
 */
export class TutorConversationAccessError extends Error {
  readonly code = "CONVERSATION_FORBIDDEN" as const;

  constructor(message = "Conversation not found") {
    super(message);
    this.name = "TutorConversationAccessError";
  }
}

export function isTutorConversationAccessError(
  err: unknown,
): err is TutorConversationAccessError {
  return (
    err instanceof TutorConversationAccessError ||
    (typeof err === "object" &&
      err !== null &&
      (err as { name?: string }).name === "TutorConversationAccessError")
  );
}

/**
 * Resolve a conversation for writes.
 *
 * - No id → create a new row for `userId`.
 * - Id present → must exist AND `user_id` match; otherwise throw
 *   (never silently create / never write into another user's thread).
 *
 * Always pass a client that can see the row (service-role or the owner).
 * Ownership is enforced in application code because service-role bypasses RLS.
 */
export async function resolveTutorConversationId(opts: {
  db: SupabaseClient;
  userId: string;
  conversationId?: string | null;
  title: string;
  courseId: string;
}): Promise<string | null> {
  const requested = opts.conversationId?.trim() || null;

  if (requested) {
    const { data, error } = await opts.db
      .from("chat_conversations")
      .select("id")
      .eq("id", requested)
      .eq("user_id", opts.userId)
      .maybeSingle();

    if (error) {
      throw error;
    }
    if (!data?.id) {
      throw new TutorConversationAccessError();
    }
    return data.id as string;
  }

  const { data: conv, error } = await opts.db
    .from("chat_conversations")
    .insert({
      user_id: opts.userId,
      title: opts.title,
      course_id: opts.courseId,
    })
    .select("id")
    .maybeSingle();

  if (error) {
    throw error;
  }
  return (conv?.id as string | undefined) ?? null;
}

/** Insert a chat message only after the conversation id was ownership-checked. */
export async function appendTutorChatMessage(opts: {
  db: SupabaseClient;
  conversationId: string;
  role: "user" | "assistant" | "system";
  content: string;
}): Promise<void> {
  const { error } = await opts.db.from("chat_messages").insert({
    conversation_id: opts.conversationId,
    role: opts.role,
    content: opts.content,
  });
  if (error) throw error;
}

/** Bump updated_at with an explicit user_id filter (defense in depth). */
export async function touchTutorConversation(opts: {
  db: SupabaseClient;
  conversationId: string;
  userId: string;
}): Promise<void> {
  const { error } = await opts.db
    .from("chat_conversations")
    .update({ updated_at: new Date().toISOString() })
    .eq("id", opts.conversationId)
    .eq("user_id", opts.userId);
  if (error) throw error;
}
