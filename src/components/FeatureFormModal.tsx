"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import SubfeatureForm, { type Values } from "@/components/SubFeatureForm";
import { type FormField } from "@/lib/form-fields";

export default function FeatureFormModal({
  featureName,
  fields,
  initialValues,
  onSubmit,
  onClose,
}: {
  featureName: string;
  fields: FormField[];
  initialValues?: Values;
  onSubmit: (values: Values) => void;
  onClose: () => void;
}) {
  // Close on Escape and lock background scroll while the modal is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const isEdit = Boolean(initialValues);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto bg-navy-950/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="card w-full max-w-2xl my-8 p-6 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-slate-400 hover:text-rose-500 transition-colors"
        >
          <X size={18} />
        </button>
        <h3 className="text-[15px] font-semibold text-slate-800 dark:text-white pr-8">
          {isEdit ? `Edit ${featureName} Entry` : `Add ${featureName} Entry`}
        </h3>
        <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-1 mb-5">
          {isEdit
            ? "Update the fields below and save your changes."
            : `Fill in the fields below to add a new ${featureName.toLowerCase()} entry.`}
        </p>
        <SubfeatureForm
          featureName={featureName}
          fields={fields}
          initialValues={initialValues}
          onCancel={onClose}
          onSubmit={(values) => {
            onSubmit(values);
            onClose();
          }}
        />
      </div>
    </div>
  );
}
