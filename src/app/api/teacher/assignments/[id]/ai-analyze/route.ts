import { NextRequest, NextResponse } from "next/server";
import { AssignmentService } from "@/server/services/assignments";
import { requireTeacherSession } from "@/server/teacher/links";
import type { InterfaceLanguage } from "@/types";

/** On-demand AI writing assistant for the teacher (never auto-runs on submit). */
export async function POST(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  try {
    const teacher = await requireTeacherSession();
    const { id } = await ctx.params;
    const body = (await req.json().catch(() => ({}))) as {
      locale?: InterfaceLanguage;
    };
    const locale =
      body.locale === "en" ||
      body.locale === "es" ||
      body.locale === "de" ||
      body.locale === "ru"
        ? body.locale
        : ((teacher.interface_language as InterfaceLanguage) ?? "ru");

    const submission = await AssignmentService.analyzeWriting({
      teacherId: teacher.id,
      assignmentId: id,
      locale,
    });
    return NextResponse.json({ submission });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED"
        ? 401
        : msg === "FORBIDDEN"
          ? 403
          : msg === "NOT_FOUND"
            ? 404
            : msg === "NO_SUBMISSION"
              ? 400
              : msg === "AI_UNAVAILABLE" || msg === "AI_EMPTY"
                ? 502
                : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
