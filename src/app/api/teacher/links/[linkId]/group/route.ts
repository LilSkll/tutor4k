import { NextRequest, NextResponse } from "next/server";
import { requireTeacherSession } from "@/server/teacher/links";
import { SchoolService } from "@/server/services/schools";

/** Assign / clear group on a teacher_students link. */
export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ linkId: string }> },
) {
  try {
    const teacher = await requireTeacherSession();
    const { linkId } = await ctx.params;
    const body = (await req.json()) as { groupId?: string | null };
    await SchoolService.assignStudentToGroup({
      teacherId: teacher.id,
      linkId,
      groupId: body.groupId ?? null,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED"
        ? 401
        : msg === "FORBIDDEN"
          ? 403
          : msg === "GROUP_NOT_FOUND" ||
              msg === "LINK_NOT_FOUND" ||
              msg === "COURSE_MISMATCH"
            ? 400
            : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
