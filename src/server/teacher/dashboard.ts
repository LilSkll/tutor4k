import { listTeacherStudents } from "@/server/teacher/links";
import { ProgressService } from "@/server/services/progress";
import type { RecentMistake, WeekActivityDay } from "@/server/services/progress";
import type { TeacherStudentRow } from "@/types/teacher";

export type TeacherDashboardStudentRow = {
  link: TeacherStudentRow;
  student: {
    id: string;
    name: string;
    email: string;
    level: string | null;
    last_active_date: string | null;
  } | null;
  streak: number;
  lastActiveDate: string | null;
  completionPercent: number;
  completedChapters: number;
  totalChapters: number;
  averageScore: number | null;
  weekActivity: WeekActivityDay[];
  weekMinutes: number;
  recentMistakes: RecentMistake[];
};

/** Dashboard aggregates for all active linked students (Stage 4). */
export async function getTeacherDashboardRows(
  teacherId: string,
  courseId?: string,
): Promise<TeacherDashboardStudentRow[]> {
  const links = await listTeacherStudents(teacherId, courseId);

  const rows = await Promise.all(
    links.map(async ({ link, student }) => {
      const cid = link.course_id;
      const sid = link.student_id;
      const [progress, weekActivity, streakInfo, recentMistakes] =
        await Promise.all([
          ProgressService.getCourseProgress(sid, cid),
          ProgressService.getWeekActivity(sid, cid),
          ProgressService.getStreakSummary(sid),
          ProgressService.getRecentMistakes(sid, cid, 3),
        ]);

      const weekMinutes = weekActivity.reduce(
        (sum, d) => sum + d.minutesStudied,
        0,
      );

      return {
        link,
        student: student
          ? {
              id: student.id as string,
              name: (student.name as string) || "",
              email: (student.email as string) || "",
              level: (student.level as string | null) ?? null,
              last_active_date:
                (student.last_active_date as string | null) ?? null,
            }
          : null,
        streak: streakInfo.streak,
        lastActiveDate:
          streakInfo.lastActiveDate ??
          (student?.last_active_date as string | null) ??
          null,
        completionPercent: progress.completionPercent,
        completedChapters: progress.completedChapters,
        totalChapters: progress.totalChapters,
        averageScore: progress.averageScore,
        weekActivity,
        weekMinutes,
        recentMistakes,
      };
    }),
  );

  return rows;
}
