import { Suspense } from "react";
import { requireTeacherStudioAccess } from "@/server/teacher/authz";
import { ChangePasswordCard } from "@/components/auth/change-password-card";
import { TeacherLanguageCard } from "@/components/teacher/teacher-language-card";
import { translate } from "@/lib/i18n";

export default async function TeacherSettingsPage() {
  const profile = await requireTeacherStudioAccess();
  const lang = profile.interface_language ?? "ru";

  return (
    <div className="mx-auto max-w-lg min-w-0 space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          {translate("teacher.settings.title", lang)}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {translate("teacher.settings.subtitle", lang)}
        </p>
      </div>
      <TeacherLanguageCard />
      <Suspense fallback={null}>
        <ChangePasswordCard returnTo="/teacher/settings" />
      </Suspense>
    </div>
  );
}
