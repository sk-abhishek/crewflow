import DashboardCard from "@/components/dashboard/DashboardCard";
import {
  Calendar,
  FolderKanban,
  HeartPulse,
  Activity,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-white">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <DashboardCard
          title="Upcoming Rehearsals"
          icon={<Calendar size={18} />}
        >
          <ul className="text-sm text-zinc-300 space-y-1">
            <li>• Wed 7pm – Studio A</li>
            <li>• Fri 6pm – Studio C</li>
            <li>• Sun 4pm – Main Hall</li>
          </ul>
        </DashboardCard>

        <DashboardCard
          title="Active Projects"
          icon={<FolderKanban size={18} />}
          value="2"
        >
          <p className="text-sm text-zinc-400">
            Competition + Music Video
          </p>
        </DashboardCard>

        <DashboardCard
          title="Health Alerts"
          icon={<HeartPulse size={18} />}
          value="1"
        >
          <p className="text-sm text-red-400">
            Knee injury (Rest advised)
          </p>
        </DashboardCard>

        <DashboardCard
          title="Weekly Load"
          icon={<Activity size={18} />}
          value="5"
        >
          <p className="text-sm text-zinc-400">
            Sessions this week
          </p>
        </DashboardCard>
      </div>
    </div>
  );
}