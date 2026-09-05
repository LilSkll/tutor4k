"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

export function AcceptInviteClient({
  token,
  initialPreview,
}: {
  token: string;
  initialPreview: {
    code: string;
    courseId: string;
    teacherName: string;
    expiresAt: string | null;
  } | null;
}) {
  const router = useRouter();
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [done, setDone] = React.useState<{
    teacherName: string;
    courseId: string;
  } | null>(null);

  const accept = async () => {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/invite/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        teacherName?: string;
        courseId?: string;
        error?: string;
      };
      if (!res.ok) throw new Error(data.error || "fail");
      setDone({
        teacherName: data.teacherName || initialPreview?.teacherName || "—",
        courseId: data.courseId || initialPreview?.courseId || "spanish",
      });
      router.refresh();
    } catch (e) {
      setError((e as Error).message || t("invite.acceptFail"));
    } finally {
      setBusy(false);
    }
  };

  if (!initialPreview && !done) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center space-y-2">
          <p className="font-semibold">{t("invite.notFoundTitle")}</p>
          <p className="text-sm text-muted-foreground">{t("invite.notFoundBody")}</p>
          <Button asChild variant="outline">
            <Link href="/dashboard">{t("invite.goDashboard")}</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (done) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center space-y-3">
          <CheckCircle2 className="h-10 w-10 text-success mx-auto" />
          <p className="font-semibold">{t("invite.successTitle")}</p>
          <p className="text-sm text-muted-foreground">
            {t("invite.successBody", {
              teacher: done.teacherName,
              course: done.courseId,
            })}
          </p>
          <Button asChild variant="gradient">
            <Link href="/dashboard">{t("invite.goDashboard")}</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const preview = initialPreview!;

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6 space-y-4">
        <div>
          <h1 className="text-xl font-bold">{t("invite.title")}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {t("invite.subtitle", {
              teacher: preview.teacherName,
              course: preview.courseId,
            })}
          </p>
        </div>
        <p className="text-sm">
          {t("invite.codeLabel")}:{" "}
          <code className="font-bold tracking-wider">{preview.code}</code>
        </p>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button variant="gradient" className="w-full" onClick={accept} disabled={busy}>
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {t("invite.acceptBtn")}
        </Button>
      </CardContent>
    </Card>
  );
}
