import { Languages } from "lucide-react";
import { getVocabulary } from "@/server/actions/vocabulary";
import { getCurrentProfile } from "@/server/actions/data";
import { VocabularyClient } from "@/components/vocabulary/vocabulary-client";
import { translate } from "@/lib/i18n";

export default async function VocabularyPage() {
  const [words, profile] = await Promise.all([getVocabulary(), getCurrentProfile()]);
  const lang = profile?.interface_language ?? "ru";
  const t = (key: string) => translate(key, lang);

  return (
    <div className="container max-w-5xl py-6 md:py-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Languages className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">{t("vocabulary.title")}</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          {t("vocabulary.subtitleDynamic")}
        </p>
      </div>

      <VocabularyClient initialWords={words} userLevel={profile?.level ?? null} />
    </div>
  );
}
