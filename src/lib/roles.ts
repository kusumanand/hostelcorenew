export type Role =
  | "super_admin"
  | "admin"
  | "warden"
  | "mess_manager"
  | "accountant"
  | "student"
  | "parent"
  | "security"
  | "hr";

export const ROLES: Role[] = [
  "super_admin",
  "admin",
  "warden",
  "mess_manager",
  "accountant",
  "student",
  "parent",
  "security",
  "hr",
];

export const ROLE_LABELS: Record<Role, string> = {
  super_admin: "Super Admin",
  admin: "Admin",
  warden: "Warden",
  mess_manager: "Mess Manager",
  accountant: "Accountant",
  student: "Student",
  parent: "Parent",
  security: "Security",
  hr: "HR",
};

// Every module is keyed by its route slug (the first path segment under
// the dashboard group, e.g. "/fees-accounting" -> "fees-accounting").
// "dashboard" is available to every authenticated role.
export const MODULE_ACCESS: Record<string, Role[]> = {
  dashboard: [
    "super_admin",
    "admin",
    "warden",
    "mess_manager",
    "accountant",
    "student",
    "parent",
    "security",
    "hr",
  ],
  "hr-payroll": ["super_admin", "hr"],
  "admissions": ["super_admin", "admin"],
  "residents": ["super_admin", "warden"],
  "rooms-beds": ["super_admin", "warden"],
  "fees-accounting": ["super_admin", "accountant"],
  "attendance-security": ["super_admin", "warden"],
  "visitors": ["super_admin", "warden", "security"],
  "complaints": ["super_admin", "admin"],
  "mess": ["super_admin", "mess_manager"],
  "inventory": ["super_admin", "admin"],
  "health-wellness": ["super_admin", "warden"],
  "student-productivity": ["super_admin", "warden"],
  "parent-engagement": ["super_admin", "warden", "parent"],
  "security": ["super_admin", "admin"],
  "whatsapp-automation": ["super_admin"],
  "ai-modules": ["super_admin"],
  "multi-branch": ["super_admin"],
};

export function moduleSlugFromPath(pathname: string): string {
  return pathname.split("/").filter(Boolean)[0] ?? "";
}

export function canAccessModule(role: Role, moduleSlug: string): boolean {
  const allowed = MODULE_ACCESS[moduleSlug];
  // Unknown/unlisted routes default to open so we don't accidentally lock
  // out pages that haven't been mapped yet.
  if (!allowed) return true;
  return allowed.includes(role);
}

export function canAccessPath(role: Role, pathname: string): boolean {
  return canAccessModule(role, moduleSlugFromPath(pathname));
}

// Modules a given role is allowed to see, preserving the order they're
// passed in (used to filter the sidebar nav list).
export function allowedModulesForRole(role: Role): string[] {
  return Object.entries(MODULE_ACCESS)
    .filter(([, roles]) => roles.includes(role))
    .map(([slug]) => slug);
}
