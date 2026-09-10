import { requireTeacherStudioAccess } from "@/server/teacher/authz";
import { TeacherAnalyticsClient } from "@/components/teacher/teacher-analytics-client";

export default async function TeacherAnalyticsPage() {
  await requireTeacherStudioAccess();
  return <TeacherAnalyticsClient />;
}
