import { beforeEach, describe, expect, it } from "vitest";
import {
  TutorConversationAccessError,
  appendTutorChatMessage,
  resolveTutorConversationId,
  touchTutorConversation,
} from "@/server/ai/tutor-conversation";

type Row = Record<string, unknown>;

function mockDb(state: {
  conversations: Row[];
  messages: Row[];
}) {
  const api = {
    from(table: string) {
      if (table === "chat_conversations") {
        return {
          select() {
            return {
              eq(col1: string, val1: unknown) {
                return {
                  eq(col2: string, val2: unknown) {
                    return {
                      async maybeSingle() {
                        const row = state.conversations.find(
                          (c) => c[col1] === val1 && c[col2] === val2,
                        );
                        return { data: row ?? null, error: null };
                      },
                    };
                  },
                  async maybeSingle() {
                    const row = state.conversations.find((c) => c[col1] === val1);
                    return { data: row ?? null, error: null };
                  },
                };
              },
            };
          },
          insert(payload: Row) {
            return {
              select() {
                return {
                  async maybeSingle() {
                    const row = {
                      id: `new-${state.conversations.length + 1}`,
                      ...payload,
                    };
                    state.conversations.push(row);
                    return { data: { id: row.id }, error: null };
                  },
                };
              },
            };
          },
          update(patch: Row) {
            return {
              eq(col1: string, val1: unknown) {
                return {
                  async eq(col2: string, val2: unknown) {
                    const row = state.conversations.find(
                      (c) => c[col1] === val1 && c[col2] === val2,
                    );
                    if (row) Object.assign(row, patch);
                    return { data: null, error: null };
                  },
                };
              },
            };
          },
        };
      }
      if (table === "chat_messages") {
        return {
          async insert(payload: Row) {
            state.messages.push({
              id: `msg-${state.messages.length + 1}`,
              ...payload,
            });
            return { data: null, error: null };
          },
        };
      }
      throw new Error(`unexpected table ${table}`);
    },
  };
  return api as never;
}

describe("resolveTutorConversationId", () => {
  let state: { conversations: Row[]; messages: Row[] };

  beforeEach(() => {
    state = {
      conversations: [
        { id: "conv-a", user_id: "user-a", title: "A", course_id: "spanish" },
        { id: "conv-b", user_id: "user-b", title: "B", course_id: "spanish" },
      ],
      messages: [],
    };
  });

  it("lets user A keep writing to their own conversation", async () => {
    const db = mockDb(state);
    const id = await resolveTutorConversationId({
      db,
      userId: "user-a",
      conversationId: "conv-a",
      title: "ignored",
      courseId: "spanish",
    });
    expect(id).toBe("conv-a");

    await appendTutorChatMessage({
      db,
      conversationId: id!,
      role: "user",
      content: "hola",
    });
    expect(state.messages).toEqual([
      expect.objectContaining({
        conversation_id: "conv-a",
        role: "user",
        content: "hola",
      }),
    ]);
  });

  it("rejects user A using user B conversation id (no insert)", async () => {
    const db = mockDb(state);
    await expect(
      resolveTutorConversationId({
        db,
        userId: "user-a",
        conversationId: "conv-b",
        title: "hack",
        courseId: "spanish",
      }),
    ).rejects.toBeInstanceOf(TutorConversationAccessError);

    expect(state.messages).toHaveLength(0);
    expect(state.conversations).toHaveLength(2);
  });

  it("rejects a non-existent conversation id without creating a substitute", async () => {
    const db = mockDb(state);
    await expect(
      resolveTutorConversationId({
        db,
        userId: "user-a",
        conversationId: "missing-id",
        title: "New chat?",
        courseId: "spanish",
      }),
    ).rejects.toBeInstanceOf(TutorConversationAccessError);

    expect(state.conversations.map((c) => c.id)).toEqual(["conv-a", "conv-b"]);
    expect(state.messages).toHaveLength(0);
  });

  it("creates a new conversation when id is omitted", async () => {
    const db = mockDb(state);
    const id = await resolveTutorConversationId({
      db,
      userId: "user-a",
      conversationId: null,
      title: "Ser vs estar",
      courseId: "spanish",
    });
    expect(id).toBe("new-3");
    expect(state.conversations).toContainEqual(
      expect.objectContaining({
        id: "new-3",
        user_id: "user-a",
        title: "Ser vs estar",
      }),
    );
  });

  it("touches updated_at only for the owning user", async () => {
    const db = mockDb(state);
    await touchTutorConversation({
      db,
      conversationId: "conv-a",
      userId: "user-a",
    });
    expect(state.conversations[0].updated_at).toBeTruthy();

    await touchTutorConversation({
      db,
      conversationId: "conv-b",
      userId: "user-a",
    });
    // Wrong owner filter → row B unchanged (no updated_at).
    expect(state.conversations[1].updated_at).toBeUndefined();
  });
});
