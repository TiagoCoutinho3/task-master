import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function IconSparkles({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M12.5 3 11 8.6 5 10.1 10 13.8 9 19 13.5 15.8 19 17 15 12 19 7.5 13.5 8.8 12.5 3Z" />
      <path d="M5 4.5 4 7" />
      <path d="M20 15.5 18.5 17" />
      <path d="M3.5 13.5 6 14" />
      <path d="M17.5 4.5 18.5 7" />
    </svg>
  )
}

export function IconInbox({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M4 7.5 2.5 12v5.5a1 1 0 0 0 1 1H20.5a1 1 0 0 0 1-1V12L20 7.5" />
      <path d="M7 7.5h10l-2 3.5H9l-2-3.5Z" />
    </svg>
  )
}

export function IconCalendar({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M5 7.5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V7.5Z" />
      <path d="M7 4.5v3" />
      <path d="M17 4.5v3" />
      <path d="M5 10.5h14" />
    </svg>
  )
}

export function IconCalendarClock({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M5 7.5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V7.5Z" />
      <path d="M7 4.5v3" />
      <path d="M17 4.5v3" />
      <path d="M5 10.5h14" />
      <circle cx="16" cy="16" r="4" />
      <path d="M16 13.5v2.5" />
      <path d="M16 16h2" />
    </svg>
  )
}

export function IconCheckCircle({ className, ...rest }: IconProps) {
  const maskId = `mask-check-${Math.random().toString(36).slice(2, 8)}`

  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <defs>
        <mask id={maskId}>
          <rect width="24" height="24" fill="white" />
          <path d="M7.5 12.5 10.5 15.5 16.5 9.5" fill="black" stroke="none" />
        </mask>
      </defs>
      <circle cx="12" cy="12" r="10" fill="currentColor" mask={`url(#${maskId})`} />
      <circle cx="12" cy="12" r="10" fill="none" />
    </svg>
  )
}

export function IconSearch({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m18.5 18.5-4-4" />
    </svg>
  )
}

export function IconBell({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M6 8c0-3 1-5 6-5s6 2 6 5c0 6 2 8 2 8H4s2-2 2-8Z" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </svg>
  )
}

export function IconSettings({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19 11.5 21 11 19 10.5" />
      <path d="M5 11.5 3 11 5 10.5" />
      <path d="M12 5 12 3" />
      <path d="M12 21 12 19" />
      <path d="M17.5 18.5 16 17" />
      <path d="M6.5 6.5 8 5" />
    </svg>
  )
}

export function IconZap({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M13 2 7.5 13h4.5l-1 9 7.5-10.5H13l1-9Z" />
    </svg>
  )
}

export function IconFlag({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M4 22V6c3-1 4-1 7 0s4 1 7 0v10c-3 1-4 1-7 0s-4-1-7 0" />
    </svg>
  )
}

export function IconCoffee({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M18 8h1a3 3 0 0 1 0 6h-1" />
      <path d="M5 8h11v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z" />
      <path d="M7 4v4" />
      <path d="M11 4v4" />
    </svg>
  )
}

type StarProps = Omit<IconProps, 'fill'> & { filled?: boolean }

export function IconStar({ className, filled, ...rest }: StarProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M12 3.5 14.2 9.5 20.5 10.3 15.5 14.5 16.8 20.6 12 17.5 7.2 20.6 8.5 14.5 3.5 10.3 9.8 9.5 12 3.5Z" />
    </svg>
  )
}

export function IconClipboard({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M8 3.5h8c.6 0 1 .4 1 1v1.5H7V4.5c0-.6.4-1 1-1Z" />
      <path d="M6 5.5h12c.6 0 1 .4 1 1v13c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-13c0-.6.4-1 1-1Z" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
    </svg>
  )
}

export function IconTarget({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12.5" cy="11.8" r="6" />
      <circle cx="11.5" cy="11.5" r="2" />
    </svg>
  )
}

export function IconPencil({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M7 19 4 20l1-3 9-9 3 3-9 9Z" />
      <path d="M14 6 18 10" />
    </svg>
  )
}

export function IconTrash({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  )
}

export function IconPlus({ className, ...rest }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}
