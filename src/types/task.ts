export type TaskFilter = 'all' | 'today' | 'upcoming' | 'completed'

export type TaskPriority = 'low' | 'medium' | 'high'

export type Task = {
  id: string
  title: string
  completed: boolean
  /** ISO 8601 or null */
  dueAt: string | null
  priority: TaskPriority
  starred: boolean
}
