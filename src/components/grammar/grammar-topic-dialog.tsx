"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Markdown } from "@/components/shared/markdown";
import { Sparkles } from "lucide-react";
import { useLocalizedGrammarArticle } from "@/hooks/use-localized-grammar-article";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import type { LocalizedGrammarTopicMeta } from "@/lib/grammar-topic-meta";

/**
 * Topic article dialog — keep out of the initial /grammar First Load via dynamic().
 */
export function GrammarTopicDialog({
  topic,
  courseId,
  open,
  onOpenChange,
}: {
  topic: LocalizedGrammarTopicMeta | undefined;
  courseId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const {
    content: articleContent,
    loading,
    error: loadError,
  } = useLocalizedGrammarArticle(open ? topic?.slug : undefined, courseId);

  if (!topic || !open) return null;

  const title = topic.localizedTitle;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Badge variant="level">{topic.level}</Badge>
            <span className="text-xs text-muted-foreground">
              {topic.localizedCategory}
            </span>
          </div>
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <p className="text-sm text-muted-foreground">
            {topic.localizedSummary}
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
      </DialogContent>
    </Dialog>
  );
}
