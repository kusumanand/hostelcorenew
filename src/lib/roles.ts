export type Role =
  | "super_admin"
  | "admin"
  | "hr"
  | "warden"
  | "accountant"
  | "mess_manager"
  | "parent"
  | "student";

export const ROLES: Role[] = [
  "super_admin",
  "admin",
  "hr",
  "warden",
  "accountant",
  "mess_manager",
  "parent",
  "student",
];

export const ROLE_LABELS: Record<Role, string> = {
  super_admin: "Super Admin",
  admin: "Admin",
  hr: "HR",
  warden: "Warden",
  accountant: "Accountant",
  mess_manager: "Mess Manager",
  parent: "Parent",
  student: "Student",
};

export const MODULE_ACCESS: Record<string, Role[]> = {
  dashboard: [
    "super_admin",
    "admin",
    "hr",
    "warden",
    "accountant",
    "mess_manager",
    "parent",
    "student",
  ],
"admissions": ["super_admin", "admin", "warden", "student"],
  "residents": ["super_admin", "admin", "warden", "student"],
  "whatsapp-automation": ["super_admin", "admin"],
  "inventory": ["super_admin", "admin", "warden", "student"],
  "complaints": ["super_admin", "admin", "warden", "student"],

  // HR — HR & Payroll.
  "hr-payroll": ["super_admin","admin", "hr"],

  // Warden — room & bed management, attendance, health & wellness,
  // visitor management.
  "rooms-beds": ["super_admin", "admin","warden", "student"],
  "attendance-security": ["super_admin","admin", "warden"],
  "health-wellness": ["super_admin", "admin","warden", "student"],
  "visitors": ["super_admin","admin", "warden"],

  // Accountant — fees & accounting.
  "fees-accounting": ["super_admin", "accountant","admin", "student"],

  // Mess Manager — mess management.
  "mess": ["super_admin", "mess_manager", "admin", "student"],

  // Parent — parent engagement.
  "parent-engagement": ["super_admin","admin", "parent"],

  // Student — study room booking, library, assignment sharing, etc.
  "student-productivity": ["super_admin", "admin", "student"],

  // Super Admin only platform-level modules.
  "security": ["super_admin","admin"],
  "ai-modules": ["super_admin","admin"],
  "multi-branch": ["super_admin","admin"],
  "enterprise-saas": ["super_admin","admin"],
};

export function moduleSlugFromPath(pathname: string): string {
  return pathname.split("/").filter(Boolean)[0] ?? "";
}

export const PERSONAL_RECORD_ROLES:
Role[] = ["student", "parent"];

export function isPersonalRecordRole(role: Role): boolean {
  return PERSONAL_RECORD_ROLES.includes(role);
}

export function canAccessModule(role: Role, moduleSlug: string): boolean {
  const allowed = MODULE_ACCESS[moduleSlug];
 if (!allowed) return true;
  return allowed.includes(role);
}

export function canAccessPath(role: Role, pathname: string): boolean {
  return canAccessModule(role, moduleSlugFromPath(pathname));
}

export function allowedModulesForRole(role: Role): string[] {
  return Object.entries(MODULE_ACCESS)
    .filter(([, roles]) => roles.includes(role))
    .map(([slug]) => slug);
}
