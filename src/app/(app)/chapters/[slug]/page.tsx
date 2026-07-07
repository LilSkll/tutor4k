import { notFound } from "next/navigation";
import { getChapter } from "@/config/chapters";
import { getTopicBySlug } from "@/config/grammar";
import { getCurrentProfile } from "@/server/actions/data";
import { startChapter, completeChapter } from "@/server/actions/data";
import { LessonRunner } from "@/components/chapters/lesson-runner";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);

  if (!chapter) notFound();

  const profile = await getCurrentProfile();
  const grammarTopic = getTopicBySlug(chapter.grammarTopic);

  return (
    <LessonRunner
      chapter={chapter}
      userName={profile?.name ?? ""}
      grammarContent={grammarTopic?.content ?? "Материал готовится."}
      grammarTitle={grammarTopic?.titleEs ?? chapter.title}
      startAction={startChapter}
      completeAction={completeChapter}
    />
  );
}
