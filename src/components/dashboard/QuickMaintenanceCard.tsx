import { Wrench, UserCog, CheckCheck, ListChecks } from "lucide-react";

const actions = [
  { label: "Raise Maintenance Ticket", icon: Wrench },
  { label: "Assign Technician", icon: UserCog },
  { label: "Mark Ticket Resolved", icon: CheckCheck },
  { label: "View All Tickets", icon: ListChecks },
];

export default function QuickMaintenanceCard() {
  return (
    <div className="card p-4 flex flex-col">
      <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-3">
        Quick Maintenance
      </h3>
      <div className="space-y-2">
        {actions.map((a) => {
          const Icon = a.icon;
          return (
            <button
              key={a.label}
              className="w-full flex items-center gap-3 text-[13px] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-navy-700/40 hover:bg-gold/10 hover:text-gold-dark dark:hover:text-gold rounded-lg px-3 py-2.5 transition-colors text-left"
            >
              <Icon size={16} />
              {a.label}
            </button>
          );
        })}
      </div>
      <div className="mt-auto pt-3 border-t border-slate-100 dark:border-navy-700/60 flex items-center justify-between text-[11px] text-slate-400">
        <span>Open Tickets</span>
        <span className="font-semibold text-slate-600 dark:text-slate-200">6</span>
      </div>
    </div>
  );
}
