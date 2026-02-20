import Link from 'next/link'
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react'

function ProductMockup() {
  return (
    <div className="border border-braun-200 bg-white">
      {/* Window chrome */}
      <div className="border-b border-braun-200 px-4 py-2.5 flex items-center justify-between bg-braun-50">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-braun-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-braun-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-braun-200" />
        </div>
        <span className="text-[10px] font-mono text-braun-400 uppercase tracking-widest">
          Invoice Process — Live Monitor
        </span>
        <span className="text-[10px] font-mono text-data-positive">● Live</span>
      </div>

      {/* Process flow SVG */}
      <div className="p-5 bg-white">
        <svg viewBox="0 0 460 90" className="w-full" aria-hidden="true">
          {/* Nodes */}
          {[
            { x: 10,  label: 'Created',  sub: '2,847' },
            { x: 110, label: 'Reviewed', sub: '2,691' },
            { x: 210, label: 'Approved', sub: '2,203' },
            { x: 310, label: 'Paid',     sub: '1,988' },
          ].map((n, i) => (
            <g key={i} transform={`translate(${n.x}, 18)`}>
              <rect width="90" height="36" rx="0" fill="#f4f4f5" stroke="#e4e4e7" strokeWidth="1" />
              <text x="45" y="14" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#52525b" fontWeight="500">
                {n.label}
              </text>
              <text x="45" y="26" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#09090b" fontWeight="700">
                {n.sub}
              </text>
            </g>
          ))}
          {/* Arrows */}
          {[100, 200, 300].map((x, i) => (
            <g key={i}>
              <line x1={x} y1={36} x2={x + 10} y2={36} stroke="#a1a1aa" strokeWidth="1" />
              <polygon points={`${x + 10},33 ${x + 15},36 ${x + 10},39`} fill="#a1a1aa" />
            </g>
          ))}
          {/* Deviation path */}
          <path d="M 155 54 Q 205 80 255 54" fill="none" stroke="#ea580c" strokeWidth="1" strokeDasharray="3,2" />
          <text x="205" y="80" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="#ea580c">
            488 skip approval
          </text>
        </svg>
      </div>

      {/* KPI bar */}
      <div className="border-t border-braun-200 grid grid-cols-3 divide-x divide-braun-200">
        {[
          { value: '94.2%', label: 'Conformance', color: 'text-data-positive' },
          { value: '3.2d',  label: 'Avg duration', color: 'text-braun-900' },
          { value: '488',   label: 'Deviations',   color: 'text-braun-orange' },
        ].map(k => (
          <div key={k.label} className="py-3 text-center">
            <div className={`text-lg font-mono font-bold ${k.color}`}>{k.value}</div>
            <div className="text-[9px] font-mono uppercase tracking-widest text-braun-400 mt-0.5">
              {k.label}
            </div>
          </div>
        ))}
      </div>

      {/* Conformance timeline bars */}
      <div className="border-t border-braun-200 px-5 py-4">
        <div className="text-[9px] font-mono uppercase tracking-widest text-braun-400 mb-2">
          Conformance — last 7 days
        </div>
        <div className="flex items-end gap-1 h-10">
          {[82, 89, 91, 88, 94, 96, 94].map((v, i) => (
            <div
              key={i}
              className="flex-1"
              style={{
                height: `${(v / 100) * 40}px`,
                backgroundColor: v >= 90 ? '#059669' : v >= 85 ? '#d97706' : '#e11d48',
                opacity: 0.8,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const trust = [
  { icon: ShieldCheck, label: 'SOC 2 Type II' },
  { icon: Zap,         label: '<50ms latency' },
  { icon: Globe,       label: '99.9% uptime' },
]

export default function Hero() {
  return (
    <section className="pt-14 bg-braun-50 border-b border-braun-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-20 lg:py-28 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-braun-200 bg-white mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-braun-orange" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-braun-600">
                v2.0 now available
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-braun-900">
              Process intelligence<br />
              for teams that<br />
              <span className="text-braun-orange">operate at scale.</span>
            </h1>

            <p className="mt-6 text-base text-braun-500 leading-relaxed max-w-md">
              Understand how your business processes actually run, measure conformance
              in real time, identify root causes automatically, and automate
              exception handling — without the six-month consulting engagement.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/docs/quick-start"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-braun-900 text-white border border-braun-900 hover:bg-braun-800 transition-colors text-[11px] font-mono font-bold uppercase tracking-widest"
              >
                Get started free
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/docs/introduction"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-braun-800 border border-braun-200 hover:border-braun-900 transition-colors text-[11px] font-mono font-bold uppercase tracking-widest"
              >
                Read the docs
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {trust.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon size={12} className="text-braun-400" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-braun-400">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: product mockup */}
          <div className="relative">
            {/* Decorative grid lines */}
            <div className="absolute -inset-4 pointer-events-none opacity-30"
              style={{
                backgroundImage: 'linear-gradient(#e4e4e7 1px, transparent 1px), linear-gradient(90deg, #e4e4e7 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="relative">
              <ProductMockup />
            </div>
          </div>
        </div>

        {/* Section number / label */}
        <div className="border-t border-braun-200 py-3 flex items-center gap-4">
          <span className="text-[10px] font-mono text-braun-300 tracking-widest">01</span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-braun-300">
            Process Intelligence Platform — Trusted by 500+ operations teams worldwide
          </span>
        </div>
      </div>
    </section>
  )
}
