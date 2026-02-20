import { forwardRef, type ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

const variantCls: Record<Variant, string> = {
  primary:   'bg-braun-900 text-white border-braun-900 hover:bg-braun-800',
  secondary: 'bg-transparent text-braun-800 border-braun-200 hover:border-braun-900 hover:text-braun-900',
  ghost:     'bg-transparent text-braun-500 border-transparent hover:text-braun-900 hover:bg-braun-50',
}

const sizeCls: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-[10px] gap-1.5',
  md: 'px-5 py-2.5 text-[11px] gap-2',
  lg: 'px-7 py-3.5 text-[11px] gap-2.5',
}

const base =
  'inline-flex items-center justify-center border font-mono font-bold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-braun-900 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variantCls[variant], sizeCls[size], className)}
      {...props}
    >
      {children}
    </button>
  )
)
Button.displayName = 'Button'

/** Use when the button needs to navigate — renders a Next.js Link */
interface ButtonLinkProps {
  href: string
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

export function ButtonLink({ href, variant = 'primary', size = 'md', className, children }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variantCls[variant], sizeCls[size], className)}>
      {children}
    </Link>
  )
}
