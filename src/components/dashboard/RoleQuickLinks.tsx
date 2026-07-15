import Link from "next/link";
import { type ReactNode } from "react";

export interface QuickLinkItem {
  label: string;
  icon: ReactNode;
  color: string;
  bg: string;
  href: string;
}

export default function RoleQuickLinks({
  title = "Quick Actions",
  items,
}: {
  title?: string;
  items: QuickLinkItem[];
}) {
  return (
    <div className="card p-4">
      <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-3">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {items.map((a) => (
          <Link
            key={a.label}
            href={a.href}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-100 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-700/40 hover:bg-gold/10 hover:border-gold/40 transition-colors px-3 py-4 text-center"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: a.bg, color: a.color }}
            >
              {a.icon}
            </div>
            <span className="text-[11.5px] font-medium text-slate-600 dark:text-slate-300 leading-tight">
              {a.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
