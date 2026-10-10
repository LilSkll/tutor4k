import { notFound } from "next/navigation";
import { getCourse } from "@/config/courses";

/**
 * Layout for course-scoped routes: /course/spanish/dashboard, etc.
 * Validates the course id before rendering children.
 */
export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;

  const course = await getCourse(courseId);
  if (!course) {
    notFound();
  }

  return <>{children}</>;
}
