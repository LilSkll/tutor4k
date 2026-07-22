import { cache } from "react";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import type {
  ChapterProgress,
  ExerciseHistory,
  LearningProgress,
  Profile,
} from "@/types";

// =====================================================================
// Read-only data access helpers (used by Server Components)
// =====================================================================

/** Deduped per request — layout + page share one profile fetch. */
export const getCurrentProfile = cache(async (): Promise<Profile | null> => {
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
});

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
 *
 * Uses the service-role client for WRITES when available (bypasses RLS
 * so progress is never lost due to a stale session cookie in an API
 * route). Falls back to the user client if the service key is absent.
 */
export async function recordStudySession(minutes: number, lessons = 1) {
  // Authenticate via the user's session (verifies identity).
  const userClient = await createSupabaseServerClient();
  const {
    data: { user },
  } = await userClient.auth.getUser();

  if (!user) return { error: "Not authenticated" };

  // Use the service-role client for writes if available (RLS-safe).
  const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
  const admin = createSupabaseAdminClient();
  const writeClient = admin ?? userClient;

  const today = new Date().toISOString().slice(0, 10);

  // Read today's existing row so we can accumulate (not overwrite).
  const { data: existing } = await writeClient
    .from("daily_activity")
    .select("lessons_completed, minutes_studied")
    .eq("user_id", user.id)
    .eq("activity_date", today)
    .maybeSingle();

  const prevLessons = (existing?.lessons_completed as number) ?? 0;
  const prevMinutes = (existing?.minutes_studied as number) ?? 0;

  // Upsert with accumulated totals.
  const { error: upsertError } = await writeClient
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

  if (upsertError) {
    console.error("[recordStudySession] upsert error:", upsertError.message);
    return { error: upsertError.message };
  }

  // Update streak on profile.
  const { data: profile } = await writeClient
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

      await writeClient
        .from("profiles")
        .update({ streak, last_active_date: today })
        .eq("id", user.id);
    }
  }

  return { error: null };
}

// =====================================================================
// Chapter progress — track which chapters the user has completed
// =====================================================================

/**
 * Get all chapter progress records for the current user.
 * Used by the dashboard and the journey map.
 */
export async function getChapterProgress(): Promise<ChapterProgress[]> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data } = await supabase
    .from("learning_progress")
    .select("*")
    .eq("user_id", user.id)
    .not("chapter_slug", "is", null)
    .order("created_at", { ascending: true });

  return (data ?? []) as unknown as ChapterProgress[];
}

/**
 * Get the chapter the user should continue with for a course
 * (first not-completed in that course's curriculum).
 */
export async function getCurrentChapterSlug(
  courseId?: string | null,
): Promise<string | null> {
  const { getCourse } = await import("@/config/courses");
  const course = await getCourse(courseId ?? "spanish");
  const chapters = course.getChapters();
  const courseSlugs = new Set(chapters.map((c) => c.slug));

  const progress = await getChapterProgress();
  const completedSlugs = new Set(
    progress
      .filter((p) => p.status === "completed" && p.chapter_slug)
      .map((p) => p.chapter_slug as string)
      .filter((slug) => courseSlugs.has(slug)),
  );

  for (const ch of chapters) {
    if (!completedSlugs.has(ch.slug)) return ch.slug;
  }
  return null;
}

/**
 * Mark a chapter as started (in_progress). Idempotent — if already
 * started or completed, does nothing.
 */
export async function startChapter(chapterSlug: string): Promise<void> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
  const admin = createSupabaseAdminClient();
  const client = admin ?? supabase;

  // Check if already exists.
  const { data: existing } = await client
    .from("learning_progress")
    .select("id, status")
    .eq("user_id", user.id)
    .eq("chapter_slug", chapterSlug)
    .maybeSingle();

  if (existing) return; // Already started or completed.

  // Insert a new in_progress row.
  await client.from("learning_progress").insert({
    user_id: user.id,
    chapter_slug: chapterSlug,
    topic: chapterSlug,
    status: "in_progress",
    score: 0,
    started_at: new Date().toISOString(),
    words_learned: 0,
    exercises_completed: 0,
  });
}

/**
 * Mark a chapter as completed and record the stats. Also records a
 * study session for progress/streak.
 */
export async function completeChapter(
  chapterSlug: string,
  stats: { score: number; wordsLearned: number; exercisesCompleted: number },
): Promise<void> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
  const admin = createSupabaseAdminClient();
  const client = admin ?? supabase;

  // Upsert the chapter progress.
  await client
    .from("learning_progress")
    .upsert(
      {
        user_id: user.id,
        chapter_slug: chapterSlug,
        topic: chapterSlug,
        status: "completed",
        score: stats.score,
        started_at: new Date().toISOString(),
        completed_at: new Date().toISOString(),
        words_learned: stats.wordsLearned,
        exercises_completed: stats.exercisesCompleted,
      },
      { onConflict: "user_id,chapter_slug" },
    );

  // Record study time.
  await recordStudySession(8, 1).catch(() => {});

  // Silent learning-profile bump for chapter grammar/vocab.
  try {
    const { data: profile } = await client
      .from("profiles")
      .select("active_course_id")
      .eq("id", user.id)
      .maybeSingle();
    const courseId = (profile?.active_course_id as string) ?? "spanish";
    const { getCourse } = await import("@/config/courses");
    const course = await getCourse(courseId);
    const chapter = course.getChapter(chapterSlug);
    if (chapter) {
      const { updateStudentLearningProfile } = await import(
        "@/server/learning/student-profile"
      );
      const ok = stats.score >= 50;
      await updateStudentLearningProfile({
        courseId,
        grammarTopic: chapter.grammarTopic,
        vocabTopic: chapter.vocabTopic ?? null,
        correct: ok,
        addStrength: ok
          ? `completed chapter: ${chapter.titleEs || chapter.title}`
          : null,
        addWeakness: ok
          ? null
          : `needs review: ${chapter.grammarTopic}`,
        skillHints: {
          reading: chapter.level,
          writing: chapter.level,
        },
      });
    }
  } catch (err) {
    console.warn(
      "[completeChapter] learning profile update failed:",
      (err as Error).message,
    );
  }
}
