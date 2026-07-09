import { LineChart } from "lucide-react";
import ChartPlaceholder from "./ChartPlaceholder";

export default function FeeCollectionTrendCard() {
  return (
    <div className="card p-4">
      <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-2">
        Fee Collection Trend
      </h3>
      <ChartPlaceholder icon={<LineChart size={28} />} label="Fee collection trend chart will appear here" />
    </div>
  );
}
