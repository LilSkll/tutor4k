import {
  LayoutDashboard,
  Users,
  ClipboardList,
  BarChart3,
  Link2,
  Settings,
  Building2,
  type LucideIcon,
} from "lucide-react";

export type TeacherNavItem = {
  href: string;
  labelKey: string;
  icon: LucideIcon;
  /** Primary destinations shown in the mobile tab bar. */
  mobileTab?: boolean;
};

/** Shared Teacher Studio navigation (sidebar + mobile). */
export const TEACHER_NAV: TeacherNavItem[] = [
  {
    href: "/teacher/dashboard",
    labelKey: "teacher.nav.dashboard",
    icon: LayoutDashboard,
    mobileTab: true,
  },
  {
    href: "/teacher/students",
    labelKey: "teacher.nav.students",
    icon: Users,
    mobileTab: true,
  },
  {
    href: "/teacher/invites",
    labelKey: "teacher.nav.invites",
    icon: Link2,
    mobileTab: true,
  },
  {
    href: "/teacher/school",
    labelKey: "teacher.nav.school",
    icon: Building2,
  },
  {
    href: "/teacher/assignments",
    labelKey: "teacher.nav.assignments",
    icon: ClipboardList,
    mobileTab: true,
  },
  {
    href: "/teacher/analytics",
    labelKey: "teacher.nav.analytics",
    icon: BarChart3,
  },
  {
    href: "/teacher/settings",
    labelKey: "teacher.nav.settings",
    icon: Settings,
  },
];

export function isTeacherNavActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}
