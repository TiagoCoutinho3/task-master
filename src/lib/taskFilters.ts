import type { Task, TaskFilter } from "../types/task";

function startOfDay(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function endOfDay(d: Date): Date {
  const x = new Date(d);
  x.setHours(23, 59, 59, 999);
  return x;
}

export function filterTasksByCategory(
  tasks: Task[],
  filter: TaskFilter,
): Task[] {
  const now = new Date();
  const sod = startOfDay(now);
  const eod = endOfDay(now);

  switch (filter) {
    case "all":
      return tasks;
    case "completed":
      return tasks.filter((t) => t.completed);
    case "today": {
      return tasks.filter((t) => {
        if (!t.dueAt) return false;
        const due = new Date(t.dueAt);
        return due >= sod && due <= eod;
      });
    }
    case "upcoming": {
      return tasks.filter((t) => {
        if (!t.dueAt || t.completed) return false;
        return new Date(t.dueAt) > eod;
      });
    }
    default:
      return tasks;
  }
}

export function searchTasks(tasks: Task[], query: string): Task[] {
  const q = query.trim().toLowerCase();
  if (!q) return tasks;
  return tasks.filter((t) => t.title.toLowerCase().includes(q));
}

export function formatDueLabel(iso: string | null): string {
  if (!iso) return "Sem data";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "Sem data";
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
}

export function countByFilter(tasks: Task[], filter: TaskFilter): number {
  return filterTasksByCategory(tasks, filter).length;
}
