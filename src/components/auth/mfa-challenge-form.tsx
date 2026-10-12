"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Loader2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

/** Enter TOTP code after password / Google login (aal1 → aal2). */
export function MfaChallengeForm() {
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);
  const router = useRouter();
  const [code, setCode] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const [factorId, setFactorId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    void (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        router.replace("/login");
        return;
      }
      const { data, error } = await supabase.auth.mfa.listFactors();
      if (error) {
        toast.error(error.message);
        return;
      }
      const totp = data.totp.find((f) => f.status === "verified");
      if (!totp) {
        toast.error(translate("mfa.noFactor", language));
        router.replace("/login");
        return;
      }
      setFactorId(totp.id);
    })();
  }, [router, language]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!factorId || code.trim().length < 6) return;
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
        code: code.trim().replace(/\s/g, ""),
      });
      if (vErr) throw new Error(vErr.message);

      toast.success(t("mfa.verified"));
      router.replace("/dashboard");
      router.refresh();
    } catch (err) {
      toast.error((err as Error).message || t("mfa.verifyFail"));
      setPending(false);
    }
  };

  return (
    <form onSubmit={(e) => void submit(e)} className="space-y-4">
      <div className="flex items-center gap-2 text-primary mb-2">
        <ShieldCheck className="h-5 w-5" />
        <span className="font-semibold">{t("mfa.challengeTitle")}</span>
      </div>
      <p className="text-sm text-muted-foreground">{t("mfa.challengeDesc")}</p>
      <div className="space-y-2">
        <Label htmlFor="mfa-code">{t("mfa.codeLabel")}</Label>
        <Input
          id="mfa-code"
          inputMode="numeric"
          autoComplete="one-time-code"
          placeholder="000000"
          maxLength={8}
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/[^\d]/g, ""))}
          required
          autoFocus
          className="text-center text-lg tracking-[0.3em] font-mono"
        />
      </div>
      <Button
        type="submit"
        variant="gradient"
        className="w-full"
        disabled={pending || !factorId || code.length < 6}
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {t("mfa.verifyBtn")}
      </Button>
    </form>
  );
}
