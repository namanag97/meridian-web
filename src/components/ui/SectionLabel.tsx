/**
 * SectionLabel — the "01 — Capabilities" numbered label pattern
 * used consistently across landing, blog, docs headers.
 */
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  index?: string     // e.g. "01"
  label: string      // e.g. "Capabilities"
  className?: string
}

export function SectionLabel({ index, label, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {index && (
        <>
          <span className="text-[10px] font-mono text-braun-500 tabular-nums">{index}</span>
          <span className="h-px w-6 bg-braun-200 inline-block" />
        </>
      )}
      <span className="text-[10px] font-mono uppercase tracking-widest text-braun-500">
        {label}
      </span>
    </div>
  )
}
