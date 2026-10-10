import type { GrammarLevel } from "@/types";
import {
  emptyCourseFinds,
  getEggById,
  normalizeCourseFinds,
  type ChapterCertRecord,
  type EasterEggDef,
  type JourneyCourseFinds,
  type JourneyFindsStore,
} from "@/config/journey/easter-eggs";
import { rollEasterEgg } from "@/lib/journey/roll-easter-egg";
import { localizeEggText } from "@/config/journey/easter-eggs";
import type { InterfaceLanguage } from "@/types";
import type {
  AwardedEggPayload,
  ChapterCompleteRewards,
} from "@/lib/journey/types";

export type { AwardedEggPayload, ChapterCompleteRewards };

function asStore(raw: unknown): JourneyFindsStore {
  if (!raw || typeof raw !== "object") return {};
  return raw as JourneyFindsStore;
}

function courseSlice(
  store: JourneyFindsStore,
  courseId: string,
): JourneyCourseFinds {
  return normalizeCourseFinds(store[courseId] ?? emptyCourseFinds());
}

function eggPayload(
  egg: EasterEggDef,
  lang: InterfaceLanguage,
  isNew: boolean,
): AwardedEggPayload {
  return {
    id: egg.id,
    rarity: egg.rarity,
    kind: egg.kind,
    title: localizeEggText(egg.title, lang),
    body: localizeEggText(egg.body, lang),
    highlight: localizeEggText(egg.highlight, lang),
    stampLabel: localizeEggText(egg.stampLabel, lang),
    isNew,
  };
}

type Client = {
  from: (table: string) => {
    select: (cols: string) => {
      eq: (col: string, val: string) => {
        maybeSingle: () => Promise<{ data: Record<string, unknown> | null; error: { message: string } | null }>;
        single: () => Promise<{ data: Record<string, unknown> | null; error: { message: string } | null }>;
      };
    };
    update: (values: Record<string, unknown>) => {
      eq: (col: string, val: string) => Promise<{ error: { message: string } | null }>;
    };
  };
};

export async function loadJourneyFinds(
  client: Client,
  userId: string,
): Promise<JourneyFindsStore> {
  try {
    const { data, error } = await client
      .from("profiles")
      .select("journey_finds")
      .eq("id", userId)
      .maybeSingle();
    if (error) {
      // Column may not exist yet — treat as empty.
      if (/journey_finds/i.test(error.message)) return {};
      console.warn("[journey] load finds:", error.message);
      return {};
    }
    return asStore(data?.journey_finds);
  } catch {
    return {};
  }
}

export async function saveJourneyFinds(
  client: Client,
  userId: string,
  store: JourneyFindsStore,
): Promise<boolean> {
  try {
    const { error } = await client
      .from("profiles")
      .update({ journey_finds: store })
      .eq("id", userId);
    if (error) {
      if (/journey_finds/i.test(error.message)) return false;
      console.warn("[journey] save finds:", error.message);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * After chapter progress is saved: award badge, maybe egg, maybe level/course cert.
 */
export async function awardChapterCompleteRewards(input: {
  client: Client;
  userId: string;
  courseId: string;
  chapterSlug: string;
  chapterLevel: GrammarLevel;
  chapterNumber: number;
  chapterTitle: string;
  chapterTitleNative: string;
  scorePercent: number;
  exercisesCompleted: number;
  isReplay: boolean;
  /** All chapter slugs for this course, grouped by level. */
  chaptersByLevel: Record<GrammarLevel, string[]>;
  /** Completed chapter slugs after this finish (including current). */
  completedSlugs: Set<string>;
  interfaceLanguage: InterfaceLanguage;
}): Promise<ChapterCompleteRewards> {
  const {
    client,
    userId,
    courseId,
    chapterSlug,
    chapterLevel,
    chapterNumber,
    chapterTitle,
    chapterTitleNative,
    scorePercent,
    exercisesCompleted,
    isReplay,
    chaptersByLevel,
    completedSlugs,
    interfaceLanguage,
  } = input;

  const store = await loadJourneyFinds(client, userId);
  const slice = courseSlice(store, courseId);
  slice.eggs = [...(slice.eggs ?? [])];
  slice.chapterBadges = [...(slice.chapterBadges ?? [])];
  slice.chapterCerts = [...(slice.chapterCerts ?? [])];
  slice.levelCerts = [...(slice.levelCerts ?? [])];

  const badgeIsNew = !slice.chapterCerts.some((c) => c.slug === chapterSlug);
  if (badgeIsNew) {
    const cert: ChapterCertRecord = {
      slug: chapterSlug,
      level: chapterLevel,
      number: chapterNumber,
      title: chapterTitle,
      titleNative: chapterTitleNative,
      at: new Date().toISOString(),
    };
    slice.chapterCerts.push(cert);
    if (!slice.chapterBadges.includes(chapterSlug)) {
      slice.chapterBadges.push(chapterSlug);
    }
  }

  const owned = new Set(slice.eggs.map((e) => e.id));
  const rolled = rollEasterEgg({
    courseId,
    chapterSlug,
    scorePercent,
    exercisesCompleted,
    isReplay,
    ownedEggIds: owned,
  });

  let eggPayloadOut: AwardedEggPayload | null = null;
  if (rolled) {
    const already = owned.has(rolled.id);
    if (!already) {
      slice.eggs.push({
        id: rolled.id,
        rarity: rolled.rarity,
        chapterSlug,
        at: new Date().toISOString(),
      });
    }
    eggPayloadOut = eggPayload(rolled, interfaceLanguage, !already);
  }

  // Level certificate when every chapter of this level is completed.
  const levelSlugs = chaptersByLevel[chapterLevel] ?? [];
  const levelDone =
    levelSlugs.length > 0 && levelSlugs.every((s) => completedSlugs.has(s));
  let levelCert: ChapterCompleteRewards["levelCert"] = null;
  if (levelDone) {
    const has = slice.levelCerts.includes(chapterLevel);
    if (!has) slice.levelCerts.push(chapterLevel);
    levelCert = { level: chapterLevel, isNew: !has };
  }

  // Course certificate when all chapters completed.
  const allSlugs = Object.values(chaptersByLevel).flat();
  const courseDone =
    allSlugs.length > 0 && allSlugs.every((s) => completedSlugs.has(s));
  let courseCert: ChapterCompleteRewards["courseCert"] = null;
  if (courseDone) {
    const isNew = !slice.courseCertAt;
    if (isNew) slice.courseCertAt = new Date().toISOString();
    courseCert = { isNew };
  }

  store[courseId] = slice;
  await saveJourneyFinds(client, userId, store);

  return {
    chapterBadge: { chapterSlug, isNew: badgeIsNew },
    egg: eggPayloadOut,
    levelCert,
    courseCert,
  };
}

export function getFoundEggDefs(slice: JourneyCourseFinds): EasterEggDef[] {
  return slice.eggs
    .map((e) => getEggById(e.id))
    .filter((e): e is EasterEggDef => Boolean(e));
}
