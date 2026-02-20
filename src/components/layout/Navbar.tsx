'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { useTheme } from '@/components/ui/ThemeProvider'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function isActive(href: string) {
    if (href.startsWith('/#')) return false
    return pathname === href || pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white border-b border-braun-200'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-mono font-bold text-xs tracking-[0.2em] uppercase text-braun-900 hover:text-braun-orange transition-colors duration-300"
        >
          {siteConfig.name.toUpperCase()}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {siteConfig.navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'text-[10px] font-mono uppercase tracking-widest transition-colors duration-200',
                isActive(l.href)
                  ? 'text-braun-900'
                  : 'text-braun-400 hover:text-braun-900'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 border border-braun-200 hover:border-braun-900 transition-colors text-braun-500 hover:text-braun-900"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <Link
            href={siteConfig.ctaLinks.signIn.href}
            className="text-[10px] font-mono uppercase tracking-widest text-braun-400 hover:text-braun-900 transition-colors duration-200"
          >
            {siteConfig.ctaLinks.signIn.label}
          </Link>
          <Link
            href={siteConfig.ctaLinks.getStarted.href}
            className="px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest bg-braun-900 text-white border border-braun-900 hover:bg-braun-800 transition-colors duration-200"
          >
            {siteConfig.ctaLinks.getStarted.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-braun-500 hover:text-braun-900 transition-colors"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden border-t border-braun-200 bg-white overflow-hidden transition-all duration-300',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {siteConfig.navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[10px] font-mono uppercase tracking-widest text-braun-500 hover:text-braun-900 transition-colors py-1"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-braun-100 flex flex-col gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 border border-braun-200 hover:border-braun-900 transition-colors text-braun-500 hover:text-braun-900 self-start"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <Link
              href={siteConfig.ctaLinks.signIn.href}
              className="text-[10px] font-mono uppercase tracking-widest text-braun-400"
              onClick={() => setOpen(false)}
            >
              {siteConfig.ctaLinks.signIn.label}
            </Link>
            <Link
              href={siteConfig.ctaLinks.getStarted.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest bg-braun-900 text-white border border-braun-900 text-center"
            >
              {siteConfig.ctaLinks.getStarted.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
