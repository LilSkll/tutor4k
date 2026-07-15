import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  actionHref?: string;
  className?: string;
  withMascot?: boolean;
  icon?: React.ReactNode;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  actionHref,
  className,
  withMascot = true,
  icon,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center px-6 py-12 animate-fade-in",
        className,
      )}
    >
      {withMascot ? (
        <div className="relative mb-5">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
          <Image
            src="/hippogriff-icon.png"
            alt=""
            width={72}
            height={72}
            className="relative h-[72px] w-[72px] rounded-2xl shadow-soft"
          />
        </div>
      ) : icon ? (
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white shadow-brand">
          {icon}
        </div>
      ) : null}

      <h2 className="text-lg font-semibold tracking-tight text-foreground mb-1.5">
        {title}
      </h2>
      <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
        {description}
      </p>

      {actionLabel && actionHref && (
        <Button variant="gradient" size="lg" asChild>
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      )}
      {actionLabel && !actionHref && onAction && (
        <Button variant="gradient" size="lg" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
