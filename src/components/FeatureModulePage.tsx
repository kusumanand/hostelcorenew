"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, LockKeyhole } from "lucide-react";
import Topbar from "@/components/Topbar";
import { type ModuleConfig, slugify } from "@/lib/module-features";
import { useAuth } from "@/lib/auth-context";
import { allowedFeatureSlugsForModule } from "@/lib/feature-access";

export default function FeatureModulePage({
  config,
  icon,
}: {
  config: ModuleConfig;
  icon: ReactNode;
}) {
  const { user } = useAuth();
  const allowedSlugs = user
  ? allowedFeatureSlugsForModule(user.role, config.slug):null;

  // null => role isn't feature-restricted, every feature in the module is
  // visible (existing behaviour).Otherwise only show the whitelisted set.

  const visibleFeatures = allowedSlugs? config.features.filter((f) => allowedSlugs.has(slugify(f.name))):config.features;

  return (
    <>
      <Topbar title={config.title} />
      <main className="flex-1 overflow-y-auto p-5 space-y-5">
        {/* Header */}
        <div className="card p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center shrink-0 text-navy-950">
            {icon}
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
              {config.title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
              {config.description}
            </p>
          </div>
          <button className="sm:ml-auto gold-gradient text-navy-950 text-[13px] font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:brightness-105 transition shrink-0">
            Configure Module
          </button>
        </div>

        {/* Feature grid */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100">
           {allowedSlugs ? "Available to you" : "Included Features"}
            </h3>
            <span className="text-[11px] text-slate-400">
            {visibleFeatures.length} feature {visibleFeatures.length ===1 ? "" : "s"} 
            </span>
          </div>

          {visibleFeatures.length === 0 ? (
            <div className="card p-8 flex flex-col items-center justify-center text-center gap-2">
              <LockKeyhole size={22}
              className="text-slate-300 dark:text-slate-600"/>
              <p className="text-[13px] text-slate-500 dark:text-slate-400">
                Nothing here yet for your role
              </p>
              </div>
          ) : (
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {visibleFeatures.map((feature) => (
              <Link
                key={feature.name}
                href={`/${config.slug}/${slugify(feature.name)}`}
                className="card p-4 flex items-start gap-3 hover:border-gold/50 hover:shadow-md transition-all group"
              >
                <CheckCircle2
                  size={18}
                  className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium text-slate-700 dark:text-slate-100">
                    {feature.name}
                  </p>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {feature.description}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  className="text-slate-300 dark:text-slate-600 shrink-0 mt-0.5 group-hover:text-gold-dark dark:group-hover:text-gold transition-colors"
                />
              </Link>
            ))}
          </div>
          )}
          </div>
      </main>
    </>
  );
}
