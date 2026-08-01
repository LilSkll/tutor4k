import { translate } from "@/lib/i18n";
import type { InterfaceLanguage } from "@/types";

/** Empty Teacher Studio home — Stage 2 stub (no student data). */
export function TeacherDashboardPage({
  language,
  teacherName,
}: {
  language: InterfaceLanguage;
  teacherName: string;
}) {
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          {t("teacher.dashboard.greeting", { name: teacherName || "—" })}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("teacher.dashboard.subtitle")}
        </p>
      </div>

      <div className="rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center space-y-2">
        <p className="font-medium">{t("teacher.dashboard.emptyTitle")}</p>
        <p className="text-sm text-muted-foreground">
          {t("teacher.dashboard.emptyBody")}
        </p>
      </div>
    </div>
  );
}
