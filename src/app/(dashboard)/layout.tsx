import { SidebarProvider } from "@/lib/sidebar-context";
import Sidebar from "@/components/Sidebar";

export default function DashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <SidebarProvider>
  <div className="flex h-screen bg-slate-50 dark:bg-navy-950">
    <Sidebar />
    <div className="flex-1 flex flex-col min-w-0 overflow-visible">
      {children}
    </div>
  </div>
</SidebarProvider>
  );
}
