import { NextRequest, NextResponse } from "next/server";
import { getCourse } from "@/config/courses";
import { requireTeacherSession } from "@/server/teacher/links";
import { localizeGrammarTopicMetaList } from "@/lib/grammar-topic-localize";
import { toGrammarTopicMetaList } from "@/lib/grammar-topic-meta";

/** Grammar topic picker for writing homework (titles + slugs). */
export async function GET(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const url = new URL(req.url);
    const courseId = url.searchParams.get("courseId");
    if (courseId !== "spanish" && courseId !== "english") {
      return NextResponse.json({ error: "courseId required" }, { status: 400 });
    }
    const course = await getCourse(courseId);
  const lang =
    teacher.interface_language === "en" ||
    teacher.interface_language === "es" ||
    teacher.interface_language === "de" ||
    teacher.interface_language === "ru"
      ? teacher.interface_language
      : "ru";
    const topics = localizeGrammarTopicMetaList(
      toGrammarTopicMetaList(course.getGrammar()),
      lang,
    ).map((t) => ({
      slug: t.slug,
      title: t.localizedTitle,
      level: t.level,
      exam: t.exam ?? null,
      category: t.localizedCategory,
    }));
    return NextResponse.json({ topics });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
