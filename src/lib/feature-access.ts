import { type Role } from "@/lib/roles";

// Module-level access (roles.ts / MODULE_ACCESS) decides which *modules* a
// role can enter. This file goes one level deeper: for roles listed here,
// it restricts each module down to a specific whitelist of *features*
// instead of exposing every feature inside that module.
//
// A role that has NO entry in FEATURE_ACCESS is unrestricted at the
// feature level — once module access is granted, every feature inside
// that module is visible (this preserves the existing behaviour for
// super_admin, admin, hr, warden, accountant, mess_manager and parent).
//
// Keys are "moduleSlug::featureSlug" pairs (feature slug = slugify(name)
// from module-features.tsx).

export const FEATURE_ACCESS: Partial<Record<Role, string[]>> = {
  student: [
    // Admissions & KYC
    "admissions::online-admission",
    "admissions::online-payment",
    "admissions::document-upload",
    "admissions::kyc-verification",
    "admissions::qr-admission-slip",
    "admissions::admission-status-timeline",
    "admissions::digital-consent-forms",

    // Residents
    "residents::hostel-agreement",
    "residents::student-wallet",

    // Rooms & Beds
    "rooms-beds::cleaning-schedule",
    "rooms-beds::room-transfer",

    // Fees & Accounting
    "fees-accounting::payment-link",
    "fees-accounting::scholarship-management",

    // Complaints & Helpdesk
    "complaints::complaint-ticket",
    "complaints::photo-upload",
    "complaints::voice-complaint",
    "complaints::resolution-tracking",
    "complaints::feedback",
    "complaints::service-requests",

    // Mess
    "mess::meal-pre-booking",
    "mess::food-rating",

    // Inventory & Assets
    "inventory::asset-booking",

    // Health & Wellness
    "health-wellness::medical-emergency-alerts",
    "health-wellness::sos-alert",

    // Student Productivity
    "student-productivity::study-room-booking",
    "student-productivity::library-integration",
    "student-productivity::assignment-sharing",
    "student-productivity::laundry-booking",
  ],
};

function featureKey(moduleSlug: string, featureSlug: string): string {
  return `${moduleSlug}::${featureSlug}`;
}

// True if this role has no feature-level restriction defined at all (i.e.
// module-level access is the only gate that applies to them).
export function isFeatureUnrestricted(role: Role): boolean {
  return !FEATURE_ACCESS[role];
}

export function canAccessFeature(
  role: Role,
  moduleSlug: string,
  featureSlug: string
): boolean {
  const allowed = FEATURE_ACCESS[role];
  if (!allowed) return true; // unrestricted role -> module access is enough
  return allowed.includes(featureKey(moduleSlug, featureSlug));
}

// Returns the set of feature slugs (within one module) a restricted role
// may see, or null if the role isn't feature-restricted (caller should
// show every feature in that case).
export function allowedFeatureSlugsForModule(
  role: Role,
  moduleSlug: string
): Set<string> | null {
  const allowed = FEATURE_ACCESS[role];
  if (!allowed) return null;
  const prefix = `${moduleSlug}::`;
  const slugs = allowed
    .filter((key) => key.startsWith(prefix))
    .map((key) => key.slice(prefix.length));
  return new Set(slugs);
}
