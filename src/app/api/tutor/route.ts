import { NextRequest, NextResponse } from "next/server";
import {
  getTutorSessionOpening,
  sendTutorMessage,
} from "@/server/actions/ai";
import type { AIMessage, InterfaceLanguage } from "@/types";

function asInterfaceLanguage(raw: unknown): InterfaceLanguage | null {
  if (raw === "ru" || raw === "en" || raw === "es" || raw === "de") return raw;
  return null;
}

/**
 * GET /api/tutor
 * Personalized session opening from TeacherContext (empty chat).
 */
export async function GET() {
  try {
    const opening = await getTutorSessionOpening();
    return NextResponse.json(opening);
  } catch (err) {
    console.error("[/api/tutor GET]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}

/**
 * POST /api/tutor
 * Body: { messages, conversationId?, interfaceLanguage?, courseId?, grammarTopicSlug? }
 */
export async function POST(req: NextRequest) {
  try {
    let body: {
      messages?: AIMessage[];
      conversationId?: string | null;
      interfaceLanguage?: InterfaceLanguage | null;
      courseId?: string | null;
      grammarTopicSlug?: string | null;
    };
    try {
      body = (await req.json()) as typeof body;
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
    const messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "messages array is required" },
        { status: 400 },
      );
    }

    const result = await sendTutorMessage({
      messages,
      conversationId: body.conversationId ?? null,
      interfaceLanguage: asInterfaceLanguage(body.interfaceLanguage),
      courseId: body.courseId ?? null,
      grammarTopicSlug: body.grammarTopicSlug ?? null,
    });
    return NextResponse.json(result);
  } catch (err) {
    console.error("[/api/tutor]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}
