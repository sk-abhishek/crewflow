import { HeartPulse, Activity, AlertTriangle } from "lucide-react";

const healthData = {
  injury: "Knee strain",
  severity: "Medium",
  fatigue: 65, // percentage
  recommendation: "Limit jumps and focus on recovery",
};

export default function HealthPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-white">
        Health & Recovery
      </h2>

      {/* Injury Status */}
      <div className="rounded-xl bg-zinc-900 p-5 border border-zinc-800 space-y-3">
        <div className="flex items-center gap-2 text-white font-medium">
          <HeartPulse size={18} />
          Injury Status
        </div>

        <p className="text-sm text-zinc-300">
          {healthData.injury}
        </p>

        <span className="inline-block text-sm px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400">
          {healthData.severity}
        </span>
      </div>

      {/* Fatigue Level */}
      <div className="rounded-xl bg-zinc-900 p-5 border border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 text-white font-medium">
          <Activity size={18} />
          Fatigue Level
        </div>

        <div className="w-full bg-zinc-800 rounded-full h-3">
          <div
            className="bg-purple-500 h-3 rounded-full"
            style={{ width: `${healthData.fatigue}%` }}
          />
        </div>

        <p className="text-sm text-zinc-400">
          {healthData.fatigue}% fatigue this week
        </p>
      </div>

      {/* Recommendation */}
      <div className="rounded-xl bg-zinc-900 p-5 border border-zinc-800 space-y-2">
        <div className="flex items-center gap-2 text-white font-medium">
          <AlertTriangle size={18} />
          Recommendation
        </div>

        <p className="text-sm text-zinc-300">
          {healthData.recommendation}
        </p>
      </div>
    </div>
  );
}