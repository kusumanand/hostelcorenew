"use client";

import { useAuth } from "@/lib/auth-context";
import SuperAdminDashboard from "@/components/dashboards/SuperAdminDashboard";
import AdminDashboard from "@/components/dashboards/AdminDashboard";
import HrDashboard from "@/components/dashboards/HrDashboard";
import WardenDashboard from "@/components/dashboards/WardenDashboard";
import AccountantDashboard from "@/components/dashboards/AccountantDashboard";
import MessManagerDashboard from "@/components/dashboards/MessManagerDashboard";
import ParentDashboard from "@/components/dashboards/ParentDashboard";
import StudentDashboard from "@/components/dashboards/StudentDashboard";
import { type Role } from "@/lib/roles";

const dashboardByRole: Record<Role, () => React.ReactElement> = {
  super_admin: SuperAdminDashboard,
  admin: AdminDashboard,
  hr: HrDashboard,
  warden: WardenDashboard,
  accountant: AccountantDashboard,
  mess_manager: MessManagerDashboard,
  parent: ParentDashboard,
  student: StudentDashboard,
};

export default function DashboardPage() {
  const { user, isLoading } = useAuth();

  if (isLoading || !user) {
    return (
      <div className="flex-1 flex items-center justify-center h-screen text-sm text-slate-400">
        Loading...
      </div>
    );
  }

  const DashboardComponent = dashboardByRole[user.role] ?? StudentDashboard;
  return <DashboardComponent />;
}
