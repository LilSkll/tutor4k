import { getCourse } from "@/config/courses";
import { getCurrentProfile } from "@/server/actions/data";
import { GrammarPageClient } from "@/components/grammar/grammar-page-client";
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
  // List payload: metadata only — article markdown loads on open via API.
  const grammarTopics = toGrammarTopicMetaList(course.getGrammar());

  return (
    <GrammarPageClient
      topics={grammarTopics}
      courseId={courseId}
      serverLanguage={profile?.interface_language ?? "ru"}
      initialLevel={params.level as GrammarLevel | undefined}
    />
  );
}
