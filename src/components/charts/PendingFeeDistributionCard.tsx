import { PieChart } from "lucide-react";
import ChartPlaceholder from "./ChartPlaceholder";

const legend = [
  { name: "Room Rent", color: "#E11D48" },
  { name: "Mess Dues", color: "#F5B544" },
  { name: "Security Deposit", color: "#4338CA" },
  { name: "Other Charges", color: "#94A3B8" },
];

export default function PendingFeeDistributionCard() {
  return (
    <div className="card p-4 flex flex-col">
      <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-2">
        Pending Fee Distribution
      </h3>
      <ChartPlaceholder icon={<PieChart size={28} />} label="Pending fee distribution chart will appear here" height={160} />
      <div className="space-y-1.5 mt-2">
        {legend.map((d) => (
          <div key={d.name} className="flex items-center justify-between text-[12px]">
            <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: d.color }} />
              {d.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
