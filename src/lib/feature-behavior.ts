import { type FormField } from "@/lib/form-fields";


export type FeatureArchetype ="document" | "approval" | "standard";

const DOCUMENT_PATTERN = /slip|invoice|billing|receipt|certificate|id card|gate pass|visitor pass |consent form| \bpass\b|fee collection/i;

const APPROVAL_PATTERN =/approval|workflow|verification|\breview\b/i;

const QR_PATTERN = /qr|pass\b/i;

export function classifyFeature(featureName: string): FeatureArchetype {
    if (DOCUMENT_PATTERN.test(featureName)) return "document";
    if (APPROVAL_PATTERN.test(featureName)) return "approval";
    return "standard";
}

/** Should this feature's document viw show a QR placeholder (gate/visitor-passes)? */

export function featureUsesQr(featureName: string): boolean {
    return QR_PATTERN.test(featureName);
}

/** A select field that behaves like a status/ category badge in the table */
export function isStatusLikeField(field: FormField): boolean {
    return (
        field.type === "select" &&
        /status|type|priority|rating|category|department|level/i.test(field.name)
    );
}

/** The status field that actually represents an approve/reject decision, if any. */

export function findApprovalStatusField(fields: FormField[]): FormField | undefined {
    return fields.find(
        (f) =>
            f.type === "select" &&
        f.options?.some((o) => /approve|reject/i.test(o))
    );
}


/** The field that represents "the" money amount for this record, if any. */
export function findAmountField(fields: FormField[]): FormField | undefined {
    return fields.find(
        (f) =>
            f.type === "number" &&
        /(amount|salary|fee|price|total|deposit|revenue|fine|charge|cost|royalty|budget|basic)/i.test(
            f.name
        )
    );
}

/** Resolve the actual positive/negative option labels a feature uses (e.g. "Verified" vs "Approved") */

export function approvalLabels(field: FormField):
{ positive: string; negative: string } {
    const positive =
    field.options?.find((o) => /approve|verify|verified|confirm/i.test(o)) ?? "Approved";
    const negative = field.options?.find((o) => /reject|decline/i.test(o)) ?? "Rejected";
    return { positive, negative};
}

/** Short , readable prefix for auto-generated record codes, e.g. "Employee Management" -> "EMP". */
export function prefixFromFeatureName(name: string): string {
    const words = name.replace(/[^a-zA-Z]/g, "").
    split(/\s+/).filter(Boolean);
    if (words.length === 0) return "REC";
    if (words.length === 1) return words[0].slice(0,3).toUpperCase();
    return words
    .map((w) => w[0])
    .join("")
    .slice(0, 4)
    .toUpperCase();
}

