import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import { getCourse } from "@/config/courses";
import { getChapterTitle } from "@/lib/chapter-display";
import { ProgressService } from "@/server/services/progress";
import type { WeekActivityDay } from "@/server/services/progress";
import { assertCanViewStudent } from "@/server/teacher/links";
import { getCourseLearningProfileAdmin } from "@/server/learning/student-profile";
import type { TeacherStudentCardDTO } from "@/types/teacher";
import type { InterfaceLanguage } from "@/types";

export type StudentCardData = TeacherStudentCardDTO;

function requireAdmin() {
  const admin = createSupabaseAdminClient();
  if (!admin) {
    throw new Error("Service role is required for student card.");
  }
  return admin;
}

async function getChapterRows(
  userId: string,
  courseId: string,
  lang: InterfaceLanguage = "ru",
): Promise<TeacherStudentCardDTO["chapters"]> {
  const admin = requireAdmin();
  const course = await getCourse(courseId);
  const chapters = course.getChapters();
  const bySlug = new Map(chapters.map((c) => [c.slug, c]));
  const slugSet = new Set(chapters.map((c) => c.slug));

  const { data, error } = await admin
    .from("learning_progress")
    .select(
      "chapter_slug, status, score, completed_at, started_at, course_id",
    )
    .eq("user_id", userId)
    .not("chapter_slug", "is", null)
    .order("completed_at", { ascending: false });
  if (error) throw new Error(error.message);

  return (data ?? [])
    .filter((r) => {
      const slug = r.chapter_slug as string;
      if (!slugSet.has(slug)) return false;
      if (r.course_id && r.course_id !== courseId) return false;
      return true;
    })
    .map((r) => {
      const slug = r.chapter_slug as string;
      const ch = bySlug.get(slug);
      return {
        chapterSlug: slug,
        title: ch ? getChapterTitle(ch, lang) : slug,
        status: r.status as TeacherStudentCardDTO["chapters"][number]["status"],
        score: Number(r.score) || 0,
        completedAt: (r.completed_at as string | null) ?? null,
        startedAt: (r.started_at as string | null) ?? null,
      };
    });
}

async function getExerciseRows(
  userId: string,
  courseId: string,
  limit = 25,
): Promise<TeacherStudentCardDTO["recentExercises"]> {
  const admin = requireAdmin();
  const { data, error } = await admin
    .from("exercises_history")
    .select(
      "id, exercise, exercise_type, level, correct, user_answer, feedback, created_at, course_id",
    )
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit * 2);
  if (error) throw new Error(error.message);

  return (data ?? [])
    .filter((r) => {
      const cid = r.course_id as string | null;
      return !cid || cid === courseId;
    })
    .slice(0, limit)
    .map((r) => ({
      id: r.id as string,
      exercise: String(r.exercise ?? "").slice(0, 160),
      exerciseType: String(r.exercise_type ?? ""),
      level: (r.level as string | null) ?? null,
      correct: Boolean(r.correct),
      userAnswer: String(r.user_answer ?? "").slice(0, 120),
      feedback: String(r.feedback ?? "").slice(0, 160),
      createdAt: r.created_at as string,
    }));
}

async function getActivityHistory(
  userId: string,
  courseId: string,
  days = 30,
): Promise<WeekActivityDay[]> {
  const admin = requireAdmin();
  const now = new Date();
  const fromDate = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() - (days - 1),
    ),
  );
  const from = fromDate.toISOString().slice(0, 10);

  const { data, error } = await admin
    .from("daily_activity")
    .select("activity_date, minutes_studied, lessons_completed, course_id")
    .eq("user_id", userId)
    .gte("activity_date", from)
    .order("activity_date", { ascending: false });
  if (error) throw new Error(error.message);

  const byDate = new Map<string, WeekActivityDay>();
  for (const row of data ?? []) {
    const cid = row.course_id as string | null;
    if (cid == null) {
      if (courseId !== "spanish") continue;
    } else if (cid !== courseId) {
      continue;
    }
    const date = row.activity_date as string;
    const prev = byDate.get(date) ?? {
      date,
      minutesStudied: 0,
      lessonsCompleted: 0,
    };
    prev.minutesStudied += Number(row.minutes_studied) || 0;
    prev.lessonsCompleted += Number(row.lessons_completed) || 0;
    byDate.set(date, prev);
  }

  return [...byDate.values()].sort((a, b) => b.date.localeCompare(a.date));
}

/** Full student card for a linked teacher↔student↔course triple. */
export async function getStudentCard(
  teacherId: string,
  studentId: string,
  courseId: string,
  interfaceLanguage: InterfaceLanguage = "ru",
): Promise<StudentCardData> {
  const link = await assertCanViewStudent(teacherId, studentId, courseId);
  const admin = requireAdmin();

  const { data: profile, error } = await admin
    .from("profiles")
    .select(
      "id, name, email, level, goal, streak, last_active_date, created_at, daily_goal_minutes",
    )
    .eq("id", studentId)
    .maybeSingle();
  if (error) throw new Error(error.message);
  if (!profile) throw new Error("NOT_FOUND");

  const [
    progress,
    chapters,
    weekActivity,
    activityHistory,
    recentExercises,
    recentMistakes,
    learningProfile,
  ] = await Promise.all([
    ProgressService.getCourseProgress(studentId, courseId),
    getChapterRows(studentId, courseId, interfaceLanguage),
    ProgressService.getWeekActivity(studentId, courseId),
    getActivityHistory(studentId, courseId, 30),
    getExerciseRows(studentId, courseId, 25),
    ProgressService.getRecentMistakes(studentId, courseId, 15),
    getCourseLearningProfileAdmin(studentId, courseId, 8),
  ]);

  return {
    link,
    student: {
      id: profile.id as string,
      name: (profile.name as string) || "",
      email: (profile.email as string) || "",
      level: (profile.level as string | null) ?? null,
      goal: (profile.goal as string | null) ?? null,
      streak: Number(profile.streak) || 0,
      lastActiveDate: (profile.last_active_date as string | null) ?? null,
      createdAt: (profile.created_at as string | null) ?? null,
      dailyGoalMinutes:
        profile.daily_goal_minutes != null
          ? Number(profile.daily_goal_minutes)
          : null,
    },
    progress,
    chapters,
    weekActivity,
    activityHistory,
    recentExercises,
    recentMistakes,
    difficultTopics: learningProfile.recommendations ?? [],
  };
}
