import { NextRequest, NextResponse } from "next/server";
import { deleteUserAccount } from "@/server/actions/account";

/**
 * DELETE /api/account
 * Body: { password: string }
 */
export async function DELETE(req: NextRequest) {
  try {
    const body = (await req.json()) as { password?: string };
    if (!body.password?.trim()) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 },
      );
    }

    const result = await deleteUserAccount({ password: body.password });
    if (result.error) {
      const status = result.error === "Not authenticated" ? 401 : 400;
      return NextResponse.json({ error: result.error }, { status });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/account]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Deletion failed" },
      { status: 500 },
    );
  }
}
