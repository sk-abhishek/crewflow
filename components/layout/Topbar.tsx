"use client";

export default function Topbar() {
  return (
    <header className="h-16 w-full bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-6">
      {/* Page title */}
      <h1 className="text-lg font-semibold text-white">
        Dashboard
      </h1>

      {/* User avatar */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-zinc-700 flex items-center justify-center text-sm font-medium text-white">
          AS
        </div>
      </div>
    </header>
  );
}