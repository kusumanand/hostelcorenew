import StatCard from "@/components/StatCard";
import ListCard, { type ListRow } from "@/components/ListCard";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import RoleQuickLinks, { type QuickLinkItem } from "@/components/dashboard/RoleQuickLinks";
import {
  UserCircle2,
  CalendarCheck2,
  IndianRupee,
  FileCheck,
  ClipboardCheck,
  Wallet,
  FileText,
  BellRing,
} from "lucide-react";

const kpis = [
  { icon: <UserCircle2 size={18} />, iconColor: "#4338CA", iconBg: "#EEF0FD", label: "Ward's Attendance", value: "96%", delta: "This Month", deltaTone: "neutral" as const },
  { icon: <IndianRupee size={18} />, iconColor: "#E11D48", iconBg: "#FDE9ED", label: "Fee Due", value: "₹15,000", delta: "Due 20 Jul", deltaTone: "down" as const },
  { icon: <CalendarCheck2 size={18} />, iconColor: "#0D9488", iconBg: "#E7F8F5", label: "Approvals Pending", value: "2", delta: "Outing & Guest", deltaTone: "neutral" as const },
  { icon: <FileCheck size={18} />, iconColor: "#059669", iconBg: "#E6F7EF", label: "Last Report", value: "Jun 2026", delta: "Sent", deltaTone: "neutral" as const },
];

const approvalRequests: ListRow[] = [
  { avatarLabel: "OU", primary: "Weekend Outing Request", secondary: "Sat 18 Jul, 4:00 PM – 9:00 PM", right: "Pending", tone: "medium" },
  { avatarLabel: "GV", primary: "Guest Visit Approval", secondary: "Uncle visiting on 19 Jul", right: "Pending", tone: "medium" },
];

const recentUpdates: ListRow[] = [
  { avatarLabel: "AT", primary: "Attendance recorded", secondary: "Present today · Night roll call", right: "Today", tone: "low" },
  { avatarLabel: "FE", primary: "Fee reminder sent", secondary: "₹15,000 due on 20 Jul", right: "Today", tone: "medium" },
  { avatarLabel: "CM", primary: "Complaint resolved", secondary: "Room maintenance closed", right: "Yesterday", tone: "low" },
];

const quickLinks: QuickLinkItem[] = [
  { label: "Attendance Tracking", icon: <ClipboardCheck size={18} />, color: "#4338CA", bg: "#EEF0FD", href: "/parent-engagement/live-attendance-tracking" },
  { label: "Fee Status", icon: <Wallet size={18} />, color: "#B6852A", bg: "#FBF1DD", href: "/parent-engagement/live-fee-status" },
  { label: "Pay Fees", icon: <IndianRupee size={18} />, color: "#059669", bg: "#E6F7EF", href: "/fees-accounting/fee-collection" },
  { label: "Approval Requests", icon: <BellRing size={18} />, color: "#E11D48", bg: "#FDE9ED", href: "/parent-engagement/approval-requests" },
  { label: "Monthly Reports", icon: <FileText size={18} />, color: "#7C3AED", bg: "#F1E9FE", href: "/parent-engagement/monthly-reports" },
];

export default function ParentDashboard() {
  return (
    <main className="flex-1 overflow-y-auto p-5 space-y-5">
      <WelcomeHeader subtitle="HostelCore · Parent workspace · Stay updated on your ward" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <StatCard key={k.label} {...k} />
        ))}
      </div>

      <RoleQuickLinks items={quickLinks} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ListCard title="Approval Requests" icon={<CalendarCheck2 size={14} />} rows={approvalRequests} />
        <ListCard title="Recent Updates" icon={<BellRing size={14} />} rows={recentUpdates} />
      </div>
    </main>
  );
}
