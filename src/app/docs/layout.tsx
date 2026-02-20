import type { Metadata } from 'next'
import DocsSidebar from '@/components/docs/DocsSidebar'

export const metadata: Metadata = {
  title: {
    default: 'Documentation',
    template: '%s · Meridian Docs',
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-14 min-h-screen bg-braun-50">
      <div className="max-w-7xl mx-auto flex h-[calc(100vh-56px)]">
        {/* Sidebar */}
        <DocsSidebar />

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
