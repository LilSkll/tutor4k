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

export default async function ExercisesPage() {
  const profile = await getCurrentProfile();

  return (
    <div className="container max-w-3xl py-6 md:py-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Dumbbell className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Упражнения</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Практика от ИИ — выбери тип и уровень
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Твоя тренировка</CardTitle>
          <CardDescription>
            Результаты сохраняются автоматически и влияют на твой прогресс
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ExerciseRunner userLevel={profile?.level ?? null} />
        </CardContent>
      </Card>
    </div>
  );
}
