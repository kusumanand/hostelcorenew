import { SidebarProvider } from "@/lib/sidebar-context";
import Sidebar from "@/components/Sidebar";
import RouteGuard from "@/components/RouteGuard";

export default function DashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <RouteGuard>
        <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-navy-950">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {children}
          </div>
        </div>
      </RouteGuard>
    </SidebarProvider>
  );
}
