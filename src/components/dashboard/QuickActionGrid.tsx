"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UserPlus,
  BedDouble,
  IndianRupee,
  DoorOpen,
  MessageSquareWarning,
  ReceiptText,
  Users,
  Megaphone,
} from "lucide-react";
import CreateNoticeModal from "@/components/dashboard/CreateNoticeModal";

const actions = [
  { label: "Add Resident", icon: UserPlus, color: "#4338CA", bg: "#EEF0FD", href: "/admissions/online-admission" },
  { label: "Allocate Room", icon: BedDouble, color: "#0D9488", bg: "#E7F8F5", href: "/rooms-beds/bed-allocation" },
  { label: "Collect Fees", icon: IndianRupee, color: "#B6852A", bg: "#FBF1DD", href: "/fees-accounting/fee-collection" },
  { label: "Register Visitor", icon: DoorOpen, color: "#7C3AED", bg: "#F1E9FE", href: "/visitors/visitor-registration" },
  { label: "Raise Complaint", icon: MessageSquareWarning, color: "#E11D48", bg: "#FDE9ED", href: "/complaints/complaint-ticket" },
  { label: "Generate Receipt", icon: ReceiptText, color: "#059669", bg: "#E6F7EF", href: "/fees-accounting/gst-billing" },
  { label: "Add Employee", icon: Users, color: "#0369A1", bg: "#E3F2FB", href: "/hr-payroll/employee-management" },
  { label: "Create Notice", icon: Megaphone, color: "#C2410C", bg: "#FDEDE1" },
];

export default function QuickActionsGrid() {
  const [noticeOpen, setNoticeOpen] = useState(false);

  return (
    <div id="quick-actions" className="card p-4 scroll-mt-20">
      <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-3">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {actions.map((a) => {
          const Icon = a.icon;
          const content = (
            <>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: a.bg, color: a.color }}
              >
                <Icon size={18} />
              </div>
              <span className="text-[11.5px] font-medium text-slate-600 dark:text-slate-300 leading-tight">
                {a.label}
              </span>
            </>
          );

          const className =
            "flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-100 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-700/40 hover:bg-gold/10 hover:border-gold/40 transition-colors px-3 py-4 text-center";

          if (a.href) {
            return (
              <Link key={a.label} href={a.href} className={className}>
                {content}
              </Link>
            );
          }

          return (
            <button
              key={a.label}
              type="button"
              onClick={() => setNoticeOpen(true)}
              className={className}
            >
              {content}
            </button>
          );
        })}
      </div>

      {noticeOpen && <CreateNoticeModal onClose={() => setNoticeOpen(false)} />}
    </div>
  );
}
