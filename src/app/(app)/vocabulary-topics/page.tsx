import { BookPlus } from "lucide-react";
import { VocabularyTopicsExplorer } from "@/components/vocabulary/vocabulary-topics-explorer";
import { getCurrentProfile } from "@/server/actions/data";
import { getCourse } from "@/config/courses";
import { translate } from "@/lib/i18n";

export default async function VocabularyTopicsPage() {
  const profile = await getCurrentProfile();
  const courseId = profile?.active_course_id ?? "spanish";
  const course = await getCourse(courseId);
  const vocabTopics = course.getVocab();
  const totalWords = vocabTopics.reduce((sum, topic) => sum + topic.words.length, 0);
  const totalTopics = vocabTopics.length;
  const lang = profile?.interface_language ?? "ru";
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, lang, vars);

  return (
    <div className="container max-w-5xl py-6 md:py-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BookPlus className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">{t("vocabTopics.title")}</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          {t("vocabTopics.subtitle", { words: totalWords, topics: totalTopics })}
        </p>
      </div>

      <VocabularyTopicsExplorer
        topics={vocabTopics}
        interfaceLanguage={lang}
        courseId={courseId}
      />
    </div>
  );
}
