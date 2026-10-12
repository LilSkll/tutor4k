/**
 * Hippogriff chapter covers — curated city poses compressed to WebP.
 *
 * Spanish course: Spain-first itinerary, then LatAm for variety.
 * English course: LatAm-first circuit, then Spain fills.
 * Mapping guarantees no two consecutive chapters share a cover.
 *
 * Assets: /public/chapter-covers/{thumbs,cards}/<id>.webp
 * Rebuild: node scripts/build-chapter-covers.mjs
 */

export type ChapterCoverId =
  | "bilbao"
  | "bogota"
  | "buenosaires"
  | "cartagena"
  | "cusco"
  | "granada"
  | "havana"
  | "lima"
  | "madrid"
  | "mallorca"
  | "mexico"
  | "montevideo"
  | "quito"
  | "salamanca"
  | "sanjuan"
  | "seville"
  | "seville-garden"
  | "tenerife"
  | "valencia"
  | "valencia-port";

/** Soft brand tints for frames — each pose reads as its own stop on the map. */
export const COVER_ACCENTS: Record<
  ChapterCoverId,
  { from: string; to: string; label: string }
> = {
  bilbao: { from: "#1f6b8a", to: "#0f3d52", label: "Bilbao" },
  bogota: { from: "#3d6b4f", to: "#1e3a2a", label: "Bogotá" },
  buenosaires: { from: "#c45c26", to: "#7a2e10", label: "Buenos Aires" },
  cartagena: { from: "#d4a017", to: "#8a5a08", label: "Cartagena" },
  cusco: { from: "#8b3a2a", to: "#4a1c14", label: "Cusco" },
  granada: { from: "#b4532a", to: "#6b2a12", label: "Granada" },
  havana: { from: "#2f7d6d", to: "#164a40", label: "Havana" },
  lima: { from: "#6b7c3a", to: "#3a451c", label: "Lima" },
  madrid: { from: "#c0392b", to: "#6e1a14", label: "Madrid" },
  mallorca: { from: "#2a7cb5", to: "#124466", label: "Mallorca" },
  mexico: { from: "#c4781a", to: "#6e3f0c", label: "México" },
  montevideo: { from: "#4a6fa5", to: "#243a5c", label: "Montevideo" },
  quito: { from: "#7a4e2d", to: "#3f2614", label: "Quito" },
  salamanca: { from: "#b8860b", to: "#6b4e08", label: "Salamanca" },
  sanjuan: { from: "#c73e6a", to: "#6e1f3a", label: "San Juan" },
  seville: { from: "#d35400", to: "#7a3000", label: "Sevilla" },
  "seville-garden": { from: "#2e8b57", to: "#145232", label: "Sevilla" },
  tenerife: { from: "#1a8a6e", to: "#0d4a3a", label: "Tenerife" },
  valencia: { from: "#e67e22", to: "#8a450c", label: "Valencia" },
  "valencia-port": { from: "#2980b9", to: "#154360", label: "Valencia" },
};

const SPAIN_POOL: ChapterCoverId[] = [
  "salamanca",
  "tenerife",
  "madrid",
  "seville",
  "valencia",
  "bilbao",
  "granada",
  "mallorca",
  "seville-garden",
  "valencia-port",
];

const LATAM_POOL: ChapterCoverId[] = [
  "mexico",
  "bogota",
  "lima",
  "buenosaires",
  "cartagena",
  "havana",
  "sanjuan",
  "quito",
  "cusco",
  "montevideo",
];

const ALL_COVERS: ChapterCoverId[] = [...SPAIN_POOL, ...LATAM_POOL];

const DEFAULT_COVER: ChapterCoverId = "madrid";

/**
 * Assign covers so consecutive chapters never share a pose.
 * Prefers `preferred` order, then fills from the rest of the pool.
 */
function assignCovers(
  slugs: string[],
  preferred: ChapterCoverId[],
): Record<string, ChapterCoverId> {
  const pool = [
    ...preferred,
    ...ALL_COVERS.filter((id) => !preferred.includes(id)),
  ];
  const lastIndex = new Map<ChapterCoverId, number>();
  const out: Record<string, ChapterCoverId> = {};

  slugs.forEach((slug, i) => {
    let best: ChapterCoverId | null = null;
    let bestScore = -Infinity;
    for (const id of pool) {
      const prev = lastIndex.get(id);
      if (prev === i - 1) continue; // never adjacent
      // Prefer never-used, then longest gap, then preferred-list order
      const gap = prev === undefined ? 10_000 : i - prev;
      const preferBonus = preferred.includes(id) ? 2 : 0;
      const score = gap * 10 + preferBonus;
      if (score > bestScore) {
        bestScore = score;
        best = id;
      }
    }
    const chosen = best ?? pool[i % pool.length]!;
    out[slug] = chosen;
    lastIndex.set(chosen, i);
  });

  return out;
}

