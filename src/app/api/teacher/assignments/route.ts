import { NextRequest, NextResponse } from "next/server";
import { AssignmentService } from "@/server/services/assignments";
import { requireTeacherSession } from "@/server/teacher/links";
import type {
  TeacherAssignmentKind,
  TeacherAssignmentPayload,
} from "@/types/assignments";

export async function GET(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const courseId = new URL(req.url).searchParams.get("courseId") ?? undefined;
    const assignments = await AssignmentService.listForTeacher(teacher.id, {
      courseId:
        courseId === "spanish" || courseId === "english" ? courseId : undefined,
    });
    return NextResponse.json({ assignments });
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
      studentId?: string;
      courseId?: string;
      kind?: TeacherAssignmentKind;
      payload?: TeacherAssignmentPayload;
      dueAt?: string | null;
    };

    if (!body.studentId) {
      return NextResponse.json({ error: "studentId required" }, { status: 400 });
    }
    if (body.courseId !== "spanish" && body.courseId !== "english") {
      return NextResponse.json({ error: "courseId required" }, { status: 400 });
    }
    if (body.kind !== "chapter" && body.kind !== "exercise_set") {
      return NextResponse.json({ error: "kind required" }, { status: 400 });
    }
    if (!body.payload || typeof body.payload !== "object") {
      return NextResponse.json({ error: "payload required" }, { status: 400 });
    }

    const assignment = await AssignmentService.create({
      teacherId: teacher.id,
      teacherName: teacher.name || "Teacher",
      studentId: body.studentId,
      courseId: body.courseId,
      kind: body.kind,
      payload: body.payload,
      dueAt: body.dueAt ?? null,
      source: "teacher",
    });
    return NextResponse.json({ assignment });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED"
        ? 401
        : msg === "FORBIDDEN"
          ? 403
          : msg === "INVALID_PAYLOAD"
            ? 400
            : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
