import { cn } from '@/lib/utils'

type BadgeVariant =
  | 'neutral'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'violet'
  | 'orange'

const variantCls: Record<BadgeVariant, string> = {
  neutral: 'text-braun-600 bg-braun-100 border-braun-200',
  primary: 'text-white bg-braun-900 border-braun-900',
  success: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  warning: 'text-amber-700 bg-amber-50 border-amber-200',
  error:   'text-rose-700 bg-rose-50 border-rose-200',
  violet:  'text-violet-700 bg-violet-50 border-violet-200',
  orange:  'text-braun-orange bg-orange-50 border-orange-200',
}

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

export function Badge({ variant = 'neutral', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center border rounded-sm px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest',
        variantCls[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
