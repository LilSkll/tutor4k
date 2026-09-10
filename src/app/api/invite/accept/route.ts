import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { acceptInvite, getInviteByToken } from "@/server/teacher/links";
import { isStudentRole } from "@/lib/roles";
import type { UserRole } from "@/types";

/** GET ?token= — public preview of an open invite (no PII beyond teacher name). */
export async function GET(req: NextRequest) {
  try {
    const token = new URL(req.url).searchParams.get("token");
    if (!token) {
      return NextResponse.json({ error: "token required" }, { status: 400 });
    }
    const preview = await getInviteByToken(token);
    if (!preview) {
      return NextResponse.json({ error: "Invite not found" }, { status: 404 });
    }
    return NextResponse.json({ invite: preview });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}

/** POST — student accepts invite by code or token. */
export async function POST(req: NextRequest) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();
    const role = ((profile as { role?: UserRole } | null)?.role ??
      "student") as UserRole;
    if (!isStudentRole(role)) {
      return NextResponse.json(
        { error: "Only students can accept teacher invites" },
        { status: 403 },
      );
    }

    const body = (await req.json()) as { code?: string; token?: string };
    if (!body.code && !body.token) {
      return NextResponse.json(
        { error: "code or token required" },
        { status: 400 },
      );
    }

    const result = await acceptInvite({
      studentId: user.id,
      code: body.code,
      token: body.token,
    });

    return NextResponse.json({
      ok: true,
      courseId: result.courseId,
      teacherName: result.teacherName,
      linkId: result.link.id,
    });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message || "Accept failed" },
      { status: 400 },
    );
  }
}
