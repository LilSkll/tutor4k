"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { cn } from "@/lib/utils";

/** Consistent in-app back link (chapters, exercises, etc.). */
export function BackLink({
  href,
  label,
  className,
}: {
  href: string;
  /** Override label; defaults to common.back */
  label?: string;
  className?: string;
}) {
  const language = useInterfaceLanguage();
  const text = label ?? translate("common.back", language);

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
        className,
      )}
    >
      <ArrowLeft className="h-4 w-4" />
      {text}
    </Link>
  );
}
