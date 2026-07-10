import { LineChart } from "lucide-react";
import ChartPlaceholder from "./ChartPlaceholder";

const trends = [
  "Admission Trend",
  "Complaint Trend",
  "Visitor Trend",
  "Revenue Trend",
  "Occupancy Trend",
  "Mess Trend",
];

export default function TrendGraphsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {trends.map((title) => (
        <div key={title} className="card p-4">
          <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-2">{title}</h3>
          <ChartPlaceholder icon={<LineChart size={22} />} label="Graph will appear here" height={110} />
        </div>
      ))}
    </div>
  );
}
