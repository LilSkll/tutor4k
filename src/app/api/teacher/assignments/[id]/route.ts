import { NextRequest, NextResponse } from "next/server";
import { AssignmentService } from "@/server/services/assignments";
import { requireTeacherSession } from "@/server/teacher/links";

export async function DELETE(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  try {
    const teacher = await requireTeacherSession();
    const { id } = await ctx.params;
    await AssignmentService.cancel(teacher.id, id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
