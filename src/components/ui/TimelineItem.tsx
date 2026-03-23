import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import type { QualificationEntry } from "@/types/portfolio";

export default function TimelineItem({ entry }: Readonly<{ entry: QualificationEntry }>) {
  const isLeft = entry.side === "left";

  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4 items-start sm:grid-cols-[1fr_auto_1fr] sm:gap-x-6">
      {/* Left content — sm+ only */}
      <div className="hidden sm:block">
        {isLeft && <EntryContent entry={entry} />}
      </div>

      {/* Center dot + line */}
      <div className="flex flex-col items-center">
        <span className="inline-block w-3 h-3 rounded-full bg-(--primary) mt-1 shrink-0" />
        {entry.showLine && (
          <span className="block w-px flex-1 min-h-8 bg-(--primary) -mt-1" />
        )}
      </div>

      {/* Right content — always on mobile, sm+ only if right side */}
      <div>
        <div className="sm:hidden">
          <EntryContent entry={entry} />
        </div>
        <div className="hidden sm:block">
          {!isLeft && <EntryContent entry={entry} />}
        </div>
      </div>
    </div>
  );
}

function EntryContent({ entry }: Readonly<{ entry: QualificationEntry }>) {
  return (
    <div>
      <h3 className="text-sm font-medium text-(--title-color)">{entry.title}</h3>
      <span className="inline-block text-xs text-(--text-color) mb-4">{entry.institution}</span>
      <div className="flex items-center gap-1 text-xs text-(--text-color-light)">
        <CalendarMonthIcon sx={{ fontSize: "0.9rem" }} />
        {entry.period}
      </div>
    </div>
  );
}
