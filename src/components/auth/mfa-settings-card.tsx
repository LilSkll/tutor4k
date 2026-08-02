"use client";

import * as React from "react";
import { Loader2, Shield, ShieldOff } from "lucide-react";
import { toast } from "sonner";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

type Factor = { id: string; friendly_name?: string | null; status: string };

/**
 * Enroll / disable TOTP MFA (authenticator app).
 * Shown in student and teacher settings.
 */
export function MfaSettingsCard() {
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);

  const [loading, setLoading] = React.useState(true);
  const [factors, setFactors] = React.useState<Factor[]>([]);
  const [enrolling, setEnrolling] = React.useState(false);
  const [qr, setQr] = React.useState<string | null>(null);
  const [secret, setSecret] = React.useState<string | null>(null);
  const [factorId, setFactorId] = React.useState<string | null>(null);
  const [code, setCode] = React.useState("");
  const [pending, setPending] = React.useState(false);

  const refresh = React.useCallback(async () => {
    setLoading(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { data, error } = await supabase.auth.mfa.listFactors();
      if (error) throw error;
      setFactors(data.totp ?? []);
    } catch (err) {
      toast.error((err as Error).message || t("mfa.loadFail"));
    } finally {
      setLoading(false);
    }
  }, [t]);

  React.useEffect(() => {
    void refresh();
  }, [refresh]);

  const verified = factors.filter((f) => f.status === "verified");

  const startEnroll = async () => {
    setEnrolling(true);
    setPending(true);
    try {
      const supabase = createSupabaseBrowserClient();
      // Drop unfinished enrollments so we don't hit factor limits.
      for (const f of factors.filter((x) => x.status === "unverified")) {
        await supabase.auth.mfa.unenroll({ factorId: f.id });
      }
      const { data, error } = await supabase.auth.mfa.enroll({
        factorType: "totp",
        friendlyName: "Authenticator",
      });
      if (error || !data) throw error ?? new Error("enroll");
      setFactorId(data.id);
      setQr(data.totp.qr_code);
      setSecret(data.totp.secret);
      setCode("");
    } catch (err) {
      toast.error((err as Error).message || t("mfa.enrollFail"));
      setEnrolling(false);
    } finally {
      setPending(false);
    }
  };

  const confirmEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!factorId || code.length < 6) return;
    setPending(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { data: challenge, error: cErr } = await supabase.auth.mfa.challenge(
        { factorId },
      );
      if (cErr || !challenge) throw new Error(cErr?.message || "challenge");
      const { error: vErr } = await supabase.auth.mfa.verify({
        factorId,
        challengeId: challenge.id,
        code: code.trim(),
      });
      if (vErr) throw new Error(vErr.message);
      toast.success(t("mfa.enabled"));
      setEnrolling(false);
      setQr(null);
      setSecret(null);
      setFactorId(null);
      setCode("");
      await refresh();
    } catch (err) {
      toast.error((err as Error).message || t("mfa.verifyFail"));
    } finally {
      setPending(false);
    }
  };

  const disable = async (id: string) => {
    if (!confirm(t("mfa.disableConfirm"))) return;
    setPending(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.mfa.unenroll({ factorId: id });
      if (error) throw error;
      toast.success(t("mfa.disabled"));
      await refresh();
    } catch (err) {
      toast.error((err as Error).message || t("mfa.disableFail"));
    } finally {
      setPending(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Shield className="h-4 w-4 text-primary" />
          {t("mfa.settingsTitle")}
        </CardTitle>
        <CardDescription>{t("mfa.settingsDesc")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading ? (
          <div className="flex justify-center py-4 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        ) : enrolling && qr ? (
          <form onSubmit={(e) => void confirmEnroll(e)} className="space-y-4">
            <p className="text-sm text-muted-foreground">{t("mfa.scanHint")}</p>
            {/* qr_code is an SVG data URL from Supabase */}
            <div className="flex justify-center rounded-xl border bg-white p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qr} alt="MFA QR" className="h-48 w-48" />
            </div>
            {secret && (
              <p className="text-xs text-muted-foreground break-all">
                {t("mfa.manualSecret")}:{" "}
                <code className="font-mono">{secret}</code>
              </p>
            )}
            <div className="space-y-2">
              <Label htmlFor="enroll-code">{t("mfa.codeLabel")}</Label>
              <Input
                id="enroll-code"
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="000000"
                maxLength={8}
                value={code}
                onChange={(e) =>
                  setCode(e.target.value.replace(/[^\d]/g, ""))
                }
                required
                className="text-center text-lg tracking-[0.3em] font-mono"
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                disabled={pending}
                onClick={() => {
                  setEnrolling(false);
                  setQr(null);
                  setSecret(null);
                  setFactorId(null);
                }}
              >
                {t("mfa.cancel")}
              </Button>
              <Button
                type="submit"
                variant="gradient"
                className="flex-1"
                disabled={pending || code.length < 6}
              >
                {pending && <Loader2 className="h-4 w-4 animate-spin" />}
                {t("mfa.confirmEnable")}
              </Button>
            </div>
          </form>
        ) : verified.length > 0 ? (
          <div className="space-y-3">
            <p className="text-sm text-emerald-700 dark:text-emerald-300">
              {t("mfa.statusOn")}
            </p>
            {verified.map((f) => (
              <div
                key={f.id}
                className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-sm"
              >
                <span>{f.friendly_name || "Authenticator"}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={pending}
                  onClick={() => void disable(f.id)}
                >
                  <ShieldOff className="h-4 w-4 mr-1" />
                  {t("mfa.disable")}
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{t("mfa.statusOff")}</p>
            <Button
              type="button"
              variant="outline"
              disabled={pending}
              onClick={() => void startEnroll()}
            >
              {pending && <Loader2 className="h-4 w-4 animate-spin" />}
              {t("mfa.enableBtn")}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
