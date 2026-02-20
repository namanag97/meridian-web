import type { Metadata } from 'next'
import DocsSidebar from '@/components/docs/DocsSidebar'

export const metadata: Metadata = {
  title: { default: 'Documentation', template: '%s · Meridian Docs' },
}

/**
 * DocsLayout — fixed sidebar + scrollable content.
 *
 * Grid: [sidebar 256px] [content flex-1]
 *
 * The sidebar is sticky and scrolls independently.
 * The content area carries the page content at a controlled reading width.
 * Both share the same 56px top offset from the fixed Navbar.
 */
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-14 min-h-screen bg-braun-50">
      <div className="max-w-screen-xl mx-auto flex" style={{ height: 'calc(100vh - 56px)' }}>
        {/* Sidebar — fixed height, scrolls internally */}
        <DocsSidebar />

        {/* Content — scrolls, white bg, border-right creates the inner panel */}
        <div className="flex-1 overflow-y-auto bg-white border-r border-braun-200">
          {children}
        </div>

        {/* Right gutter — braun-50 fills the remaining space on wide screens */}
        <div className="hidden xl:block w-64 shrink-0 bg-braun-50" />
      </div>
    </div>
  )
}
