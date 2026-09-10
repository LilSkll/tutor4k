import { requireTeacherStudioAccess } from "@/server/teacher/authz";
import { TeacherSchoolClient } from "@/components/teacher/teacher-school-client";

export default async function TeacherSchoolPage() {
  await requireTeacherStudioAccess();
  return <TeacherSchoolClient />;
}
