import { getCourse } from "@/config/courses";
import { getCurrentProfile } from "@/server/actions/data";
import { GrammarPageClient } from "@/components/grammar/grammar-page-client";
import { localizeGrammarTopicMetaList } from "@/lib/grammar-topic-localize";
import { toGrammarTopicMetaList } from "@/lib/grammar-topic-meta";
import type { GrammarLevel } from "@/types";

export const dynamic = "force-dynamic";

export default async function GrammarPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string; level?: string }>;
}) {
  const params = await searchParams;
  const profile = await getCurrentProfile();
  const courseId = profile?.active_course_id ?? "spanish";
  const course = await getCourse(courseId);
  const lang = profile?.interface_language ?? "ru";
  // List payload: metadata + localized labels — article markdown loads on open.
  const grammarTopics = localizeGrammarTopicMetaList(
    toGrammarTopicMetaList(course.getGrammar()),
    lang,
  );

  return (
    <GrammarPageClient
      topics={grammarTopics}
      courseId={courseId}
      serverLanguage={lang}
      initialLevel={params.level as GrammarLevel | undefined}
    />
  );
}
