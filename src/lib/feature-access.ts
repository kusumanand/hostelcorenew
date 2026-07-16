import { type Role } from "@/lib/roles";


export const FEATURE_ACCESS: Partial<Record<Role, string[]>> = {
  student: [
    // Admissions & KYC
    "admissions::payment-link",
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
    "inventory::maintenance-scheduling",

    // Health & Wellness
    "health-wellness::medical-emergency-alerts",
    "health-wellness::sos-alerts",
    "health-wellness::health-checkup-records",
    "health-wellness::vaccination-records",


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
