import Link from "next/link";
import { requireTeacherStudioAccess } from "@/server/teacher/authz";
import { listTeacherStudents } from "@/server/teacher/links";
import { TeacherStudentCardClient } from "@/components/teacher/teacher-student-card-client";
import { translate } from "@/lib/i18n/with-teacher";

export default async function TeacherStudentCardPage({
  params,
  searchParams,
}: {
  params: Promise<{ studentId: string }>;
  searchParams: Promise<{ courseId?: string }>;
}) {
  const profile = await requireTeacherStudioAccess();
  const { studentId } = await params;
  const sp = await searchParams;
  const lang = profile.interface_language ?? "ru";

  let courseId =
    sp.courseId === "english" || sp.courseId === "spanish"
      ? sp.courseId
      : null;

  if (!courseId) {
    const links = await listTeacherStudents(profile.id);
    const forStudent = links.filter((r) => r.link.student_id === studentId);
    if (forStudent.length === 1) {
      courseId = forStudent[0]!.link.course_id as "spanish" | "english";
    } else if (forStudent.length > 1) {
      return (
        <div className="mx-auto max-w-lg space-y-4">
          <h2 className="text-xl font-bold">
            {translate("teacher.card.pickCourse", lang)}
          </h2>
          <ul className="space-y-2 text-sm">
            {forStudent.map(({ link }) => (
              <li key={link.id}>
                <Link
                  className="text-primary hover:underline"
                  href={`/teacher/students/${encodeURIComponent(studentId)}?courseId=${encodeURIComponent(link.course_id)}`}
                >
                  {link.course_id}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      courseId = "spanish";
    }
  }

  return (
    <TeacherStudentCardClient studentId={studentId} courseId={courseId!} />
  );
}
