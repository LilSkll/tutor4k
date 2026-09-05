import { NextRequest, NextResponse } from "next/server";
import {
  listTeacherStudents,
  requireTeacherSession,
  revokeTeacherStudent,
} from "@/server/teacher/links";

export async function GET(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const courseId = new URL(req.url).searchParams.get("courseId") ?? undefined;
    const students = await listTeacherStudents(
      teacher.id,
      courseId === "english" || courseId === "spanish" ? courseId : undefined,
    );
    return NextResponse.json({ students });
  } catch (err) {
    const msg = (err as Error).message;
    const status = msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const id = new URL(req.url).searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "id required" }, { status: 400 });
    }
    await revokeTeacherStudent(teacher.id, id);
    return NextResponse.json({ ok: true });
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
