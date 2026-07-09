import StatCard from "@/components/StatCard";
import ListCard, { type ListRow } from "@/components/ListCard";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import MetricStrip, { type MetricItem } from "@/components/dashboard/MetricStrip";
import RecentActivityTimeline from "@/components/dashboard/RecentActivityTimeline";
import AlertsPanel from "@/components/dashboard/AlertsPanel";
import MiniCalendar from "@/components/dashboard/MiniCalendar";
import QuickMaintenanceCard from "@/components/dashboard/QuickMaintenanceCard";
import QuickActionsGrid from "@/components/dashboard/QuickActionGrid";
import OccupancyTrendCard from "@/components/charts/OccupancyTrendCard";
import RevenueOverviewCard from "@/components/charts/RevenueOverviewCard";
import FeeCollectionTrendCard from "@/components/charts/FeeCollectionTrendCard";
import PendingFeeDistributionCard from "@/components/charts/PendingFeeDistributionCard";
import FloorOccupancyCard from "@/components/charts/FloorOccupancyCard";
import MessConsumptionCard from "@/components/charts/MessConsumptionCard";
import TrendGraphsGrid from "@/components/charts/TrendGraphsGrid";
import {
  Users,
  BedDouble,
  DoorOpen,
  IndianRupee,
  ReceiptText,
  UtensilsCrossed,
  AlertTriangle,
  UserCircle2,
  ClipboardCheck,
  CalendarClock,
  Cake,
  UserPlus2,
  Wrench,
  Wallet,
  Moon,
  LogIn,
  ShieldAlert,
  MapPin,
  Timer,
  Coffee,
  Soup,
  IceCreamCone,
  Banknote,
  PackageX,
  UserCheck,
  UserX,
  Clock3,
  FileClock,
  Trophy,
  Building2,
  MessageSquareWarning,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

/* ---------- Row 6: Today's Summary ---------- */
const todaySummary: MetricItem[] = [
  { icon: <UserCircle2 size={16} />, label: "Today's Admissions", value: "6", iconColor: "#4338CA", iconBg: "#EEF0FD" },
  { icon: <DoorOpen size={16} />, label: "Vacating Today", value: "3", iconColor: "#B6852A", iconBg: "#FBF1DD" },
  { icon: <UserCheck size={16} />, label: "Today's Visitors", value: "14", iconColor: "#0D9488", iconBg: "#E7F8F5" },
  { icon: <FileClock size={16} />, label: "Leave Requests", value: "5", iconColor: "#7C3AED", iconBg: "#F1E9FE" },
  { icon: <MessageSquareWarning size={16} />, label: "Complaints Today", value: "4", iconColor: "#E11D48", iconBg: "#FDE9ED" },
  { icon: <IndianRupee size={16} />, label: "Today's Collections", value: "₹52,000", iconColor: "#059669", iconBg: "#E6F7EF" },
];

/* ---------- Row 10: Warden Overview ---------- */
const wardenOverview: MetricItem[] = [
  { icon: <Moon size={16} />, label: "Night Attendance", value: "312/320", iconColor: "#4338CA", iconBg: "#EEF0FD", tone: "up" },
  { icon: <LogIn size={16} />, label: "Late Entry", value: "7", iconColor: "#B6852A", iconBg: "#FBF1DD", tone: "warning" },
  { icon: <ShieldAlert size={16} />, label: "SOS Alerts", value: "0", iconColor: "#E11D48", iconBg: "#FDE9ED", tone: "up" },
  { icon: <MapPin size={16} />, label: "Students Outside", value: "11", iconColor: "#7C3AED", iconBg: "#F1E9FE", tone: "neutral" },
  { icon: <Timer size={16} />, label: "Leaves Pending", value: "5", iconColor: "#0D9488", iconBg: "#E7F8F5", tone: "neutral" },
];

/* ---------- Row 11: Mess Dashboard ---------- */
const messDashboard: MetricItem[] = [
  { icon: <Coffee size={16} />, label: "Breakfast Count", value: "290", iconColor: "#D6A53C", iconBg: "#FBF1DD", tone: "up" },
  { icon: <Soup size={16} />, label: "Lunch Count", value: "330", iconColor: "#4338CA", iconBg: "#EEF0FD", tone: "up" },
  { icon: <IceCreamCone size={16} />, label: "Dinner Count", value: "312", iconColor: "#0D9488", iconBg: "#E7F8F5", tone: "up" },
  { icon: <Banknote size={16} />, label: "Food Cost Today", value: "₹18,400", iconColor: "#B6852A", iconBg: "#FBF1DD", tone: "neutral" },
  { icon: <PackageX size={16} />, label: "Wastage / Low Inventory", value: "3 items", iconColor: "#E11D48", iconBg: "#FDE9ED", tone: "warning" },
];

/* ---------- Row 12: Staff Dashboard ---------- */
const staffDashboard: MetricItem[] = [
  { icon: <UserCheck size={16} />, label: "Employees Present", value: "42", iconColor: "#059669", iconBg: "#E6F7EF", tone: "up" },
  { icon: <UserX size={16} />, label: "Absent", value: "3", iconColor: "#E11D48", iconBg: "#FDE9ED", tone: "down" },
  { icon: <Clock3 size={16} />, label: "Late", value: "2", iconColor: "#B6852A", iconBg: "#FBF1DD", tone: "warning" },
  { icon: <CalendarClock size={16} />, label: "Leaves", value: "4", iconColor: "#7C3AED", iconBg: "#F1E9FE", tone: "neutral" },
  { icon: <Wallet size={16} />, label: "Pending Payroll", value: "₹1,20,000", iconColor: "#4338CA", iconBg: "#EEF0FD", tone: "warning" },
];

/* ---------- Row 8: Today's Events & Upcoming ---------- */
const todaysEvents: ListRow[] = [
  { avatarLabel: "PT", primary: "Parent-Teacher Meet", secondary: "Main Hall", right: "11:00 AM", tone: "neutral" },
  { avatarLabel: "FI", primary: "Fire Safety Drill", secondary: "All Floors", right: "03:00 PM", tone: "neutral" },
  { avatarLabel: "MC", primary: "Mess Committee Review", secondary: "Admin Office", right: "05:30 PM", tone: "neutral" },
];

const birthdaysList: ListRow[] = [
  { avatarLabel: "AV", primary: "Aman Verma", secondary: "Room B303", right: "Tomorrow", tone: "low" },
  { avatarLabel: "KP", primary: "Karan Patel", secondary: "Room C302", right: "10 Jul", tone: "neutral" },
  { avatarLabel: "SK", primary: "Sahil Khan", secondary: "Room C305", right: "14 Jul", tone: "neutral" },
];

const admissionsCalendar: ListRow[] = [
  { avatarLabel: "NA", primary: "New Admission Scheduled", secondary: "Room D201", right: "10 Jul", tone: "neutral" },
  { avatarLabel: "RS", primary: "Document Verification", secondary: "Rahul Sharma", right: "11 Jul", tone: "neutral" },
  { avatarLabel: "PS", primary: "Admission Interview", secondary: "Priya Singh", right: "13 Jul", tone: "medium" },
];

const maintenanceCalendar: ListRow[] = [
  { avatarLabel: "MT", primary: "Water Tank Maintenance", secondary: "Block C", right: "12 Jul", tone: "medium" },
  { avatarLabel: "EL", primary: "Electrical Wiring Check", secondary: "Block A", right: "15 Jul", tone: "high" },
  { avatarLabel: "LF", primary: "Lift Servicing", secondary: "Block B", right: "18 Jul", tone: "neutral" },
];

/* ---------- Row 14: Reports ---------- */
const topCollectors: ListRow[] = [
  { avatarLabel: "RS", primary: "Ritu Sharma", secondary: "Accounts Team", right: "₹4,85,000", tone: "neutral" },
  { avatarLabel: "MK", primary: "Manoj Kumar", secondary: "Accounts Team", right: "₹3,92,000", tone: "neutral" },
  { avatarLabel: "PS", primary: "Priya Singh", secondary: "Accounts Team", right: "₹3,40,000", tone: "neutral" },
];

const topFloors: ListRow[] = [
  { avatarLabel: "GF", primary: "Ground Floor", secondary: "48 Beds", right: "95%", tone: "low" },
  { avatarLabel: "2F", primary: "2nd Floor", secondary: "52 Beds", right: "92%", tone: "low" },
  { avatarLabel: "1F", primary: "1st Floor", secondary: "50 Beds", right: "88%", tone: "medium" },
];

const topComplaintTypes: ListRow[] = [
  { avatarLabel: "EL", primary: "Electricity Issues", secondary: "42 reported", right: "High", tone: "high" },
  { avatarLabel: "WT", primary: "Water Problems", secondary: "27 reported", right: "Medium", tone: "medium" },
  { avatarLabel: "MS", primary: "Mess Food Quality", secondary: "19 reported", right: "Medium", tone: "medium" },
];

const topExpenseCategories: ListRow[] = [
  { avatarLabel: "MS", primary: "Mess & Groceries", secondary: "Monthly Spend", right: "₹6,20,000", tone: "neutral" },
  { avatarLabel: "ST", primary: "Staff Salaries", secondary: "Monthly Spend", right: "₹5,40,000", tone: "neutral" },
  { avatarLabel: "MT", primary: "Maintenance", secondary: "Monthly Spend", right: "₹1,80,000", tone: "neutral" },
];

const highestOccupancy: ListRow[] = [
  { avatarLabel: "GF", primary: "Ground Floor", secondary: "Block A", right: "95%", tone: "low" },
  { avatarLabel: "2F", primary: "2nd Floor", secondary: "Block A", right: "92%", tone: "low" },
];

const lowestOccupancy: ListRow[] = [
  { avatarLabel: "4F", primary: "4th Floor", secondary: "Block C", right: "65%", tone: "high" },
  { avatarLabel: "3F", primary: "3rd Floor", secondary: "Block B", right: "78%", tone: "medium" },
];

export default function DashboardPage() {
  return (
    <main className="flex-1 overflow-y-auto p-5 space-y-5">
      {/* Row 1: Welcome Header */}
      <WelcomeHeader />

      {/* Row 2: 8 KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard icon={<Users size={18} />} iconColor="#4338CA" iconBg="#EEF0FD" label="Total Residents" value="1,250" delta="+12%" sub="This Month" />
        <StatCard icon={<BedDouble size={18} />} iconColor="#0D9488" iconBg="#E7F8F5" label="Occupied Beds" value="1,100" delta="88% Occupancy" deltaTone="neutral" />
        <StatCard icon={<DoorOpen size={18} />} iconColor="#7C3AED" iconBg="#F1E9FE" label="Vacant Beds" value="150" delta="12% Available" deltaTone="neutral" />
        <StatCard icon={<IndianRupee size={18} />} iconColor="#B6852A" iconBg="#FBF1DD" label="Today's Collection" value="₹52,000" delta="+9%" sub="vs Yesterday" />
        <StatCard icon={<ReceiptText size={18} />} iconColor="#E11D48" iconBg="#FDE9ED" label="Pending Fees" value="₹2,10,000" delta="+8%" deltaTone="down" sub="This Month" />
        <StatCard icon={<UtensilsCrossed size={18} />} iconColor="#059669" iconBg="#E6F7EF" label="Today's Mess Count" value="932" delta="+4%" sub="vs Yesterday" />
        <StatCard icon={<UserCircle2 size={18} />} iconColor="#0369A1" iconBg="#E3F2FB" label="Today's Visitors" value="14" delta="+3%" sub="vs Yesterday" />
        <StatCard icon={<AlertTriangle size={18} />} iconColor="#C2410C" iconBg="#FDEDE1" label="Active Complaints" value="9" delta="-6%" sub="This Month" />
      </div>

      {/* Row 3: Revenue vs Expense | Fee Collection Trend | Pending Fee Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <RevenueOverviewCard />
        <FeeCollectionTrendCard />
        <PendingFeeDistributionCard />
      </div>

      {/* Row 4: Occupancy Trend | Floor-wise Occupancy | Mess Consumption */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <OccupancyTrendCard />
        <FloorOccupancyCard />
        <MessConsumptionCard />
      </div>

      {/* Row 5: Recent Activities (live timeline) */}
      <RecentActivityTimeline />

      {/* Row 6: Today's Summary */}
      <MetricStrip title="Today's Summary" icon={<ClipboardCheck size={14} />} items={todaySummary} />

      {/* Row 7: Alerts */}
      <AlertsPanel />

      {/* Row 8: Calendar row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <MiniCalendar />
        <ListCard title="Today's Events" icon={<CalendarClock size={14} />} rows={todaysEvents} />
        <QuickMaintenanceCard />
        <ListCard title="Birthday Calendar" icon={<Cake size={14} />} rows={birthdaysList} />
        <ListCard title="Admissions Calendar" icon={<UserPlus2 size={14} />} rows={admissionsCalendar} />
        <ListCard title="Maintenance Calendar" icon={<Wrench size={14} />} rows={maintenanceCalendar} />
      </div>

      {/* Row 9: Quick Actions */}
      <QuickActionsGrid />

      {/* Row 10: Warden Overview */}
      <MetricStrip title="Warden Overview" icon={<ShieldAlert size={14} />} items={wardenOverview} />

      {/* Row 11: Mess Dashboard */}
      <MetricStrip title="Mess Dashboard" icon={<UtensilsCrossed size={14} />} items={messDashboard} />

      {/* Row 12: Staff Dashboard */}
      <MetricStrip title="Staff Dashboard" icon={<Users size={14} />} items={staffDashboard} />

      {/* Row 13: Trend Graphs */}
      <TrendGraphsGrid />

      {/* Row 14: Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <ListCard title="Top Collectors" icon={<Trophy size={14} />} rows={topCollectors} />
        <ListCard title="Top Floors" icon={<Building2 size={14} />} rows={topFloors} />
        <ListCard title="Top Complaints" icon={<MessageSquareWarning size={14} />} rows={topComplaintTypes} />
        <ListCard title="Top Expense Categories" icon={<Wallet size={14} />} rows={topExpenseCategories} />
        <ListCard title="Highest Occupancy" icon={<TrendingUp size={14} />} rows={highestOccupancy} />
        <ListCard title="Lowest Occupancy" icon={<TrendingDown size={14} />} rows={lowestOccupancy} />
      </div>
    </main>
  );
}
