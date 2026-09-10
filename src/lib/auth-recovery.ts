import { cookies } from "next/headers";
import type { NextResponse } from "next/server";

/** Short-lived flag: password may be set via /auth/reset-password without current password. */
export const RECOVERY_COOKIE = "swp_pwd_recovery";
const MAX_AGE_SEC = 15 * 60;

export function setRecoveryCookie(res: NextResponse): void {
  res.cookies.set(RECOVERY_COOKIE, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SEC,
  });
}

export async function hasRecoveryCookie(): Promise<boolean> {
  const jar = await cookies();
  return jar.get(RECOVERY_COOKIE)?.value === "1";
}

export async function clearRecoveryCookie(): Promise<void> {
  const jar = await cookies();
  jar.delete(RECOVERY_COOKIE);
}

export function sessionLooksLikeRecovery(
  session: unknown,
): boolean {
  if (!session || typeof session !== "object") return false;
  const amr = (session as { amr?: unknown }).amr;
  if (!Array.isArray(amr)) return false;
  return amr.some(
    (a) =>
      a &&
      typeof a === "object" &&
      (a as { method?: string }).method === "recovery",
  );
}
