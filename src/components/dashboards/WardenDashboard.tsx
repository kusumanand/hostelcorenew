import StatCard from "@/components/StatCard";
import ListCard, { type ListRow } from "@/components/ListCard";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import MetricStrip, { type MetricItem } from "@/components/dashboard/MetricStrip";
import RoleQuickLinks, { type QuickLinkItem } from "@/components/dashboard/RoleQuickLinks";
import {
  BedDouble,
  DoorOpen,
  Moon,
  LogIn,
  ShieldAlert,
  MapPin,
  Timer,
  UserCheck,
  Wrench,
  HeartPulse,
  QrCode,
  Ticket,
} from "lucide-react";

const kpis = [
  { icon: <BedDouble size={18} />, iconColor: "#0D9488", iconBg: "#E7F8F5", label: "Occupied Beds", value: "1,100", delta: "88% Occupancy", deltaTone: "neutral" as const },
  { icon: <DoorOpen size={18} />, iconColor: "#7C3AED", iconBg: "#F1E9FE", label: "Vacant Beds", value: "150", delta: "12% Available", deltaTone: "neutral" as const },
  { icon: <UserCheck size={18} />, iconColor: "#0369A1", iconBg: "#E3F2FB", label: "Today's Visitors", value: "14", delta: "+3%", sub: "vs Yesterday" },
  { icon: <ShieldAlert size={18} />, iconColor: "#E11D48", iconBg: "#FDE9ED", label: "SOS Alerts", value: "0", delta: "All clear", deltaTone: "neutral" as const },
];

const wardenOverview: MetricItem[] = [
  { icon: <Moon size={16} />, label: "Night Attendance", value: "312/320", iconColor: "#4338CA", iconBg: "#EEF0FD", tone: "up" },
  { icon: <LogIn size={16} />, label: "Late Entry", value: "7", iconColor: "#B6852A", iconBg: "#FBF1DD", tone: "warning" },
  { icon: <MapPin size={16} />, label: "Students Outside", value: "11", iconColor: "#7C3AED", iconBg: "#F1E9FE", tone: "neutral" },
  { icon: <Timer size={16} />, label: "Leaves Pending", value: "5", iconColor: "#0D9488", iconBg: "#E7F8F5", tone: "neutral" },
];

const maintenanceQueue: ListRow[] = [
  { avatarLabel: "MT", primary: "Water Tank Maintenance", secondary: "Block C", right: "12 Jul", tone: "medium" },
  { avatarLabel: "EL", primary: "Electrical Wiring Check", secondary: "Block A", right: "15 Jul", tone: "high" },
  { avatarLabel: "LF", primary: "Lift Servicing", secondary: "Block B", right: "18 Jul", tone: "neutral" },
];

const pendingVisitors: ListRow[] = [
  { avatarLabel: "VK", primary: "Vikram Singh", secondary: "Visiting Rahul Sharma · Room A101", right: "Awaiting", tone: "medium" },
  { avatarLabel: "NS", primary: "Neha Shah", secondary: "Visiting Priya Singh · Room B204", right: "Awaiting", tone: "medium" },
];

const quickLinks: QuickLinkItem[] = [
  { label: "Bed Allocation", icon: <BedDouble size={18} />, color: "#0D9488", bg: "#E7F8F5", href: "/rooms-beds/bed-allocation" },
  { label: "Room Maintenance", icon: <Wrench size={18} />, color: "#B6852A", bg: "#FBF1DD", href: "/rooms-beds/room-maintenance" },
  { label: "Night Roll Call", icon: <Moon size={18} />, color: "#4338CA", bg: "#EEF0FD", href: "/attendance-security/night-roll-call" },
  { label: "Digital Gate Pass", icon: <QrCode size={18} />, color: "#7C3AED", bg: "#F1E9FE", href: "/attendance-security/digital-gate-pass" },
  { label: "Visitor Registration", icon: <DoorOpen size={18} />, color: "#0369A1", bg: "#E3F2FB", href: "/visitors/visitor-registration" },
  { label: "Medical Emergency", icon: <HeartPulse size={18} />, color: "#E11D48", bg: "#FDE9ED", href: "/health-wellness/medical-emergency-alerts" },
  { label: "Approve Guest Room", icon: <Ticket size={18} />, color: "#059669", bg: "#E6F7EF", href: "/rooms-beds/guest-room-booking" },
];

export default function WardenDashboard() {
  return (
    <main className="flex-1 overflow-y-auto p-5 space-y-5">
      <WelcomeHeader subtitle="HostelCore · Warden workspace · Rooms, Attendance, Health & Visitors" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <StatCard key={k.label} {...k} />
        ))}
      </div>

      <MetricStrip title="Warden Overview" icon={<ShieldAlert size={14} />} items={wardenOverview} />

      <RoleQuickLinks items={quickLinks} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ListCard title="Maintenance Queue" icon={<Wrench size={14} />} rows={maintenanceQueue} />
        <ListCard title="Visitors Awaiting Approval" icon={<DoorOpen size={14} />} rows={pendingVisitors} />
      </div>
    </main>
  );
}
