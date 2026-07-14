import { notFound, redirect } from "next/navigation";
import { getCourse, DEFAULT_COURSE_ID } from "@/config/courses";
import type { CourseConfig } from "@/types";

/**
 * Layout for course-scoped routes: /course/spanish/dashboard, etc.
 * Loads the CourseConfig and passes it via a React Context.
 */
export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;

  // Validate course exists.
  const course = await getCourse(courseId);
  if (!course) {
    notFound();
  }

  return <>{children}</>;
}
