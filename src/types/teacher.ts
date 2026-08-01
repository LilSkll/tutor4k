/** Teacher Studio link/invite types (shared client + server). */

export type TeacherStudentRole = "student" | "trial" | "alumni";
export type TeacherLinkStatus = "pending" | "active" | "revoked";
export type TeacherLinkCreatedBy = "teacher" | "school_admin" | "system";

export type TeacherInviteRow = {
  id: string;
  teacher_id: string;
  group_id: string | null;
  course_id: string;
  code: string;
  token: string;
  max_uses: number | null;
  uses_count: number;
  expires_at: string | null;
  status: "open" | "closed";
  created_at: string;
  deleted_at: string | null;
};

export type TeacherStudentRow = {
  id: string;
  teacher_id: string;
  student_id: string;
  group_id: string | null;
  course_id: string;
  role: TeacherStudentRole;
  status: TeacherLinkStatus;
  created_by: TeacherLinkCreatedBy;
  invited_at: string;
  accepted_at: string | null;
  created_at: string;
  deleted_at: string | null;
};

/** Student card payload (Stage 5) — shared API/client shape. */
export type TeacherStudentCardDTO = {
  link: TeacherStudentRow;
  student: {
    id: string;
    name: string;
    email: string;
    level: string | null;
    goal: string | null;
    streak: number;
    lastActiveDate: string | null;
    createdAt: string | null;
    dailyGoalMinutes: number | null;
  };
  progress: {
    completedChapters: number;
    totalChapters: number;
    completionPercent: number;
    averageScore: number | null;
  };
  chapters: Array<{
    chapterSlug: string;
    title: string;
    status: "not_started" | "in_progress" | "completed";
    score: number;
    completedAt: string | null;
    startedAt: string | null;
  }>;
  weekActivity: Array<{
    date: string;
    minutesStudied: number;
    lessonsCompleted: number;
  }>;
  activityHistory: Array<{
    date: string;
    minutesStudied: number;
    lessonsCompleted: number;
  }>;
  recentExercises: Array<{
    id: string;
    exercise: string;
    exerciseType: string;
    level: string | null;
    correct: boolean;
    userAnswer: string;
    feedback: string;
    createdAt: string;
  }>;
  recentMistakes: Array<{
    id: string;
    exercise: string;
    exerciseType: string;
    feedback: string;
    createdAt: string;
  }>;
  difficultTopics: Array<{
    type: "grammar" | "vocabulary";
    topic: string;
    priority: number;
    reason: string;
    confidence?: number;
    certainty?: number;
  }>;
};
