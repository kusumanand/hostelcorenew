export default function OccupancyTrendCard() {
  return (
    <div className="card p-4 h-full flex flex-col">
      <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-100 mb-2">
        Occupancy Trend
      </h3>

      <div className="flex-1 min-h-[220px] rounded-lg border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <span className="text-sm text-slate-400">
          Graph will appear here
        </span>
      </div>
    </div>
  );
}