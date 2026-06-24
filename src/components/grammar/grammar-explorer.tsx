"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Markdown } from "@/components/shared/markdown";
import { useTransition } from "react";
import { GRAMMAR_TOPICS } from "@/config/grammar";
import type { Level } from "@/types";
import { cn } from "@/lib/utils";

const LEVEL_COLORS: Record<Level, string> = {
  A1: "from-green-500/15 to-emerald-500/15 text-green-600 dark:text-green-400",
  A2: "from-teal-500/15 to-cyan-500/15 text-teal-600 dark:text-teal-400",
  B1: "from-blue-500/15 to-indigo-500/15 text-blue-600 dark:text-blue-400",
  B2: "from-violet-500/15 to-purple-500/15 text-violet-600 dark:text-violet-400",
  C1: "from-rose-500/15 to-orange-500/15 text-rose-600 dark:text-rose-400",
};

export function GrammarExplorer({ initialLevel }: { initialLevel?: Level }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeLevel, setActiveLevel] = React.useState<Level | "ALL">(
    initialLevel ?? "ALL",
  );
  const [aiExplanation, setAiExplanation] = React.useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const topicSlug = searchParams.get("topic");
  const selectedTopic = GRAMMAR_TOPICS.find((t) => t.slug === topicSlug);

  const filtered =
    activeLevel === "ALL"
      ? GRAMMAR_TOPICS
      : GRAMMAR_TOPICS.filter((t) => t.level === activeLevel);

  const explainWithAI = (topicTitle: string, topicSummary: string) => {
    startTransition(async () => {
      try {
        const res = await fetch("/api/tutor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [
              {
                role: "user",
                content: `Explícame el tema gramatical "${topicTitle}" de forma clara, con ejemplos prácticos y una tabla si aplica. Contexto: ${topicSummary}.`,
              },
            ],
          }),
        });
        const data = await res.json();
        setAiExplanation(data.content);
      } catch {
        setAiExplanation("No se pudo generar la explicación. Inténtalo de nuevo.");
      }
    });
  };

  return (
    <>
      {/* Level filter chips */}
      <div className="flex flex-wrap gap-2">
        <FilterChip
          active={activeLevel === "ALL"}
          onClick={() => setActiveLevel("ALL")}
        >
          Все
        </FilterChip>
        {(["A1", "A2", "B1", "B2", "C1"] as Level[]).map((lvl) => (
          <FilterChip
            key={lvl}
            active={activeLevel === lvl}
            onClick={() => setActiveLevel(lvl)}
          >
            {lvl}
          </FilterChip>
        ))}
      </div>

      {/* Topics list */}
      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((topic) => (
          <button
            key={topic.slug}
            onClick={() =>
              router.push(`/grammar?topic=${topic.slug}&level=${activeLevel}`)
            }
            className={cn(
              "text-left rounded-xl border p-4 transition-all hover:shadow-md hover:-translate-y-0.5 bg-gradient-to-br",
              LEVEL_COLORS[topic.level],
            )}
          >
            <div className="flex items-center justify-between mb-1">
              <Badge variant="level">{topic.level}</Badge>
              <span className="text-[10px] opacity-70">{topic.category}</span>
            </div>
            <h3 className="font-semibold text-foreground">{topic.titleEs}</h3>
            <p className="text-xs text-muted-foreground mt-1">{topic.summary}</p>
          </button>
        ))}
      </div>

      {/* Topic detail dialog */}
      <Dialog
        open={!!selectedTopic}
        onOpenChange={(open) => {
          if (!open) {
            const params = new URLSearchParams(searchParams.toString());
            params.delete("topic");
            router.push(`/grammar?${params.toString()}`);
          }
        }}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedTopic && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="level">{selectedTopic.level}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {selectedTopic.category}
                  </span>
                </div>
                <DialogTitle className="text-xl">
                  {selectedTopic.titleEs}
                </DialogTitle>
              </DialogHeader>

              <Markdown content={selectedTopic.content} />

              <div className="flex gap-2 pt-2">
                <Button
                  variant="gradient"
                  size="sm"
                  disabled={pending}
                  onClick={() =>
                    explainWithAI(selectedTopic.titleEs, selectedTopic.summary)
                  }
                >
                  <Sparkles className="h-4 w-4" />
                  {pending ? "Генерирую…" : "Объяснить с ИИ"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a href={`/tutor?q=${encodeURIComponent("Explícame: " + selectedTopic.titleEs)}`}>
                    Спросить репетитора
                  </a>
                </Button>
              </div>

              {aiExplanation && (
                <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold flex items-center gap-1">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Объяснение ИИ
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => setAiExplanation(null)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <Markdown content={aiExplanation} />
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium transition-all border",
        active
          ? "bg-primary text-primary-foreground border-primary shadow-sm"
          : "bg-background border-border hover:border-primary/50 text-muted-foreground",
      )}
    >
      {children}
    </button>
  );
}
