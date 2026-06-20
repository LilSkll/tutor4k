import { NextRequest, NextResponse } from "next/server";
import { sendTutorMessage } from "@/server/actions/ai";
import type { AIMessage } from "@/types";

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
