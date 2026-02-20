/**
 * ProseRenderer — renders ContentBlock[] using proper DS components.
 * Used by both blog posts and docs pages to guarantee visual consistency.
 *
 * Swiss design principles applied:
 * - em-dash list bullets (not default disc)
 * - font-mono section separators on h2
 * - CodeBlock with DS terminal chrome
 * - Callout with left-border semantic colours
 * - No gratuitous decoration — typography does all the work
 */
import { CodeBlock } from './CodeBlock'
import { Callout } from './Callout'
import type { ContentBlock } from '@/content/blog'   // same shape used in docs.ts

interface ProseRendererProps {
  blocks: ContentBlock[]
}

export function ProseRenderer({ blocks }: ProseRendererProps) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          /* ── Headings ──────────────────────────────────────────────── */
          case 'h2':
            return (
              <h2
                key={i}
                className="text-base font-semibold text-braun-900 tracking-tight border-b border-braun-200 pb-2.5 pt-6 mt-10 first:mt-0 leading-snug"
              >
                {block.text}
              </h2>
            )

          case 'h3':
            return (
              <h3
                key={i}
                className="text-sm font-semibold text-braun-800 pt-2 mt-6 first:mt-0 leading-snug"
              >
                {block.text}
              </h3>
            )

          /* ── Body ──────────────────────────────────────────────────── */
          case 'p':
            return (
              <p
                key={i}
                className="text-sm text-braun-600 leading-[1.75]"
              >
                {block.text}
              </p>
            )

          /* ── List — em-dash bullets (DS pattern) ───────────────────── */
          case 'list':
            return (
              <ul key={i} className="space-y-2">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {/* Em-dash bullet — Braun/Bauhaus list style */}
                    <span className="font-mono text-braun-300 shrink-0 select-none mt-[0.1em]">
                      —
                    </span>
                    <span className="text-sm text-braun-600 leading-[1.75]">{item}</span>
                  </li>
                ))}
              </ul>
            )

          /* ── Code — DS terminal component ──────────────────────────── */
          case 'code':
            return (
              <CodeBlock
                key={i}
                code={block.text ?? ''}
                lang={block.lang ?? 'code'}
              />
            )

          /* ── Callouts ──────────────────────────────────────────────── */
          case 'note':
            return (
              <Callout key={i} type="note">
                {block.text}
              </Callout>
            )

          case 'warning':
            return (
              <Callout key={i} type="warning">
                {block.text}
              </Callout>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
