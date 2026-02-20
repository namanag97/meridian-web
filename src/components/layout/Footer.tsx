import Link from 'next/link'

const cols = [
  {
    heading: 'Product',
    links: [
      { label: 'Features',  href: '/#features' },
      { label: 'Pricing',   href: '/#pricing' },
      { label: 'Blog',      href: '/blog' },
    ],
  },
  {
    heading: 'Docs',
    links: [
      { label: 'Introduction', href: '/docs/introduction' },
      { label: 'Quick Start',  href: '/docs/quick-start' },
      { label: 'REST API',     href: '/docs/api/rest' },
      { label: 'Webhooks',     href: '/docs/api/webhooks' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Blog',    href: '/blog' },
      { label: 'Contact', href: 'mailto:hello@meridian.io' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy',  href: '/privacy' },
      { label: 'Terms',    href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-braun-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-[0.2em] uppercase text-braun-900 hover:text-braun-orange transition-colors"
            >
              MERIDIAN
            </Link>
            <p className="mt-4 text-xs text-braun-500 leading-relaxed max-w-[180px]">
              Process intelligence for teams that operate at scale.
            </p>
            <div className="mt-5 text-[9px] font-mono text-braun-500 uppercase tracking-widest">
              SOC 2 Type II · GDPR
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.heading}>
              <h3 className="text-[9px] font-mono uppercase tracking-widest text-braun-500 mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-xs text-braun-500 hover:text-braun-900 transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-braun-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-[9px] font-mono text-braun-500 uppercase tracking-widest">
            © 2026 Meridian. All rights reserved.
          </p>
          <p className="text-[9px] font-mono text-braun-500 uppercase tracking-widest">
            System status: Operational
          </p>
        </div>
      </div>
    </footer>
  )
}
