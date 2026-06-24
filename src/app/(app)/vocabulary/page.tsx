import { Languages } from "lucide-react";
import { getVocabulary } from "@/server/actions/vocabulary";
import { getCurrentProfile } from "@/server/actions/data";
import { VocabularyClient } from "@/components/vocabulary/vocabulary-client";

export default async function VocabularyPage() {
  const [words, profile] = await Promise.all([getVocabulary(), getCurrentProfile()]);

  return (
    <div className="container max-w-5xl py-6 md:py-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Languages className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Мой словарь</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Сохраняй новые слова для повторения
        </p>
      </div>

      <VocabularyClient initialWords={words} userLevel={profile?.level ?? null} />
    </div>
  );
}
