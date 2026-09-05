import { beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const sendTutorMessage = vi.hoisted(() => vi.fn());
const getTutorSessionOpening = vi.hoisted(() => vi.fn());

vi.mock("@/server/actions/ai", () => ({
  sendTutorMessage,
  getTutorSessionOpening,
}));

import { POST } from "@/app/api/tutor/route";

describe("POST /api/tutor", () => {
  beforeEach(() => {
    sendTutorMessage.mockReset();
    getTutorSessionOpening.mockReset();
  });

  it("returns 400 for invalid JSON and does not call the tutor", async () => {
    const req = new NextRequest("http://localhost/api/tutor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{not-json",
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ error: "Invalid JSON" });
    expect(sendTutorMessage).not.toHaveBeenCalled();
  });

  it("returns 400 when messages are missing", async () => {
    const req = new NextRequest("http://localhost/api/tutor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    expect(sendTutorMessage).not.toHaveBeenCalled();
  });
});
