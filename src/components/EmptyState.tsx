import type { TaskFilter } from '../types/task'
import { IconClipboard } from './icons'

type EmptyStateProps = {
  filter: TaskFilter
  hasSearch: boolean
}

function messageFor(filter: TaskFilter, hasSearch: boolean): string {
  if (hasSearch) return 'Nenhuma tarefa combina com a busca.'
  switch (filter) {
    case 'today':
      return 'Nada para hoje. Adicione uma tarefa com vencimento hoje.'
    case 'upcoming':
      return 'Sem tarefas futuras. Defina uma data para ver aqui.'
    case 'completed':
      return 'Ainda nao ha tarefas concluidas.'
    default:
      return 'Comece criando sua primeira tarefa acima.'
  }
}

export function EmptyState({ filter, hasSearch }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border-subtle bg-elevated/40 px-4 py-16 text-center">
      <span className="rounded-2xl border border-border-subtle bg-charcoal p-6 text-accent">
        <IconClipboard className="text-accent" aria-hidden />
      </span>
      <p className="max-w-sm text-sm leading-relaxed text-muted">
        {messageFor(filter, hasSearch)}
      </p>
    </div>
  )
}
