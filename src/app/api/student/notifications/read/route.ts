import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { AssignmentService } from "@/server/services/assignments";
import { isStudentRole } from "@/lib/roles";
import type { UserRole } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
    }
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();
    const role = ((profile as { role?: UserRole } | null)?.role ??
      "student") as UserRole;
    if (!isStudentRole(role)) {
      return NextResponse.json({ error: "FORBIDDEN" }, { status: 403 });
    }

    const body = (await req.json().catch(() => ({}))) as { ids?: string[] };
    await AssignmentService.markNotificationsRead(user.id, body.ids);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
