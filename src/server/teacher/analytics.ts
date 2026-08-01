import { getTeacherDashboardRows } from "@/server/teacher/dashboard";
import { AssignmentService } from "@/server/services/assignments";
import { getCourseLearningProfileAdmin } from "@/server/learning/student-profile";
import type { TeacherAnalyticsDTO } from "@/types/teacher";

export type { TeacherAnalyticsDTO };

/** Cohort analytics for Teacher Studio (Stage 8). */
export async function getTeacherAnalytics(
  teacherId: string,
  courseId?: string,
): Promise<TeacherAnalyticsDTO> {
  const [rows, assignments] = await Promise.all([
    getTeacherDashboardRows(teacherId, courseId),
    AssignmentService.listForTeacher(teacherId, {
      courseId:
        courseId === "spanish" || courseId === "english" ? courseId : undefined,
    }),
  ]);

  const weekMap = new Map<string, { minutes: number; lessons: number }>();
  for (const row of rows) {
    for (const day of row.weekActivity) {
      const prev = weekMap.get(day.date) ?? { minutes: 0, lessons: 0 };
      prev.minutes += day.minutesStudied;
      prev.lessons += day.lessonsCompleted;
      weekMap.set(day.date, prev);
    }
  }
  const weekActivity = [...weekMap.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, v]) => ({
      date,
      minutes: v.minutes,
      lessons: v.lessons,
    }));

  const studentProgress = rows.map((r) => ({
    studentId: r.link.student_id,
    name: r.student?.name || r.student?.email || r.link.student_id.slice(0, 8),
    completionPercent: r.completionPercent,
    averageScore: r.averageScore,
    streak: r.streak,
    weekMinutes: r.weekMinutes,
  }));

  const topicCounts = new Map<string, { type: string; count: number }>();
  await Promise.all(
    rows.map(async (r) => {
      try {
        const profile = await getCourseLearningProfileAdmin(
          r.link.student_id,
          r.link.course_id,
          8,
        );
        for (const rec of profile.recommendations ?? []) {
          const key = rec.topic;
          const prev = topicCounts.get(key) ?? { type: rec.type, count: 0 };
          prev.count += 1;
          topicCounts.set(key, prev);
        }
      } catch {
        // ignore single-student profile failures
      }
    }),
  );
  const weakTopics = [...topicCounts.entries()]
    .map(([topic, v]) => ({ topic, type: v.type, count: v.count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);

  const mistakeTypeCounts = new Map<string, number>();
  let openMistakes = 0;
  for (const r of rows) {
    openMistakes += r.recentMistakes.length;
    for (const m of r.recentMistakes) {
      const type = m.exerciseType || "other";
      mistakeTypeCounts.set(type, (mistakeTypeCounts.get(type) ?? 0) + 1);
    }
  }
  const mistakeTypes = [...mistakeTypeCounts.entries()]
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count);

  const n = rows.length;
  const avgCompletion =
    n === 0
      ? 0
      : Math.round(
          rows.reduce((s, r) => s + r.completionPercent, 0) / n,
        );
  const scoreRows = rows.filter((r) => r.averageScore != null);
  const avgScore =
    scoreRows.length === 0
      ? null
      : Math.round(
          scoreRows.reduce((s, r) => s + (r.averageScore as number), 0) /
            scoreRows.length,
        );
  const avgStreak =
    n === 0 ? 0 : Math.round(rows.reduce((s, r) => s + r.streak, 0) / n);
  const totalWeekMinutes = rows.reduce((s, r) => s + r.weekMinutes, 0);
  const activeThisWeek = rows.filter((r) => r.weekMinutes > 0).length;

  const liveAssignments = assignments.filter((a) => a.status !== "cancelled");
  const assignmentsAssigned = liveAssignments.filter(
    (a) => a.status === "assigned",
  ).length;
  const assignmentsCompleted = liveAssignments.filter(
    (a) => a.status === "completed",
  ).length;

  return {
    courseId: courseId ?? "all",
    stats: {
      studentCount: n,
      activeThisWeek,
      avgCompletionPercent: avgCompletion,
      avgScore,
      avgStreak,
      totalWeekMinutes,
      assignmentsAssigned,
      assignmentsCompleted,
      openMistakes,
    },
    weekActivity,
    studentProgress: studentProgress.sort(
      (a, b) => b.completionPercent - a.completionPercent,
    ),
    weakTopics,
    mistakeTypes,
  };
}
