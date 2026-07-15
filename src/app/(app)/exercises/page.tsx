import { Dumbbell } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExerciseRunner } from "@/components/exercises/exercise-runner";
import { getCurrentProfile } from "@/server/actions/data";
import { translate } from "@/lib/i18n";

export default async function ExercisesPage() {
  const profile = await getCurrentProfile();
  const lang = profile?.interface_language ?? "ru";
  const t = (key: string) => translate(key, lang);

  return (
    <div className="container max-w-3xl py-6 md:py-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Dumbbell className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">{t("exercises.title")}</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          {t("exercises.subtitleDynamic")}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{t("exercises.sessionTitle")}</CardTitle>
          <CardDescription>{t("exercises.sessionDesc")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ExerciseRunner userLevel={profile?.level ?? null} />
        </CardContent>
      </Card>
    </div>
  );
}
