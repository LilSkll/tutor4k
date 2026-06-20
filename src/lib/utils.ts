import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely (resolves conflicts).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format an ISO date string into a human readable form.
 */
export function formatDate(date: string | Date, locale = "ru"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const code = locale === "ru" ? "ru-RU" : locale === "es" ? "es-ES" : "en-US";
  return new Intl.DateTimeFormat(code, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}

/**
 * Calculate a streak given an array of ISO date strings (UTC midnight).
 * Returns the current consecutive-day streak ending today or yesterday.
 */
export function calculateStreak(dates: string[]): number {
  if (dates.length === 0) return 0;

  const dayKey = (iso: string) => {
    const d = new Date(iso);
    return new Date(
      Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()),
    ).getTime();
  };

  const today = new Date();
  const todayKey = dayKey(today.toISOString());
  const yesterdayKey = todayKey - 86_400_000;

  const unique = Array.from(new Set(dates.map(dayKey))).sort((a, b) => b - a);

  // Streak must touch today or yesterday to count.
  if (unique[0] !== todayKey && unique[0] !== yesterdayKey) return 0;

  let streak = 1;
  for (let i = 1; i < unique.length; i++) {
    if (unique[i - 1] - unique[i] === 86_400_000) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

/**
 * Return a short relative time label, e.g. "2 ч назад".
 */
export function relativeTime(date: string | Date, locale = "ru"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const diff = Date.now() - d.getTime();
  const minutes = Math.floor(diff / 60_000);
  const hours = Math.floor(diff / 3_600_000);
  const days = Math.floor(diff / 86_400_000);

  const labels =
    locale === "ru"
      ? { m: "мин", h: "ч", d: "дн", ago: "назад", now: "сейчас" }
      : locale === "es"
        ? { m: "min", h: "h", d: "d", ago: "", now: "ahora" }
        : { m: "min", h: "h", d: "d", ago: "ago", now: "now" };

  if (minutes < 1) return labels.now;
  if (minutes < 60) return locale === "ru" ? `${minutes} ${labels.m} ${labels.ago}` : `${minutes} ${labels.m} ${labels.ago}`;
  if (hours < 24) return locale === "ru" ? `${hours} ${labels.h} ${labels.ago}` : `${hours} ${labels.h} ${labels.ago}`;
  return locale === "ru" ? `${days} ${labels.d} ${labels.ago}` : `${days} ${labels.d} ${labels.ago}`;
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Group an array of objects by a key.
 */
export function groupBy<T>(arr: T[], keyFn: (item: T) => string): Record<string, T[]> {
  return arr.reduce((acc, item) => {
    const key = keyFn(item);
    (acc[key] ||= []).push(item);
    return acc;
  }, {} as Record<string, T[]>);
}
