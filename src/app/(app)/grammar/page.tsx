import { Suspense } from "react";
import { BookOpen } from "lucide-react";
import { unstable_cache } from "next/cache";
import { getCourse } from "@/config/courses";
import { getCurrentProfile } from "@/server/actions/data";
import { GrammarExplorer } from "@/components/grammar/grammar-explorer";
import { localizeGrammarTopicMetaList } from "@/lib/grammar-topic-localize";
import { toGrammarTopicMetaList } from "@/lib/grammar-topic-meta";
import { sortGrammarForCourse } from "@/lib/grammar-curriculum-sort";
import { translate } from "@/lib/i18n";
import type { InterfaceLanguage } from "@/types";

const getCachedGrammarTopics = unstable_cache(
  async (courseId: string, lang: InterfaceLanguage) => {
    const course = await getCourse(courseId);
    const topics = sortGrammarForCourse(courseId, course.getGrammar());
    return localizeGrammarTopicMetaList(
      toGrammarTopicMetaList(topics),
      lang,
    );
  },
  ["grammar-topic-meta-v3"],
  { revalidate: 3600 },
);

export default async function GrammarPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string; level?: string }>;
}) {
  const params = await searchParams;
  const profile = await getCurrentProfile();
  const courseId = profile?.active_course_id ?? "spanish";
  const lang = (profile?.interface_language ?? "ru") as InterfaceLanguage;
  const t = (key: string) => translate(key, lang);

  const grammarTopics = await getCachedGrammarTopics(courseId, lang);

  return (
    <div className="container max-w-6xl py-6 md:py-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="h-6 w-6 text-primary" aria-hidden />
          <h1 className="text-2xl font-bold">{t("grammar.title")}</h1>
        </div>
        <p className="text-sm text-muted-foreground">{t("grammar.subtitle")}</p>
      </div>

      <Suspense
        fallback={
          <div className="h-40 animate-pulse rounded-xl bg-muted/40" />
        }
      >
        <GrammarExplorer
          initialLevel={params.level}
          topics={grammarTopics}
          courseId={courseId}
          serverLanguage={lang}
        />
      </Suspense>
    </div>
  );
}
