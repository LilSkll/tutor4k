import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import {
  canAccessTeacherStudio,
  homePathForRole,
} from "@/lib/roles";
import { sessionNeedsMfa } from "@/lib/auth-mfa";
import {
  RECOVERY_COOKIE,
  sessionLooksLikeRecovery,
  setRecoveryCookie,
} from "@/lib/auth-recovery";
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

function hasSupabaseAuthCookie(request: NextRequest): boolean {
  return request.cookies.getAll().some((cookie) => {
    const name = cookie.name;
    return name.includes("-auth-token") || name.startsWith("sb-");
  });
}

/**
 * Refresh the Supabase auth session when needed and protect app routes.
 * Logged-out traffic skips getUser() so TTFB is not blocked on Auth.
 */
export async function updateSession(request: NextRequest) {
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

  const loggedOut = !hasSupabaseAuthCookie(request);

  if (loggedOut) {
    if (isPublicRoute) {
      return NextResponse.next({ request });
    }
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

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

  const isMfaPage = pathname.startsWith("/auth/mfa");
  const isRecoveryFlow =
    pathname.startsWith("/auth/recovery") ||
    pathname.startsWith("/auth/reset-password");
  const isAuthCallback = pathname.startsWith("/auth/callback");

  // Password recovery must finish before MFA / role home redirects.
  if (
    user &&
    (await sessionNeedsMfa(supabase)) &&
    !isMfaPage &&
    !isAuthCallback &&
    !isRecoveryFlow
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/mfa";
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (user && isMfaPage && !(await sessionNeedsMfa(supabase))) {
    const role = await fetchUserRole(supabase, user.id);
    const url = request.nextUrl.clone();
    url.pathname = homePathForRole(role);
    return NextResponse.redirect(url);
  }

  // Onboarding is public for auth gate, but Teacher Studio roles skip it.
  const isOnboarding = pathname.startsWith("/onboarding");

  if (!user && !isPublicRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  const hasRecoveryCookie =
    request.cookies.get(RECOVERY_COOKIE)?.value === "1";
  const isAuthRecoveryExchange =
    pathname.startsWith("/auth/callback") ||
    pathname.startsWith("/auth/recovery");

  let recoverySession = false;
  if (user && pathname.startsWith("/auth/reset-password")) {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    recoverySession = sessionLooksLikeRecovery(session);
  }

  const isAuthResetAllowed =
    pathname.startsWith("/auth/reset-password") &&
    (hasRecoveryCookie || recoverySession);

  if (
    user &&
    pathname.startsWith("/auth/reset-password") &&
    !isAuthResetAllowed
  ) {
    const role = await fetchUserRole(supabase, user.id);
    const url = request.nextUrl.clone();
    url.pathname = homePathForRole(role);
    return NextResponse.redirect(url);
  }

  // Ensure recovery cookie is present when AMR says recovery (hash / lost cookie).
  if (user && recoverySession && !hasRecoveryCookie) {
    setRecoveryCookie(supabaseResponse);
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
