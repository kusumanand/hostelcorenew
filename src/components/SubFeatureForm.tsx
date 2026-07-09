"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, ClipboardPlus, Loader2, Save } from "lucide-react";
import { type FormField } from "@/lib/form-fields";

const inputBase =
  "w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-navy-600/60 bg-white dark:bg-navy-900 text-[13px] text-slate-700 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/60 transition-colors";

export type Values = Record<string, string | boolean>;

function defaultValues(fields: FormField[], initial?: Values): Values {
  const v: Values = {};
  for (const field of fields) {
    if (initial && field.name in initial) {
      v[field.name] = initial[field.name];
    } else {
      v[field.name] = field.type === "checkbox" ? false : "";
    }
  }
  return v;
}

export default function SubfeatureForm({
  featureName,
  fields,
  initialValues,
  submitLabel,
  onSubmit,
  onCancel,
}: {
  featureName: string;
  fields: FormField[];
  /** Pass existing values to pre-fill the form in "edit" mode. */
  initialValues?: Values;
  /** Overrides the default "Save ... Entry" button text. */
  submitLabel?: string;
  /** Called with the collected field values once the form is submitted. */
  onSubmit: (values: Values) => void | Promise<void>;
  /** Shown as a "Cancel" button when the form lives inside a modal. */
  onCancel?: () => void;
}) {
  const [values, setValues] = useState<Values>(() =>
    defaultValues(fields, initialValues)
  );
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isEdit = Boolean(initialValues);

  const setValue = (name: string, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    try {
      await onSubmit(values);
      setSubmitted(true);
      if (!isEdit) {
        setValues(defaultValues(fields));
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setValues(defaultValues(fields, initialValues));
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((field) => {
          const wrapperClass =
            field.span === 2 ? "sm:col-span-2" : "sm:col-span-1";

          if (field.type === "checkbox") {
            return (
              <label
                key={field.name}
                className={`${wrapperClass} flex items-center gap-2.5 h-10 text-[13px] text-slate-600 dark:text-slate-300 cursor-pointer`}
              >
                <input
                  type="checkbox"
                  checked={Boolean(values[field.name])}
                  onChange={(e) => setValue(field.name, e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 dark:border-navy-600 text-gold-dark focus:ring-gold/50 accent-[#B6852A]"
                />
                {field.label}
              </label>
            );
          }

          return (
            <div key={field.name} className={wrapperClass}>
              <label className="block text-[12px] font-medium text-slate-600 dark:text-slate-300 mb-1.5">
                {field.label}
                {field.required !== false && (
                  <span className="text-rose-500 ml-0.5">*</span>
                )}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  rows={3}
                  required={field.required !== false}
                  placeholder={field.placeholder}
                  value={values[field.name] as string}
                  onChange={(e) => setValue(field.name, e.target.value)}
                  className={`${inputBase} h-auto py-2 resize-none`}
                />
              ) : field.type === "select" ? (
                <select
                  required={field.required !== false}
                  value={values[field.name] as string}
                  onChange={(e) => setValue(field.name, e.target.value)}
                  className={`${inputBase} appearance-none`}
                >
                  <option value="" disabled>
                    Select {field.label.toLowerCase()}
                  </option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  required={field.required !== false}
                  placeholder={field.placeholder ?? field.label}
                  value={values[field.name] as string}
                  onChange={(e) => setValue(field.name, e.target.value)}
                  className={inputBase}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 pt-2 flex-wrap">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 gold-gradient text-navy-950 text-[13px] font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:brightness-105 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Saving...
            </>
          ) : isEdit ? (
            <>
              <Save size={15} />
              {submitLabel ?? `Update ${featureName} Entry`}
            </>
          ) : (
            <>
              <ClipboardPlus size={15} />
              {submitLabel ?? `Save ${featureName} Entry`}
            </>
          )}
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="text-[13px] font-medium px-4 py-2.5 rounded-lg border border-slate-200 dark:border-navy-600/60 text-slate-600 dark:text-slate-300 hover:border-gold/50 hover:text-gold-dark dark:hover:text-gold transition-colors"
        >
          Reset
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-[13px] font-medium px-4 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-rose-500 transition-colors"
          >
            Cancel
          </button>
        )}
        {submitted && (
          <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={14} />
            Saved to this browser&apos;s local storage.
          </span>
        )}
      </div>
    </form>
  );
}
