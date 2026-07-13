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

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
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