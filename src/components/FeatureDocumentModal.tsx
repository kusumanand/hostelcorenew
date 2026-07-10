"use client";

import { Printer, X } from "lucide-react";
import { type FormField } from "@/lib/form-fields";
import { type FeatureRecord } from "@/lib/use-feature-records";
import { findAmountField, featureUsesQr } from "@/lib/feature-behavior";

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function FeatureDocumentModal({
  hostelName,
  moduleTitle,
  featureName,
  fields,
  record,
  onClose,
}: {
  hostelName: string;
  moduleTitle: string;
  featureName: string;
  fields: FormField[];
  record: FeatureRecord;
  onClose: () => void;
}) {
  const amountField = findAmountField(fields);
  const showQr = featureUsesQr(featureName);
  const detailFields = fields.filter((f) => f.type !== "file");

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto bg-navy-950/60 backdrop-blur-sm print:bg-white print:p-0"
      onClick={onClose}
    >
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #printable-doc, #printable-doc * { visibility: visible; }
          #printable-doc {
            position: absolute; inset: 0; width: 100%; margin: 0; padding: 24px;
            box-shadow: none !important; border: none !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>
      <div
        id="printable-doc"
        className="card w-full max-w-xl my-8 p-0 relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="no-print absolute top-4 right-4 text-slate-400 hover:text-rose-500 transition-colors z-10"
        >
          <X size={18} />
        </button>

        {/* Letterhead */}
        <div className="gold-gradient px-6 py-5 text-navy-950">
          <p className="text-[11px] font-medium uppercase tracking-wide opacity-80">
            {hostelName}
          </p>
          <h3 className="text-lg font-semibold mt-0.5">{featureName}</h3>
          <p className="text-[12px] opacity-80 mt-0.5">{moduleTitle}</p>
        </div>

        <div className="p-6">
          {/* Slip meta */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-dashed border-slate-200 dark:border-navy-700">
            <div>
              <p className="text-[11px] text-slate-400">Document No.</p>
              <p className="text-[13px] font-semibold text-slate-800 dark:text-white">
                {record.recordCode}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-slate-400">Issued</p>
              <p className="text-[13px] font-semibold text-slate-800 dark:text-white">
                {formatDate(record.createdAt)}
              </p>
            </div>
          </div>

          {/* Fields */}
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-[13px]">
            {detailFields.map((f) => (
              <div
                key={f.name}
                className={f.span === 2 || f.type === "textarea" ? "col-span-2" : ""}
              >
                <dt className="text-[11px] text-slate-400">{f.label}</dt>
                <dd className="text-slate-700 dark:text-slate-200 font-medium break-words">
                  {f.type === "checkbox"
                    ? record[f.name]
                      ? "Yes"
                      : "No"
                    : String(record[f.name] ?? "—")}
                </dd>
              </div>
            ))}
          </dl>

          {/* Amount emphasis for billing-style documents */}
          {amountField && (
            <div className="mt-5 pt-4 border-t border-dashed border-slate-200 dark:border-navy-700 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-slate-600 dark:text-slate-300">
                {amountField.label}
              </span>
              <span className="text-lg font-bold text-gold-dark dark:text-gold">
                ₹{String(record[amountField.name] ?? "0")}
              </span>
            </div>
          )}

          {/* QR placeholder for pass-style documents */}
          {showQr && (
            <div className="mt-5 flex flex-col items-center gap-1.5">
              <div
                className="w-24 h-24 rounded-lg border-2 border-navy-800 dark:border-white"
                style={{
                  backgroundImage:
                    "repeating-conic-gradient(currentColor 0% 25%, transparent 0% 50%)",
                  backgroundSize: "12px 12px",
                  color: "currentColor",
                }}
              />
              <p className="text-[10px] text-slate-400">
                Scan at the gate to verify {record.recordCode}
              </p>
            </div>
          )}

          <div className="no-print mt-6 flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 gold-gradient text-navy-950 text-[13px] font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:brightness-105 transition"
            >
              <Printer size={15} />
              Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              className="text-[13px] font-medium px-4 py-2.5 rounded-lg border border-slate-200 dark:border-navy-600/60 text-slate-600 dark:text-slate-300 hover:border-gold/50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
