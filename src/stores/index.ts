"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type {
  ChatMessage,
  Conversation,
  InterfaceLanguage,
  Level,
} from "@/types";

// =====================================================================
// UI / preferences store
// ---------------------------------------------------------------------
// Persists local UI preferences (language, theme mode mirror, sidebar)
// in localStorage so they survive reloads and work before Supabase loads.
// =====================================================================

interface UIState {
  sidebarCollapsed: boolean;
  interfaceLanguage: InterfaceLanguage;
  /** Quick level filter used across grammar/exercises pages. */
  selectedLevel: Level | "ALL";
  toggleSidebar: () => void;
  setInterfaceLanguage: (lang: InterfaceLanguage) => void;
  setSelectedLevel: (level: Level | "ALL") => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      interfaceLanguage: "ru",
      selectedLevel: "ALL",
      toggleSidebar: () =>
        set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
      setInterfaceLanguage: (lang) => set({ interfaceLanguage: lang }),
      setSelectedLevel: (level) => set({ selectedLevel: level }),
    }),
    {
      name: "spanish-tutor-ui",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

// =====================================================================
// Chat store (client-side optimistic state)
// ---------------------------------------------------------------------
// Holds the active conversation messages while the user is chatting.
// History is persisted to Supabase in the background; this store keeps
// the UI responsive.
// =====================================================================

interface ChatState {
  messages: ChatMessage[];
  isStreaming: boolean;
  conversationId: string | null;
  setMessages: (messages: ChatMessage[]) => void;
  addMessage: (message: ChatMessage) => void;
  updateLastAssistantMessage: (content: string) => void;
  setStreaming: (streaming: boolean) => void;
  setConversationId: (id: string | null) => void;
  clear: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isStreaming: false,
  conversationId: null,
  setMessages: (messages) => set({ messages }),
  addMessage: (message) =>
    set((s) => ({ messages: [...s.messages, message] })),
  updateLastAssistantMessage: (content) =>
    set((s) => {
      const messages = [...s.messages];
      for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].role === "assistant") {
          messages[i] = { ...messages[i], content };
          break;
        }
      }
      return { messages };
    }),
  setStreaming: (streaming) => set({ isStreaming: streaming }),
  setConversationId: (id) => set({ conversationId: id }),
  clear: () => set({ messages: [], conversationId: null }),
}));

// =====================================================================
// Conversations store — list of saved conversations
// =====================================================================

interface ConversationsState {
  conversations: Conversation[];
  setConversations: (conversations: Conversation[]) => void;
  upsertConversation: (conversation: Conversation) => void;
  removeConversation: (id: string) => void;
}

export const useConversationsStore = create<ConversationsState>((set) => ({
  conversations: [],
  setConversations: (conversations) => set({ conversations }),
  upsertConversation: (conversation) =>
    set((s) => {
      const existing = s.conversations.findIndex(
        (c) => c.id === conversation.id,
      );
      if (existing >= 0) {
        const next = [...s.conversations];
        next[existing] = conversation;
        return { conversations: next };
      }
      return { conversations: [conversation, ...s.conversations] };
    }),
  removeConversation: (id) =>
    set((s) => ({
      conversations: s.conversations.filter((c) => c.id !== id),
    })),
}));

// =====================================================================
// Exercise session store — transient state during an exercise round
// =====================================================================

interface ExerciseSessionState {
  currentScore: number;
  totalAttempted: number;
  incrementScore: () => void;
  incrementAttempted: () => void;
  resetSession: () => void;
}

export const useExerciseSessionStore = create<ExerciseSessionState>((set) => ({
  currentScore: 0,
  totalAttempted: 0,
  incrementScore: () => set((s) => ({ currentScore: s.currentScore + 1 })),
  incrementAttempted: () =>
    set((s) => ({ totalAttempted: s.totalAttempted + 1 })),
  resetSession: () => set({ currentScore: 0, totalAttempted: 0 }),
}));
