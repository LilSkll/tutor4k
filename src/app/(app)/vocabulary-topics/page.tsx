import { BookPlus } from "lucide-react";
import { VocabularyTopicsExplorer } from "@/components/vocabulary/vocabulary-topics-explorer";
import { totalVocabWords, VOCAB_TOPICS } from "@/config/vocabulary-topics";

export default function VocabularyTopicsPage() {
  const totalWords = totalVocabWords();
  const totalTopics = VOCAB_TOPICS.length;

  return (
    <div className="container max-w-5xl py-6 md:py-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BookPlus className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Лексика по уровням</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Рекомендуемая лексика по топикам для каждого уровня CEFR ·{" "}
          <strong>{totalWords}</strong> слов в <strong>{totalTopics}</strong> темах
        </p>
      </div>

      <VocabularyTopicsExplorer />
    </div>
  );
}
