"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Send, Sparkles, Trash2, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Markdown } from "@/components/shared/markdown";
import { useChatStore } from "@/stores";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import { getCourseTitle } from "@/config/courses";
import { cn } from "@/lib/utils";
import type { AIMessage, ChatMessage } from "@/types";

const SUGGESTION_KEYS = [
  "tutor.suggestion1",
  "tutor.suggestion2",
  "tutor.suggestion3",
  "tutor.suggestion4",
  "tutor.suggestion5",
  "tutor.suggestion6",
] as const;

function makeId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function TutorChat() {
  const searchParams = useSearchParams();
  const messages = useChatStore((s) => s.messages);
  const addMessage = useChatStore((s) => s.addMessage);
  const setMessages = useChatStore((s) => s.setMessages);
  const setStreaming = useChatStore((s) => s.setStreaming);
  const clear = useChatStore((s) => s.clear);
  const language = useUIStore((s) => s.interfaceLanguage);
  const activeCourseId = useUIStore((s) => s.activeCourseId);
  const targetLanguage = getCourseTitle(activeCourseId);
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, { targetLanguage, ...vars });

  const [input, setInput] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  // Seed an initial question from query string (?q=...).
  React.useEffect(() => {
    const q = searchParams.get("q");
    if (q && messages.length === 0) {
      setInput(q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Auto-scroll on new messages.
  React.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, pending]);

  // Auto-resize textarea.
  React.useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  }, [input]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || pending) return;

    const userMsg: ChatMessage = {
      id: makeId(),
      role: "user",
      content,
      createdAt: new Date().toISOString(),
    };
    const placeholder: ChatMessage = {
      id: makeId(),
      role: "assistant",
      content: "",
      createdAt: new Date().toISOString(),
    };

    const history: AIMessage[] = [...messages, userMsg].map((m) => ({
      role: m.role,
      content: m.content,
    }));

    addMessage(userMsg);
    addMessage(placeholder);
    setInput("");
    setPending(true);
    setStreaming(true);

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();

      // Replace placeholder content.
      setMessages(
        [...messages, userMsg, { ...placeholder, content: data.content }],
      );
    } catch {
      setMessages([
        ...messages,
        userMsg,
          {
            ...placeholder,
            content:
              t("tutor.error"),
        },
      ]);
    } finally {
      setPending(false);
      setStreaming(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] md:h-[calc(100vh-7rem)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b bg-background/80 backdrop-blur">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <h1 className="font-semibold leading-tight">{t("tutor.title")}</h1>
            <p className="text-[11px] text-muted-foreground">
              {pending
                ? t("tutor.thinkingStatus")
                : t("tutor.onlineDynamic", { targetLanguage })}
            </p>
          </div>
        </div>
        {messages.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clear}
            className="text-muted-foreground"
          >
            <Trash2 className="h-4 w-4" />
            <span className="hidden sm:inline">{t("tutor.clear")}</span>
          </Button>
        )}
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 md:px-6 py-4">
        {messages.length === 0 ? (
          <EmptyState onPick={send} t={t} targetLanguage={targetLanguage} />
        ) : (
          <div className="mx-auto max-w-3xl space-y-4">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} pending={pending} />
            ))}
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="border-t bg-background/80 backdrop-blur px-4 md:px-6 py-3">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-end gap-2 rounded-2xl border bg-card p-2 shadow-sm focus-within:ring-2 focus-within:ring-ring">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={t("tutor.placeholderDynamic")}
              className="min-h-[44px] max-h-40 resize-none border-0 bg-transparent focus-visible:ring-0 px-2 py-2"
              rows={1}
              disabled={pending}
            />
            <Button
              variant="gradient"
              size="icon"
              className="h-10 w-10 shrink-0 rounded-xl"
              onClick={() => send(input)}
              disabled={!input.trim() || pending}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-1.5 text-center text-[10px] text-muted-foreground">
            {t("tutor.hintSend")}
          </p>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({
  message,
  pending,
}: {
  message: ChatMessage;
  pending: boolean;
}) {
  const isUser = message.role === "user";
  const isPendingAssistant =
    message.role === "assistant" && pending && !message.content;

  return (
    <div
      className={cn(
        "flex gap-3 animate-fade-in",
        isUser ? "flex-row-reverse" : "flex-row",
      )}
    >
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          isUser
            ? "bg-secondary text-secondary-foreground"
            : "bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white",
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div
        className={cn(
          "rounded-2xl px-4 py-2.5 max-w-[85%]",
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-sm"
            : "bg-card border rounded-tl-sm",
        )}
      >
        {isPendingAssistant ? (
          <TypingDots />
        ) : isUser ? (
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        ) : (
          <Markdown content={message.content} />
        )}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-muted-foreground/60 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

function EmptyState({
  onPick,
  t,
  targetLanguage,
}: {
  onPick: (q: string) => void;
  t: (k: string, vars?: Record<string, string | number>) => string;
  targetLanguage: string;
}) {
  const suggestions = SUGGESTION_KEYS.map((key) =>
    t(key, { targetLanguage }),
  );

  return (
    <div className="h-full flex flex-col items-center justify-center text-center py-12">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white">
        <Sparkles className="h-7 w-7" />
      </div>
      <h2 className="text-xl font-semibold mb-1">
        {t("tutor.emptyTitleDynamic", { targetLanguage })}
      </h2>
      <p className="text-sm text-muted-foreground max-w-md mb-6">
        {t("tutor.emptySubtitleDynamic")}
      </p>
      <div className="grid gap-2 w-full max-w-md">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => onPick(s)}
            className="text-left rounded-lg border bg-card px-4 py-2.5 text-sm hover:border-primary/50 hover:bg-accent transition-colors"
          >
            💬 {s}
          </button>
        ))}
      </div>
    </div>
  );
}
