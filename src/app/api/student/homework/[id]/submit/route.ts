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

/** Submit writing homework body and complete the assignment (no AI). */
export async function POST(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  try {
    const user = await requireStudent();
    const { id } = await ctx.params;
    const body = (await req.json()) as { body?: string };
    if (typeof body.body !== "string") {
      return NextResponse.json({ error: "body required" }, { status: 400 });
    }
    const submission = await AssignmentService.submitWriting(
      user.id,
      id,
      body.body,
    );
    return NextResponse.json({ submission });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED"
        ? 401
        : msg === "FORBIDDEN"
          ? 403
          : msg === "NOT_FOUND"
            ? 404
            : msg === "INVALID_BODY" || msg === "TOO_FEW_WORDS"
              ? 400
              : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
