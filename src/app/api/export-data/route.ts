import { NextResponse } from "next/server";
import { exportUserData } from "@/server/actions/account";

/**
 * GET /api/export-data
 * Authenticated JSON export of all user data (GDPR / 152-FZ portability).
 */
export async function GET() {
  try {
    const result = await exportUserData();
    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 401 });
    }

    const filename = `spanish-with-pavel-export-${new Date().toISOString().slice(0, 10)}.json`;
    return new NextResponse(JSON.stringify(result.data, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[/api/export-data]", err);
    return NextResponse.json(
      { error: (err as Error).message || "Export failed" },
      { status: 500 },
    );
  }
}
