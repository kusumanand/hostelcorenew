"use client";

import { useRouter } from "next/navigation";
import {
  UserPlus,
  BedDouble,
  IndianRupee,
  MessageSquareWarning,
  DoorOpen,
} from "lucide-react";

const actions = [
  {
    label: "Add Student",
    icon: UserPlus,
    path: "/lib/form-fields/admissions/Online Admissions",
  },
  {
    label: "Allocate Bed",
    icon: BedDouble,
    path: "/rooms-beds/Bed Allocation",
  },
  {
    label: "Collect Fee",
    icon: IndianRupee,
    path: "/fees-accounting/Fee Collection",
  },
  {
    label: "Register Complaint",
    icon: MessageSquareWarning,
    path: "/complaints/Complaint Ticket",
  },
  {
    label: "Add Visitor",
    icon: DoorOpen,
    path: "/visitors/Visitor Registration",
  },
];

export default function QuickActionsCard() {
  const router = useRouter();

  return (
    <div className="card p-4 flex flex-col">
      <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-3">
        Quick Actions
      </h3>

      <div className="space-y-2 mb-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
             key={action.label}
               onClick={() => {
               console.log("Clicked:", action.label);
            router.push(action.path);
        }}
       className="w-full ...">
      <Icon size={16} />
      <span>{action.label}</span>
      </button>
          );
        })}
      </div>

      <div className="mt-auto pt-3 border-t border-slate-100 dark:border-navy-700/60">
        <p className="text-[12px] text-slate-400 mb-1">
          Today&apos;s Fee Collection
        </p>

        <p className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
          ₹52,000
        </p>

        <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            Cash ₹10,000
          </span>

          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
            UPI ₹35,000
          </span>

          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
            Online ₹7,000
          </span>
        </div>
      </div>
    </div>
  );
}