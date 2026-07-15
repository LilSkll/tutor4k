"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { RefreshCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Markdown } from "@/components/shared/markdown";
import { useLocalizedGrammarArticle } from "@/hooks/use-localized-grammar-article";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import {
  getGrammarCategory,
  getGrammarSummary,
  getGrammarTopicTitle,
  usesNativeGrammarContent,
} from "@/lib/grammar-display";
import { translate } from "@/lib/i18n";
import type { GrammarTopic, Level } from "@/types";
import { cn } from "@/lib/utils";

const LEVEL_COLORS: Record<Level, string> = {
  A1: "from-green-500/15 to-emerald-500/15 text-green-600 dark:text-green-400",
  A2: "from-teal-500/15 to-cyan-500/15 text-teal-600 dark:text-teal-400",
  B1: "from-blue-500/15 to-indigo-500/15 text-blue-600 dark:text-blue-400",
  B2: "from-violet-500/15 to-purple-500/15 text-violet-600 dark:text-violet-400",
  C1: "from-rose-500/15 to-orange-500/15 text-rose-600 dark:text-rose-400",
};

export function GrammarExplorer({
  initialLevel,
  topics,
  courseId,
}: {
  initialLevel?: Level;
  topics: GrammarTopic[];
  courseId: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const [activeLevel, setActiveLevel] = React.useState<Level | "ALL">(
    initialLevel ?? "ALL",
  );

  const topicSlug = searchParams.get("topic");
  const selectedTopic = topics.find((topic) => topic.slug === topicSlug);

  const {
    content: articleContent,
    loading,
    error: loadError,
    isStatic,
    reload,
  } = useLocalizedGrammarArticle(
    selectedTopic?.slug,
    courseId,
    selectedTopic?.content,
  );

  const filtered =
    activeLevel === "ALL"
      ? topics
      : topics.filter((topic) => topic.level === activeLevel);

  if (topics.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">{t("grammar.emptyTopics")}</p>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <FilterChip
          active={activeLevel === "ALL"}
          onClick={() => setActiveLevel("ALL")}
        >
          {t("grammar.allChip")}
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

      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((topic) => {
          const title = getGrammarTopicTitle(topic, language);
          const summary = getGrammarSummary(topic, language);
          return (
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
                <span className="text-[10px] opacity-70">
                  {getGrammarCategory(topic, language)}
                </span>
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{summary}</p>
            </button>
          );
        })}
      </div>

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
          {selectedTopic &&
            (() => {
              const title = getGrammarTopicTitle(selectedTopic, language);
              return (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="level">{selectedTopic.level}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {getGrammarCategory(selectedTopic, language)}
                      </span>
                    </div>
                    <DialogTitle className="text-xl">{title}</DialogTitle>
                    <p className="text-sm text-muted-foreground">
                      {getGrammarSummary(selectedTopic, language)}
                    </p>
                  </DialogHeader>

                  <div className="min-h-[120px]">
                    {loading ? (
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Sparkles className="h-4 w-4 animate-pulse text-primary" />
                        {t("grammar.loadingArticle")}
                      </p>
                    ) : loadError ? (
                      <p className="text-sm text-destructive">{loadError}</p>
                    ) : articleContent ? (
                      <Markdown content={articleContent} />
                    ) : null}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {!usesNativeGrammarContent(language) && !isStatic && (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={loading}
                        onClick={() => reload()}
                      >
                        <RefreshCw
                          className={cn("h-4 w-4", loading && "animate-spin")}
                        />
                        {t("grammar.regenerateAI")}
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={`/tutor?q=${encodeURIComponent(
                          t("grammar.askTutorPrefix") + title,
                        )}`}
                      >
                        {t("grammar.askTutor")}
                      </a>
                    </Button>
                  </div>
                </>
              );
            })()}
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
