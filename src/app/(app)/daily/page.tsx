import { redirect } from "next/navigation";
import { DailySessionGate } from "@/components/daily/daily-session-gate";
import { getCurrentChapterSlug, getCurrentProfile } from "@/server/actions/data";

export default async function DailyPage() {
  const profile = await getCurrentProfile();
  if (!profile) {
    redirect("/login");
  }

  const courseId = profile.active_course_id ?? "spanish";
  const chapterSlug = await getCurrentChapterSlug(courseId);
  if (!chapterSlug) {
    redirect("/chapters");
  }

  return (
    <div className="page-container space-y-4">
      <DailySessionGate />
    </div>
  );
}
