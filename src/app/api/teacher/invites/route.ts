import { NextRequest, NextResponse } from "next/server";
import {
  closeInvite,
  createInvite,
  listInvites,
  requireTeacherSession,
} from "@/server/teacher/links";

export async function GET() {
  try {
    const teacher = await requireTeacherSession();
    const invites = await listInvites(teacher.id);
    return NextResponse.json({ invites });
  } catch (err) {
    const msg = (err as Error).message;
    const status = msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}

export async function POST(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const body = (await req.json()) as {
      courseId?: string;
      maxUses?: number | null;
      expiresAt?: string | null;
    };
    const courseId = body.courseId === "english" ? "english" : "spanish";
    const invite = await createInvite({
      teacherId: teacher.id,
      courseId,
      maxUses: body.maxUses ?? null,
      expiresAt: body.expiresAt ?? null,
    });
    return NextResponse.json({ invite });
  } catch (err) {
    const msg = (err as Error).message;
    const status = msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "id required" }, { status: 400 });
    }
    await closeInvite(teacher.id, id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = (err as Error).message;
    const status = msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
