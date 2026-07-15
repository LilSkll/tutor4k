import { VocabularyTopicsPageClient } from "@/components/vocabulary/vocabulary-topics-page-client";
import { getCurrentProfile } from "@/server/actions/data";
import { getCourse } from "@/config/courses";

export const dynamic = "force-dynamic";

export default async function VocabularyTopicsPage() {
  const profile = await getCurrentProfile();
  const courseId = profile?.active_course_id ?? "spanish";
  const course = await getCourse(courseId);
  const vocabTopics = course.getVocab();

  return (
    <VocabularyTopicsPageClient
      topics={vocabTopics}
      serverLanguage={profile?.interface_language ?? "ru"}
      serverCourseId={courseId}
    />
  );
}
