import ListCard, { type ListRow } from "@/components/ListCard";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import MetricStrip, { type MetricItem } from "@/components/dashboard/MetricStrip";
import MessConsumptionCard from "@/components/charts/MessConsumptionCard";
import RoleQuickLinks, { type QuickLinkItem } from "@/components/dashboard/RoleQuickLinks";
import {
  Coffee,
  Soup,
  IceCreamCone,
  Banknote,
  PackageX,
  UtensilsCrossed,
  ClipboardList,
  Boxes,
  Truck,
  Star,
  Salad,
  CalendarRange,
} from "lucide-react";

const messToday: MetricItem[] = [
  { icon: <Coffee size={16} />, label: "Breakfast Count", value: "290", iconColor: "#D6A53C", iconBg: "#FBF1DD", tone: "up" },
  { icon: <Soup size={16} />, label: "Lunch Count", value: "330", iconColor: "#4338CA", iconBg: "#EEF0FD", tone: "up" },
  { icon: <IceCreamCone size={16} />, label: "Dinner Count", value: "312", iconColor: "#0D9488", iconBg: "#E7F8F5", tone: "up" },
  { icon: <Banknote size={16} />, label: "Food Cost Today", value: "₹18,400", iconColor: "#B6852A", iconBg: "#FBF1DD", tone: "neutral" },
  { icon: <PackageX size={16} />, label: "Wastage / Low Inventory", value: "3 items", iconColor: "#E11D48", iconBg: "#FDE9ED", tone: "warning" },
];

const todaysMenu: ListRow[] = [
  { avatarLabel: "BF", primary: "Breakfast", secondary: "Poha, Bread & Jam, Tea", right: "7:30 AM", tone: "neutral" },
  { avatarLabel: "LN", primary: "Lunch", secondary: "Dal, Rice, Roti, Mixed Veg", right: "1:00 PM", tone: "neutral" },
  { avatarLabel: "DN", primary: "Dinner", secondary: "Rajma, Rice, Roti, Salad", right: "8:00 PM", tone: "neutral" },
];

const foodRatings: ListRow[] = [
  { avatarLabel: "LN", primary: "Lunch Rating", secondary: "212 responses today", right: "4.3 / 5", tone: "low" },
  { avatarLabel: "DN", primary: "Dinner Rating", secondary: "198 responses today", right: "3.9 / 5", tone: "medium" },
  { avatarLabel: "BF", primary: "Breakfast Rating", secondary: "180 responses today", right: "4.1 / 5", tone: "low" },
];

const quickLinks: QuickLinkItem[] = [
  { label: "Menu Planning", icon: <ClipboardList size={18} />, color: "#4338CA", bg: "#EEF0FD", href: "/mess/menu-planning" },
  { label: "Meal Attendance", icon: <UtensilsCrossed size={18} />, color: "#0D9488", bg: "#E7F8F5", href: "/mess/meal-attendance" },
  { label: "Food Inventory", icon: <Boxes size={18} />, color: "#B6852A", bg: "#FBF1DD", href: "/mess/food-inventory" },
  { label: "Vendor Purchase", icon: <Truck size={18} />, color: "#7C3AED", bg: "#F1E9FE", href: "/mess/vendor-purchase" },
  { label: "Food Wastage", icon: <PackageX size={18} />, color: "#E11D48", bg: "#FDE9ED", href: "/mess/food-wastage-tracking" },
  { label: "Diet Management", icon: <Salad size={18} />, color: "#059669", bg: "#E6F7EF", href: "/mess/diet-management" },
  { label: "Meal Pre-Booking", icon: <CalendarRange size={18} />, color: "#0369A1", bg: "#E3F2FB", href: "/mess/meal-pre-booking" },
  { label: "Food Rating", icon: <Star size={18} />, color: "#C2410C", bg: "#FDEDE1", href: "/mess/food-rating" },
];

export default function MessManagerDashboard() {
  return (
    <main className="flex-1 overflow-y-auto p-5 space-y-5">
      <WelcomeHeader subtitle="HostelCore · Mess Manager workspace · Mess Management" />

      <MetricStrip title="Today's Mess Summary" icon={<UtensilsCrossed size={14} />} items={messToday} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <MessConsumptionCard />
        <ListCard title="Today's Menu" icon={<ClipboardList size={14} />} rows={todaysMenu} />
      </div>

      <RoleQuickLinks items={quickLinks} />

      <ListCard title="Food Ratings" icon={<Star size={14} />} rows={foodRatings} />
    </main>
  );
}
