import { NextRequest, NextResponse } from "next/server";
import { requireTeacherSession } from "@/server/teacher/links";
import { SchoolService } from "@/server/services/schools";

export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  try {
    const teacher = await requireTeacherSession();
    const { id } = await ctx.params;
    const body = (await req.json()) as { name?: string };
    await SchoolService.renameGroup(teacher.id, id, body.name ?? "");
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED"
        ? 401
        : msg === "FORBIDDEN"
          ? 403
          : msg === "INVALID_NAME"
            ? 400
            : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}

export async function DELETE(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  try {
    const teacher = await requireTeacherSession();
    const { id } = await ctx.params;
    await SchoolService.deleteGroup(teacher.id, id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
