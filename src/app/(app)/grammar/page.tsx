import { getCourse } from "@/config/courses";
import { getCurrentProfile } from "@/server/actions/data";
import { GrammarPageClient } from "@/components/grammar/grammar-page-client";
import type { Level } from "@/types";

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
  const grammarTopics = course.getGrammar();

  return (
    <GrammarPageClient
      topics={grammarTopics}
      courseId={courseId}
      serverLanguage={profile?.interface_language ?? "ru"}
      initialLevel={params.level as Level | undefined}
    />
  );
}
