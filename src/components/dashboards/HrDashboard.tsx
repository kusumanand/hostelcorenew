import ListCard, { type ListRow } from "@/components/ListCard";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import MetricStrip, { type MetricItem } from "@/components/dashboard/MetricStrip";
import RoleQuickLinks, { type QuickLinkItem } from "@/components/dashboard/RoleQuickLinks";
import {
  UserCheck,
  UserX,
  Clock3,
  CalendarClock,
  Wallet,
  Users,
  FileClock,
  ClipboardCheck,
  Banknote,
  UserCog,
  BriefcaseBusiness,
  FileText,
} from "lucide-react";

const staffToday: MetricItem[] = [
  { icon: <UserCheck size={16} />, label: "Employees Present", value: "42", iconColor: "#059669", iconBg: "#E6F7EF", tone: "up" },
  { icon: <UserX size={16} />, label: "Absent", value: "3", iconColor: "#E11D48", iconBg: "#FDE9ED", tone: "down" },
  { icon: <Clock3 size={16} />, label: "Late", value: "2", iconColor: "#B6852A", iconBg: "#FBF1DD", tone: "warning" },
  { icon: <CalendarClock size={16} />, label: "Leaves", value: "4", iconColor: "#7C3AED", iconBg: "#F1E9FE", tone: "neutral" },
  { icon: <Wallet size={16} />, label: "Pending Payroll", value: "₹1,20,000", iconColor: "#4338CA", iconBg: "#EEF0FD", tone: "warning" },
];

const leaveRequests: ListRow[] = [
  { avatarLabel: "SK", primary: "Sahil Khan", secondary: "Sick leave · 2 days", right: "Pending", tone: "medium" },
  { avatarLabel: "MK", primary: "Manoj Kumar", secondary: "Casual leave · 1 day", right: "Pending", tone: "medium" },
  { avatarLabel: "RS", primary: "Ritu Sharma", secondary: "Earned leave · 3 days", right: "Approved", tone: "low" },
];

const openPositions: ListRow[] = [
  { avatarLabel: "WD", primary: "Warden", secondary: "Block C · Full-time", right: "3 applicants", tone: "neutral" },
  { avatarLabel: "CK", primary: "Cook", secondary: "Kitchen · Full-time", right: "5 applicants", tone: "neutral" },
];

const quickLinks: QuickLinkItem[] = [
  { label: "Employee Management", icon: <Users size={18} />, color: "#4338CA", bg: "#EEF0FD", href: "/hr-payroll/employee-management" },
  { label: "Attendance", icon: <ClipboardCheck size={18} />, color: "#0D9488", bg: "#E7F8F5", href: "/hr-payroll/attendance" },
  { label: "Leave Management", icon: <FileClock size={18} />, color: "#7C3AED", bg: "#F1E9FE", href: "/hr-payroll/leave-management" },
  { label: "Payroll", icon: <Banknote size={18} />, color: "#B6852A", bg: "#FBF1DD", href: "/hr-payroll/payroll" },
  { label: "Salary Slip", icon: <FileText size={18} />, color: "#059669", bg: "#E6F7EF", href: "/hr-payroll/salary-slip" },
  { label: "Recruitment", icon: <BriefcaseBusiness size={18} />, color: "#E11D48", bg: "#FDE9ED", href: "/hr-payroll/recruitment-management" },
  { label: "Role Management", icon: <UserCog size={18} />, color: "#0369A1", bg: "#E3F2FB", href: "/hr-payroll/role-management" },
];

export default function HrDashboard() {
  return (
    <main className="flex-1 overflow-y-auto p-5 space-y-5">
      <WelcomeHeader subtitle="HostelCore · HR workspace · Staff & Payroll" />

      <MetricStrip title="Staff Today" icon={<Users size={14} />} items={staffToday} />

      <RoleQuickLinks items={quickLinks} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ListCard title="Leave Requests" icon={<FileClock size={14} />} rows={leaveRequests} />
        <ListCard title="Open Positions" icon={<BriefcaseBusiness size={14} />} rows={openPositions} />
      </div>
    </main>
  );
}
