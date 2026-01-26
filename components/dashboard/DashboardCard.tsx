import { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  icon?: ReactNode;
  value?: string;
  children?: ReactNode;
};

export default function DashboardCard({
  title,
  icon,
  value,
  children,
}: DashboardCardProps) {
  return (
    <div className="rounded-xl bg-zinc-900 p-5 border border-zinc-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-zinc-400">
          {icon}
          <h3 className="text-sm font-medium">{title}</h3>
        </div>

        {value && (
          <span className="text-xl font-semibold text-white">
            {value}
          </span>
        )}
      </div>

      {children}
    </div>
  );
}