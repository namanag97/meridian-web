'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Features', href: '/#features' },
  { label: 'Docs', href: '/docs/introduction' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/#pricing' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-braun-200">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono font-bold text-sm tracking-widest uppercase text-braun-900 hover:text-braun-orange transition-colors"
        >
          MERIDIAN
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'text-[11px] font-mono uppercase tracking-widest transition-colors',
                pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href.replace('/#', '/')))
                  ? 'text-braun-900'
                  : 'text-braun-500 hover:text-braun-900'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/docs/introduction"
            className="text-[11px] font-mono uppercase tracking-widest text-braun-500 hover:text-braun-900 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/docs/quick-start"
            className="px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-widest bg-braun-900 text-white border border-braun-900 hover:bg-braun-800 transition-colors"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 text-braun-600 hover:text-braun-900"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-braun-200 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[11px] font-mono uppercase tracking-widest text-braun-600 hover:text-braun-900 transition-colors py-1"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-braun-100 flex flex-col gap-3">
            <Link
              href="/docs/introduction"
              className="text-[11px] font-mono uppercase tracking-widest text-braun-500"
              onClick={() => setOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/docs/quick-start"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-widest bg-braun-900 text-white text-center"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
