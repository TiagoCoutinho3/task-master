import type { Task } from '../types/task'

export function sortTasksForDisplay(tasks: Task[]): Task[] {
  return [...tasks].sort((a, b) => {
    if (a.starred !== b.starred) return a.starred ? -1 : 1
    if (a.completed !== b.completed) return a.completed ? 1 : -1
    const pri = { high: 0, medium: 1, low: 2 } as const
    if (pri[a.priority] !== pri[b.priority])
      return pri[a.priority] - pri[b.priority]
    const ta = a.dueAt ? new Date(a.dueAt).getTime() : Number.POSITIVE_INFINITY
    const tb = b.dueAt ? new Date(b.dueAt).getTime() : Number.POSITIVE_INFINITY
    return ta - tb
  })
}
