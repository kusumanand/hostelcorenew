"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ChevronRight,
  CircleDot,
  Info,
  ListChecks,
  Settings2,

} from "lucide-react";
import Topbar from "@/components/Topbar";
import FeatureRecordsTable from "@/components/FeatureRecordsTable";
import FeatureFormModal from "@/components/FeatureFormModal";
import FeatureDocumentModal from "@/components/FeatureDocumentModal";
import { type ModuleConfig, type ModuleFeature, slugify } from "@/lib/module-features";
import { getFormFields } from "@/lib/form-fields";
import { useFeatureRecords, type FeatureRecord } from "@/lib/use-feature-records";
import { type Values } from "@/components/SubFeatureForm";
import { approvalLabels, classifyFeature, findApprovalStatusField } from "@/lib/feature-behavior";

                                        

export default function FeatureDetailPage({

  config,
  feature,
  icon,
}: {
  config: ModuleConfig;
  feature: ModuleFeature;
  icon: ReactNode;
}) {
  const fields = getFormFields(config.slug, feature);
  const featureSlug = slugify(feature.name);
  const { records, addRecord, updateRecord, deleteRecord } = useFeatureRecords(
    config.slug,
    featureSlug,
    feature.name
  );

  const approvalField = useMemo(
    () => findApprovalStatusField(fields),
    [fields]
  );

  // A feature only really behaves as an "approval" workflow if it has an
  // actual approve/reject-style field — otherwise a name like "Performance
  // Review" or "Pickup Verification" would be misclassified.
  const archetype = useMemo(() => {
    const guess = classifyFeature(feature.name);
    if (guess === "approval" && !approvalField) return "standard";
    return guess;
  }, [feature.name, approvalField]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState<FeatureRecord | null>(null);
  const [viewingRecord, setViewingRecord] = useState<FeatureRecord | null>(null);

  const openAddModal = () => {
    setEditingRecord(null);
    setModalOpen(true);
  };

  const openEditModal = (record: FeatureRecord) => {
    setEditingRecord(record);
    setModalOpen(true);
  };

  const handleSubmit = (values: Values) => {
    if (editingRecord) {
      updateRecord(editingRecord.id, values);
    } else {
      addRecord(values);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this entry? This cannot be undone.")) {
      deleteRecord(id);
    }
  };

  const handleQuickStatus = (id: string, intent: "approve" | "reject") => {
    if (!approvalField) return;
    const { positive, negative } = approvalLabels(approvalField);
    updateRecord(id, { [approvalField.name]: intent === "approve" ? positive : negative });
  };

  // Only pass this feature's own field values into the form — strip id/createdAt/etc.
  const editValues: Values | undefined = editingRecord
    ? (Object.fromEntries(
        fields.map((f) => [
          f.name,
          editingRecord[f.name] ?? (f.type === "checkbox" ? false : ""),
        ])
      ) as Values)
    : undefined;

  return (
  <>
    <Topbar title={feature.name} />

    <main className="flex-1 overflow-y-auto p-5 space-y-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-slate-500 dark:text-slate-400">
        <Link
          href="/dashboard"
          className="hover:text-gold-dark dark:hover:text-gold transition-colors"
        >
          Dashboard
        </Link>

        <ChevronRight size={12} className="shrink-0" />

        <Link
          href={`/${config.slug}`}
          className="hover:text-gold-dark dark:hover:text-gold transition-colors"
        >
          {config.title}
        </Link>

        <ChevronRight size={12} className="shrink-0" />

        <span className="text-slate-700 dark:text-slate-200 font-medium truncate">
          {feature.name}
        </span>
      </nav>

      {/* Header */}
      <div className="card p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center shrink-0 text-navy-950">
          {icon}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
              {feature.name}
            </h2>

            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <CircleDot size={10} />
              Active
            </span>

            {archetype === "document" && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                Issues a document
              </span>
            )}

            {archetype === "approval" && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                Approval workflow
              </span>
            )}
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {feature.description}
          </p>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2">
            Part of{" "}
            <Link
              href={`/${config.slug}`}
              className="text-gold-dark dark:text-gold hover:underline"
            >
              {config.title}
            </Link>
          </p>
        </div>
      </div>

      <FeatureRecordsTable
        featureName={feature.name}
        fields={fields}
        records={records}
        archetype={archetype}
        onAdd={openAddModal}
        onEdit={openEditModal}
        onDelete={handleDelete}
        onView={archetype === "document" ? setViewingRecord : undefined}
        onQuickStatus={
          archetype === "approval" ? handleQuickStatus : undefined
        }
      />
    </main>

    {modalOpen && (
      <FeatureFormModal
        featureName={feature.name}
        fields={fields}
        initialValues={editValues}
        onSubmit={handleSubmit}
        onClose={() => setModalOpen(false)}
      />
    )}

    {viewingRecord && (
      <FeatureDocumentModal
        hostelName="HostelCore"
        moduleTitle={config.title}
        featureName={feature.name}
        fields={fields}
        record={viewingRecord}
        onClose={() => setViewingRecord(null)}
      />
    )}
  </>
);
}