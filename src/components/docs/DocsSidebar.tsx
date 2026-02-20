'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { navigation } from '@/content/docs'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

/**
 * DocsSidebar — Swiss grid document navigation.
 *
 * Design decisions (aligned with DS):
 * - Section labels: 9px mono uppercase tracked — same as DS table headers
 * - Active item: left accent line (braun-orange) + text-braun-900
 *   (NOT bg-braun-900/white — that's for app shell, not document nav)
 * - Inactive: text-braun-400, hover: text-braun-900
 * - Hover background: bg-braun-50 — same as DS nav hover
 * - Dividers: border-braun-100 between sections
 * - Section dot indicator: matches DS sidebar group dot pattern
 */
export default function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 shrink-0 flex flex-col bg-white border-r border-braun-200 overflow-y-auto">
      {/* Sidebar header */}
      <div className="px-5 py-5 border-b border-braun-100">
        <div className="text-[10px] font-mono uppercase tracking-widest text-braun-500">
          Documentation
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-1" aria-label="Documentation navigation">
        {navigation.map((section, si) => (
          <div key={section.title}>
            {/* Section divider — not for first section */}
            {si > 0 && <div className="h-px bg-braun-100 mx-2 my-3" />}

            {/* Section label */}
            <div className="flex items-center gap-2 px-2 mb-1.5">
              {/* Colour dot — matches DS sidebar group dots */}
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0 bg-braun-200"
                aria-hidden="true"
              />
              <span className="text-[9px] font-mono uppercase tracking-widest text-braun-400">
                {section.title}
              </span>
            </div>

            {/* Page links */}
            <ul className="space-y-px">
              {section.pages.map(page => {
                const href = `/docs/${page.slug.join('/')}`
                const active = pathname === href

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        'group flex items-center gap-2.5 px-2 py-1.5 text-xs transition-colors duration-150',
                        active
                          ? // Active: left accent line, dark text — document navigation pattern
                            'border-l-2 border-braun-orange pl-[calc(0.5rem-2px)] text-braun-900 font-medium bg-braun-50'
                          : 'border-l-2 border-transparent pl-[calc(0.5rem-2px)] text-braun-400 hover:text-braun-900 hover:bg-braun-50'
                      )}
                    >
                      {page.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Sidebar footer */}
      <div className="px-5 py-4 border-t border-braun-100">
        <div className="text-[9px] font-mono text-braun-500 uppercase tracking-widest">
          {siteConfig.docsVersion} &middot; {siteConfig.name} Docs
        </div>
      </div>
    </aside>
  )
}
