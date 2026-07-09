import { BarChart3 } from "lucide-react";
import ChartPlaceholder from "./ChartPlaceholder";

export default function FloorOccupancyCard() {
  return (
    <div className="card p-4">
      <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-2">
        Floor-wise Occupancy
      </h3>
      <ChartPlaceholder icon={<BarChart3 size={28} />} label="Floor-wise occupancy chart will appear here" />
    </div>
  );
}
