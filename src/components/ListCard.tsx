import { type ReactNode } from "react";

export interface ListRow {
  avatarLabel: string;
  primary: string;
  secondary: string;
  right: string;
  rightSub?: string;
  tone?: "high" | "medium" | "low" | "neutral";
}

const toneClass: Record<string, string> = {
  high: "bg-rose-500/10 text-rose-500",
  medium: "bg-amber-500/10 text-amber-500",
  low: "bg-emerald-500/10 text-emerald-500",
  neutral: "text-slate-600 dark:text-slate-300",
};

export default function ListCard({
  title,
  icon,
  rows,
}: {
  title: string;
  icon: ReactNode;
  rows: ListRow[];
}) {
  return (
    <div className="card p-4 flex flex-col">
      <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-3">
        {title}
      </h3>
      <div className="space-y-3 flex-1">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center shrink-0 text-slate-400">
              {icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-medium text-slate-700 dark:text-slate-100 truncate">
                {row.primary}
              </p>
              <p className="text-[11px] text-slate-400 truncate">{row.secondary}</p>
            </div>
            <div className="text-right shrink-0">
              {row.tone && row.tone !== "neutral" ? (
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${toneClass[row.tone]}`}>
                  {row.right}
                </span>
              ) : (
                <p className="text-[13px] font-medium text-slate-700 dark:text-slate-100">
                  {row.right}
                </p>
              )}
              {row.rightSub && <p className="text-[11px] text-slate-400">{row.rightSub}</p>}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-3 text-[12px] font-medium text-gold-dark dark:text-gold hover:underline">
        View All
      </button>
    </div>
  );
}
