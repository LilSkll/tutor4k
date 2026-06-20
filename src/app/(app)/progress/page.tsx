import {
  getExerciseHistory,
  getDailyActivity,
  getCurrentProfile,
} from "@/server/actions/data";
import { ProgressClient } from "@/components/progress/progress-client";

export default async function ProgressPage() {
  const [history, activity, profile] = await Promise.all([
    getExerciseHistory(),
    getDailyActivity(30),
    getCurrentProfile(),
  ]);

  return (
    <ProgressClient
      history={history}
      activity={activity}
      streak={profile?.streak ?? 0}
      level={profile?.level ?? null}
      userName={profile?.name ?? ""}
    />
  );
}
