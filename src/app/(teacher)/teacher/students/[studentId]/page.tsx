import { TeacherStudentCardClient } from "@/components/teacher/teacher-student-card-client";
import { requireTeacherStudioAccess } from "@/server/teacher/authz";

export default async function TeacherStudentCardPage({
  params,
  searchParams,
}: {
  params: Promise<{ studentId: string }>;
  searchParams: Promise<{ courseId?: string }>;
}) {
  await requireTeacherStudioAccess();
  const { studentId } = await params;
  const sp = await searchParams;
  const courseId =
    sp.courseId === "english" || sp.courseId === "spanish"
      ? sp.courseId
      : "spanish";

  return (
    <TeacherStudentCardClient studentId={studentId} courseId={courseId} />
  );
}
