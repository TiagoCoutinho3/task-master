import { IconBell, IconSearch, IconSettings } from "./icons";

type HeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function Header({ search, onSearchChange }: HeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b border-border-subtle bg-charcoal/95 px-4 backdrop-blur-sm md:px-6">
      <div className="flex min-w-0 flex-1 items-center justify-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent font-semibold tracking-tight">
          TC
        </span>
        <div className="min-w-0">
          <span className="block truncate text-base font-semibold tracking-tight text-white md:text-lg">
            Task {" "}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Master
            </span>
          </span>
          <span className="hidden text-xs text-muted sm:block">
            Organize suas tarefas de forma eficiente e produtiva
          </span>
        </div>
      </div>

      <div className="flex max-w-xl flex-[2] justify-center px-2">
        <label className="relative w-full">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">
            <IconSearch aria-hidden />
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Pesquisar tarefas..."
            className="h-10 w-full rounded-lg border border-border-subtle bg-elevated py-2 pl-10 pr-3 text-sm text-slate-100 placeholder:text-muted outline-none transition-[box-shadow,border-color] focus:border-accent focus:ring-2 focus:ring-accent/25"
          />
        </label>
      </div>

      <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2">
        <button
          type="button"
          aria-label="Notifications"
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-elevated hover:text-slate-200 sm:flex"
        >
          <IconBell aria-hidden />
        </button>
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-gradient-to-br from-accent/30 to-accent/10 text-xs font-bold text-accent ring-2 ring-charcoal"
          title="Profile"
        >
          TC
        </span>
  
      </div>
    </header>
  );
}
