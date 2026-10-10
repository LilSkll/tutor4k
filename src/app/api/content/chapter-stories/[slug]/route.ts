import { NextRequest, NextResponse } from "next/server";
import { getChapterStory } from "@/config/chapter-stories";
import type { InterfaceLanguage } from "@/types";

const INTERFACE_LANGUAGES = new Set<InterfaceLanguage>(["ru", "en", "es", "de"]);

/**
 * GET /api/content/chapter-stories/[slug]?lang=ru
 * Returns one localized chapter story (CDN-cacheable).
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const lang = (req.nextUrl.searchParams.get("lang") ?? "ru") as InterfaceLanguage;

  if (!INTERFACE_LANGUAGES.has(lang)) {
    return NextResponse.json({ error: "invalid lang" }, { status: 400 });
  }

  const story = await getChapterStory(slug, lang);
  if (!story) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  return NextResponse.json(
    { slug, lang, story },
    {
      headers: {
        "Cache-Control":
          "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
