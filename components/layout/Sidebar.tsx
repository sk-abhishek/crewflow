"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Rehearsals", href: "/rehearsals" },
  { name: "Projects", href: "/projects" },
  { name: "Health", href: "/health" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-zinc-900 text-white flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 text-2xl font-bold tracking-wide">
        Crew<span className="text-purple-500">Flow</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 text-xs text-zinc-400">
        © CrewFlow
      </div>
    </aside>
  );
}