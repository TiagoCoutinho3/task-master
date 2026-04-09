import type { TaskFilter } from "../types/task";
import {
  IconCalendar,
  IconCalendarClock,
  IconCheckCircle,
  IconInbox,
} from "./icons";

const NAV: {
  id: TaskFilter;
  label: string;
  Icon: typeof IconInbox;
}[] = [
  { id: "all", label: "Todas as tarefas", Icon: IconInbox },
  { id: "today", label: "Hoje", Icon: IconCalendar },
  { id: "upcoming", label: "Por vir", Icon: IconCalendarClock },
  { id: "completed", label: "Completas", Icon: IconCheckCircle },
];

type SidebarProps = {
  active: TaskFilter;
  onChange: (filter: TaskFilter) => void;
  counts: Record<TaskFilter, number>;
};

export function Sidebar({ active, onChange, counts }: SidebarProps) {
  return (
    <aside className="flex w-full shrink-0 flex-col gap-2 border-b border-border-subtle bg-charcoal p-4 md:w-60 md:border-b-0 md:border-r">
      <nav className="flex flex-row gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
        {NAV.map(({ id, label, Icon }) => {
          const isActive = active === id;
          const count = counts[id];
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className={`flex min-w-0 shrink-0 items-center gap-2 rounded-3xl px-3 py-2.5 text-left text-sm font-medium transition-colors md:w-full ${
                isActive
                  ? "bg-accent-muted text-accent shadow-sm ring-1 ring-accent/25"
                  : "text-slate-300 hover:bg-elevated hover:text-slate-100"
              } `}
            >
              <Icon
                className={`shrink-0 ${isActive ? "text-accent" : "text-slate-400"}`}
                aria-hidden
              />
              <span className="min-w-0 flex-1 truncate">{label}</span>
              <span
                className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-mono tabular-nums ${
                  isActive
                    ? "bg-charcoal/50 text-accent"
                    : "bg-elevated text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
