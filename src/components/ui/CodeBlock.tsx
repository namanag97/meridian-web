/**
 * CodeBlock — matches the DS terminal/processing view pattern exactly.
 * Dark bg-braun-900, header bar with language label, monospace body.
 */
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  lang?: string
  className?: string
}

export function CodeBlock({ code, lang = 'code', className }: CodeBlockProps) {
  // Normalise: trim leading/trailing blank lines
  const trimmed = code.replace(/^\n+|\n+$/g, '')

  return (
    <div className={cn('border border-braun-200 overflow-hidden', className)}>
      {/* Header bar — bg-braun-800 matches DS terminal header */}
      <div className="flex items-center justify-between px-4 py-2 bg-braun-800 border-b border-braun-700">
        <span className="text-[9px] font-mono uppercase tracking-widest text-braun-400">
          {lang}
        </span>
        {/* Decorative dots — matches DS window chrome */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-sm bg-braun-700" />
          <span className="w-1.5 h-1.5 rounded-sm bg-braun-700" />
          <span className="w-1.5 h-1.5 rounded-sm bg-braun-700" />
        </div>
      </div>

      {/* Code body — bg-braun-900, JetBrains Mono */}
      <pre className="bg-braun-900 px-5 py-4 overflow-x-auto m-0">
        <code
          className="text-braun-200 font-mono text-[0.8125rem] leading-[1.75]"
          style={{ fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)' }}
        >
          {trimmed}
        </code>
      </pre>
    </div>
  )
}
