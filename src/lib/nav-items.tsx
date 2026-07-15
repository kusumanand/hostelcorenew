import {
  LayoutDashboard,
  Users,
  ClipboardList,
  BedDouble,
  DoorOpen,
  Wallet,
  ShieldCheck,
  UserCheck,
  MessageSquareWarning,
  UtensilsCrossed,
  Boxes,
  Shield,
  HeartPulse,
  BookOpenCheck,
  Smile,
  MessageCircle,
  Sparkles,
  Building2,
  Cloud,
  type LucideIcon,
  GraduationCap,
} from "lucide-react";

import { MODULE_ACCESS, moduleSlugFromPath, type Role, } from "./roles";
import { getModuleConfig, slugify } from "./module-features";
import { allowedFeatureSlugsForModule } from "./feature-access";

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  children?: NavChild[];  
}

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Staff & Payroll", href: "/hr-payroll", icon: Users },
  { label: "Admission Management", href: "/admissions", icon: ClipboardList },
  { label: "Resident Management", href: "/residents", icon: UserCheck },
  { label: "Room and Bed Management", href: "/rooms-beds", icon: BedDouble },
  { label: "Fees & Accounting", href: "/fees-accounting", icon: Wallet },
  { label: "Attendance & Security", href: "/attendance-security", icon: ShieldCheck },
  { label: "Visitor Management", href: "/visitors", icon: DoorOpen },
  { label: "Mess Management", href: "/mess", icon: UtensilsCrossed },
  { label: "Inventory & Assets", href: "/inventory", icon: Boxes },
  { label: "Health & Wellness", href: "/health-wellness", icon: HeartPulse },
  { label: "Student Productivity", href: "/student-productivity", icon: BookOpenCheck },
  { label: "Parent Engagement", href: "/parent-engagement", icon: Smile },
  { label: "Security", href: "/security", icon: Shield },
  { label: "Whatsapp Automation", href: "/whatsapp-automation", icon: MessageCircle },
  { label: "AI Modules", href: "/ai-modules", icon: Sparkles },
  { label: "Multi Branch & Franchise", href: "/multi-branch", icon: Building2 },
  { label: "Enterprise & SaaS Features", href: "/enterprise-saas", icon: Cloud },
  { label: "Complaints & HelpDesk", href: "/complaints", icon: MessageSquareWarning },
];

function withExpandedFeatures(item: NavItem, role: Role)
: NavItem {
  const slug = moduleSlugFromPath(item.href);
  const config = getModuleConfig(slug);
  if (!config) return item;

  const allowedSlugs = allowedFeatureSlugsForModule
  (role, slug);
  const features = allowedSlugs? config.features.filter((f) => allowedSlugs.has(slugify(f.name))): config.features;

  return {
    ...item,
    children: features.map((f) => ({
      label: f.name,
      href: `/${slug}/${slugify(f.name)}`,
    })),
  };
}

export function navItem(role: Role): NavItem[] {
  const base = navItems.filter((item) => {
    const slug = moduleSlugFromPath(item.href);
    const allowed = MODULE_ACCESS[slug];
    return !allowed  || allowed.includes(role);
  });

  const nonDashboard = base.filter((item) => item.href !== "/dashboard");
  if (nonDashboard.length === 1) {
    return base.map((item) =>
    item.href === nonDashboard[0].href ?
  withExpandedFeatures(item, role): item);
  }

  return base;
}