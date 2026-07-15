import StatCard from "@/components/StatCard";
import ListCard, { type ListRow } from "@/components/ListCard";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import RevenueOverviewCard from "@/components/charts/RevenueOverviewCard";
import FeeCollectionTrendCard from "@/components/charts/FeeCollectionTrendCard";
import PendingFeeDistributionCard from "@/components/charts/PendingFeeDistributionCard";
import RoleQuickLinks, { type QuickLinkItem } from "@/components/dashboard/RoleQuickLinks";
import {
  IndianRupee,
  ReceiptText,
  FileWarning,
  TrendingUp,
  Link2,
  FileSpreadsheet,
  RefreshCcw,
  GraduationCap,
  Wallet,
  Trophy,
} from "lucide-react";

const kpis = [
  { icon: <IndianRupee size={18} />, iconColor: "#B6852A", iconBg: "#FBF1DD", label: "Today's Collection", value: "₹52,000", delta: "+9%", sub: "vs Yesterday" },
  { icon: <ReceiptText size={18} />, iconColor: "#E11D48", iconBg: "#FDE9ED", label: "Pending Fees", value: "₹2,10,000", delta: "+8%", deltaTone: "down" as const, sub: "This Month" },
  { icon: <FileWarning size={18} />, iconColor: "#7C3AED", iconBg: "#F1E9FE", label: "Overdue Accounts", value: "18", delta: "Needs follow-up", deltaTone: "neutral" as const },
  { icon: <TrendingUp size={18} />, iconColor: "#059669", iconBg: "#E6F7EF", label: "Collection Rate", value: "91%", delta: "+2%", sub: "This Month" },
];

const topCollectors: ListRow[] = [
  { avatarLabel: "RS", primary: "Ritu Sharma", secondary: "Accounts Team", right: "₹4,85,000", tone: "neutral" },
  { avatarLabel: "MK", primary: "Manoj Kumar", secondary: "Accounts Team", right: "₹3,92,000", tone: "neutral" },
  { avatarLabel: "PS", primary: "Priya Singh", secondary: "Accounts Team", right: "₹3,40,000", tone: "neutral" },
];

const overdueAccounts: ListRow[] = [
  { avatarLabel: "AV", primary: "Aman Verma", secondary: "Room B303", right: "₹15,000", tone: "high" },
  { avatarLabel: "KP", primary: "Karan Patel", secondary: "Room C302", right: "₹9,500", tone: "medium" },
  { avatarLabel: "SK", primary: "Sahil Khan", secondary: "Room C305", right: "₹6,200", tone: "medium" },
];

const quickLinks: QuickLinkItem[] = [
  { label: "Fee Collection", icon: <IndianRupee size={18} />, color: "#B6852A", bg: "#FBF1DD", href: "/fees-accounting/fee-collection" },
  { label: "Payment Link", icon: <Link2 size={18} />, color: "#4338CA", bg: "#EEF0FD", href: "/fees-accounting/payment-link" },
  { label: "GST Billing", icon: <FileSpreadsheet size={18} />, color: "#0D9488", bg: "#E7F8F5", href: "/fees-accounting/gst-billing" },
  { label: "Refund Management", icon: <RefreshCcw size={18} />, color: "#7C3AED", bg: "#F1E9FE", href: "/fees-accounting/refund-management" },
  { label: "Scholarship Management", icon: <GraduationCap size={18} />, color: "#E11D48", bg: "#FDE9ED", href: "/fees-accounting/scholarship-management" },
  { label: "Revenue Analytics", icon: <Trophy size={18} />, color: "#059669", bg: "#E6F7EF", href: "/fees-accounting/revenue-analytics" },
  { label: "Security Deposit", icon: <Wallet size={18} />, color: "#0369A1", bg: "#E3F2FB", href: "/fees-accounting/security-deposit" },
];

export default function AccountantDashboard() {
  return (
    <main className="flex-1 overflow-y-auto p-5 space-y-5">
      <WelcomeHeader subtitle="HostelCore · Accountant workspace · Fees & Accounting" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <StatCard key={k.label} {...k} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <RevenueOverviewCard />
        <FeeCollectionTrendCard />
        <PendingFeeDistributionCard />
      </div>

      <RoleQuickLinks items={quickLinks} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ListCard title="Top Collectors" icon={<Trophy size={14} />} rows={topCollectors} />
        <ListCard title="Overdue Accounts" icon={<FileWarning size={14} />} rows={overdueAccounts} />
      </div>
    </main>
  );
}
