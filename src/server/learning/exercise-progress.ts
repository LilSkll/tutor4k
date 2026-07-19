import { createSupabaseServerClient } from "@/lib/supabase-server";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import type { ExerciseProgress } from "@/types";

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function mapRow(row: Record<string, unknown>): ExerciseProgress {
  return {
    exerciseId: String(row.exercise_id),
    timesSeen: Number(row.times_seen) || 0,
    timesCorrect: Number(row.times_correct) || 0,
    timesWrong: Number(row.times_wrong) || 0,
    lastSeen: (row.last_seen as string | null) ?? null,
    mastered: Boolean(row.mastered),
  };
}

/**
 * Load per-exercise progress for a course (empty map if table missing / logged out).
 */
export async function getExerciseProgressMap(
  courseId: string,
  userId?: string,
): Promise<Map<string, ExerciseProgress>> {
  const map = new Map<string, ExerciseProgress>();
  try {
    const supabase = await createSupabaseServerClient();
    let uid = userId;
    if (!uid) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return map;
      uid = user.id;
    }

    const { data, error } = await supabase
      .from("exercise_progress")
      .select(
        "exercise_id, times_seen, times_correct, times_wrong, last_seen, mastered",
      )
      .eq("user_id", uid)
      .eq("course_id", courseId);

    if (error) {
      // Table may not exist yet — degrade gracefully.
      console.warn("[exercise-progress] load:", error.message);
      return map;
    }

    for (const row of data ?? []) {
      const p = mapRow(row as Record<string, unknown>);
      map.set(p.exerciseId, p);
    }
  } catch (err) {
    console.warn(
      "[exercise-progress] load failed:",
      (err as Error).message,
    );
  }
  return map;
}

/**
 * Record one attempt against a bank item (upsert).
 * mastered = ≥3 correct and ≥80% accuracy with ≥3 seen.
 */
export async function recordExerciseAttempt(input: {
  courseId: string;
  exerciseId: string;
  correct: boolean;
}): Promise<ExerciseProgress | null> {
  try {
    const userClient = await createSupabaseServerClient();
    const {
      data: { user },
    } = await userClient.auth.getUser();
    if (!user) return null;

    const admin = createSupabaseAdminClient();
    const writeClient = admin ?? userClient;

    const { data: existing } = await writeClient
      .from("exercise_progress")
      .select(
        "exercise_id, times_seen, times_correct, times_wrong, last_seen, mastered",
      )
      .eq("user_id", user.id)
      .eq("course_id", input.courseId)
      .eq("exercise_id", input.exerciseId)
      .maybeSingle();

    const prev = existing
      ? mapRow(existing as Record<string, unknown>)
      : {
          exerciseId: input.exerciseId,
          timesSeen: 0,
          timesCorrect: 0,
          timesWrong: 0,
          lastSeen: null,
          mastered: false,
        };

    const timesSeen = prev.timesSeen + 1;
    const timesCorrect = prev.timesCorrect + (input.correct ? 1 : 0);
    const timesWrong = prev.timesWrong + (input.correct ? 0 : 1);
    const accuracy = timesCorrect / timesSeen;
    const mastered = timesSeen >= 3 && timesCorrect >= 3 && accuracy >= 0.8;

    const row = {
      user_id: user.id,
      course_id: input.courseId,
      exercise_id: input.exerciseId,
      times_seen: timesSeen,
      times_correct: timesCorrect,
      times_wrong: timesWrong,
      last_seen: todayIso(),
      mastered,
      updated_at: new Date().toISOString(),
    };

    const { error } = await writeClient
      .from("exercise_progress")
      .upsert(row, { onConflict: "user_id,course_id,exercise_id" });

    if (error) {
      console.warn("[exercise-progress] upsert:", error.message);
      return null;
    }

    return {
      exerciseId: input.exerciseId,
      timesSeen,
      timesCorrect,
      timesWrong,
      lastSeen: todayIso(),
      mastered,
    };
  } catch (err) {
    console.warn(
      "[exercise-progress] record failed:",
      (err as Error).message,
    );
    return null;
  }
}
