import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  BookPlus,
  Dumbbell,
  Globe,
  Languages,
  LayoutDashboard,
  MessageSquare,
  Settings,
  TrendingUp,
  Map,
} from "lucide-react";

export type NavItem = {
  href: string;
  labelKey: string;
  icon: LucideIcon;
};

export type NavSection = {
  id: string;
  labelKey: string;
  items: NavItem[];
};

/** Grouped navigation used by sidebar + mobile drawer. */
export const NAV_SECTIONS: NavSection[] = [
  {
    id: "main",
    labelKey: "nav.section.main",
    items: [
      { href: "/dashboard", labelKey: "nav.home", icon: LayoutDashboard },
      { href: "/courses", labelKey: "nav.courses", icon: Globe },
    ],
  },
  {
    id: "learning",
    labelKey: "nav.section.learning",
    items: [
      { href: "/chapters", labelKey: "nav.chapters", icon: Map },
      { href: "/tutor", labelKey: "nav.tutor", icon: MessageSquare },
      { href: "/grammar", labelKey: "nav.grammar", icon: BookOpen },
      { href: "/vocabulary", labelKey: "nav.vocabulary", icon: Languages },
      { href: "/vocabulary-topics", labelKey: "nav.lexicon", icon: BookPlus },
      { href: "/exercises", labelKey: "nav.exercises", icon: Dumbbell },
    ],
  },
  {
    id: "account",
    labelKey: "nav.section.account",
    items: [
      { href: "/progress", labelKey: "nav.progress", icon: TrendingUp },
      { href: "/settings", labelKey: "nav.settings", icon: Settings },
    ],
  },
];

/** Primary bottom-tab destinations for mobile thumb reach. */
export const MOBILE_TAB_ITEMS: NavItem[] = [
  { href: "/dashboard", labelKey: "nav.home", icon: LayoutDashboard },
  { href: "/chapters", labelKey: "nav.chapters", icon: Map },
  { href: "/tutor", labelKey: "nav.tutorShort", icon: MessageSquare },
  { href: "/vocabulary", labelKey: "nav.vocabulary", icon: Languages },
  { href: "/progress", labelKey: "nav.progress", icon: TrendingUp },
];

export function isNavActive(pathname: string, href: string): boolean {
  if (href === "/dashboard") return pathname === "/dashboard" || pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
