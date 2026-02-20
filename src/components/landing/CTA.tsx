import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="border-b border-braun-200 bg-braun-900">
      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* Section label */}
        <div className="text-[10px] font-mono uppercase tracking-widest text-braun-700 mb-10">
          05 — Get started
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
          {/* Left: headline */}
          <div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[0.95] mb-6">
              Start understanding<br />your processes.<br />
              <span className="text-braun-orange">Today.</span>
            </h2>
            <p className="text-braun-500 text-base font-light leading-relaxed max-w-md">
              Connect your first data source in minutes. No consultants,
              no lengthy onboarding, no annual contract required.
            </p>
          </div>

          {/* Right: actions */}
          <div className="flex flex-col gap-3">
            <Link
              href="/docs/quick-start"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-braun-900 border border-white hover:bg-braun-100 transition-colors text-[11px] font-mono font-bold uppercase tracking-widest whitespace-nowrap"
            >
              Start free — no credit card
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/docs/introduction"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-braun-500 border border-braun-800 hover:border-braun-600 hover:text-braun-300 transition-colors text-[11px] font-mono font-bold uppercase tracking-widest"
            >
              Read the docs
            </Link>
            <p className="text-[10px] font-mono text-braun-700 uppercase tracking-widest text-center mt-1">
              14-day trial on Pro · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
