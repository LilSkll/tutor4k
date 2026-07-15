"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GrammarExplorer } from "@/components/grammar/grammar-explorer";
import {
  getGrammarCategory,
  getGrammarSummary,
  getGrammarTopicTitle,
} from "@/lib/grammar-display";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import type { GrammarTopic, InterfaceLanguage, Level } from "@/types";

export function GrammarPageClient({
  topics,
  targetLanguage,
  serverLanguage,
  initialLevel,
}: {
  topics: GrammarTopic[];
  targetLanguage: string;
  serverLanguage?: InterfaceLanguage;
  initialLevel?: Level;
}) {
  const language = useInterfaceLanguage(serverLanguage);
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  return (
    <div className="container max-w-6xl py-6 md:py-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">{t("grammar.title")}</h1>
        </div>
        <p className="text-sm text-muted-foreground">{t("grammar.subtitle")}</p>
      </div>

      <GrammarExplorer
        initialLevel={initialLevel}
        topics={topics}
        targetLanguage={targetLanguage}
      />

      {topics.length > 0 ? (
        <div>
          <h2 className="font-semibold mb-3">{t("grammar.allTopicsTitle")}</h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => {
              const title = getGrammarTopicTitle(topic, language);
              const subtitle =
                language !== "ru" && topic.titleEs !== title
                  ? topic.titleEs
                  : null;
              return (
                <Card key={topic.slug} className="card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="level">{topic.level}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {getGrammarCategory(topic, language)}
                      </span>
                    </div>
                    <CardTitle className="text-base mt-2">
                      {title}
                      {subtitle && (
                        <span className="text-muted-foreground font-normal">
                          {" "}— {subtitle}
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {getGrammarSummary(topic, language)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <Link href={`/grammar?topic=${topic.slug}`}>
                        {t("grammar.studyBtn")}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">{t("grammar.emptyTopics")}</p>
      )}
    </div>
  );
}
