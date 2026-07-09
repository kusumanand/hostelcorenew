import { type ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  iconColor: string;
  iconBg: string;
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "up" | "down" | "neutral";
  sub?: string;
}

export default function StatCard({
  icon,
  iconColor,
  iconBg,
  label,
  value,
  delta,
  deltaTone = "up",
  sub,
}: StatCardProps) {
  const toneClass =
    deltaTone === "up"
      ? "text-emerald-600 dark:text-emerald-400"
      : deltaTone === "down"
      ? "text-rose-600 dark:text-rose-400"
      : "text-slate-400";

  return (
    <div className="card p-4 flex flex-col gap-3 min-w-0">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        {icon}
      </div>
      <div>
        <p className="text-[12px] text-slate-500 dark:text-slate-400">{label}</p>
        <p className="text-xl font-semibold text-slate-800 dark:text-white mt-0.5">
          {value}
        </p>
      </div>
      {(delta || sub) && (
        <p className="text-[11px] flex items-center gap-1">
          {delta && <span className={`font-medium ${toneClass}`}>{delta}</span>}
          {sub && <span className="text-slate-400">{sub}</span>}
        </p>
      )}
    </div>
  );
}
