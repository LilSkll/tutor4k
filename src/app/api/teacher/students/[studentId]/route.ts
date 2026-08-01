import { NextRequest, NextResponse } from "next/server";
import { requireTeacherSession } from "@/server/teacher/links";
import { getStudentCard } from "@/server/teacher/student-card";

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ studentId: string }> },
) {
  try {
    const teacher = await requireTeacherSession();
    const { studentId } = await ctx.params;
    const courseId = new URL(req.url).searchParams.get("courseId");
    if (!studentId) {
      return NextResponse.json({ error: "studentId required" }, { status: 400 });
    }
    if (courseId !== "spanish" && courseId !== "english") {
      return NextResponse.json(
        { error: "courseId required (spanish|english)" },
        { status: 400 },
      );
    }

    const card = await getStudentCard(teacher.id, studentId, courseId);
    return NextResponse.json({ card });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED"
        ? 401
        : msg === "FORBIDDEN"
          ? 403
          : msg === "NOT_FOUND"
            ? 404
            : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
