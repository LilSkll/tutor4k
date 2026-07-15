"use client";

import { BookPlus } from "lucide-react";
import { VocabularyTopicsExplorer } from "@/components/vocabulary/vocabulary-topics-explorer";
import {
  useActiveCourseId,
  useInterfaceLanguage,
} from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import type { InterfaceLanguage, VocabTopic } from "@/types";

export function VocabularyTopicsPageClient({
  topics,
  serverLanguage,
  serverCourseId,
}: {
  topics: VocabTopic[];
  serverLanguage?: InterfaceLanguage;
  serverCourseId?: string;
}) {
  const language = useInterfaceLanguage(serverLanguage);
  const courseId = useActiveCourseId(serverCourseId);
  const totalWords = topics.reduce((sum, topic) => sum + topic.words.length, 0);
  const totalTopics = topics.length;
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  return (
    <div className="container max-w-5xl py-6 md:py-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BookPlus className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">{t("vocabTopics.title")}</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          {t("vocabTopics.subtitle", { words: totalWords, topics: totalTopics })}
        </p>
      </div>

      <VocabularyTopicsExplorer topics={topics} courseId={courseId} />
    </div>
  );
}
