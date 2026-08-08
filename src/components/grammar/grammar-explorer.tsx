"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useSearchParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import type { GrammarLevel, InterfaceLanguage } from "@/types";
import type { LocalizedGrammarTopicMeta } from "@/lib/grammar-topic-meta";
import { cn } from "@/lib/utils";

const GrammarTopicDialog = dynamic(
  () =>
    import("@/components/grammar/grammar-topic-dialog").then(
      (m) => m.GrammarTopicDialog,
    ),
  { ssr: false },
);

const LEVEL_COLORS: Record<GrammarLevel, string> = {
  A1: "from-green-500/15 to-emerald-500/15 text-green-600 dark:text-green-400",
  A2: "from-teal-500/15 to-cyan-500/15 text-teal-600 dark:text-teal-400",
  B1: "from-blue-500/15 to-indigo-500/15 text-blue-600 dark:text-blue-400",
  B2: "from-violet-500/15 to-purple-500/15 text-violet-600 dark:text-violet-400",
  C1: "from-rose-500/15 to-orange-500/15 text-rose-600 dark:text-rose-400",
  C2: "from-amber-500/15 to-yellow-500/15 text-amber-600 dark:text-amber-400",
};

export function GrammarExplorer({
  initialLevel,
  topics,
  courseId,
  serverLanguage,
}: {
  initialLevel?: string;
  topics: LocalizedGrammarTopicMeta[];
  courseId: string;
  serverLanguage?: InterfaceLanguage;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const language = useInterfaceLanguage(serverLanguage);
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const [activeFilter, setActiveFilter] = React.useState<string>(
    initialLevel ?? "ALL",
  );

  const examNames = React.useMemo(() => {
    const set = new Set<string>();
    for (const topic of topics) {
      if (topic.exam) set.add(topic.exam);
    }
    return [...set].sort();
  }, [topics]);

  const topicSlug = searchParams.get("topic");
  const selectedTopic = topics.find((topic) => topic.slug === topicSlug);

  const filtered =
    activeFilter === "ALL"
      ? topics
      : activeFilter.startsWith("exam:")
        ? topics.filter((topic) => topic.exam === activeFilter.slice(5))
        : topics.filter((topic) => topic.level === activeFilter);

  if (topics.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">{t("grammar.emptyTopics")}</p>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <FilterChip
          active={activeFilter === "ALL"}
          onClick={() => setActiveFilter("ALL")}
        >
          {t("grammar.allChip")}
        </FilterChip>
        {(["A1", "A2", "B1", "B2", "C1", "C2"] as GrammarLevel[]).map((lvl) => (
          <FilterChip
            key={lvl}
            active={activeFilter === lvl}
            onClick={() => setActiveFilter(lvl)}
          >
            {lvl}
          </FilterChip>
        ))}
        {examNames.map((name) => (
          <FilterChip
            key={name}
            active={activeFilter === `exam:${name}`}
            onClick={() => setActiveFilter(`exam:${name}`)}
          >
            {name}
          </FilterChip>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((topic) => {
          const title = topic.localizedTitle;
          const summary = topic.localizedSummary;
          return (
            <button
              key={topic.slug}
              type="button"
              onClick={() =>
                router.push(
                  `/grammar?topic=${topic.slug}&level=${encodeURIComponent(activeFilter)}`,
                )
              }
              className={cn(
                "text-left rounded-xl border p-4 transition-all hover:shadow-md hover:-translate-y-0.5 bg-gradient-to-br",
                LEVEL_COLORS[topic.level],
              )}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <Badge variant="level">{topic.level}</Badge>
                  {topic.exam ? (
                    <Badge variant="secondary" className="text-[10px]">
                      {topic.exam}
                    </Badge>
                  ) : null}
                </div>
                <span className="text-[10px] opacity-70">
                  {topic.localizedCategory}
                </span>
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{summary}</p>
            </button>
          );
        })}
      </div>

      {selectedTopic ? (
        <GrammarTopicDialog
          topic={selectedTopic}
          courseId={courseId}
          open
          onOpenChange={(open) => {
            if (!open) {
              const params = new URLSearchParams(searchParams.toString());
              params.delete("topic");
              router.push(`/grammar?${params.toString()}`);
            }
          }}
        />
      ) : null}
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
      type="button"
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
