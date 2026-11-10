"use client";

import * as React from "react";
import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  useActiveCourseId,
  useInterfaceLanguage,
} from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import {
  getExampleTranslation,
  getWordDefinition,
  getWordGloss,
} from "@/lib/vocab-display";
import type { VocabWord } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Pre-practice vocabulary panel: target-language lemmas + interface glosses.
 */
export function ChapterVocabPreview({
  words,
  topicTitle,
  courseId: courseIdProp,
  onContinue,
  continueLabel,
}: {
  words: VocabWord[];
  topicTitle?: string | null;
  courseId?: string;
  onContinue: () => void;
  continueLabel: string;
}) {
  const language = useInterfaceLanguage();
  const courseId = useActiveCourseId(courseIdProp);
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const [showGloss, setShowGloss] = React.useState(true);
  const list = words.slice(0, 40);

  if (list.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">{t("lesson.vocabEmpty")}</p>
        <Button variant="gradient" className="w-full" onClick={onContinue}>
          {continueLabel}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="h-5 w-5 text-primary shrink-0" />
            <h2 className="text-xl font-bold">{t("lesson.vocabTitle")}</h2>
          </div>
          {topicTitle ? (
            <p className="text-sm text-muted-foreground">{topicTitle}</p>
          ) : null}
          <p className="text-sm text-muted-foreground mt-1">
            {t("lesson.vocabHint")}
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="shrink-0"
          onClick={() => setShowGloss((v) => !v)}
        >
          {showGloss ? t("lesson.vocabHideGloss") : t("lesson.vocabShowGloss")}
        </Button>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {list.map((word, i) => {
          const gloss = getWordGloss(word, language, courseId);
          const definition = getWordDefinition(word, language, courseId);
          const exampleTr = word.example
            ? getExampleTranslation(word.example, language, courseId)
            : null;
          return (
            <Card key={`${word.word}-${i}`} className="bg-card/80">
              <CardContent className="p-3 space-y-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-semibold text-foreground">
                    {word.word}
                  </span>
                  {word.transcription ? (
                    <span className="text-xs text-muted-foreground">
                      {word.transcription}
                    </span>
                  ) : null}
                  {word.partOfSpeech ? (
                    <Badge variant="secondary" className="text-[10px]">
                      {word.partOfSpeech}
                    </Badge>
                  ) : null}
                </div>
                {showGloss && gloss ? (
                  <p className="text-sm text-muted-foreground">{gloss}</p>
                ) : null}
                {showGloss && definition && definition !== gloss ? (
                  <p className="text-xs text-muted-foreground/90">{definition}</p>
                ) : null}
                {word.example ? (
                  <p
                    className={cn(
                      "text-xs italic text-foreground/80",
                      !showGloss && "mt-0.5",
                    )}
                  >
                    {word.example}
                    {showGloss && exampleTr ? (
                      <span className="not-italic text-muted-foreground">
                        {" "}
                        — {exampleTr}
                      </span>
                    ) : null}
                  </p>
                ) : null}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {words.length > list.length ? (
        <p className="text-xs text-muted-foreground">
          {t("lesson.vocabMore", { count: words.length - list.length })}
        </p>
      ) : null}

      <Button variant="gradient" className="w-full" onClick={onContinue}>
        {continueLabel}
      </Button>
    </div>
  );
}
