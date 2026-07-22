"use client";

import * as React from "react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Download,
  Loader2,
  LogOut,
  Moon,
  Palette,
  Shield,
  Sun,
  Trash2,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  DAILY_GOAL_OPTIONS,
  GOALS,
  INTERFACE_LANGUAGES,
  LEVELS,
} from "@/config/app";
import { LEGAL_OPERATOR } from "@/config/legal";
import { LegalFooterLinks } from "@/components/legal/legal-footer-links";
import { updateProfile, signOut } from "@/server/actions/auth";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import type { Goal, InterfaceLanguage, Level, Profile } from "@/types";
import { cn } from "@/lib/utils";

export function SettingsClient({ profile }: { profile: Profile }) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const setLang = useUIStore((s) => s.setInterfaceLanguage);
  const interfaceLanguage = useUIStore((s) => s.interfaceLanguage);
  const t = (key: string) => translate(key, interfaceLanguage);
  const [pending, startTransition] = useTransition();

  const [name, setName] = React.useState(profile.name);
  const [level, setLevel] = React.useState<Level | "">(profile.level ?? "");
  const [goal, setGoal] = React.useState<Goal | "">(profile.goal ?? "");
  const [language, setLanguage] = React.useState<InterfaceLanguage>(
    profile.interface_language,
  );
  const [dailyGoal, setDailyGoal] = React.useState(
    profile.daily_goal_minutes ?? 15,
  );
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [deletePassword, setDeletePassword] = React.useState("");
  const [exporting, setExporting] = React.useState(false);

  const save = () => {
    startTransition(async () => {
      const res = await updateProfile({
        name,
        level: (level || undefined) as Level | undefined,
        goal: (goal || undefined) as Goal | undefined,
        interfaceLanguage: language,
        dailyGoalMinutes: dailyGoal,
      });
      if (res.error) {
        toast.error(res.error);
      } else {
        setLang(language);
        toast.success(t("settings.toastSaved"));
        router.refresh();
      }
    });
  };

  const exportData = async () => {
    setExporting(true);
    try {
      const res = await fetch("/api/export-data");
      if (!res.ok) throw new Error("Export failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `spanish-with-pavel-export-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success(t("settings.exportStarted"));
    } catch {
      toast.error(t("settings.exportFailed"));
    } finally {
      setExporting(false);
    }
  };

  const confirmDelete = async () => {
    if (!deletePassword.trim()) return;
    startTransition(async () => {
      try {
        const res = await fetch("/api/account", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: deletePassword }),
        });
        const data = (await res.json()) as { error?: string };
        if (!res.ok) {
          toast.error(data.error ?? t("settings.deleteFailed"));
          return;
        }
        toast.success(t("settings.deleteSuccess"));
        setDeleteOpen(false);
        router.push("/");
        router.refresh();
      } catch {
        toast.error(t("settings.deleteFailed"));
      }
    });
  };

  const operatorName =
    interfaceLanguage === "en"
      ? LEGAL_OPERATOR.operatorNameEn
      : LEGAL_OPERATOR.operatorNameRu;

  return (
    <div className="container max-w-2xl py-6 md:py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("settings.title")}</h1>
        <p className="text-sm text-muted-foreground">
          {t("settings.profile")}
        </p>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            {t("settings.profile")}
          </CardTitle>
          <CardDescription>{t("settings.profileDesc")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t("common.name")}</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t("common.level")}</Label>
              <Select
                value={level || "none"}
                onValueChange={(v) => setLevel(v === "none" ? "" : (v as Level))}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("settings.noLevel")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">{t("settings.noLevel")}</SelectItem>
                  {LEVELS.map((lvl) => (
                    <SelectItem key={lvl.value} value={lvl.value}>
                      {lvl.value} — {t(lvl.descriptionKey)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>{t("settings.goalLabel")}</Label>
              <Select
                value={goal || "none"}
                onValueChange={(v) => setGoal(v === "none" ? "" : (v as Goal))}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("settings.noGoal")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">{t("settings.noGoal")}</SelectItem>
                  {GOALS.map((g) => (
                    <SelectItem key={g.value} value={g.value}>
                      {g.emoji} {t(g.labelKey)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Palette className="h-4 w-4 text-primary" />
            {t("settings.prefsTitle")}
          </CardTitle>
          <CardDescription>{t("settings.prefsDesc")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>{t("settings.interfaceLangLabel")}</Label>
            <div className="grid grid-cols-3 gap-2">
              {INTERFACE_LANGUAGES.map((lang) => (
                <button
                  key={lang.value}
                  type="button"
                  onClick={() => {
                    setLanguage(lang.value);
                    setLang(lang.value);
                  }}
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-xl border-2 p-3 transition-all",
                    language === lang.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-xs font-medium">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>{t("settings.dailyGoalLabel")}</Label>
            <div className="grid grid-cols-5 gap-2">
              {DAILY_GOAL_OPTIONS.map((min) => (
                <button
                  key={min}
                  type="button"
                  onClick={() => setDailyGoal(min)}
                  className={cn(
                    "rounded-lg border-2 py-2 text-sm font-bold transition-all",
                    dailyGoal === min
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  {min}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            {theme === "dark" ? (
              <Moon className="h-4 w-4 text-primary" />
            ) : (
              <Sun className="h-4 w-4 text-primary" />
            )}
            {t("settings.appearanceTitle")}
          </CardTitle>
          <CardDescription>{t("settings.appearanceDesc")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: "light", labelKey: "settings.themeLight", icon: Sun },
              { value: "dark", labelKey: "settings.themeDark", icon: Moon },
              { value: "system", labelKey: "settings.themeSystem", icon: Palette },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setTheme(opt.value)}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all",
                  theme === opt.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50",
                )}
              >
                <opt.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{t(opt.labelKey)}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Privacy & data */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            {t("settings.legalTitle")}
          </CardTitle>
          <CardDescription>{t("settings.legalDesc")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <LegalFooterLinks locale={interfaceLanguage} vertical className="items-start" />
          <div className="rounded-lg border p-4 space-y-1 text-sm">
            <p className="font-medium">{t("settings.operatorContact")}</p>
            <p className="text-muted-foreground">{operatorName}</p>
            <a
              href={`mailto:${LEGAL_OPERATOR.contactEmail}`}
              className="text-primary hover:underline"
            >
              {LEGAL_OPERATOR.contactEmail}
            </a>
          </div>
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => void exportData()}
            disabled={exporting || pending}
          >
            {exporting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            <span className="ml-2 text-left">
              <span className="block font-medium">{t("settings.exportData")}</span>
              <span className="block text-xs text-muted-foreground font-normal">
                {t("settings.exportDataDesc")}
              </span>
            </span>
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={() => setDeleteOpen(true)}
            disabled={pending}
          >
            <Trash2 className="h-4 w-4" />
            <span className="ml-2 text-left">
              <span className="block font-medium">{t("settings.deleteAccount")}</span>
              <span className="block text-xs opacity-80 font-normal">
                {t("settings.deleteAccountDesc")}
              </span>
            </span>
          </Button>
        </CardContent>
      </Card>

      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("settings.deleteConfirmTitle")}</DialogTitle>
            <DialogDescription>{t("settings.deleteConfirmBody")}</DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Label htmlFor="delete-password">{t("settings.deletePassword")}</Label>
            <Input
              id="delete-password"
              type="password"
              value={deletePassword}
              onChange={(e) => setDeletePassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setDeleteOpen(false)}>
              {t("settings.deleteCancel")}
            </Button>
            <Button
              variant="destructive"
              onClick={() => void confirmDelete()}
              disabled={pending || !deletePassword.trim()}
            >
              {pending && <Loader2 className="h-4 w-4 animate-spin" />}
              {t("settings.deleteConfirm")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex items-center gap-2">
        <Button
          variant="gradient"
          onClick={save}
          disabled={pending}
          className="flex-1"
        >
          {pending && <Loader2 className="h-4 w-4 animate-spin" />}
          {t("settings.saveBtn")}
        </Button>
        <form action={() => startTransition(() => signOut())}>
          <Button type="submit" variant="outline" disabled={pending}>
            <LogOut className="h-4 w-4" />
            {t("settings.logoutBtn")}
          </Button>
        </form>
      </div>

      <Separator />
      <LegalFooterLinks locale={interfaceLanguage} className="pb-2" />
      <p className="text-center text-xs text-muted-foreground pb-4">
        Spanish with Pavel © {new Date().getFullYear()} · {t("landing.footer")}
        <br />
        {operatorName}
      </p>
    </div>
  );
}
