import { type ReactNode } from "react";

export default function ChartPlaceholder({
  icon,
  label,
  height = 220,
}: {
  icon: ReactNode;
  label: string;
  height?: number;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-200 dark:border-navy-700/60 bg-slate-50/60 dark:bg-navy-700/20 text-slate-300 dark:text-slate-600"
      style={{ height }}
    >
      {icon}
      <p className="text-[12px] text-slate-400 dark:text-slate-500">{label}</p>
    </div>
  );
}
