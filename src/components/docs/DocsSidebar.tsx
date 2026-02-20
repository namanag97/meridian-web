'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/content/docs'
import { cn } from '@/lib/utils'

export default function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 flex-shrink-0 border-r border-braun-200 overflow-y-auto py-8 px-4 bg-white">
      {navigation.map(section => (
        <div key={section.title} className="mb-6">
          <div className="text-[9px] font-mono uppercase tracking-widest text-braun-400 px-2 mb-2">
            {section.title}
          </div>
          <ul className="flex flex-col gap-0.5">
            {section.pages.map(page => {
              const href = `/docs/${page.slug.join('/')}`
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'block px-2 py-1.5 text-xs transition-colors rounded-none',
                      active
                        ? 'bg-braun-900 text-white font-medium'
                        : 'text-braun-600 hover:text-braun-900 hover:bg-braun-50'
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
    </aside>
  )
}
