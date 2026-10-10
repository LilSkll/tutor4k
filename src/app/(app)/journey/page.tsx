import { getCurrentProfile, getChapterProgress } from "@/server/actions/data";
import { getCourse } from "@/config/courses";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getChapterTargetTitle } from "@/lib/chapter-display";
import {
  emptyCourseFinds,
  getEggById,
  normalizeCourseFinds,
  type JourneyFindsStore,
} from "@/config/journey/easter-eggs";
import { JourneyPassportClient } from "@/components/journey/journey-passport-client";

export default async function JourneyPage() {
  const [profile, progress] = await Promise.all([
    getCurrentProfile(),
    getChapterProgress(),
  ]);

  const courseId = profile?.active_course_id ?? "spanish";
  const course = await getCourse(courseId);
  const chapters = course.getChapters();

  const completed = new Set(
    progress
      .filter((p) => p.status === "completed" && p.chapter_slug)
      .map((p) => p.chapter_slug as string),
  );

  let findsStore: JourneyFindsStore = {};
  try {
    const supabase = await createSupabaseServerClient();
    if (profile?.id) {
      const { data } = await supabase
        .from("profiles")
        .select("journey_finds")
        .eq("id", profile.id)
        .maybeSingle();
      if (data?.journey_finds && typeof data.journey_finds === "object") {
        findsStore = data.journey_finds as JourneyFindsStore;
      }
    }
  } catch {
    // column may be missing until migration
  }

  const slice = normalizeCourseFinds(findsStore[courseId] ?? emptyCourseFinds());
  const eggChapterSlugs = new Set(slice.eggs.map((e) => e.chapterSlug));
  const certBySlug = new Map(slice.chapterCerts.map((c) => [c.slug, c]));

  // Enrich legacy badge-only rows with live chapter metadata when possible.
  const chapterCerts = slice.chapterCerts.map((cert) => {
    const ch = chapters.find((c) => c.slug === cert.slug);
    if (!ch) return cert;
    return {
      ...cert,
      number: cert.number || ch.number,
      level: cert.number ? cert.level : ch.level,
      title: cert.title === cert.slug ? ch.title : cert.title,
      titleNative:
        cert.titleNative === cert.slug
          ? getChapterTargetTitle(ch, courseId)
          : cert.titleNative,
    };
  });

  const passportChapters = chapters.map((ch) => ({
    slug: ch.slug,
    number: ch.number,
    title: ch.title,
    titleNative: getChapterTargetTitle(ch, courseId),
    level: ch.level,
    completed: completed.has(ch.slug),
    hasCertificate: certBySlug.has(ch.slug) || slice.chapterBadges.includes(ch.slug),
    hasSpecialStamp: eggChapterSlugs.has(ch.slug),
  }));

  const foundEggs = slice.eggs
    .map((e) => getEggById(e.id))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  return (
    <JourneyPassportClient
      courseId={courseId}
      courseFlag={course.flag}
      courseTitle={course.title}
      userName={profile?.name ?? ""}
      chapters={passportChapters}
      foundEggs={foundEggs}
      chapterCerts={chapterCerts}
      levelCerts={slice.levelCerts ?? []}
      courseCertAt={slice.courseCertAt ?? null}
    />
  );
}
