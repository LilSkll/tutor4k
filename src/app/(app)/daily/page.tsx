import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DailySessionGate } from "@/components/daily/daily-session-gate";
import { localDateKey, parseLocalDateKey } from "@/lib/local-date";
import { isHalloweenCourse, isHalloweenSeasonOn } from "@/lib/seasonal";
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

  const jar = await cookies();
  const todayIso =
    parseLocalDateKey(jar.get("st_local_date")?.value) ?? localDateKey();
  const halloween =
    isHalloweenCourse(courseId) && isHalloweenSeasonOn(todayIso);

  return (
    <div className="page-container relative space-y-4">
      {halloween ? (
        <span
          className="hw-web pointer-events-none absolute right-4 top-2 opacity-35"
          aria-hidden
        />
      ) : null}
      <DailySessionGate />
    </div>
  );
}
