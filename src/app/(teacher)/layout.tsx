import { requireTeacherStudioAccess } from "@/server/teacher/authz";
import { TeacherShell } from "@/components/teacher/teacher-shell";
import { translate } from "@/lib/i18n/with-teacher";
import { inter } from "@/lib/fonts";

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await requireTeacherStudioAccess();
  const lang = profile.interface_language ?? "ru";
  const title = translate("teacher.studioTitle", lang);

  return (
    <div className={`${inter.variable} font-sans`}>
      <TeacherShell profile={profile} headerTitle={title}>
        {children}
      </TeacherShell>
    </div>
  );
}
