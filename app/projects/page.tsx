import { FolderKanban, Calendar, Flag } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Megamalai Showcase",
    type: "Competition",
    deadline: "Mar 10",
    status: "Active",
  },
  {
    id: 2,
    name: "Crew Promo Video",
    type: "Video",
    deadline: "Feb 25",
    status: "Planning",
  },
  {
    id: 3,
    name: "College Cultural Show",
    type: "Stage Performance",
    deadline: "Jan 30",
    status: "Completed",
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-white">
        Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl bg-zinc-900 p-5 border border-zinc-800 flex items-center justify-between hover:bg-zinc-800 transition-colors"
          >
            {/* Left info */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-medium">
                <FolderKanban size={16} />
                {project.name}
              </div>

              <div className="text-sm text-zinc-400">
                {project.type}
              </div>

              <div className="flex items-center gap-1 text-sm text-zinc-400">
                <Calendar size={14} />
                Deadline: {project.deadline}
              </div>
            </div>

            {/* Status */}
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                project.status === "Active"
                  ? "bg-purple-500/10 text-purple-400"
                  : project.status === "Planning"
                  ? "bg-yellow-500/10 text-yellow-400"
                  : "bg-green-500/10 text-green-400"
              }`}
            >
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}