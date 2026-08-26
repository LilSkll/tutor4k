"use client";

import Link from "next/link";
import { Stamp, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { CompletionCertificateCard } from "@/components/journey/completion-certificate-card";
import {
  localizeEggText,
  type EasterEggDef,
} from "@/config/journey/easter-eggs";
import type { GrammarLevel } from "@/types";

const JOURNEY_LEVELS: GrammarLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export type PassportChapter = {
  slug: string;
  number: number;
  title: string;
  titleNative: string;
  level: GrammarLevel;
  completed: boolean;
  hasSpecialStamp: boolean;
};

export function JourneyPassportClient({
  courseId,
  courseFlag,
  courseTitle,
  userName,
  chapters,
  foundEggs,
  levelCerts,
  courseCertAt,
}: {
  courseId: string;
  courseFlag: string;
  courseTitle: string;
  userName: string;
  chapters: PassportChapter[];
  foundEggs: EasterEggDef[];
  levelCerts: GrammarLevel[];
  courseCertAt: string | null;
}) {
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const byLevel = JOURNEY_LEVELS.map((level) => ({
    level,
    items: chapters.filter((c) => c.level === level),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-6">
      <div>
        <p className="meta-label">{t("journey.passportEyebrow")}</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">
          {t("journey.passportTitle")} {courseFlag}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {t("journey.passportLead", { course: courseTitle })}
        </p>
      </div>

      <Card className="overflow-hidden border-amber-200/50 bg-gradient-to-br from-[#faf6ef] to-background">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Stamp className="h-5 w-5 text-amber-800" />
            {t("journey.stampsHeading")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {byLevel.map(({ level, items }) => {
            const done = items.filter((i) => i.completed).length;
            const levelDone = levelCerts.includes(level);
            return (
              <div key={level}>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold">
                    {level}
                    {levelDone ? (
                      <span className="ml-2 text-xs font-medium text-emerald-700">
                        {t("journey.levelCertShort")}
                      </span>
                    ) : null}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {done}/{items.length}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((ch) => (
                    <Link
                      key={ch.slug}
                      href={`/chapters/${ch.slug}?courseId=${encodeURIComponent(courseId)}`}
                      title={ch.titleNative || ch.title}
                      className={cn(
                        "relative flex h-11 w-11 items-center justify-center rounded-full border text-xs font-semibold transition",
                        ch.completed
                          ? "border-amber-700/50 bg-amber-100/80 text-amber-950 shadow-sm"
                          : "border-dashed border-border/70 bg-muted/30 text-muted-foreground/50",
                      )}
                    >
                      {ch.completed ? "✓" : "·"}
                      {ch.hasSpecialStamp ? (
                        <span className="absolute -right-0.5 -top-0.5 text-[10px]">✦</span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {(levelCerts.length > 0 || courseCertAt) && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">{t("journey.certificatesHeading")}</h2>
          {levelCerts.map((lvl) => (
            <CompletionCertificateCard
              key={lvl}
              userName={userName}
              achievement={t("journey.levelCertAchievement", { level: lvl })}
              level={lvl}
              courseId={courseId}
              downloadStem={`level-${lvl}`}
            />
          ))}
          {courseCertAt ? (
            <CompletionCertificateCard
              userName={userName}
              achievement={t("journey.courseCertAchievement")}
              level={levelCerts[levelCerts.length - 1] ?? "C1"}
              courseId={courseId}
              downloadStem={`course-${courseId}`}
              completedAt={new Date(courseCertAt)}
            />
          ) : null}
        </div>
      )}

      {foundEggs.length > 0 ? (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="h-5 w-5 text-violet-600" />
              {t("journey.findsHeading")}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {t("journey.findsLead")}
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {foundEggs.map((egg) => (
              <div
                key={egg.id}
                className="rounded-xl border border-border/60 bg-muted/20 px-4 py-3"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium">{localizeEggText(egg.title, language)}</p>
                  <span className="rounded-full bg-background px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {t(`journey.rarity.${egg.rarity}`)}
                  </span>
                </div>
                {egg.highlight ? (
                  <p className="mt-1 font-serif text-amber-900/90">
                    {localizeEggText(egg.highlight, language)}
                  </p>
                ) : null}
                <p className="mt-1 text-sm text-muted-foreground">
                  {localizeEggText(egg.body, language)}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : (
        <p className="text-center text-sm text-muted-foreground">
          {t("journey.findsEmpty")}
        </p>
      )}
    </div>
  );
}
