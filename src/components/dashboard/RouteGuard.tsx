"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ShieldAlert } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { canAccessPath } from "@/lib/roles";
import { ROLE_LABELS } from "@/lib/roles";

export default function RouteGuard({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center h-screen text-sm text-slate-400">
        Loading...
      </div>
    );
  }

  if (!user) {
    // Redirect is in-flight; render nothing to avoid a flash of protected content.
    return null;
  }

  if (!canAccessPath(user.role, pathname)) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-500">
          <ShieldAlert size={26} />
        </div>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
          Access restricted
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
          Your role ({ROLE_LABELS[user.role]}) doesn&apos;t have access to
          this section. Contact a Super Admin if you think this is a mistake.
        </p>
        <button
          onClick={() => router.replace("/dashboard")}
          className="mt-2 gold-gradient text-navy-950 text-[13px] font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:brightness-105 transition"
        >
          Back to Dashboard
        </button>
      </main>
    );
  }

  return <>{children}</>;
}
