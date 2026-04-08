import { useCallback, useEffect, useMemo, useState } from 'react'
import { EmptyState } from './components/EmptyState'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { StatsStrip } from './components/StatsStrip'
import { TaskInput } from './components/TaskInput'
import { TaskItem } from './components/TaskItem'
import {
  countByFilter,
  filterTasksByCategory,
  searchTasks,
} from './lib/taskFilters'
import { sortTasksForDisplay } from './lib/sortTasks'
import { loadTasks, saveTasks } from './lib/storage'
import type { Task, TaskFilter, TaskPriority } from './types/task'

function createId(): string {
  return crypto.randomUUID()
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks())
  const [filter, setFilter] = useState<TaskFilter>('all')
  const [search, setSearch] = useState('')
  const [draft, setDraft] = useState('')
  const [dueDraft, setDueDraft] = useState('')
  const [priorityDraft, setPriorityDraft] = useState<TaskPriority>('medium')

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const counts = useMemo(
    () => ({
      all: countByFilter(tasks, 'all'),
      today: countByFilter(tasks, 'today'),
      upcoming: countByFilter(tasks, 'upcoming'),
      completed: countByFilter(tasks, 'completed'),
    }),
    [tasks],
  )

  const visibleTasks = useMemo(() => {
    const byCat = filterTasksByCategory(tasks, filter)
    const searched = searchTasks(byCat, search)
    return sortTasksForDisplay(searched)
  }, [tasks, filter, search])

  const addTask = useCallback(() => {
    const title = draft.trim()
    if (!title) return
    let dueAt: string | null = null
    if (dueDraft) {
      const d = new Date(dueDraft)
      if (!Number.isNaN(d.getTime())) dueAt = d.toISOString()
    }
    setTasks((prev) => [
      ...prev,
      {
        id: createId(),
        title,
        completed: false,
        dueAt,
        priority: priorityDraft,
        starred: false,
      },
    ])
    setDraft('')
    setDueDraft('')
    setPriorityDraft('medium')
  }, [draft, dueDraft, priorityDraft])

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    )
  }, [])

  const patchTask = useCallback(
    (id: string, patch: Partial<Omit<Task, 'id'>>) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...patch } : t)),
      )
    },
    [],
  )

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const hasSearch = search.trim().length > 0

  return (
    <div className="flex min-h-screen flex-col bg-charcoal">
      <Header search={search} onSearchChange={setSearch} />

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <Sidebar active={filter} onChange={setFilter} counts={counts} />

        <main className="flex min-h-0 flex-1 flex-col gap-6 overflow-auto p-4 md:p-8">
          <StatsStrip tasks={tasks} />

          <TaskInput
            value={draft}
            dueValue={dueDraft}
            priority={priorityDraft}
            onChange={setDraft}
            onDueChange={setDueDraft}
            onPriorityChange={setPriorityDraft}
            onSubmit={addTask}
          />

          {visibleTasks.length === 0 ? (
            <EmptyState filter={filter} hasSearch={hasSearch} />
          ) : (
            <ul className="flex flex-col gap-3">
              {visibleTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onPatch={patchTask}
                  onDelete={deleteTask}
                />
              ))}
            </ul>
          )}
        </main>
      </div>
    </div>
  )
}
