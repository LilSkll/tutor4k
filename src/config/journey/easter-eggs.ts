import type { GrammarLevel, InterfaceLanguage } from "@/types";

export type EggRarity = "common" | "rare" | "epic" | "legendary";

export type EggKind =
  | "phrase"
  | "joke"
  | "word_card"
  | "animation"
  | "perfect"
  | "replay";

export type LocalizedText = Partial<Record<InterfaceLanguage, string>> & {
  en: string;
  ru: string;
};

export type EasterEggDef = {
  id: string;
  rarity: EggRarity;
  kind: EggKind;
  /** If set, only rolls when completing this chapter. */
  chapterSlug?: string;
  /** Course ids this egg applies to. Omit = any. */
  courseIds?: string[];
  /** Base weight when eligible (higher = more likely among candidates). */
  weight: number;
  title: LocalizedText;
  body: LocalizedText;
  /** Optional secret word / phrase highlighted on the card. */
  highlight?: LocalizedText;
  stampLabel?: LocalizedText;
};

/** Rarity weights for random finds (sum ~100). No find is possible. */
export const RARITY_ROLL: { rarity: EggRarity | "none"; weight: number }[] = [
  { rarity: "none", weight: 48 },
  { rarity: "common", weight: 32 },
  { rarity: "rare", weight: 14 },
  { rarity: "epic", weight: 5 },
  { rarity: "legendary", weight: 1 },
];

export const RARITY_ORDER: EggRarity[] = [
  "common",
  "rare",
  "epic",
  "legendary",
];

function L(ru: string, en: string, es?: string): LocalizedText {
  return { ru, en, es: es ?? en };
}

/**
 * Hand-crafted easter eggs. Do NOT expose this list in the UI as a checklist —
 * only reveal when awarded.
 */
