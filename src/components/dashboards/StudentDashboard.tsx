import StatCard from "@/components/StatCard";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import RoleQuickLinks, { type QuickLinkItem } from "@/components/dashboard/RoleQuickLinks";
import {
  Wallet,
  MessageSquareWarning,
  BedDouble,
  UserPlus2,
  PackageSearch,
  IndianRupee,
  Mic,
  Upload,
  ListChecks,
  IdCard,
  Star,
  Ticket,
  Wrench,
  History,
  CalendarRange,
  FileSignature,
  Siren,
  HeartPulse,
  FileText,
  BookOpenCheck,
  Camera,
  Repeat,
  GraduationCap,
  Brush,
  Library,
  Link2,
  Share2,
} from "lucide-react";

const kpis = [
  { icon: <Wallet size={18} />, iconColor: "#059669", iconBg: "#E6F7EF", label: "Wallet Balance", value: "₹1,240", delta: "Top up", deltaTone: "neutral" as const },
  { icon: <IndianRupee size={18} />, iconColor: "#E11D48", iconBg: "#FDE9ED", label: "Fee Due", value: "₹15,000", delta: "Due 20 Jul", deltaTone: "down" as const },
  { icon: <BedDouble size={18} />, iconColor: "#4338CA", iconBg: "#EEF0FD", label: "Room", value: "B-204", delta: "Bed 2", deltaTone: "neutral" as const },
  { icon: <MessageSquareWarning size={18} />, iconColor: "#B6852A", iconBg: "#FBF1DD", label: "My Complaints", value: "1 Open", delta: "In progress", deltaTone: "neutral" as const },
];

const admissionLinks: QuickLinkItem[] = [
  { label: "Online Application", icon: <UserPlus2 size={18} />, color: "#4338CA", bg: "#EEF0FD", href: "/admissions/online-admission" },
  { label: "Document Upload", icon: <Upload size={18} />, color: "#0D9488", bg: "#E7F8F5", href: "/admissions/document-upload" },
  { label: "KYC Verification", icon: <IdCard size={18} />, color: "#7C3AED", bg: "#F1E9FE", href: "/admissions/kyc-verification" },
  { label: "Admission Slip", icon: <FileText size={18} />, color: "#B6852A", bg: "#FBF1DD", href: "/admissions/qr-admission-slip" },
  { label: "Status Timeline", icon: <History size={18} />, color: "#E11D48", bg: "#FDE9ED", href: "/admissions/admission-status-timeline" },
  { label: "Consent Forms", icon: <FileSignature size={18} />, color: "#059669", bg: "#E6F7EF", href: "/admissions/digital-consent-forms" },
];

const paymentsLinks: QuickLinkItem[] = [
  { label: "Online Payment", icon: <IndianRupee size={18} />, color: "#059669", bg: "#E6F7EF", href: "/admissions/online-payment" },
  { label: "Payment Link", icon: <Link2 size={18} />, color: "#4338CA", bg: "#EEF0FD", href: "/fees-accounting/payment-link" },
  { label: "Apply Scholarship", icon: <GraduationCap size={18} />, color: "#7C3AED", bg: "#F1E9FE", href: "/fees-accounting/scholarship-management" },
  { label: "My Wallet", icon: <Wallet size={18} />, color: "#B6852A", bg: "#FBF1DD", href: "/residents/student-wallet" },
  { label: "Asset Booking", icon: <PackageSearch size={18} />, color: "#0369A1", bg: "#E3F2FB", href: "/inventory/asset-booking" },
  { label: "Hostel Agreement", icon: <FileText size={18} />, color: "#E11D48", bg: "#FDE9ED", href: "/residents/hostel-agreement" },
];

const supportLinks: QuickLinkItem[] = [
  { label: "Complaint Ticket", icon: <Ticket size={18} />, color: "#E11D48", bg: "#FDE9ED", href: "/complaints/complaint-ticket" },
  { label: "Voice Complaint", icon: <Mic size={18} />, color: "#4338CA", bg: "#EEF0FD", href: "/complaints/voice-complaint" },
  { label: "Photo Upload", icon: <Camera size={18} />, color: "#0D9488", bg: "#E7F8F5", href: "/complaints/photo-upload" },
  { label: "Resolution Tracking", icon: <ListChecks size={18} />, color: "#7C3AED", bg: "#F1E9FE", href: "/complaints/resolution-tracking" },
  { label: "Service Request", icon: <Wrench size={18} />, color: "#B6852A", bg: "#FBF1DD", href: "/complaints/service-requests" },
  { label: "Feedback", icon: <Star size={18} />, color: "#059669", bg: "#E6F7EF", href: "/complaints/feedback" },
];

const campusLifeLinks: QuickLinkItem[] = [
  { label: "Meal Pre-Booking", icon: <CalendarRange size={18} />, color: "#B6852A", bg: "#FBF1DD", href: "/mess/meal-pre-booking" },
  { label: "Food Rating", icon: <Star size={18} />, color: "#059669", bg: "#E6F7EF", href: "/mess/food-rating" },
  { label: "Study Room Booking", icon: <BookOpenCheck size={18} />, color: "#4338CA", bg: "#EEF0FD", href: "/student-productivity/study-room-booking" },
  { label: "Hostel Library", icon: <Library size={18} />, color: "#0D9488", bg: "#E7F8F5", href: "/student-productivity/library-integration" },
  { label: "Assignment Sharing", icon: <Share2 size={18} />, color: "#7C3AED", bg: "#F1E9FE", href: "/student-productivity/assignment-sharing" },
  { label: "Cleaning Schedule", icon: <Brush size={18} />, color: "#0369A1", bg: "#E3F2FB", href: "/rooms-beds/cleaning-schedule" },
  { label: "Room Transfer", icon: <Repeat size={18} />, color: "#C2410C", bg: "#FDEDE1", href: "/rooms-beds/room-transfer" },
];

const emergencyLinks: QuickLinkItem[] = [
  { label: "SOS Alert", icon: <Siren size={18} />, color: "#E11D48", bg: "#FDE9ED", href: "/health-wellness/sos-alert" },
  { label: "Medical Emergency", icon: <HeartPulse size={18} />, color: "#B6852A", bg: "#FBF1DD", href: "/health-wellness/medical-emergency-alerts" },
];

export default function StudentDashboard() {
  return (
    <main className="flex-1 overflow-y-auto p-5 space-y-5">
      <WelcomeHeader subtitle="HostelCore · Student portal · Everything you need, in one place" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <StatCard key={k.label} {...k} />
        ))}
      </div>

      <RoleQuickLinks title="Admission & KYC" items={admissionLinks} />
      <RoleQuickLinks title="Payments & Wallet" items={paymentsLinks} />
      <RoleQuickLinks title="Complaints & Support" items={supportLinks} />
      <RoleQuickLinks title="Campus Life" items={campusLifeLinks} />
      <RoleQuickLinks title="Emergency" items={emergencyLinks} />
    </main>
  );
}
