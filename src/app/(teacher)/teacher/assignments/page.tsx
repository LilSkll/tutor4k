import { Suspense } from "react";
import { requireTeacherStudioAccess } from "@/server/teacher/authz";
import { TeacherAssignmentsClient } from "@/components/teacher/teacher-assignments-client";

export default async function TeacherAssignmentsPage() {
  await requireTeacherStudioAccess();
  return (
    <Suspense fallback={null}>
      <TeacherAssignmentsClient />
    </Suspense>
  );
}
