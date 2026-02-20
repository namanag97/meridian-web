'use client'

import { FadeIn } from '@/components/ui/FadeIn'

const stats = [
  { value: '2.4B',   label: 'Events processed',     sub: 'total since launch' },
  { value: '47%',    label: 'Avg time saved',        sub: 'on exception handling' },
  { value: '99.97%', label: 'Platform uptime',       sub: 'trailing 12 months' },
  { value: '8min',   label: 'Median time to value',  sub: 'from first data source' },
]

export default function Stats() {
  return (
    <section className="border-b border-braun-200 bg-braun-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-braun-800">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 100} direction="up">
              <div
                className={`py-14 ${i === 0 ? 'pr-8' : 'px-8'} ${i === stats.length - 1 ? 'lg:pl-8 lg:pr-0' : ''}`}
              >
                <div className="text-4xl lg:text-5xl font-mono font-light text-white tabular-nums mb-2">
                  {s.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-1">
                  {s.label}
                </div>
                <div className="text-[10px] font-mono text-braun-600">{s.sub}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
