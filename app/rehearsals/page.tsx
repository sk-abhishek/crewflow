import { Calendar, MapPin, Users } from "lucide-react";

const rehearsals = [
  {
    id: 1,
    date: "Wed 14 Feb",
    time: "7:00 – 9:00 PM",
    location: "Studio A",
    status: "Confirmed",
  },
  {
    id: 2,
    date: "Fri 16 Feb",
    time: "6:00 – 8:00 PM",
    location: "Studio C",
    status: "Pending",
  },
  {
    id: 3,
    date: "Sun 18 Feb",
    time: "4:00 – 6:00 PM",
    location: "Main Hall",
    status: "Confirmed",
  },
];

export default function RehearsalsPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-white">
        Rehearsals
      </h2>

      <div className="space-y-4">
        {rehearsals.map((rehearsal) => (
          <div
            key={rehearsal.id}
            className="flex items-center justify-between rounded-xl bg-zinc-900 p-5 border border-zinc-800"
          >
            {/* Left info */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-medium">
                <Calendar size={16} />
                {rehearsal.date}
              </div>

              <div className="text-sm text-zinc-400">
                {rehearsal.time}
              </div>

              <div className="flex items-center gap-1 text-sm text-zinc-400">
                <MapPin size={14} />
                {rehearsal.location}
              </div>
            </div>

            {/* Right status */}
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                rehearsal.status === "Confirmed"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-yellow-500/10 text-yellow-400"
              }`}
            >
              {rehearsal.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}