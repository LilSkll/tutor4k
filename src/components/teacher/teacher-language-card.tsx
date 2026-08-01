"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Languages, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { INTERFACE_LANGUAGES } from "@/config/app";
import { updateProfile } from "@/server/actions/auth";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import type { InterfaceLanguage } from "@/types";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

/** Teacher Studio interface language (ru / en / es / de). */
export function TeacherLanguageCard() {
  const router = useRouter();
  const language = useInterfaceLanguage();
  const setLang = useUIStore((s) => s.setInterfaceLanguage);
  const t = (key: string) => translate(key, language);
  const [pending, startTransition] = useTransition();
  const [selected, setSelected] = React.useState<InterfaceLanguage>(language);

  React.useEffect(() => {
    setSelected(language);
  }, [language]);

  const save = () => {
    startTransition(async () => {
      const res = await updateProfile({ interfaceLanguage: selected });
      if (res.error) {
        toast.error(res.error);
        return;
      }
      setLang(selected);
      toast.success(t("teacher.settings.languageSaved"));
      router.refresh();
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Languages className="h-4 w-4 text-primary" />
          {t("teacher.settings.languageTitle")}
        </CardTitle>
        <CardDescription>{t("teacher.settings.languageDesc")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {INTERFACE_LANGUAGES.map((lang) => (
            <button
              key={lang.value}
              type="button"
              onClick={() => setSelected(lang.value)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-xl border-2 p-3 transition-all",
                selected === lang.value
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50",
              )}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-xs font-medium">{lang.label}</span>
            </button>
          ))}
        </div>
        <Button
          type="button"
          onClick={save}
          disabled={pending || selected === language}
        >
          {pending && <Loader2 className="h-4 w-4 animate-spin" />}
          {t("settings.saveBtn")}
        </Button>
      </CardContent>
    </Card>
  );
}
