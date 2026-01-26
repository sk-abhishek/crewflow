type DashboardCardProps = {
    title: string;
    value?: string;
    children?: React.ReactNode;
  };
  
  export default function DashboardCard({
    title,
    value,
    children,
  }: DashboardCardProps) {
    return (
      <div className="rounded-xl bg-zinc-900 p-5 shadow-sm border border-zinc-800">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-zinc-400">{title}</h3>
  
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