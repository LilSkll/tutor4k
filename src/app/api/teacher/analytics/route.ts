import { NextRequest, NextResponse } from "next/server";
import { requireTeacherSession } from "@/server/teacher/links";
import { getTeacherAnalytics } from "@/server/teacher/analytics";
import type { InterfaceLanguage } from "@/types";

export async function GET(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const url = new URL(req.url);
    const courseId = url.searchParams.get("courseId") ?? undefined;
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
    const analytics = await getTeacherAnalytics(
      teacher.id,
      courseId === "english" || courseId === "spanish" ? courseId : undefined,
      lang,
    );
    return NextResponse.json({ analytics });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
