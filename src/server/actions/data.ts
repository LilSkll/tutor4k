import { createSupabaseServerClient } from "@/lib/supabase-server";
import type {
  ExerciseHistory,
  LearningProgress,
  Profile,
} from "@/types";

// =====================================================================
// Read-only data access helpers (used by Server Components)
// =====================================================================

export async function getCurrentProfile(): Promise<Profile | null> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (data as unknown as Profile) ?? null;
}

export async function getLearningProgress(): Promise<LearningProgress[]> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data } = await supabase
    .from("learning_progress")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (data ?? []) as unknown as LearningProgress[];
}

export async function getExerciseHistory(): Promise<ExerciseHistory[]> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data } = await supabase
    .from("exercises_history")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(200);

  return (data ?? []) as unknown as ExerciseHistory[];
}

export interface DailyActivityRow {
  activity_date: string;
  lessons_completed: number;
  minutes_studied: number;
}

export async function getDailyActivity(days = 30): Promise<DailyActivityRow[]> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const since = new Date();
  since.setDate(since.getDate() - days);

  const { data } = await supabase
    .from("daily_activity")
    .select("activity_date, lessons_completed, minutes_studied")
    .eq("user_id", user.id)
    .gte("activity_date", since.toISOString().slice(0, 10))
    .order("activity_date", { ascending: true });

  return (data ?? []) as unknown as DailyActivityRow[];
}

/**
 * Record a study session: upsert today's daily_activity (accumulating
 * minutes and lessons, not overwriting) and update the streak.
 */
export async function recordStudySession(minutes: number, lessons = 1) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Not authenticated" };

  const today = new Date().toISOString().slice(0, 10);

  // Try to read today's existing row so we can accumulate (not overwrite).
  const { data: existing } = await supabase
    .from("daily_activity")
    .select("lessons_completed, minutes_studied")
    .eq("user_id", user.id)
    .eq("activity_date", today)
    .maybeSingle();

  const prevLessons = (existing?.lessons_completed as number) ?? 0;
  const prevMinutes = (existing?.minutes_studied as number) ?? 0;

  // Upsert with accumulated totals.
  const { error: upsertError } = await supabase
    .from("daily_activity")
    .upsert(
      {
        user_id: user.id,
        activity_date: today,
        lessons_completed: prevLessons + lessons,
        minutes_studied: prevMinutes + minutes,
      },
      { onConflict: "user_id,activity_date" },
    );

  if (upsertError) return { error: upsertError.message };

  // Update streak on profile.
  const { data: profile } = await supabase
    .from("profiles")
    .select("streak, last_active_date")
    .eq("id", user.id)
    .single();

  if (profile) {
    const last = (profile.last_active_date as string) ?? null;
    let streak = (profile.streak as number) ?? 0;

    if (last !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayKey = yesterday.toISOString().slice(0, 10);
      streak = last === yesterdayKey ? streak + 1 : 1;

      await supabase
        .from("profiles")
        .update({ streak, last_active_date: today })
        .eq("id", user.id);
    }
  }

  return { error: null };
}
