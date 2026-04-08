import type { Task } from '../types/task'
import { IconCheckCircle, IconTarget, IconZap } from './icons'

type StatsStripProps = {
  tasks: Task[]
}

export function StatsStrip({ tasks }: StatsStripProps) {
  const total = tasks.length
  const done = tasks.filter((t) => t.completed).length
  const active = total - done
  const starred = tasks.filter((t) => t.starred && !t.completed).length
  const pct = total === 0 ? 0 : Math.round((done / total) * 100)

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-border-subtle bg-elevated p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
            <IconTarget aria-hidden />
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              Progress
            </p>
            <p className="text-lg font-semibold text-white">{pct}% done</p>
          </div>
        </div>
        <div className="hidden h-10 w-px bg-border-subtle sm:block" aria-hidden />
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1.5 text-slate-200">
            <IconZap className="h-4 w-4 text-teal" aria-hidden />
            <span className="tabular-nums font-medium">{active}</span>
            <span className="text-muted">active</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-200">
            <IconCheckCircle className="h-4 w-4 text-accent" aria-hidden />
            <span className="tabular-nums font-medium">{done}</span>
            <span className="text-muted">done</span>
          </span>
          {starred > 0 && (
            <span className="flex items-center gap-1.5 text-amber">
              <span className="text-xs font-semibold">★</span>
              <span className="tabular-nums font-medium">{starred}</span>
              <span className="text-muted">pinned</span>
            </span>
          )}
        </div>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-charcoal sm:max-w-xs">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-teal transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </section>
  )
}
