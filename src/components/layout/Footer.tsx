import Link from 'next/link'

const cols = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Changelog', href: '/blog' },
      { label: 'Roadmap', href: '/blog' },
    ],
  },
  {
    heading: 'Docs',
    links: [
      { label: 'Introduction', href: '/docs/introduction' },
      { label: 'Quick Start', href: '/docs/quick-start' },
      { label: 'REST API', href: '/docs/api/rest' },
      { label: 'Webhooks', href: '/docs/api/webhooks' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '/blog' },
      { label: 'Careers', href: '/blog' },
      { label: 'Contact', href: '/blog' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '/blog' },
      { label: 'Terms', href: '/blog' },
      { label: 'Security', href: '/blog' },
      { label: 'SLA', href: '/blog' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-braun-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-mono font-bold text-sm tracking-widest uppercase text-braun-900"
            >
              MERIDIAN
            </Link>
            <p className="mt-3 text-xs text-braun-500 leading-relaxed max-w-[200px]">
              Process intelligence for teams that operate at scale.
            </p>
            <p className="mt-4 text-[10px] font-mono text-braun-400 uppercase tracking-widest">
              SOC 2 Type II · GDPR
            </p>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.heading}>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-xs text-braun-600 hover:text-braun-900 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-braun-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-[10px] font-mono text-braun-400 uppercase tracking-widest">
            © 2026 Meridian. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-braun-400 uppercase tracking-widest">
            Built with Braun/Bauhaus design principles.
          </p>
        </div>
      </div>
    </footer>
  )
}
