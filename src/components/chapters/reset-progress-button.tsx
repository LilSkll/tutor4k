"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Loader2, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

/** "Start the journey over" — wipes chapter progress for the active course. */
export function ResetProgressButton({ courseTitle }: { courseTitle: string }) {
  const router = useRouter();
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const [open, setOpen] = React.useState(false);
  const [busy, setBusy] = React.useState(false);

  const reset = async () => {
    setBusy(true);
    try {
      const res = await fetch("/api/chapters/reset", { method: "POST" });
      if (!res.ok) throw new Error("reset failed");
      toast.success(t("chapters.resetSuccess"));
      setOpen(false);
      router.refresh();
    } catch {
      toast.error(t("chapters.resetFail"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="text-muted-foreground hover:text-destructive"
        onClick={() => setOpen(true)}
      >
        <RotateCcw className="h-3.5 w-3.5" />
        {t("chapters.resetBtn")}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("chapters.resetConfirmTitle")}</DialogTitle>
            <DialogDescription>
              {t("chapters.resetConfirmBody", { course: courseTitle })}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setOpen(false)} disabled={busy}>
              {t("chapters.resetCancel")}
            </Button>
            <Button variant="destructive" onClick={reset} disabled={busy}>
              {busy ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RotateCcw className="h-4 w-4" />
              )}
              {t("chapters.resetConfirm")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
