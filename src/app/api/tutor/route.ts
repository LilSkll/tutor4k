import { NextRequest, NextResponse } from "next/server";
import {
  getTutorSessionOpening,
  sendTutorMessage,
} from "@/server/actions/ai";
import type { AIMessage } from "@/types";

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
 * Body: { messages: AIMessage[] }
 * Returns: { content, provider, conversationId }
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { messages?: AIMessage[] };
    const messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "messages array is required" },
        { status: 400 },
      );
    }

    const result = await sendTutorMessage({ messages });
    return NextResponse.json(result);
  } catch (err) {
    console.error("[/api/tutor]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Internal error" },
      { status: 500 },
    );
  }
}
