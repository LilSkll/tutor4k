"use client";

import * as React from "react";
import { BookPlus, ChevronDown, Plus, Check, Search } from "lucide-react";
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
import { useUIStore } from "@/stores";
import { LEVELS } from "@/config/app";
import {
  VOCAB_TOPICS,
  groupVocabByLevel,
  type VocabTopic,
  type VocabWord,
} from "@/config/vocabulary-topics";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const LEVEL_COLORS: Record<string, string> = {
  A1: "from-green-500/15 to-emerald-500/15 text-green-600 dark:text-green-400",
  A2: "from-teal-500/15 to-cyan-500/15 text-teal-600 dark:text-teal-400",
  B1: "from-blue-500/15 to-indigo-500/15 text-blue-600 dark:text-blue-400",
  B2: "from-violet-500/15 to-purple-500/15 text-violet-600 dark:text-violet-400",
  C1: "from-rose-500/15 to-orange-500/15 text-rose-600 dark:text-rose-400",
};

export function VocabularyTopicsExplorer() {
  const [activeLevel, setActiveLevel] = React.useState<string>("ALL");
  const [openTopic, setOpenTopic] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");
  const addedWords = React.useRef<Set<string>>(new Set());

  const grouped = groupVocabByLevel();
  const levels = ["ALL", ...Object.keys(grouped)];

  const filtered =
    activeLevel === "ALL"
      ? VOCAB_TOPICS
      : VOCAB_TOPICS.filter((t) => t.level === activeLevel);

  const searchResults = React.useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    const results: { topic: VocabTopic; word: VocabWord }[] = [];
    for (const topic of VOCAB_TOPICS) {
      for (const word of topic.words) {
        if (
          word.word.toLowerCase().includes(q) ||
          word.translation.toLowerCase().includes(q)
        ) {
          results.push({ topic, word });
        }
      }
    }
    return results.slice(0, 30);
  }, [search]);

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
          translation: word.translation,
          example: word.example,
          level,
        }),
      });
      if (res.ok) {
        toast.success(`«${word.word}» добавлено в словарь 📚`);
      }
    } catch {
      toast.error("Не удалось добавить слово");
      addedWords.current.delete(key);
    }
  };

  const isAdded = (word: VocabWord, level: string) =>
    addedWords.current.has(`${word.word}-${level}`);

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск слов на всех уровнях…"
          className="pl-9"
        />
      </div>

      {/* Search results */}
      {searchResults ? (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Найдено: {searchResults.length}
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
                <p className="text-sm text-muted-foreground">{word.translation}</p>
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
          {/* Level filter */}
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
                {lvl === "ALL" ? "Все уровни" : lvl}
              </button>
            ))}
          </div>

          {/* Topics grid */}
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((topic) => (
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
                  <h3 className="font-semibold text-foreground">{topic.topic}</h3>
                  <p className="text-xs text-muted-foreground italic mb-2">
                    {topic.topicEs}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {topic.words.length} слов
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Topic detail dialog */}
      <Dialog
        open={!!openTopic}
        onOpenChange={(open) => { if (!open) setOpenTopic(null); }}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {(() => {
            const topic = VOCAB_TOPICS.find((t) => t.slug === openTopic);
            if (!topic) return null;
            return (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{topic.icon}</span>
                    <div>
                      <DialogTitle className="text-xl">
                        {topic.topic}
                      </DialogTitle>
                      <p className="text-sm text-muted-foreground italic">
                        {topic.topicEs}
                      </p>
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
                          <span className="text-sm text-muted-foreground">
                            — {word.translation}
                          </span>
                        </div>
                        <p className="text-xs italic text-muted-foreground mt-1 border-l-2 border-primary/20 pl-2">
                          {word.example}
                        </p>
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
                            <span className="hidden sm:inline">Добавлено</span>
                          </>
                        ) : (
                          <>
                            <Plus className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">В словарь</span>
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
