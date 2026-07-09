import { type ReactNode } from "react";
import { IndianRupee, Wrench, IdCard, MessageSquareWarning, DoorOpen, Pill } from "lucide-react";

interface AlertItem {
  icon: ReactNode;
  color: string;
  bg: string;
  title: string;
  description: string;
  count: string;
}

const alerts: AlertItem[] = [
  {
    icon: <IndianRupee size={16} />,
    color: "#E11D48",
    bg: "#FDE9ED",
    title: "Fee Due",
    description: "Residents with overdue fee payments",
    count: "18",
  },
  {
    icon: <Wrench size={16} />,
    color: "#B6852A",
    bg: "#FBF1DD",
    title: "Room Maintenance",
    description: "Rooms flagged for repair or upkeep",
    count: "6",
  },
  {
    icon: <IdCard size={16} />,
    color: "#7C3AED",
    bg: "#F1E9FE",
    title: "Expired ID Card",
    description: "Resident ID cards past validity",
    count: "4",
  },
  {
    icon: <MessageSquareWarning size={16} />,
    color: "#4338CA",
    bg: "#EEF0FD",
    title: "Pending Complaints",
    description: "Complaints awaiting resolution",
    count: "9",
  },
  {
    icon: <DoorOpen size={16} />,
    color: "#0D9488",
    bg: "#E7F8F5",
    title: "Pending Visitor Approval",
    description: "Visitor requests awaiting approval",
    count: "3",
  },
  {
    icon: <Pill size={16} />,
    color: "#059669",
    bg: "#E6F7EF",
    title: "Medicine Alerts",
    description: "Residents due for medication / refill",
    count: "5",
  },
];

export default function AlertsPanel() {
  return (
    <div className="card p-4">
      <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-3">
        Alerts &amp; Notifications
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {alerts.map((a) => (
          <div
            key={a.title}
            className="flex items-center gap-3 rounded-lg border border-slate-100 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-700/40 p-3"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: a.bg, color: a.color }}
            >
              {a.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-medium text-slate-700 dark:text-slate-100 truncate">
                {a.title}
              </p>
              <p className="text-[11px] text-slate-400 truncate">{a.description}</p>
            </div>
            <span
              className="text-[13px] font-semibold px-2 py-0.5 rounded-full shrink-0"
              style={{ backgroundColor: a.bg, color: a.color }}
            >
              {a.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
