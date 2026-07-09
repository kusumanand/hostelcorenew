import { type ReactNode } from "react";

export interface MetricItem {
  icon: ReactNode;
  label: string;
  value: string;
  iconColor: string;
  iconBg: string;
  tone?: "up" | "down" | "warning" | "neutral";
}

const toneClass: Record<string, string> = {
  up: "text-emerald-600 dark:text-emerald-400",
  down: "text-rose-600 dark:text-rose-400",
  warning: "text-amber-600 dark:text-amber-400",
  neutral: "text-slate-700 dark:text-slate-100",
};

export default function MetricStrip({
  title,
  icon,
  items,
  linkLabel,
  href,
}: {
  title: string;
  icon?: ReactNode;
  items: MetricItem[];
  linkLabel?: string;
  href?: string;
}) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 flex items-center gap-2">
          {icon}
          {title}
        </h3>
        {linkLabel && href && (
          <a href={href} className="text-[12px] font-medium text-gold-dark dark:text-gold hover:underline">
            {linkLabel}
          </a>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-2 rounded-lg bg-slate-50 dark:bg-navy-700/40 p-3"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
              {item.icon}
            </div>
            <p className={`text-lg font-semibold ${toneClass[item.tone ?? "neutral"]}`}>{item.value}</p>
            <p className="text-[11px] leading-tight text-slate-500 dark:text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
