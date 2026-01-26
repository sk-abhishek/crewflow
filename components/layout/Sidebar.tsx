"use client";

import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Rehearsals", href: "/rehearsals" },
  { name: "Projects", href: "/projects" },
  { name: "Health", href: "/health" },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-zinc-900 text-white flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 text-2xl font-bold tracking-wide">
        Crew<span className="text-purple-500">Flow</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 text-xs text-zinc-400">
        © CrewFlow
      </div>
    </aside>
  );
}