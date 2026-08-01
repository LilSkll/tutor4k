import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import {
  canAccessTeacherStudio,
  homePathForRole,
} from "@/lib/roles";
import type { UserRole } from "@/types";

async function fetchUserRole(
  supabase: ReturnType<typeof createServerClient>,
  userId: string,
): Promise<UserRole> {
  try {
    const { data } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .maybeSingle();
    const role = (data as { role?: UserRole } | null)?.role;
    return role ?? "student";
  } catch {
    // Column missing before migration → treat as student.
    return "student";
  }
}

/**
 * Refresh the Supabase auth session on every request and protect app routes.
 * Role gates: Teacher Studio (`/teacher`) vs Student Journey.
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options?: CookieOptions }[]) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  const isPublicRoute =
    pathname === "/" ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/forgot-password") ||
    pathname.startsWith("/auth") ||
    pathname.startsWith("/onboarding") ||
    pathname === "/privacy" ||
    pathname === "/terms";

  // Onboarding is public for auth gate, but Teacher Studio roles skip it.
  const isOnboarding = pathname.startsWith("/onboarding");

  if (!user && !isPublicRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  // Keep PKCE/callback/recovery exchange on auth routes; reset-password only
  // when the short-lived recovery cookie is present (set by /auth/recovery).
  const hasRecoveryCookie =
    request.cookies.get("swp_pwd_recovery")?.value === "1";
  const isAuthRecoveryExchange =
    pathname.startsWith("/auth/callback") ||
    pathname.startsWith("/auth/recovery");
  const isAuthResetAllowed =
    pathname.startsWith("/auth/reset-password") && hasRecoveryCookie;

  if (
    user &&
    pathname.startsWith("/auth/reset-password") &&
    !hasRecoveryCookie
  ) {
    const role = await fetchUserRole(supabase, user.id);
    const url = request.nextUrl.clone();
    url.pathname = homePathForRole(role);
    return NextResponse.redirect(url);
  }

  if (
    user &&
    !isAuthRecoveryExchange &&
    !isAuthResetAllowed &&
    (pathname === "/" ||
      pathname.startsWith("/login") ||
      pathname.startsWith("/signup") ||
      pathname.startsWith("/forgot-password"))
  ) {
    const role = await fetchUserRole(supabase, user.id);
    const url = request.nextUrl.clone();
    url.pathname = homePathForRole(role);
    return NextResponse.redirect(url);
  }

  if (user) {
    const isTeacherPath =
      pathname === "/teacher" || pathname.startsWith("/teacher/");
    const isInvitePath = pathname.startsWith("/invite");
    const isStudentAppPath =
      !isPublicRoute &&
      !isTeacherPath &&
      !isInvitePath &&
      !pathname.startsWith("/api") &&
      pathname !== "/privacy" &&
      pathname !== "/terms";

    if (isTeacherPath || isStudentAppPath || isOnboarding) {
      const role = await fetchUserRole(supabase, user.id);

      if (isOnboarding && canAccessTeacherStudio(role)) {
        const url = request.nextUrl.clone();
        url.pathname = "/teacher/dashboard";
        return NextResponse.redirect(url);
      }

      if (isTeacherPath && !canAccessTeacherStudio(role)) {
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
      }

      if (isStudentAppPath && canAccessTeacherStudio(role)) {
        const url = request.nextUrl.clone();
        url.pathname = "/teacher/dashboard";
        return NextResponse.redirect(url);
      }
    }
  }

  return supabaseResponse;
}
