"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Bell, Mail, ChevronDown, Plus, Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { useSidebar } from "@/lib/sidebar-context";

export default function Topbar({ title = "Dashboard" }: { title?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { toggleCollapsed } = useSidebar();
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();

    router.push("/login");
  };

  return (
    <header className="h-16 shrink-0 flex items-center gap-4 px-5 border-b border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-900">
      <button
        onClick={toggleCollapsed}
        className="text-slate-500 dark:text-slate-300 hover:text-gold-dark dark:hover:text-gold transition-colors"
        aria-label="Toggle sidebar"
      >
        <Menu size={20} />
      </button>

      <h1 className="hidden sm:block text-sm font-semibold text-slate-700 dark:text-slate-100 shrink-0">
        {title}
      </h1>

      <div className="flex-1 max-w-md relative hidden md:block">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search Students, Rooms, Fees..."
          className="w-full bg-slate-100 dark:bg-navy-800 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-gold/60"
        />
      </div>

      <div className="flex items-center gap-3 ml-auto">
        
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-rose-500" />
        </button>

        <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors">
          <Mail size={18} />
         </button>

        <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-navy-700/60 cursor-pointer">
          <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-navy-950 font-semibold text-xs">
            A
          </div>
          <div className="hidden lg:block leading-tight">
            <p className="text-[13px] font-medium text-slate-700 dark:text-slate-100">Admin</p>
            <p className="text-[11px] text-slate-400">Super Admin</p>
          </div>
          <div className="relative">
  <button
    onClick={() => setShowLogout(!showLogout)}
    className="flex items-center"
  >
    <ChevronDown
      size={14}
      className={`text-slate-400 hidden lg:block transition-transform ${
        showLogout ? "rotate-180" : ""
      }`}
    />
  </button>

  {showLogout && (
    <div className="absolute right-0 mt-2 w-32 rounded-md bg-white shadow-lg border border-slate-200 z-50">
      <button
        onClick={handleLogout}
        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
      >
        Logout
      </button>
    </div>
  )}
</div>
        </div>
      </div>
    </header>
  );
}
