"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Database,
  Download,
  FileText,
  ListChecks,
  Pencil,
  Plus,
  Search,
  Trash2,
  XCircle,
 
} from "lucide-react";
import { type FormField } from "@/lib/form-fields";
import { type FeatureRecord } from "@/lib/use-feature-records";
import { type Values } from "@/components/SubFeatureForm";
import {
  type FeatureArchetype,
  findApprovalStatusField,
  isStatusLikeField,
} from "@/lib/feature-behavior";

const STATUS_COLORS: Record<string, string> = {
  active: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  present: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  approved: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  completed: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  paid: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  pending: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
  "half day": "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
  "on leave": "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
  absent: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
  rejected: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
  inactive: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
  overdue: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
};

function statusClass(value: string) {
  return (
    STATUS_COLORS[value.toLowerCase()] ??
    "bg-slate-100 text-slate-600 dark:bg-navy-700 dark:text-slate-300"
  );
}

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

function toCsvValue(v: unknown) {
  const s = String(v ?? "");
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export default function FeatureRecordsTable({
  featureName,
  fields,
  records,
  archetype,
  onAdd,
  onEdit,
  onDelete,
  onView,
  onQuickStatus,
  personal = false,
}: {
  featureName: string;
  fields: FormField[];
  records: FeatureRecord[];
  archetype: FeatureArchetype;
  onAdd: () => void;
  onEdit: (record: FeatureRecord) => void;
  onDelete: (id: string) => void;
 
  onView?: (record: FeatureRecord) => void;
 
  onQuickStatus?: (id: string, intent: "approve" | "reject") => void;

  personal?: boolean;
}) {
  const [query, setQuery] = useState("");

  const approvalField = useMemo(
    () => (archetype === "approval" ? findApprovalStatusField(fields) : undefined),
    [archetype, fields]
  );

 
  const columns = useMemo(
    () =>
      fields
        .filter((f) => f.type !== "textarea" && f.type !== "file")
        .slice(0, 4),
    [fields]
  );

  const numericFields = useMemo(
    () => fields.filter((f) => f.type === "number"),
    [fields]
  );
  const statusField = useMemo(() => fields.find(isStatusLikeField), [fields]);

  const filtered = useMemo(() => {
    if (!query.trim()) return records;
    const q = query.toLowerCase();
    return records.filter((r) =>
      Object.values(r).some((v) => String(v ?? "").toLowerCase().includes(q))
    );
  }, [records, query]);

  
  const totals = useMemo(() => {
    return numericFields.map((f) => {
      const sum = records.reduce((acc, r) => {
        const n = parseFloat(String(r[f.name] ?? ""));
        return acc + (Number.isFinite(n) ? n : 0);
      }, 0);
      return { field: f, sum };
    });
  }, [records, numericFields]);

  const statusBreakdown = useMemo(() => {
    if (!statusField) return [];
    const counts = new Map<string, number>();
    for (const r of records) {
      const v = String(r[statusField.name] ?? "").trim();
      if (!v) continue;
      counts.set(v, (counts.get(v) ?? 0) + 1);
    }
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, [records, statusField]);

  const handleExportCsv = () => {
    const header = ["Record ID", "Created", ...fields.map((f) => f.label)];
    const rows = records.map((r) => [
      r.recordCode,
      formatDate(r.createdAt),
      ...fields.map((f) => String(r[f.name] ?? "")),
    ]);
    const csv = [header, ...rows]
      .map((row) => row.map(toCsvValue).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${featureName.toLowerCase().replace(/\s+/g, "-")}-records.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
     
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className="card p-4">
          <p className="text-[11px] text-slate-400"> {personal ? `My ${featureName}` : "Total Entries"}</p>
          <p className="text-xl font-semibold text-slate-800 dark:text-white mt-1">
            {records.length}
          </p>
        </div>
        {totals.map(({ field, sum }) => (
          <div key={field.name} className="card p-4">
            <p className="text-[11px] text-slate-400 truncate">{field.label} Total</p>
            <p className="text-xl font-semibold text-slate-800 dark:text-white mt-1">
              {sum.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        ))}
        {statusBreakdown.slice(0, 3).map(([label, count]) => (
          <div key={label} className="card p-4">
            <p className="text-[11px] text-slate-400 truncate">{label}</p>
            <p className="text-xl font-semibold text-slate-800 dark:text-white mt-1">
              {count}
            </p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="card p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Database size={15} className="text-gold-dark dark:text-gold shrink-0" />
          {personal ? (
            <ListChecks size={15}
            className="text-gold-dark dark:text-gold shrink-0"/>

          ) : (
            <Database size={15}
            className="text-gold-dark dark:text-gold shrink-0"/>
          )}
          <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 truncate">
          {personal ? `My ${featureName}` : `${featureName} Records`}
          </h3>
          <span className="text-[11px] text-slate-400 shrink-0">
            {filtered.length} of {records.length}
          </span>
        </div>
        <div className="sm:ml-auto flex items-center gap-2 flex-wrap">
          <div className="relative">
            <Search
              size={13}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search records..."
              className="h-9 pl-8 pr-3 rounded-lg border border-slate-200 dark:border-navy-600/60 bg-white dark:bg-navy-900 text-[12px] text-slate-700 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 w-40 sm:w-56"
            />
          </div>
          {personal && (
          <button
            onClick={handleExportCsv}
            disabled={records.length === 0}
            className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3.5 py-2 rounded-lg border border-slate-200 dark:border-navy-600/60 text-slate-600 dark:text-slate-300 hover:border-gold/50 hover:text-gold-dark dark:hover:text-gold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Download size={13} />
            Export CSV
          </button>
          )}
          <button
            onClick={onAdd}
            className="inline-flex items-center gap-1.5 gold-gradient text-navy-950 text-[12px] font-semibold px-4 py-2 rounded-lg shadow-sm hover:brightness-105 transition"
          >
           <Plus size={14} />
            {personal ? `New ${featureName}` : `Add ${featureName}`}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-[13px] text-slate-500 dark:text-slate-400">
              {records.length === 0
                ? personal
                ? `You haven't added any ${featureName.toLowerCase()}yet.`:
                `No ${featureName.toLowerCase()} entries yet.`
                : "No records match your search."}
            </p>
            {records.length === 0 && (
              <button
                onClick={onAdd}
                className="mt-4 inline-flex items-center gap-1.5 gold-gradient text-navy-950 text-[12px] font-semibold px-4 py-2 rounded-lg shadow-sm hover:brightness-105 transition"
              >
                <Plus size={14} />
          {personal ? `Fill The Form ${featureName.toLowerCase()}` : "Add the Entry"}
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-slate-100 dark:border-navy-700 text-left">
                  <th className="px-4 py-2.5 font-medium text-slate-400">ID</th>
                  <th className="px-4 py-2.5 font-medium text-slate-400">Created</th>
                  {columns.map((f) => (
                    <th key={f.name} className="px-4 py-2.5 font-medium text-slate-400">
                      {f.label}
                    </th>
                  ))}
                  <th className="px-4 py-2.5 font-medium text-slate-400 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => {
                  const currentApprovalStatus = approvalField
                    ? String(r[approvalField.name] ?? "")
                    : "";
                  const showApprovalActions =
                    approvalField &&
                    onQuickStatus &&
                    !/^approved$|^rejected$/i.test(currentApprovalStatus);

                  return (
                    <tr
                      key={r.id}
                      className="border-b border-slate-50 dark:border-navy-800 last:border-0 hover:bg-slate-50/60 dark:hover:bg-navy-800/40 transition-colors"
                    >
                      <td className="px-4 py-2.5 font-mono text-[11px] text-gold-dark dark:text-gold whitespace-nowrap">
                        {r.recordCode}
                      </td>
                      <td className="px-4 py-2.5 text-slate-400 whitespace-nowrap">
                        {formatDate(r.createdAt)}
                      </td>
                      {columns.map((f) => {
                        const raw = r[f.name];
                        if (f.type === "checkbox") {
                          return (
                            <td key={f.name} className="px-4 py-2.5">
                              {raw ? "Yes" : "No"}
                            </td>
                          );
                        }
                        if (isStatusLikeField(f) && raw) {
                          return (
                            <td key={f.name} className="px-4 py-2.5">
                              <span
                                className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${statusClass(
                                  String(raw)
                                )}`}
                              >
                                {String(raw)}
                              </span>
                            </td>
                          );
                        }
                        return (
                          <td
                            key={f.name}
                            className="px-4 py-2.5 text-slate-700 dark:text-slate-200 max-w-[220px] truncate"
                          >
                            {String(raw ?? "—")}
                          </td>
                        );
                      })}
                      <td className="px-4 py-2.5">
                        <div className="flex items-center justify-end gap-1.5">
                          {showApprovalActions && (
                            <>
                              <button
                                onClick={() =>
                                  onQuickStatus!(r.id, "approve")
                                }
                                aria-label="Approve"
                                title="Approve"
                                className="p-1.5 rounded-md text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors"
                              >
                                <CheckCircle2 size={13} />
                              </button>
                              <button
                                onClick={() =>
                                  onQuickStatus!(r.id, "reject")
                                }
                                aria-label="Reject"
                                title="Reject"
                                className="p-1.5 rounded-md text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors"
                              >
                                <XCircle size={13} />
                              </button>
                            </>
                          )}
                          {archetype === "document" && onView && (
                            <button
                              onClick={() => onView(r)}
                              aria-label="View document"
                              title="View / Print"
                              className="p-1.5 rounded-md text-slate-400 hover:text-gold-dark dark:hover:text-gold hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors"
                            >
                              <FileText size={13} />
                            </button>
                          )}
                          <button
                            onClick={() => onEdit(r)}
                            aria-label="Edit"
                            title="Edit"
                            className="p-1.5 rounded-md text-slate-400 hover:text-gold-dark dark:hover:text-gold hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors"
                          >
                            <Pencil size={13} />
                          </button>
                          <button
                            onClick={() => onDelete(r.id)}
                            aria-label="Delete"
                            title="Delete"
                            className="p-1.5 rounded-md text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export type { Values };
