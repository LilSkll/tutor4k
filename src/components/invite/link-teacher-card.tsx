"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

/** Enter invite code from Settings (Student Journey). */
export function LinkTeacherCard() {
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);
  const [code, setCode] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const inFlight = React.useRef(false);

  const submit = async () => {
    const normalized = code.trim().toUpperCase().replace(/\s+/g, "");
    if (!normalized || inFlight.current) return;
    inFlight.current = true;
    setBusy(true);
    try {
      const res = await fetch("/api/invite/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: normalized }),
      });
      const data = (await res.json()) as {
        teacherName?: string;
        courseId?: string;
        error?: string;
      };
      if (!res.ok) throw new Error(data.error || "fail");
      toast.success(
        t("invite.successBody", {
          teacher: data.teacherName || "—",
          course: data.courseId || "",
        }),
      );
      setCode("");
    } catch (e) {
      toast.error((e as Error).message || t("invite.acceptFail"));
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{t("invite.settingsTitle")}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row gap-2">
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder={t("invite.codePlaceholder")}
          className="font-mono tracking-wider"
        />
        <Button variant="gradient" onClick={submit} disabled={busy || !code.trim()}>
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {t("invite.acceptBtn")}
        </Button>
      </CardContent>
    </Card>
  );
}
