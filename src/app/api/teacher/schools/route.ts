import { NextRequest, NextResponse } from "next/server";
import { requireTeacherSession } from "@/server/teacher/links";
import { SchoolService } from "@/server/services/schools";

export async function GET() {
  try {
    const teacher = await requireTeacherSession();
    const schools = await SchoolService.listMySchools(teacher.id);
    return NextResponse.json({ schools });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED" ? 401 : msg === "FORBIDDEN" ? 403 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}

export async function POST(req: NextRequest) {
  try {
    const teacher = await requireTeacherSession();
    const body = (await req.json()) as { name?: string };
    const school = await SchoolService.createSchool({
      userId: teacher.id,
      name: body.name ?? "",
    });
    return NextResponse.json({ school });
  } catch (err) {
    const msg = (err as Error).message;
    const status =
      msg === "UNAUTHORIZED"
        ? 401
        : msg === "FORBIDDEN"
          ? 403
          : msg === "INVALID_NAME"
            ? 400
            : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
