import { NextRequest, NextResponse } from "next/server";
import { requireTeacherSession } from "@/server/teacher/links";
import { SchoolService } from "@/server/services/schools";
import type { SchoolMemberRole } from "@/types/school";

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ schoolId: string }> },
) {
  try {
    const teacher = await requireTeacherSession();
    const { schoolId } = await ctx.params;
    const members = await SchoolService.listMembers(teacher.id, schoolId);
    return NextResponse.json({ members });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}

export async function POST(
  req: NextRequest,
  ctx: { params: Promise<{ schoolId: string }> },
) {
  try {
    const teacher = await requireTeacherSession();
    const { schoolId } = await ctx.params;
    const body = (await req.json()) as {
      email?: string;
      memberRole?: SchoolMemberRole;
    };
    if (!body.email?.trim()) {
      return NextResponse.json({ error: "email required" }, { status: 400 });
    }
    const member = await SchoolService.addMember({
      actorId: teacher.id,
      schoolId,
      email: body.email,
      memberRole: body.memberRole,
    });
    return NextResponse.json({ member });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED"
        ? 401
        : msg === "FORBIDDEN"
          ? 403
          : msg === "USER_NOT_FOUND" || msg === "NOT_A_TEACHER"
            ? 400
            : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
