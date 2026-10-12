import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getInviteByToken } from "@/server/teacher/links";
import { AcceptInviteClient } from "@/components/invite/accept-invite-client";
import { canAccessTeacherStudio } from "@/lib/roles";
import type { UserRole } from "@/types";
import { translate } from "@/lib/i18n";

export default async function InviteTokenPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login?redirect=${encodeURIComponent(`/invite/${token}`)}`);
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, interface_language, name")
    .eq("id", user.id)
    .maybeSingle();

  const role = ((profile as { role?: UserRole } | null)?.role ?? "student") as UserRole;
  const lang =
    ((profile as { interface_language?: "ru" | "en" | "es" | "de" } | null)
      ?.interface_language ?? "ru");

  if (canAccessTeacherStudio(role)) {
    return (
      <div className="page-container max-w-md py-16 text-center space-y-3">
        <p className="font-semibold">{translate("invite.teacherBlockedTitle", lang)}</p>
        <p className="text-sm text-muted-foreground">
          {translate("invite.teacherBlockedBody", lang)}
        </p>
      </div>
    );
  }

  let preview = null;
  try {
    preview = await getInviteByToken(token);
  } catch {
    preview = null;
  }

  return (
    <div className="page-container py-12">
      <AcceptInviteClient token={token} initialPreview={preview} />
    </div>
  );
}
