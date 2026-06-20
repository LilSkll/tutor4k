import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";

/**
 * Aggregated dashboard stats: profile, today's activity, totals.
 */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("name, level, streak, daily_goal_minutes")
    .eq("id", user.id)
    .single();

  const today = new Date().toISOString().slice(0, 10);

  const { data: todayActivity } = await supabase
    .from("daily_activity")
    .select("lessons_completed, minutes_studied")
    .eq("user_id", user.id)
    .eq("activity_date", today)
    .maybeSingle();

  const { count: totalLessons } = await supabase
    .from("daily_activity")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { count: vocabularyCount } = await supabase
    .from("vocabulary")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id);

  return NextResponse.json({
    profile: profile ?? {
      name: "",
      level: null,
      streak: 0,
      daily_goal_minutes: 15,
    },
    lessonsToday: todayActivity?.lessons_completed ?? 0,
    minutesToday: todayActivity?.minutes_studied ?? 0,
    totalLessons: totalLessons ?? 0,
    vocabularyCount: vocabularyCount ?? 0,
  });
}