export const EASTER_EGGS: EasterEggDef[] = [
  // ── Global / common flavor ─────────────────────────────────────────
  {
    id: "global-cafe-con-leche",
    rarity: "common",
    kind: "word_card",
    courseIds: ["spanish"],
    weight: 3,
    title: L("Секретная карточка", "Secret word card", "Tarjeta secreta"),
    body: L(
      "В Испании «café con leche» — ритуал, а не просто напиток.",
      "In Spain, café con leche is a ritual, not just a drink.",
      "En España, el café con leche es un ritual, no solo una bebida.",
    ),
    highlight: L("café con leche", "café con leche", "café con leche"),
    stampLabel: L("Café", "Café", "Café"),
  },
  {
    id: "global-break-a-leg",
    rarity: "common",
    kind: "phrase",
    courseIds: ["english"],
    weight: 3,
    title: L("Скрытая фраза", "Hidden phrase", "Frase oculta"),
    body: L(
      "«Break a leg» значит «удачи» — совсем не про ноги.",
      "“Break a leg” means “good luck” — nothing to do with legs.",
      "“Break a leg” significa “buena suerte”.",
    ),
    highlight: L("Break a leg!", "Break a leg!", "Break a leg!"),
    stampLabel: L("Luck", "Luck", "Luck"),
  },
  {
    id: "global-mentor-wink",
    rarity: "common",
    kind: "joke",
    weight: 2,
    title: L("Шутка наставника", "Mentor’s joke", "Chiste del mentor"),
    body: L(
      "Грамматика как кофе: сначала горько, потом без неё никуда.",
      "Grammar is like coffee: bitter at first, then you can’t live without it.",
      "La gramática es como el café: amarga al principio… y luego indispensable.",
    ),
    stampLabel: L("Wink", "Wink", "Guiño"),
  },
  {
    id: "global-spark-anim",
    rarity: "rare",
    kind: "animation",
    weight: 2,
    title: L("Искра пути", "Journey spark", "Chispa del viaje"),
    body: L(
      "Редкая вспышка — ты действительно в пути.",
      "A rare spark — you really are on the road.",
      "Una chispa rara: de verdad estás en camino.",
    ),
    stampLabel: L("Spark", "Spark", "Chispa"),
  },

  // ── Perfect / replay (triggered explicitly) ────────────────────────
  {
    id: "trigger-perfect-run",
    rarity: "epic",
    kind: "perfect",
    weight: 0,
    title: L("Идеальный проход", "Perfect run", "Pasada perfecta"),
    body: L(
      "Ни одной ошибки в этой главе. Тишина, потом аплодисменты.",
      "Not a single mistake in this chapter. Silence — then applause.",
      "Ni un error en este capítulo. Silencio… y luego aplausos.",
    ),
    stampLabel: L("Perfect", "Perfect", "Perfecto"),
  },
  {
    id: "trigger-replay-echo",
    rarity: "rare",
    kind: "replay",
    weight: 0,
    title: L("Эхо повторного пути", "Replay echo", "Eco de la repetición"),
    body: L(
      "Ты вернулся в уже знакомую главу — и увидел её иначе.",
      "You returned to a familiar chapter — and saw it differently.",
      "Volviste a un capítulo conocido… y lo viste de otra forma.",
    ),
    stampLabel: L("Echo", "Echo", "Eco"),
  },

  // ── Spanish chapter-tied ───────────────────────────────────────────
  {
    id: "es-ch28-conjetura",
    rarity: "epic",
    kind: "phrase",
    chapterSlug: "chapter-28-conjetura",
    courseIds: ["spanish"],
    weight: 8,
    title: L("Шёпот слухов", "Whisper of rumors", "Susurro de rumores"),
    body: L(
      "«Serán las diez» — не будущее, а догадка. Наверное, сейчас десять.",
      "“Serán las diez” isn’t the future — it’s a guess: it’s probably ten.",
      "“Serán las diez” no es futuro: es una conjetura.",
    ),
    highlight: L("Serán las diez…", "Serán las diez…", "Serán las diez…"),
    stampLabel: L("Rumor", "Rumor", "Rumor"),
  },
  {
    id: "es-ch30-ironia",
    rarity: "legendary",
    kind: "joke",
    chapterSlug: "chapter-30-ironia",
    courseIds: ["spanish"],
    weight: 6,
    title: L("Маска иронии", "Irony mask", "Máscara de ironía"),
    body: L(
      "«Qué buena noticia» — иногда значит ровно наоборот. Контекст решает всё.",
      "“Qué buena noticia” can mean the opposite. Context is everything.",
      "“Qué buena noticia” a veces significa lo contrario.",
    ),
    highlight: L("Qué buena noticia…", "Qué buena noticia…", "Qué buena noticia…"),
    stampLabel: L("Irony", "Irony", "Ironía"),
  },
  {
    id: "es-ch11-subjuntivo",
    rarity: "rare",
    kind: "word_card",
    chapterSlug: "chapter-11-subjuntivo",
    courseIds: ["spanish"],
    weight: 5,
    title: L("Карточка: ojalá", "Word card: ojalá", "Tarjeta: ojalá"),
    body: L(
      "Ojalá пришло из арабского «inšāʾ Allāh» — и живёт в желаниях на испанском.",
      "Ojalá comes from Arabic inšāʾ Allāh — and lives on in Spanish wishes.",
      "Ojalá viene del árabe inšāʾ Allāh.",
    ),
    highlight: L("ojalá", "ojalá", "ojalá"),
    stampLabel: L("Ojalá", "Ojalá", "Ojalá"),
  },
  {
    id: "es-ch17-dele",
    rarity: "rare",
    kind: "phrase",
    chapterSlug: "chapter-17-dele",
    courseIds: ["spanish"],
    weight: 5,
    title: L("Формула вежливости", "Politeness formula", "Fórmula de cortesía"),
    body: L(
      "«Le agradecería que…» звучит как экзамен — и как настоящая Испания.",
      "“Le agradecería que…” sounds like an exam — and like real Spain.",
      "“Le agradecería que…” suena a examen… y a España real.",
    ),
    highlight: L("Le agradecería que…", "Le agradecería que…", "Le agradecería que…"),
    stampLabel: L("DELE", "DELE", "DELE"),
  },
  {
    id: "es-ch1-despertar",
    rarity: "common",
    kind: "joke",
    chapterSlug: "chapter-1-despertar",
    courseIds: ["spanish"],
    weight: 4,
    title: L("Утро в академии", "Morning at the academy", "Mañana en la academia"),
    body: L(
      "Первая глава — как будильник: никто не любит, но без неё день не начинается.",
      "Chapter one is an alarm clock: nobody loves it, but the day won’t start without it.",
      "El primer capítulo es un despertador: nadie lo quiere, pero sin él no hay día.",
    ),
    stampLabel: L("Dawn", "Dawn", "Alba"),
  },

  // ── English chapter-tied ───────────────────────────────────────────
  {
    id: "en-ch23-spotlight",
    rarity: "epic",
    kind: "phrase",
    chapterSlug: "eng-ch23-spotlight",
    courseIds: ["english"],
    weight: 8,
    title: L("В центре внимания", "In the spotlight", "En el foco"),
    body: L(
      "It was the emphasis that mattered — cleft sentences put the spotlight where you want it.",
      "It was the emphasis that mattered — clefts put the spotlight where you want it.",
      "It was the emphasis that mattered: las cleft sentences ponen el foco.",
    ),
    highlight: L("It was… that…", "It was… that…", "It was… that…"),
    stampLabel: L("Cleft", "Cleft", "Cleft"),
  },
  {
    id: "en-ch25-between-lines",
    rarity: "legendary",
    kind: "phrase",
    chapterSlug: "eng-ch25-between-lines",
    courseIds: ["english"],
    weight: 6,
    title: L("Между строк", "Between the lines", "Entre líneas"),
    body: L(
      "«Not ideal, to put it mildly» — британская вежливость в чистом виде.",
      "“Not ideal, to put it mildly” — British understatement at its finest.",
      "“Not ideal, to put it mildly”: la cortesía británica en estado puro.",
    ),
    highlight: L("to put it mildly", "to put it mildly", "to put it mildly"),
    stampLabel: L("Hedge", "Hedge", "Hedge"),
  },
  {
    id: "en-ch39-ielts-essay",
    rarity: "rare",
    kind: "word_card",
    chapterSlug: "eng-ch39-ielts-essay",
    courseIds: ["english"],
    weight: 5,
    title: L("Карточка эссе", "Essay card", "Tarjeta de essay"),
    body: L(
      "Сильный тезис не говорит «I will write about…» — он заявляет позицию.",
      "A strong thesis doesn’t say “I will write about…” — it takes a stand.",
      "Una tesis fuerte no dice “I will write about…”: toma postura.",
    ),
    highlight: L("This essay will argue…", "This essay will argue…", "This essay will argue…"),
    stampLabel: L("Thesis", "Thesis", "Thesis"),
  },
];

