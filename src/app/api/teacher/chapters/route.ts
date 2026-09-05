import { NextRequest, NextResponse } from "next/server";
import { getCourse } from "@/config/courses";
import { getChapterTitle } from "@/lib/chapter-display";
import { requireTeacherSession } from "@/server/teacher/links";
import type { InterfaceLanguage } from "@/types";

/** Chapter list for assignment picker (titles localized for the teacher). */
export async function GET(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const url = new URL(req.url);
    const courseId = url.searchParams.get("courseId");
    if (courseId !== "spanish" && courseId !== "english") {
      return NextResponse.json({ error: "courseId required" }, { status: 400 });
    }
    const langParam = url.searchParams.get("interfaceLanguage");
    const lang: InterfaceLanguage =
      langParam === "en" ||
      langParam === "es" ||
      langParam === "de" ||
      langParam === "ru"
        ? langParam
        : teacher.interface_language === "en" ||
            teacher.interface_language === "es" ||
            teacher.interface_language === "de" ||
            teacher.interface_language === "ru"
          ? teacher.interface_language
          : "ru";

    const course = await getCourse(courseId);
    const chapters = course.getChapters().map((c) => ({
      slug: c.slug,
      title: getChapterTitle(c, lang),
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
