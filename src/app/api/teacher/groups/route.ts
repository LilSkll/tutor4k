import { NextRequest, NextResponse } from "next/server";
import { requireTeacherSession } from "@/server/teacher/links";
import { SchoolService } from "@/server/services/schools";

export async function GET(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const url = new URL(req.url);
    const schoolId = url.searchParams.get("schoolId") ?? undefined;
    const courseId = url.searchParams.get("courseId") ?? undefined;
    const groups = await SchoolService.listGroups(teacher.id, {
      schoolId: schoolId || undefined,
      courseId:
        courseId === "spanish" || courseId === "english" ? courseId : undefined,
    });
    return NextResponse.json({ groups });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}

export async function POST(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const body = (await req.json()) as {
      name?: string;
      courseId?: string;
      schoolId?: string | null;
    };
    const group = await SchoolService.createGroup({
      teacherId: teacher.id,
      name: body.name ?? "",
      courseId: body.courseId ?? "spanish",
      schoolId: body.schoolId ?? null,
    });
    return NextResponse.json({ group });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED"
        ? 401
        : msg === "FORBIDDEN"
          ? 403
          : msg === "INVALID_NAME" || msg === "INVALID_COURSE"
            ? 400
            : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
