import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";

/**
 * PATCH /api/profile
 * Body: { activeCourseId?, name?, interfaceLanguage?, ... }
 * Updates the user's profile fields.
 */
export async function PATCH(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      activeCourseId?: string;
      name?: string;
      interfaceLanguage?: string;
      level?: string;
      goal?: string;
      dailyGoalMinutes?: number;
    };

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const updates: Record<string, unknown> = {};
    if (body.activeCourseId !== undefined)
      updates.active_course_id = body.activeCourseId;
    if (body.name !== undefined) updates.name = body.name;
    if (body.interfaceLanguage !== undefined)
      updates.interface_language = body.interfaceLanguage;
    if (body.level !== undefined) updates.level = body.level;
    if (body.goal !== undefined) updates.goal = body.goal;
    if (body.dailyGoalMinutes !== undefined)
      updates.daily_goal_minutes = body.dailyGoalMinutes;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "No fields to update" }, { status: 400 });
    }

    // Use service-role for writes.
    let client = supabase;
    try {
      const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
      const admin = createSupabaseAdminClient();
      if (admin) client = admin;
    } catch {}

    const { error } = await client
      .from("profiles")
      .update(updates)
      .eq("id", user.id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/profile]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}
