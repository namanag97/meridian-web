'use client'

import { useState, useEffect, useRef } from 'react'
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
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const filteredNavigation = query
    ? navigation
        .map(section => ({
          ...section,
          pages: section.pages.filter(page =>
            page.title.toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter(section => section.pages.length > 0)
    : navigation

  return (
    <aside className="w-64 shrink-0 flex flex-col bg-white border-r border-braun-200 overflow-y-auto">
      {/* Sidebar header */}
      <div className="px-5 py-5 border-b border-braun-100">
        <div className="text-[10px] font-mono uppercase tracking-widest text-braun-500">
          Documentation
        </div>
        <div className="mt-3 relative">
          <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-braun-400" />
          <input
            ref={searchRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search docs..."
            className="w-full bg-braun-50 border border-braun-200 pl-8 pr-8 py-2 text-xs text-braun-900 placeholder:text-braun-400 focus:border-braun-900 focus:ring-0 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-braun-400 hover:text-braun-900"
            >
              <X size={12} />
            </button>
          ) : (
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] font-mono text-braun-400 border border-braun-200 px-1 py-0.5">
              ⌘K
            </kbd>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-1" aria-label="Documentation navigation">
        {filteredNavigation.length === 0 && (
          <div className="px-5 py-8 text-center">
            <p className="text-[10px] font-mono text-braun-400 uppercase tracking-widest">No results found</p>
          </div>
        )}
        {filteredNavigation.map((section, si) => (
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
