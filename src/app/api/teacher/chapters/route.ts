import { NextRequest, NextResponse } from "next/server";
import { getCourse } from "@/config/courses";
import { requireTeacherSession } from "@/server/teacher/links";

/** Chapter list for assignment picker (titles for UI). */
export async function GET(req: NextRequest) {
  try {
    await requireTeacherSession();
    const courseId = new URL(req.url).searchParams.get("courseId");
    if (courseId !== "spanish" && courseId !== "english") {
      return NextResponse.json({ error: "courseId required" }, { status: 400 });
    }
    const course = await getCourse(courseId);
    const chapters = course.getChapters().map((c) => ({
      slug: c.slug,
      title: c.title,
      level: c.level,
      number: c.number,
    }));
    return NextResponse.json({ chapters });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
