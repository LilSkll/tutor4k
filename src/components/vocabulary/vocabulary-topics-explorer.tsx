"use client";

import * as React from "react";
import { Plus, Check, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useInterfaceLanguage, useActiveCourseId } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import {
  getVocabTopicSubtitle,
  getVocabTopicTitle,
  getWordGloss,
} from "@/lib/vocab-display";
import type { VocabTopic, VocabWord } from "@/types";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const LEVEL_COLORS: Record<string, string> = {
  A1: "from-green-500/15 to-emerald-500/15 text-green-600 dark:text-green-400",
  A2: "from-teal-500/15 to-cyan-500/15 text-teal-600 dark:text-teal-400",
  B1: "from-blue-500/15 to-indigo-500/15 text-blue-600 dark:text-blue-400",
  B2: "from-violet-500/15 to-purple-500/15 text-violet-600 dark:text-violet-400",
  C1: "from-rose-500/15 to-orange-500/15 text-rose-600 dark:text-rose-400",
};

function groupTopicsByLevel(topics: VocabTopic[]): Record<string, VocabTopic[]> {
  const grouped: Record<string, VocabTopic[]> = {};
  for (const topic of topics) {
    (grouped[topic.level] ||= []).push(topic);
  }
  return grouped;
}

export function VocabularyTopicsExplorer({
  topics,
  courseId: courseIdProp,
}: {
  topics: VocabTopic[];
  courseId?: string;
}) {
  const language = useInterfaceLanguage();
  const courseId = useActiveCourseId(courseIdProp);
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const [activeLevel, setActiveLevel] = React.useState<string>("ALL");
  const [openTopic, setOpenTopic] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");
  const addedWords = React.useRef<Set<string>>(new Set());

  const grouped = groupTopicsByLevel(topics);
  const levels = ["ALL", ...Object.keys(grouped)];

  const filtered =
    activeLevel === "ALL"
      ? topics
      : topics.filter((topic) => topic.level === activeLevel);

  const searchResults = React.useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    const results: { topic: VocabTopic; word: VocabWord }[] = [];
    for (const topic of topics) {
      for (const word of topic.words) {
        const gloss = getWordGloss(word, language, courseId);
        if (
          word.word.toLowerCase().includes(q) ||
          gloss.toLowerCase().includes(q)
        ) {
          results.push({ topic, word });
        }
      }
    }
    return results.slice(0, 30);
  }, [search, topics, language, courseId]);

  const handleAddWord = async (word: VocabWord, level: string) => {
    const key = `${word.word}-${level}`;
    if (addedWords.current.has(key)) return;
    addedWords.current.add(key);
    try {
      const res = await fetch("/api/vocabulary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          word: word.word,
          translation: getWordGloss(word, language, courseId),
          example: word.example,
          level,
        }),
      });
      if (res.ok) {
        toast.success(t("vocabTopics.toastAdded", { word: word.word }));
      }
    } catch {
      toast.error(t("vocabTopics.toastAddFail"));
      addedWords.current.delete(key);
    }
  };

  const isAdded = (word: VocabWord, level: string) =>
    addedWords.current.has(`${word.word}-${level}`);

  if (topics.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">{t("vocabTopics.empty")}</p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("vocabTopics.searchPlaceholder")}
          className="pl-9"
        />
      </div>

      {searchResults ? (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {t("vocabTopics.found", { count: searchResults.length })}
          </p>
          {searchResults.map(({ topic, word }, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border p-3 bg-card"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{word.word}</span>
                  <Badge variant="level" className="shrink-0">{topic.level}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{getWordGloss(word, language, courseId)}</p>
                <p className="text-xs italic text-muted-foreground mt-0.5">{word.example}</p>
              </div>
              <Button
                size="sm"
                variant={isAdded(word, topic.level) ? "secondary" : "outline"}
                onClick={() => handleAddWord(word, topic.level)}
                disabled={isAdded(word, topic.level)}
              >
                {isAdded(word, topic.level) ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Plus className="h-3.5 w-3.5" />
                )}
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium border transition-all",
                  activeLevel === lvl
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:border-primary/50 text-muted-foreground",
                )}
              >
                {lvl === "ALL" ? t("vocabTopics.allLevels") : lvl}
              </button>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((topic) => {
              const title = getVocabTopicTitle(topic, language, courseId);
              const subtitle = getVocabTopicSubtitle(topic, language, courseId);
              return (
              <Card
                key={topic.slug}
                className={cn(
                  "card-hover cursor-pointer bg-gradient-to-br",
                  LEVEL_COLORS[topic.level],
                )}
                onClick={() => setOpenTopic(topic.slug)}
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-3xl">{topic.icon}</span>
                    <Badge variant="level">{topic.level}</Badge>
                  </div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  {subtitle && (
                    <p className="text-xs text-muted-foreground italic mb-2">
                      {subtitle}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {t("vocabTopics.wordCount", { count: topic.words.length })}
                  </p>
                </CardContent>
              </Card>
            );})}
          </div>
        </>
      )}

      <Dialog
        open={!!openTopic}
        onOpenChange={(open) => { if (!open) setOpenTopic(null); }}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {(() => {
            const topic = topics.find((item) => item.slug === openTopic);
            if (!topic) return null;
            const title = getVocabTopicTitle(topic, language, courseId);
            const subtitle = getVocabTopicSubtitle(topic, language, courseId);
            return (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{topic.icon}</span>
                    <div>
                      <DialogTitle className="text-xl">
                        {title}
                      </DialogTitle>
                      {subtitle && (
                        <p className="text-sm text-muted-foreground italic">
                          {subtitle}
                        </p>
                      )}
                    </div>
                    <Badge variant="level" className="ml-auto">{topic.level}</Badge>
                  </div>
                </DialogHeader>

                <div className="space-y-2 mt-2">
                  {topic.words.map((word, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-2 rounded-lg border p-3 bg-card"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="font-medium text-foreground">
                            {word.word}
                          </span>
                          {word.transcription && (
                            <span className="text-xs text-muted-foreground">{word.transcription}</span>
                          )}
                          {word.partOfSpeech && (
                            <Badge variant="outline" className="text-[10px]">{word.partOfSpeech}</Badge>
                          )}
                          {word.level && (
                            <Badge variant="level" className="text-[10px]">{word.level}</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">{getWordGloss(word, language, courseId)}</p>
                        {(word.examples ?? [word.example]).map((ex, j) => (
                          <p key={j} className="text-xs italic text-muted-foreground mt-1 border-l-2 border-primary/20 pl-2">
                            {ex}
                          </p>
                        ))}
                        {word.synonyms && word.synonyms.length > 0 && (
                          <p className="text-[11px] text-muted-foreground mt-1">
                            {t("vocabTopics.synonyms")}: {word.synonyms.join(", ")}
                          </p>
                        )}
                        {word.commonMistakes && word.commonMistakes.length > 0 && (
                          <p className="text-[11px] text-destructive/80 mt-1">
                            {word.commonMistakes[0]}
                          </p>
                        )}
                        {word.tags && word.tags.length > 0 && (
                          <p className="text-[10px] text-muted-foreground/70 mt-1">
                            {word.tags.join(" · ")} · {word.frequency}
                          </p>
                        )}
                      </div>
                      <Button
                        size="sm"
                        variant={isAdded(word, topic.level) ? "secondary" : "outline"}
                        onClick={() => handleAddWord(word, topic.level)}
                        disabled={isAdded(word, topic.level)}
                        className="shrink-0"
                      >
                        {isAdded(word, topic.level) ? (
                          <>
                            <Check className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">{t("vocabTopics.added")}</span>
                          </>
                        ) : (
                          <>
                            <Plus className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">{t("vocabTopics.addToDict")}</span>
                          </>
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
