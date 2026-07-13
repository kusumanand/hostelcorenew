"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronsLeft, ChevronsRight, ShieldCheck } from "lucide-react";
import { navItems } from "@/lib/nav-items";
import { useAuth } from "@/lib/auth-context";
import { MODULE_ACCESS, moduleSlugFromPath, ROLE_LABELS } from "@/lib/roles";
import { useSidebar } from "@/lib/sidebar-context";

export default function Sidebar() {
  const { collapsed, toggleCollapsed } = useSidebar();
  const pathname = usePathname();
  const { user } = useAuth();

const filteredNavItems = navItems.filter((item) => {
  const slug = moduleSlugFromPath(item.href);
  const allowed = MODULE_ACCESS[slug];

  if (!user) return true;
  if (!allowed) return true;

  return allowed.includes(user.role);
});

  return (
    <aside
      className={`group relative h-screen flex flex-col bg-navy-900 dark:bg-navy-950 border-r border-navy-700/60 transition-all duration-200 ${
        collapsed ? "w-[76px]" : "w-[270px]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-navy-700/60 shrink-0">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg gold-gradient shrink-0">
          <ShieldCheck size={20} className="text-navy-950" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm leading-tight tracking-wide truncate">
              HOSTELCORE
            </p>
            <p className="text-[10px] text-slate-400 truncate">Smart Hostel Management</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
       {filteredNavItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] transition-colors relative
                ${
                  active
                    ? "bg-gold/15 text-gold-light font-medium"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
            >
              {active && (
                <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-gold" />
              )}
              <Icon size={18} className="shrink-0" />
              {!collapsed && (
                <span className="truncate flex-1">{item.label}</span>
              )}
              {!collapsed && item.badge && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${
                    item.badge === "New"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : item.badge === "AI"
                      ? "bg-violet-500/20 text-violet-300"
                      : "bg-rose-500/20 text-rose-400"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Warden / user footer */}
      <div className="border-t border-navy-700/60 p-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center text-navy-950 font-semibold text-sm shrink-0">
            W
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Online
              </p>
            </div>
          )}
        </div>
      </div>

    
    </aside>
  );
}
