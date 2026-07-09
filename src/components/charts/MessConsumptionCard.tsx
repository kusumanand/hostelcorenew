import { BarChart3 } from "lucide-react";
import ChartPlaceholder from "./ChartPlaceholder";

export default function MessConsumptionCard() {
  return (
    <div className="card p-4">
      <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-2">
        Mess Consumption
      </h3>
      <ChartPlaceholder icon={<BarChart3 size={28} />} label="Mess consumption chart will appear here" />
    </div>
  );
}
