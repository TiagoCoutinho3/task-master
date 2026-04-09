import { useEffect, useRef, useState } from "react";
import type { Task, TaskPriority } from "../types/task";
import { formatDueLabel } from "../lib/taskFilters";
import {
  IconCoffee,
  IconFlag,
  IconPencil,
  IconStar,
  IconTrash,
  IconZap,
} from "./icons";

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onPatch: (id: string, patch: Partial<Omit<Task, "id">>) => void;
  onDelete: (id: string) => void;
};

const PRI_META: Record<
  TaskPriority,
  { label: string; Icon: typeof IconZap; className: string }
> = {
  high: {
    label: "Alta",
    Icon: IconZap,
    className: "border-rose-500/40 bg-rose-500/10 text-rose-300",
  },
  medium: {
    label: "Média",
    Icon: IconFlag,
    className: "border-accent/40 bg-accent-muted text-accent",
  },
  low: {
    label: "Baixa",
    Icon: IconCoffee,
    className: "border-slate-500/50 bg-slate-800/80 text-slate-300",
  },
};

function cyclePriority(p: TaskPriority): TaskPriority {
  if (p === "low") return "medium";
  if (p === "medium") return "high";
  return "low";
}

export function TaskItem({ task, onToggle, onPatch, onDelete }: TaskItemProps) {
  const [editing, setEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(task.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  function commitTitle() {
    const next = draftTitle.trim();
    if (next && next !== task.title) onPatch(task.id, { title: next });
    else setDraftTitle(task.title);
    setEditing(false);
  }

  function cancelEdit() {
    setDraftTitle(task.title);
    setEditing(false);
  }

  const pri = PRI_META[task.priority];
  const PriIcon = pri.Icon;

  return (
    <li
      className={`group relative flex items-center gap-3 rounded-3xl border border-border-subtle bg-elevated p-4 shadow-sm transition-[background-color,box-shadow] hover:bg-slate-900 hover:shadow-lg sm:gap-4 ${
        task.completed ? "opacity-90" : ""
      }`}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={task.completed}
        aria-label={task.completed ? "Marcar incompleta" : "Marcar concluída"}
        onClick={() => onToggle(task.id)}
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
          task.completed
            ? "border-accent bg-accent text-slate-950"
            : "border-slate-500 text-slate-200 hover:border-accent/70"
        }`}
      >
        {task.completed && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>

      <button
        type="button"
        aria-label={task.starred ? "Remover destaque" : "Destacar tarefa"}
        onClick={() => onPatch(task.id, { starred: !task.starred })}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
          task.starred
            ? "text-amber"
            : "text-muted opacity-60 hover:opacity-100 group-hover:text-amber/80"
        }`}
      >
        <IconStar
          filled={task.starred}
          className="h-[18px] w-[18px]"
          aria-hidden
        />
      </button>

      <div className="min-w-0 flex-1">
        {editing ? (
          <input
            ref={inputRef}
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
            onBlur={commitTitle}
            onKeyDown={(e) => {
              if (e.key === "Enter") commitTitle();
              if (e.key === "Escape") cancelEdit();
            }}
            className="w-full rounded-lg border border-border-subtle bg-charcoal px-2 py-1 text-base text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/25"
          />
        ) : (
          <p
            className={`truncate text-base ${
              task.completed
                ? "text-muted line-through decoration-slate-500"
                : "font-medium text-white"
            }`}
          >
            {task.title}
          </p>
        )}
      </div>

      <button
        type="button"
        title="Clique para mudar prioridade"
        onClick={() =>
          onPatch(task.id, { priority: cyclePriority(task.priority) })
        }
        className={`flex shrink-0 items-center gap-1 rounded-full border px-2 py-1 text-xs font-semibold transition-opacity ${pri.className} ${
          task.completed ? "opacity-50" : ""
        }`}
      >
        <PriIcon className="h-3.5 w-3.5" aria-hidden />
        {pri.label}
      </button>

      <span
        className={`shrink-0 rounded-full border px-2 py-1 text-xs font-medium font-mono ${
          task.completed
            ? "border-border-subtle bg-charcoal text-slate-500"
            : "border-accent/30 bg-accent-muted text-accent"
        }`}
      >
        {formatDueLabel(task.dueAt)}
      </span>

      <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
        <button
          type="button"
          aria-label="Editar titulo"
          onClick={() => {
            setDraftTitle(task.title);
            setEditing(true);
          }}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-charcoal hover:text-slate-200"
        >
          <IconPencil aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Excluir tarefa"
          onClick={() => onDelete(task.id)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-red-950/50 hover:text-red-400"
        >
          <IconTrash aria-hidden />
        </button>
      </div>
    </li>
  );
}
