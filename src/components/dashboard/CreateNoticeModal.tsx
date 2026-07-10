"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import SubfeatureForm, { type Values } from "@/components/SubFeatureForm";
import { type FormField } from "@/lib/form-fields";
import { useFeatureRecords } from "@/lib/use-feature-records";

const noticeFields: FormField[] = [
  { name: "title", label: "Notice Title", type: "text", placeholder: "e.g. Hostel Closed for Maintenance", span: 2 },
  {
    name: "category",
    label: "Category",
    type: "select",
    options: ["General", "Urgent", "Event", "Maintenance", "Holiday", "Fee Reminder"],
  },
  {
    name: "priority",
    label: "Priority",
    type: "select",
    options: ["Low", "Medium", "High"],
  },
  {
    name: "audience",
    label: "Audience",
    type: "select",
    options: ["All Residents", "Specific Floor", "Specific Block", "Staff Only", "Parents"],
  },
  {
    name: "sendVia",
    label: "Send Via",
    type: "select",
    options: ["In-App", "Email", "SMS", "WhatsApp", "All Channels"],
  },
  { name: "publishDate", label: "Publish Date", type: "date" },
  { name: "expiryDate", label: "Expiry Date", type: "date", required: false },
  { name: "message", label: "Message", type: "textarea", placeholder: "Write the notice content here...", span: 2 },
  { name: "attachment", label: "Attachment", type: "file", required: false },
];

export default function CreateNoticeModal({ onClose }: { onClose: () => void }) {
  const { addRecord } = useFeatureRecords("dashboard", "create-notice", "Notice");

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

  const handleSubmit = (values: Values) => {
    addRecord(values);
  };

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
          Create Notice
        </h3>
        <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-1 mb-5">
          Draft and publish a notice to residents, parents or staff.
        </p>
        <SubfeatureForm
          featureName="Notice"
          fields={noticeFields}
          submitLabel="Publish Notice"
          onCancel={onClose}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
