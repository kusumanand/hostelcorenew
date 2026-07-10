"use client";

import { type ReactNode } from "react";
import {
  LogIn,
  UserCheck,
  IndianRupee,
  CheckCircle2,
  BedDouble,
  UtensilsCrossed,
  Radio,
} from "lucide-react";

interface Activity {
  icon: ReactNode;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    icon: <LogIn size={15} />,
    iconColor: "#4338CA",
    iconBg: "#EEF0FD",
    title: "Rahul Sharma checked in",
    description: "Room A101 | Bed 02 • New admission",
    time: "2 min ago",
  },
  {
    icon: <UserCheck size={15} />,
    iconColor: "#0D9488",
    iconBg: "#E7F8F5",
    title: "Visitor approved",
    description: "Vikram Singh approved to meet Rahul Sharma",
    time: "8 min ago",
  },
  {
    icon: <IndianRupee size={15} />,
    iconColor: "#B6852A",
    iconBg: "#FBF1DD",
    title: "Fee collection received",
    description: "₹12,500 collected from Aman Verma via UPI",
    time: "15 min ago",
  },
  {
    icon: <CheckCircle2 size={15} />,
    iconColor: "#059669",
    iconBg: "#E6F7EF",
    title: "Complaint closed",
    description: "Electricity issue in Room A101 marked resolved",
    time: "27 min ago",
  },
  {
    icon: <BedDouble size={15} />,
    iconColor: "#7C3AED",
    iconBg: "#F1E9FE",
    title: "Room changed",
    description: "Sahil Khan moved from C302 to C305",
    time: "42 min ago",
  },
  {
    icon: <UtensilsCrossed size={15} />,
    iconColor: "#E11D48",
    iconBg: "#FDE9ED",
    title: "Mess attendance updated",
    description: "Dinner count updated to 312 residents",
    time: "1 hr ago",
  },
];

export default function RecentActivityTimeline() {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100">
          Recent Activities
        </h3>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
          <Radio size={12} className="animate-pulse" />
          Live
        </span>
      </div>
      <div className="relative pl-4">
        <div className="absolute left-[23px] top-2 bottom-2 w-px bg-slate-200 dark:bg-navy-700/60" />
        <ul className="space-y-4">
          {activities.map((a, i) => (
            <li key={i} className="relative flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ring-4 ring-white dark:ring-navy-800"
                style={{ backgroundColor: a.iconBg, color: a.iconColor }}
              >
                {a.icon}
              </div>
              <div className="min-w-0 flex-1 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-slate-700 dark:text-slate-100 truncate">
                    {a.title}
                  </p>
                  <p className="text-[11px] text-slate-400 truncate">{a.description}</p>
                </div>
                <span className="text-[11px] text-slate-400 whitespace-nowrap shrink-0">{a.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
