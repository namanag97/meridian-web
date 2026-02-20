import type { Metadata } from 'next'
import DocsSidebar from '@/components/docs/DocsSidebar'

export const metadata: Metadata = {
  title: { default: 'Documentation', template: '%s · Meridian Docs' },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-14 bg-braun-50 min-h-screen">
      <div className="max-w-7xl mx-auto flex h-[calc(100vh-56px)]">
        <DocsSidebar />
        <div className="flex-1 overflow-y-auto bg-white border-r border-braun-200">
          {children}
        </div>
      </div>
    </div>
  )
}
