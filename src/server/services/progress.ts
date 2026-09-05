import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import { getCourse } from "@/config/courses";
import { countCompletedForCourse } from "@/lib/chapter-display";

export type CourseProgressSummary = {
  completedChapters: number;
  totalChapters: number;
  completionPercent: number;
  averageScore: number | null;
};

export type WeekActivityDay = {
  date: string;
  minutesStudied: number;
  lessonsCompleted: number;
};

export type StreakSummary = {
  streak: number;
  lastActiveDate: string | null;
};

export type RecentMistake = {
  id: string;
  exercise: string;
  exerciseType: string;
  feedback: string;
  createdAt: string;
};

function requireAdmin() {
  const admin = createSupabaseAdminClient();
  if (!admin) {
    throw new Error("Service role is required for ProgressService.");
  }
  return admin;
}

function isoDateUTC(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function lastNDatesUTC(n: number): string[] {
  const out: string[] = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - i),
    );
    out.push(isoDateUTC(d));
  }
  return out;
}

/** Course progress aggregates (completion %, scores). Uses service role. */
export const ProgressService = {
  async getCourseProgress(
    userId: string,
    courseId: string,
  ): Promise<CourseProgressSummary> {
    const admin = requireAdmin();
    const course = await getCourse(courseId);
    const chapters = course.getChapters();
    const totalChapters = chapters.length;
    const courseSlugs = chapters.map((c) => c.slug);

    if (totalChapters === 0) {
      return {
        completedChapters: 0,
        totalChapters: 0,
        completionPercent: 0,
        averageScore: null,
      };
    }

    const { data, error } = await admin
      .from("learning_progress")
      .select("chapter_slug, status, score, course_id")
      .eq("user_id", userId)
      .not("chapter_slug", "is", null);
    if (error) throw new Error(error.message);

    const slugSet = new Set(courseSlugs);
    const rows = (data ?? []).filter((r) => {
      const slug = r.chapter_slug as string | null;
      if (!slug || !slugSet.has(slug)) return false;
      const cid = r.course_id as string | null;
      if (cid == null) return courseId === "spanish";
      return cid === courseId;
    });

    const completed = rows.filter((r) => r.status === "completed");
    const completedSlugs = completed
      .map((r) => r.chapter_slug as string)
      .filter(Boolean);
    const completedChapters = countCompletedForCourse(
      completedSlugs,
      courseSlugs,
    );
    const completionPercent =
      totalChapters > 0
        ? Math.round((completedChapters / totalChapters) * 100)
        : 0;

    const scores = completed
      .map((r) => Number(r.score))
      .filter((n) => Number.isFinite(n) && n > 0);
    const averageScore =
      scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : null;

    return {
      completedChapters,
      totalChapters,
      completionPercent,
      averageScore,
    };
  },

  async getWeekActivity(
    userId: string,
    courseId: string,
  ): Promise<WeekActivityDay[]> {
    const admin = requireAdmin();
    const dates = lastNDatesUTC(7);
    const from = dates[0]!;

    const { data, error } = await admin
      .from("daily_activity")
      .select("activity_date, minutes_studied, lessons_completed, course_id")
      .eq("user_id", userId)
      .gte("activity_date", from);
    if (error) throw new Error(error.message);

    const byDate = new Map<string, WeekActivityDay>();
    for (const d of dates) {
      byDate.set(d, { date: d, minutesStudied: 0, lessonsCompleted: 0 });
    }

    for (const row of data ?? []) {
      const cid = row.course_id as string | null;
      // Legacy rows without course_id count only toward spanish.
      if (cid == null) {
        if (courseId !== "spanish") continue;
      } else if (cid !== courseId) {
        continue;
      }
      const day = byDate.get(row.activity_date as string);
      if (!day) continue;
      day.minutesStudied += Number(row.minutes_studied) || 0;
      day.lessonsCompleted += Number(row.lessons_completed) || 0;
    }

    return dates.map((d) => byDate.get(d)!);
  },

  async getStreakSummary(userId: string): Promise<StreakSummary> {
    const admin = requireAdmin();
    const { data, error } = await admin
      .from("profiles")
      .select("streak, last_active_date")
      .eq("id", userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return {
      streak: Number(data?.streak) || 0,
      lastActiveDate: (data?.last_active_date as string | null) ?? null,
    };
  },

  async getRecentMistakes(
    userId: string,
    courseId: string,
    limit = 5,
  ): Promise<RecentMistake[]> {
    const admin = requireAdmin();
    const { data, error } = await admin
      .from("exercises_history")
      .select("id, exercise, exercise_type, feedback, created_at, course_id")
      .eq("user_id", userId)
      .eq("correct", false)
      .order("created_at", { ascending: false })
      .limit(limit * 3);
    if (error) throw new Error(error.message);

    return (data ?? [])
      .filter((r) => {
        const cid = r.course_id as string | null;
        if (cid == null) return courseId === "spanish";
        return cid === courseId;
      })
      .slice(0, limit)
      .map((r) => ({
        id: r.id as string,
        exercise: String(r.exercise ?? "").slice(0, 120),
        exerciseType: String(r.exercise_type ?? ""),
        feedback: String(r.feedback ?? "").slice(0, 160),
        createdAt: r.created_at as string,
      }));
  },
} as const;
