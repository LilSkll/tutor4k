import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { AssignmentService } from "@/server/services/assignments";
import { isStudentRole } from "@/lib/roles";
import type { UserRole } from "@/types";

async function requireStudent() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("UNAUTHORIZED");
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();
  const role = ((profile as { role?: UserRole } | null)?.role ??
    "student") as UserRole;
  if (!isStudentRole(role)) throw new Error("FORBIDDEN");
  return user;
}

export async function POST(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  try {
    const user = await requireStudent();
    const { id } = await ctx.params;
    await AssignmentService.markCompleted(user.id, id);
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
