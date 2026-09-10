import { NextRequest, NextResponse } from "next/server";
import { requireTeacherSession } from "@/server/teacher/links";
import { TeacherAiService } from "@/server/services/teacher-ai";
import type { InterfaceLanguage } from "@/types";

function resolveLocale(raw: string | null, fallback: InterfaceLanguage): InterfaceLanguage {
  if (raw === "ru" || raw === "en" || raw === "es" || raw === "de") return raw;
  return fallback;
}

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ studentId: string }> },
) {
  try {
    const teacher = await requireTeacherSession();
    const { studentId } = await ctx.params;
    const url = new URL(req.url);
    const courseId = url.searchParams.get("courseId");
    if (courseId !== "spanish" && courseId !== "english") {
      return NextResponse.json(
        { error: "courseId required (spanish|english)" },
        { status: 400 },
      );
    }
    const locale = resolveLocale(
      url.searchParams.get("locale"),
      teacher.interface_language ?? "en",
    );
    const report = await TeacherAiService.getLatestReport(
      teacher.id,
      studentId,
      courseId,
      locale,
    );
    return NextResponse.json({ report });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}

/** Generate or refresh AI report (fingerprint / stale / force). */
export async function POST(
  req: NextRequest,
  ctx: { params: Promise<{ studentId: string }> },
) {
  try {
    const teacher = await requireTeacherSession();
    const { studentId } = await ctx.params;
    const url = new URL(req.url);
    const body = (await req.json().catch(() => ({}))) as {
      courseId?: string;
      locale?: string;
      force?: boolean;
    };
    const courseId =
      body.courseId ?? url.searchParams.get("courseId") ?? undefined;
    if (courseId !== "spanish" && courseId !== "english") {
      return NextResponse.json(
        { error: "courseId required (spanish|english)" },
        { status: 400 },
      );
    }
    const locale = resolveLocale(
      body.locale ?? url.searchParams.get("locale"),
      teacher.interface_language ?? "en",
    );
    const force =
      body.force === true || url.searchParams.get("force") === "1";

    const report = await TeacherAiService.refreshIfStale({
      teacherId: teacher.id,
      studentId,
      courseId,
      locale,
      force,
    });
    return NextResponse.json({ report });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED"
        ? 401
        : msg === "FORBIDDEN"
          ? 403
          : msg.startsWith("AI_") || msg.includes("ИИ") || msg.includes("AI")
            ? 503
            : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
