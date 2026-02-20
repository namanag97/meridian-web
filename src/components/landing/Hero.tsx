'use client'

import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react'
import { ButtonLink, SectionLabel } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'
import { siteConfig } from '@/config/site'

const trustIcons = [ShieldCheck, Zap, Globe]

const deviations = [
  { id: 'INV-2847', activity: 'Approval skipped',  type: 'error',   time: '2m ago' },
  { id: 'INV-2841', activity: 'SLA threshold hit',  type: 'warning', time: '5m ago' },
  { id: 'INV-2839', activity: 'Route overridden',   type: 'warning', time: '9m ago' },
]

function AppMockup() {
  return (
    <div
      className="border border-braun-200 overflow-hidden bg-white w-full"
      role="img"
      aria-label="Product dashboard preview showing process monitoring"
    >
      {/* Title bar */}
      <div className="h-9 bg-braun-900 flex items-center px-3 gap-2 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 bg-braun-600" />
          <div className="w-2.5 h-2.5 bg-braun-600" />
          <div className="w-2.5 h-2.5 bg-braun-600" />
        </div>
        <span className="flex-1 text-center text-[9px] font-mono text-braun-500 uppercase tracking-widest">
          Invoice Approval — Process Monitor
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-data-positive inline-block animate-pulse" />
          <span className="text-[8px] font-mono text-braun-500 uppercase tracking-widest">Live</span>
        </div>
      </div>

      {/* App body */}
      <div className="flex">
        {/* Micro sidebar */}
        <div className="w-8 bg-braun-900 flex-col items-center py-3 gap-2.5 shrink-0 border-r border-braun-800 hidden sm:flex">
          {[true, false, false, false].map((active, i) => (
            <div key={i} className={`w-3 h-3 ${active ? 'bg-braun-orange' : 'bg-braun-800'}`} />
          ))}
        </div>

        <div className="flex-1 min-w-0">
          {/* KPI strip */}
          <div className="grid grid-cols-3 border-b border-braun-200 divide-x divide-braun-200">
            {[
              { label: 'Cases',       value: '2,847', delta: '+12%',    up: true },
              { label: 'Conformance', value: '94.2%', delta: '↑ 2.1pp', up: true },
              { label: 'Avg. Cycle',  value: '3.2d',  delta: '↓ 0.4d',  up: true },
            ].map(k => (
              <div key={k.label} className="px-2 sm:px-3 py-2.5">
                <div className="text-[7px] sm:text-[7.5px] font-mono uppercase tracking-widest text-braun-500 mb-1">{k.label}</div>
                <div className="text-[13px] sm:text-[15px] font-mono text-braun-900 leading-none tabular-nums">{k.value}</div>
                <div className={`text-[7px] sm:text-[7.5px] font-mono mt-1 ${k.up ? 'text-data-positive' : 'text-data-negative'}`}>
                  {k.delta}
                </div>
              </div>
            ))}
          </div>

          {/* Process map */}
          <div className="bg-braun-50 border-b border-braun-200 px-2 sm:px-3 pt-3 pb-2">
            <div className="text-[7.5px] font-mono uppercase tracking-widest text-braun-500 mb-2">
              Process Flow
            </div>
            <svg viewBox="0 0 350 58" className="w-full" style={{ height: 52 }}>
              {[
                { x: 0,   label: 'Created',  count: '2,847', dark: true  },
                { x: 93,  label: 'Reviewed', count: '2,691', dark: false },
                { x: 186, label: 'Approved', count: '2,203', dark: false },
                { x: 279, label: 'Paid',     count: '1,988', dark: false },
              ].map((n, i) => (
                <g key={i}>
                  <rect x={n.x} y={4} width={70} height={30}
                    fill={n.dark ? '#09090b' : '#ffffff'}
                    stroke={n.dark ? '#09090b' : '#e4e4e7'}
                    strokeWidth="1" />
                  <text x={n.x + 35} y={15} textAnchor="middle" fontSize="6"
                    fill="#71717a" fontFamily="monospace">
                    {n.label}
                  </text>
                  <text x={n.x + 35} y={27} textAnchor="middle" fontSize="8"
                    fill={n.dark ? '#ffffff' : '#09090b'} fontFamily="monospace" fontWeight="600">
                    {n.count}
                  </text>
                </g>
              ))}
              {[70, 163, 256].map((x, i) => (
                <g key={i}>
                  <line x1={x} y1={19} x2={x + 21} y2={19} stroke="#a1a1aa" strokeWidth="1" />
                  <polygon points={`${x + 21},16 ${x + 25},19 ${x + 21},22`} fill="#a1a1aa" />
                </g>
              ))}
              <path d="M 133 34 Q 186 52 239 34" fill="none" stroke="#ea580c"
                strokeWidth="0.9" strokeDasharray="2,1.5" />
              <text x="186" y="58" textAnchor="middle" fontSize="5.5"
                fill="#ea580c" fontFamily="monospace">488 skipped approval</text>
            </svg>
          </div>

          {/* Deviation feed */}
          <div>
            <div className="px-2 sm:px-3 py-1.5 bg-braun-50 border-b border-braun-100">
              <span className="text-[7.5px] font-mono uppercase tracking-widest text-braun-500">
                Recent Deviations
              </span>
            </div>
            {deviations.map((d, i) => (
              <div key={i} className="flex items-center gap-2 px-2 sm:px-3 py-2 border-b border-braun-50 last:border-0">
                <div className={`w-1.5 h-1.5 shrink-0 ${d.type === 'error' ? 'bg-data-negative' : 'bg-data-warning'}`} />
                <span className="text-[7px] sm:text-[8px] font-mono text-braun-500 shrink-0 w-12 sm:w-16">{d.id}</span>
                <span className="text-[8px] sm:text-[8.5px] font-mono text-braun-600 flex-1 truncate">{d.activity}</span>
                <span className="text-[7px] font-mono text-braun-500 shrink-0 hidden sm:block">{d.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-14 bg-braun-50 border-b border-braun-200 overflow-hidden">
      {/* Swiss grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(228,228,231,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(228,228,231,0.55) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] gap-12 xl:gap-20 py-24 lg:py-32 xl:py-40 items-center">

          {/* Left — typography */}
          <div>
            <FadeIn delay={0}>
              <SectionLabel index="01" label="Process Intelligence Platform" className="mb-10" />
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-[clamp(3rem,7vw,6rem)] font-light tracking-tight leading-[0.92] text-braun-900 mb-8">
                Process<br />
                intelligence,<br />
                <span className="text-braun-orange">finally.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-[1.0625rem] text-braun-600 font-light leading-[1.7] max-w-[420px] mb-10">
                Understand how your business processes actually execute — not how you
                think they do. Real-time conformance, automated root-cause analysis,
                and no-code automation. Connected.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-wrap gap-3 mb-14">
                <ButtonLink href="/docs/quick-start" size="lg">
                  Get started free <ArrowRight size={13} />
                </ButtonLink>
                <ButtonLink href="/docs/introduction" variant="secondary" size="lg">
                  Read the docs
                </ButtonLink>
              </div>
            </FadeIn>

            {/* Trust signals */}
            <FadeIn delay={400}>
              <div className="flex flex-wrap gap-6 pt-6 border-t border-braun-200">
                {trust.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon size={11} className="text-braun-500" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-braun-500">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — product mockup */}
          <FadeIn delay={200} direction="left">
            <div>
              <AppMockup />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-braun-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-px bg-braun-200">
          {statsStrip.map((s) => (
            <div key={s.label} className="py-5 px-6 bg-white">
              <div className="text-2xl lg:text-3xl font-mono font-light text-braun-900 tabular-nums">
                {s.value}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-braun-500 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
