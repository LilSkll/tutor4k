import { NextRequest, NextResponse } from "next/server";
import { getLocalizedGrammarArticle } from "@/server/grammar/localize-content";
import type { InterfaceLanguage, Level } from "@/types";

const INTERFACE_LANGUAGES = new Set<InterfaceLanguage>(["ru", "en", "es", "de"]);

/**
 * GET /api/grammar/content?slug=...&courseId=...&interfaceLanguage=...
 * Returns localized grammar article markdown for the topic.
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const slug = searchParams.get("slug");
    const courseId = searchParams.get("courseId") ?? "spanish";
    const interfaceLanguage = (searchParams.get("interfaceLanguage") ??
      "ru") as InterfaceLanguage;
    const level = searchParams.get("level") as Level | null;
    const refresh = searchParams.get("refresh") === "1";

    if (!slug) {
      return NextResponse.json({ error: "slug is required" }, { status: 400 });
    }

    if (!INTERFACE_LANGUAGES.has(interfaceLanguage)) {
      return NextResponse.json(
        { error: "invalid interfaceLanguage" },
        { status: 400 },
      );
    }

    const result = await getLocalizedGrammarArticle({
      slug,
      courseId,
      interfaceLanguage,
      level,
      refresh,
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error("[/api/grammar/content]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}
