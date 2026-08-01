import { TeacherDashboardPage } from "@/components/teacher/teacher-dashboard-page";
import { requireTeacherStudioAccess } from "@/server/teacher/authz";

export default async function TeacherDashboardRoute() {
  const profile = await requireTeacherStudioAccess();
  return <TeacherDashboardPage teacherName={profile.name} />;
}
