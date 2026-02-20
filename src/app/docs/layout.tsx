'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import DocsSidebar from '@/components/docs/DocsSidebar'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  return (
    <div className="pt-14 min-h-screen bg-braun-50">
      {/* Mobile docs nav toggle */}
      <div className="lg:hidden border-b border-braun-200 bg-white px-6 h-11 flex items-center">
        <button
          onClick={() => setSidebarOpen(v => !v)}
          className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-braun-500 hover:text-braun-900 transition-colors"
        >
          {sidebarOpen ? <X size={14} /> : <Menu size={14} />}
          {sidebarOpen ? 'Close menu' : 'Documentation menu'}
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-[calc(56px+44px)]">
          <div className="absolute inset-0 bg-braun-900/20" onClick={() => setSidebarOpen(false)} />
          <div className="relative max-h-[calc(100vh-100px)] max-w-xs bg-white border-r border-braun-200 overflow-y-auto">
            <div onClick={() => setSidebarOpen(false)}>
              <DocsSidebar />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-screen-xl mx-auto flex" style={{ height: 'calc(100vh - 56px)' }}>
        {/* Sidebar — desktop only */}
        <div className="hidden lg:block">
          <DocsSidebar />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-white lg:border-r lg:border-braun-200">
          {children}
        </div>

        {/* Right gutter — only on XL */}
        <div className="hidden xl:block w-64 shrink-0 bg-braun-50" />
      </div>
    </div>
  )
}
