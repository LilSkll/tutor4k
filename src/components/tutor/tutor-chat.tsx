"use client";

import * as React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Send, Trash2, User } from "lucide-react";
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
  const [openingLoading, setOpeningLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const openingFetched = React.useRef(false);

  const loadSessionOpening = React.useCallback(async () => {
    if (searchParams.get("q")) return;
    setOpeningLoading(true);
    try {
      const res = await fetch("/api/tutor");
      if (!res.ok) return;
      const data = (await res.json()) as { opening?: string };
      if (!data.opening?.trim()) return;
      if (useChatStore.getState().messages.length > 0) return;

      addMessage({
        id: makeId(),
        role: "assistant",
        content: data.opening.trim(),
        createdAt: new Date().toISOString(),
      });
    } catch {
      // Non-fatal: fall back to empty-state suggestions.
    } finally {
      setOpeningLoading(false);
    }
  }, [addMessage, searchParams]);

  React.useEffect(() => {
    const q = searchParams.get("q");
    if (q && messages.length === 0) {
      setInput(q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Personalized teacher greeting when the chat is empty (real progress only).
  React.useEffect(() => {
    if (messages.length > 0 || openingFetched.current) return;
    openingFetched.current = true;
    void loadSessionOpening();
  }, [messages.length, loadSessionOpening]);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, pending, openingLoading]);

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

      setMessages([
        ...messages,
        userMsg,
        { ...placeholder, content: data.content },
      ]);
    } catch {
      setMessages([
        ...messages,
        userMsg,
        {
          ...placeholder,
          content: t("tutor.error"),
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
    <div className="flex flex-col h-[calc(100dvh-3.5rem-3.75rem-env(safe-area-inset-bottom,0px))] md:h-[calc(100dvh-3.5rem)]">
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0">
            <Image
              src="/hippogriff-icon.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl shadow-soft"
            />
            <span
              className={cn(
                "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background",
                pending ? "bg-warning animate-pulse-soft" : "bg-success",
              )}
            />
          </div>
          <div className="min-w-0">
            <h1 className="font-semibold leading-tight truncate">
              {t("tutor.title")}
            </h1>
            <p className="text-[11px] text-muted-foreground truncate">
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
            onClick={() => {
              clear();
              openingFetched.current = false;
            }}
            className="text-muted-foreground shrink-0"
          >
            <Trash2 className="h-4 w-4" />
            <span className="hidden sm:inline">{t("tutor.clear")}</span>
          </Button>
        )}
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 py-4">
        {messages.length === 0 ? (
          openingLoading ? (
            <div className="h-full flex items-center justify-center">
              <TypingDots />
            </div>
          ) : (
            <EmptyState onPick={send} t={t} targetLanguage={targetLanguage} />
          )
        ) : (
          <div className="mx-auto max-w-3xl space-y-5">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} pending={pending} />
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-border/60 bg-background/90 backdrop-blur-xl px-3 sm:px-4 md:px-6 py-3">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-end gap-2 rounded-2xl border border-border/70 bg-card p-2 shadow-soft focus-within:ring-2 focus-within:ring-ring/60 focus-within:border-primary/30 transition-shadow">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={t("tutor.placeholderDynamic")}
              className="min-h-[48px] max-h-40 resize-none border-0 bg-transparent focus-visible:ring-0 px-3 py-3 text-base sm:text-sm"
              rows={1}
              disabled={pending}
            />
            <Button
              variant="gradient"
              size="icon"
              className="h-11 w-11 shrink-0 rounded-xl"
              onClick={() => send(input)}
              disabled={!input.trim() || pending}
              aria-label={t("common.send")}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-2 text-center text-[10px] text-muted-foreground">
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
        "flex gap-2.5 sm:gap-3 animate-slide-up",
        isUser ? "flex-row-reverse" : "flex-row",
      )}
    >
      {isUser ? (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <User className="h-4 w-4" />
        </div>
      ) : (
        <Image
          src="/hippogriff-icon.png"
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 shrink-0 rounded-xl shadow-soft"
        />
      )}
      <div
        className={cn(
          "rounded-2xl px-4 py-3 max-w-[88%] sm:max-w-[85%] shadow-soft",
          isUser
            ? "bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white rounded-tr-md"
            : "bg-card rounded-tl-md",
        )}
      >
        {isPendingAssistant ? (
          <TypingDots />
        ) : isUser ? (
          <p className="text-sm whitespace-pre-wrap leading-relaxed">
            {message.content}
          </p>
        ) : (
          <Markdown content={message.content} />
        )}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 py-1.5 px-0.5" aria-label="Typing">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce"
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
    <div className="h-full flex flex-col items-center justify-center text-center py-8 px-2 animate-fade-in">
      <div className="relative mb-5">
        <div className="absolute inset-0 rounded-full bg-primary/15 blur-2xl" />
        <Image
          src="/hippogriff-icon.png"
          alt=""
          width={80}
          height={80}
          className="relative h-20 w-20 rounded-2xl shadow-elevated"
        />
      </div>
      <h2 className="text-xl font-semibold mb-1.5 tracking-tight">
        {t("tutor.emptyTitleDynamic", { targetLanguage })}
      </h2>
      <p className="text-sm text-muted-foreground max-w-md mb-7 leading-relaxed">
        {t("tutor.emptySubtitleDynamic")}
      </p>
      <div className="grid gap-2 w-full max-w-md">
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onPick(s)}
            className="text-left rounded-2xl bg-card shadow-soft px-4 py-3.5 text-sm hover:shadow-elevated hover:-translate-y-0.5 active:scale-[0.99] transition-all"
          >
            <span className="text-muted-foreground mr-2">✦</span>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
