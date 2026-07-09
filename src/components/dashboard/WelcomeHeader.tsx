"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, Moon, Sun,Mail, Zap, ChevronDown, User, Settings, LogOut } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

function getGreeting(hour: number) {
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export default function WelcomeHeader() {
  const { theme, toggleTheme } = useTheme();
  const [now, setNow] = useState<Date | null>(null);
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setMenuOpen(false);
    router.push("/login");
  };

  const greeting = now ? getGreeting(now.getHours()) : "Good Morning";
  const dateStr = now
    ? now.toLocaleDateString("en-IN", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })
    : "";
  const timeStr = now
    ? now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })
    : "";

  return (
    <div className="card p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      {/* Left: greeting + identity + live date/time (stacked) */}
      <div>
        <h1 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white">
          {greeting}, Admin 👋
        </h1>
        <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
          HostelCore &middot; Bhopal Branch &middot;{" "}
          <span className="text-gold-dark dark:text-gold font-medium">2026-27</span>
        </p>
        <p className="text-[13px] font-medium text-slate-600 dark:text-slate-300 mt-2">
          {dateStr || "—"}
          <span className="mx-2 text-slate-300 dark:text-navy-600">|</span>
          <span className="font-bold tabular-nums text-gold-dark dark:text-gold">{timeStr || "--:--:--"}</span>
        </p>
      </div>

      {/* Right: action icons */}
      <div className="flex items-center gap-2 lg:pl-4 lg:border-l border-slate-200 dark:border-navy-700/60 shrink-0">
        <button
          aria-label="Notifications"
          className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors"
        >
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-rose-500" />
        </button>

        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
          <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors">
          <Mail size={18} />
         </button>

        <a
          href="#quick-actions"
          className="flex items-center gap-1.5 gold-gradient text-navy-950 text-[13px] font-semibold px-3.5 py-2 rounded-lg shadow-sm hover:brightness-105 transition"
        >
          <Zap size={15} />
          <span className="hidden sm:inline">Quick Action</span>
        </a>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={menuOpen}
            className="flex items-center gap-2 pl-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-navy-950 font-semibold text-xs shrink-0">
              A
            </div>
            <div className="hidden lg:block leading-tight text-left">
              <p className="text-[13px] font-medium text-slate-700 dark:text-slate-100">Admin</p>
              <p className="text-[11px] text-slate-400">Super Admin</p>
            </div>
            <ChevronDown
              size={14}
              className={`text-slate-400 hidden lg:block transition-transform ${menuOpen ? "rotate-180" : ""}`}
            />
          </button>

          {menuOpen && (
          <div className="absolute right-0 top-full mt-2 w-24 rounded-md border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-900 shadow-lg py-1 z-50">
             <button
            onClick={handleLogout}
            className="w-full px-3 py-1.5 text-left text-xs text-red-600 hover:bg-red-50 dark:hover:bg-navy-800">
             Logout
           </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
