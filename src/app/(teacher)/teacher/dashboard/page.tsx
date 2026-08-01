import { requireTeacherStudioAccess } from "@/server/teacher/authz";
import { TeacherDashboardPage } from "@/components/teacher/teacher-dashboard-page";

export default async function TeacherDashboardRoute() {
  const profile = await requireTeacherStudioAccess();
  return (
    <TeacherDashboardPage
      language={profile.interface_language ?? "ru"}
      teacherName={profile.name}
    />
  );
}
