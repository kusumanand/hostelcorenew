import { BarChart3 } from "lucide-react";
import ChartPlaceholder from "./ChartPlaceholder";

export default function RevenueOverviewCard() {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100">
          Revenue vs Expense (Monthly)
        </h3>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-indigo-600 inline-block" /> Income
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Expense
          </span>
        </div>
      </div>
      <ChartPlaceholder icon={<BarChart3 size={28} />} label="Revenue vs Expense chart will appear here" />
    </div>
  );
}
