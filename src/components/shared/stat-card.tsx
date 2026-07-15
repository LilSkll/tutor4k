import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: ReactNode;
  icon?: LucideIcon;
  iconClassName?: string;
  className?: string;
  footnote?: string;
};

export function StatCard({
  label,
  value,
  icon: Icon,
  iconClassName,
  className,
  footnote,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-card shadow-soft p-4 transition-transform duration-200 active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-elevated",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        {Icon && (
          <Icon className={cn("h-4 w-4 text-muted-foreground", iconClassName)} />
        )}
      </div>
      <div className="text-2xl font-bold tracking-tight tabular-nums">{value}</div>
      {footnote && (
        <p className="text-[11px] text-muted-foreground mt-1">{footnote}</p>
      )}
    </div>
  );
}