export function localizeEggText(
  text: LocalizedText | undefined,
  lang: InterfaceLanguage,
): string {
  if (!text) return "";
  return text[lang] ?? text.en ?? text.ru ?? "";
}

export function getEggById(id: string): EasterEggDef | undefined {
  return EASTER_EGGS.find((e) => e.id === id);
}

export type ChapterCertRecord = {
  slug: string;
  level: GrammarLevel;
  number: number;
  title: string;
  titleNative: string;
  at: string;
};

export type JourneyCourseFinds = {
  eggs: Array<{
    id: string;
    rarity: EggRarity;
    chapterSlug: string;
    at: string;
  }>;
  /** @deprecated Prefer chapterCerts — kept for older saved profiles. */
  chapterBadges: string[];
  /** Chapter completion certificates — persist across journey progress reset. */
  chapterCerts: ChapterCertRecord[];
  levelCerts: GrammarLevel[];
  courseCertAt?: string | null;
};

export type JourneyFindsStore = Record<string, JourneyCourseFinds>;

export function emptyCourseFinds(): JourneyCourseFinds {
  return {
    eggs: [],
    chapterBadges: [],
    chapterCerts: [],
    levelCerts: [],
    courseCertAt: null,
  };
}

/** Merge legacy chapterBadges into chapterCerts when reading a store slice. */
export function normalizeCourseFinds(raw: JourneyCourseFinds | undefined | null): JourneyCourseFinds {
  const base = emptyCourseFinds();
  if (!raw || typeof raw !== "object") return base;
  const chapterCerts = Array.isArray(raw.chapterCerts) ? [...raw.chapterCerts] : [];
  const badges = Array.isArray(raw.chapterBadges) ? [...raw.chapterBadges] : [];
  const known = new Set(chapterCerts.map((c) => c.slug));
  for (const slug of badges) {
    if (!known.has(slug)) {
      chapterCerts.push({
        slug,
        level: "A1",
        number: 0,
        title: slug,
        titleNative: slug,
        at: new Date(0).toISOString(),
      });
      known.add(slug);
    }
  }
  return {
    eggs: Array.isArray(raw.eggs) ? [...raw.eggs] : [],
    chapterBadges: badges,
    chapterCerts,
    levelCerts: Array.isArray(raw.levelCerts) ? [...raw.levelCerts] : [],
    courseCertAt: raw.courseCertAt ?? null,
  };
}