/** Curriculum order — must match chapters.ts / english chapters.ts. */
const SPANISH_SLUGS = [
  "chapter-1-despertar",
  "chapter-2-primer-dialogo",
  "chapter-3-biblioteca",
  "chapter-18-genero-numero",
  "chapter-4-numeros-tiempo",
  "chapter-19-preposiciones",
  "chapter-5-mercado",
  "chapter-6-cuerpo",
  "chapter-20-preguntas",
  "chapter-31-verbos-frecuentes",
  "chapter-7-pasado-perfecto",
  "chapter-8-pasado-indefinido",
  "chapter-9-imperfecto",
  "chapter-10-por-para",
  "chapter-21-comparativos",
  "chapter-22-futuro",
  "chapter-11-subjuntivo",
  "chapter-12-imperativo",
  "chapter-13-condicional",
  "chapter-32-pronombre-se",
  "chapter-33-relativos",
  "chapter-34-pluscuamperfecto",
  "chapter-35-subjuntivo-imperfecto",
  "chapter-36-pronombres-objetos",
  "chapter-37-adverbios",
  "chapter-23-cronicas",
  "chapter-24-carta",
  "chapter-14-estilo-indirecto",
  "chapter-15-voz-pasiva",
  "chapter-38-subjuntivo-compuestos",
  "chapter-39-condicionales-compuestos",
  "chapter-40-relativos-avanzado",
  "chapter-41-conectores-discursivos",
  "chapter-25-conectores",
  "chapter-26-voz-plaza",
  "chapter-16-perifrasis",
  "chapter-17-dele",
  "chapter-42-subjuntivo-avanzado",
  "chapter-43-indirecto-avanzado",
  "chapter-44-pronombres-avanzado",
  "chapter-45-ser-estar-matices",
  "chapter-27-hendidas",
  "chapter-28-conjetura",
  "chapter-29-culto",
  "chapter-30-ironia",
] as const;

const ENGLISH_SLUGS = [
  "eng-ch1-first-steps",
  "eng-ch26-articles",
  "eng-ch27-possessives",
  "eng-ch2-routines",
  "eng-ch17-questions",
  "eng-ch3-around-town",
  "eng-ch18-can",
  "eng-ch19-prepositions",
  "eng-ch4-past-stories",
  "eng-ch5-choices",
  "eng-ch28-countable",
  "eng-ch29-pp-intro",
  "eng-ch20-going-to",
  "eng-ch6-experiences",
  "eng-ch21-quantifiers",
  "eng-ch7-future-plans",
  "eng-ch30-conditionals-review",
  "eng-ch22-modals",
  "eng-ch8-storytelling",
  "eng-ch9-real-world",
  "eng-ch31-reported-speech",
  "eng-ch32-relative-clauses",
  "eng-ch10-what-if",
  "eng-ch11-passive",
  "eng-ch33-passive-advanced",
  "eng-ch12-beyond-borders",
  "eng-ch34-modals-deduction",
  "eng-ch35-ielts-informal",
  "eng-ch36-ielts-formal",
  "eng-ch37-cambridge-letter",
  "eng-ch38-ielts-task1",
  "eng-ch39-ielts-essay",
  "eng-ch40-ielts-cohesion",
  "eng-ch41-cambridge-essay",
  "eng-ch42-ielts-opinion",
  "eng-ch43-register-shift",
  "eng-ch13-advanced-structures",
  "eng-ch14-art-language",
  "eng-ch15-mastery",
  "eng-ch16-ielts",
  "eng-ch23-spotlight",
  "eng-ch24-unspoken",
  "eng-ch25-between-lines",
] as const;

const SPANISH_COVERS = assignCovers([...SPANISH_SLUGS], SPAIN_POOL);
const ENGLISH_COVERS = assignCovers([...ENGLISH_SLUGS], LATAM_POOL);

export function getChapterCoverId(slug: string): ChapterCoverId {
  if (slug.startsWith("eng-")) {
    return ENGLISH_COVERS[slug] ?? DEFAULT_COVER;
  }
  return SPANISH_COVERS[slug] ?? DEFAULT_COVER;
}

export function getChapterCoverAccent(slug: string) {
  return COVER_ACCENTS[getChapterCoverId(slug)];
}

export function chapterCoverThumbSrc(slug: string): string {
  return `/chapter-covers/thumbs/${getChapterCoverId(slug)}.webp`;
}

export function chapterCoverCardSrc(slug: string): string {
  return `/chapter-covers/cards/${getChapterCoverId(slug)}.webp`;
}
