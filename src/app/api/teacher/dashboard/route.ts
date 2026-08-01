import { NextRequest, NextResponse } from "next/server";
import { requireTeacherSession } from "@/server/teacher/links";
import { getTeacherDashboardRows } from "@/server/teacher/dashboard";

export async function GET(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const courseId = new URL(req.url).searchParams.get("courseId") ?? undefined;
    const students = await getTeacherDashboardRows(
      teacher.id,
      courseId === "english" || courseId === "spanish" ? courseId : undefined,
    );
    return NextResponse.json({ students });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
