"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ShieldCheck, LogOut } from "lucide-react";
import { navItems } from "@/lib/nav-items";
import { useSidebar } from "@/lib/sidebar-context";
import { useAuth } from "@/lib/auth-context";
import {  ROLE_LABELS, MODULE_ACCESS, moduleSlugFromPath, } from "@/lib/roles";

export default function Sidebar() {
  const { collapsed } = useSidebar();
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

const items = navItems.filter((item) => {
  const slug = moduleSlugFromPath(item.href);
  const allowed = MODULE_ACCESS[slug];

  if (!user) return true;
  if (!allowed) return true;

  return allowed.includes(user.role);
});

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

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
        {items.map((item) => {
          const Icon = item.icon;

          if (item.children && item.children.length > 0) {
            return (
              <div key={item.href} className="pt-1">
                <div
                  title={collapsed ? item.label : undefined}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                >
                  <Icon size={18} className="shrink-0" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </div>
                <div className="space-y-0.5">
                  {item.children.map((child) => {
                    const active = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        title={collapsed ? child.label : undefined}
                        className={`flex items-center gap-3 rounded-lg py-2 text-[13px] transition-colors relative
                          ${collapsed ? "px-3 justify-center" : "pl-9 pr-3"}
                          ${
                            active
                              ? "bg-gold/15 text-gold-light font-medium"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                      >
                        {active && (
                          <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-gold" />
                        )}
                        {collapsed ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                        ) : (
                          <span className="truncate">{child.label}</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

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

      {/* User footer */}
      <div className="border-t border-navy-700/60 p-3 shrink-0">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center text-navy-950 font-semibold text-sm shrink-0"
            title={collapsed && user ? `${user.name} \u00b7 ${ROLE_LABELS[user.role]}` : undefined}
          >
            {user?.name?.charAt(0).toUpperCase() ?? "?"}
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="text-white text-[13px] font-medium truncate">
                {user?.name ?? "Guest"}
              </p>
              <p className="text-[11px] text-gold flex items-center gap-1 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shrink-0" />
                {user ? ROLE_LABELS[user.role] : ""}
              </p>
            </div>
          )}
          {!collapsed && (
            <button
              onClick={handleLogout}
              title="Logout"
              aria-label="Logout"
              className="text-slate-400 hover:text-rose-400 transition-colors shrink-0"
            >
              <LogOut size={16} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
