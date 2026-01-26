export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main className="flex-1 p-6 overflow-y-auto bg-zinc-950">
        {children}
      </main>
    );
  }