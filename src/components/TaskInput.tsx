import type { KeyboardEvent } from "react";
import type { TaskPriority } from "../types/task";
import { IconCoffee, IconFlag, IconPlus, IconZap } from "./icons";

const PRIORITIES: { id: TaskPriority; label: string; Icon: typeof IconZap }[] =
  [
    { id: "high", label: "Alta", Icon: IconZap },
    { id: "medium", label: "Média", Icon: IconFlag },
    { id: "low", label: "Baixa", Icon: IconCoffee },
  ];

type TaskInputProps = {
  value: string;
  dueValue: string;
  priority: TaskPriority;
  onChange: (value: string) => void;
  onDueChange: (value: string) => void;
  onPriorityChange: (p: TaskPriority) => void;
  onSubmit: () => void;
};

export function TaskInput({
  value,
  dueValue,
  priority,
  onChange,
  onDueChange,
  onPriorityChange,
  onSubmit,
}: TaskInputProps) {
  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-muted">
          Prioridade
        </span>
        <div className="flex flex-wrap gap-2">
          {PRIORITIES.map(({ id, label, Icon }) => {
            const active = priority === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onPriorityChange(id)}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition-colors ${
                  active
                    ? "border-accent bg-accent-muted text-accent"
                    : "border-border-subtle bg-charcoal text-muted hover:border-slate-500 hover:text-slate-200"
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <div className="relative min-w-0 flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="O que precisa ser feito?"
            className="h-12 w-full rounded-2xl border border-border-subtle bg-elevated px-4 text-base text-white placeholder:text-muted outline-none transition-[box-shadow,border-color] focus:border-accent focus:ring-2 focus:ring-accent/25"
            autoComplete="off"
          />
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <input
            type="datetime-local"
            value={dueValue}
            onChange={(e) => onDueChange(e.target.value)}
            className="h-12 min-w-0 flex-1 rounded-2xl border border-border-subtle bg-elevated px-3 text-sm text-slate-200 outline-none focus:border-accent focus:ring-2 focus:ring-accent/25 sm:min-w-[200px] sm:flex-none"
          />
          <button
            type="button"
            onClick={onSubmit}
            className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-accent px-6 text-sm font-semibold text-slate-950 shadow-sm transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-8"
          >
            <IconPlus className="h-4 w-4" aria-hidden />
            Nova tarefa
          </button>
        </div>
      </div>
    </div>
  );
}
