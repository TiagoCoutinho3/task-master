import type { Task, TaskPriority } from '../types/task'

const KEY = 'task-master-pro-tasks'

function isPriority(x: unknown): x is TaskPriority {
  return x === 'low' || x === 'medium' || x === 'high'
}

export function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.map(normalizeRow).filter((t): t is Task => t !== null)
  } catch {
    return []
  }
}

export function saveTasks(tasks: Task[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(tasks))
  } catch {
    /* ignore */
  }
}

function normalizeRow(x: unknown): Task | null {
  if (x === null || typeof x !== 'object') return null
  const o = x as Record<string, unknown>
  if (
    typeof o.id !== 'string' ||
    typeof o.title !== 'string' ||
    typeof o.completed !== 'boolean'
  )
    return null
  if (o.dueAt !== null && typeof o.dueAt !== 'string') return null
  return {
    id: o.id,
    title: o.title,
    completed: o.completed,
    dueAt: o.dueAt === null || typeof o.dueAt === 'string' ? o.dueAt : null,
    priority: isPriority(o.priority) ? o.priority : 'medium',
    starred: typeof o.starred === 'boolean' ? o.starred : false,
  }
}
