import DashboardCard from "@/components/dashboard/DashboardCard";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-white">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <DashboardCard title="Upcoming Rehearsals" value="3" />
        <DashboardCard title="Active Projects" value="2" />
        <DashboardCard title="Health Alerts" value="1" />
        <DashboardCard title="Weekly Sessions" value="5" />
      </div>
    </div>
  );
}