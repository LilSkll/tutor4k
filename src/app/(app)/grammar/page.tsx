import { BookOpen } from "lucide-react";
import { unstable_cache } from "next/cache";
import { getCourse } from "@/config/courses";
import { getCurrentProfile } from "@/server/actions/data";
import { GrammarExplorer } from "@/components/grammar/grammar-explorer";
import { localizeGrammarTopicMetaList } from "@/lib/grammar-topic-localize";
import { toGrammarTopicMetaList } from "@/lib/grammar-topic-meta";
import { translate } from "@/lib/i18n";
import type { GrammarLevel, InterfaceLanguage } from "@/types";

const getCachedGrammarTopics = unstable_cache(
  async (courseId: string, lang: InterfaceLanguage) => {
    const course = await getCourse(courseId);
    return localizeGrammarTopicMetaList(
      toGrammarTopicMetaList(course.getGrammar()),
      lang,
    );
  },
  ["grammar-topic-meta"],
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

      <GrammarExplorer
        initialLevel={params.level as GrammarLevel | undefined}
        topics={grammarTopics}
        courseId={courseId}
        serverLanguage={lang}
      />
    </div>
  );
}
