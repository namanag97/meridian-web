import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="border-b border-braun-200 bg-braun-900">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-[10px] font-mono uppercase tracking-widest text-braun-600 mb-6">
            05 — Get started
          </div>
          <h2 className="text-3xl font-bold text-white leading-tight mb-4">
            Start understanding your processes.<br />
            Today, not next quarter.
          </h2>
          <p className="text-braun-400 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Connect your first data source in minutes. No consultants, no lengthy onboarding, no annual contract required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/docs/quick-start"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-braun-900 border border-white hover:bg-braun-100 transition-colors text-[11px] font-mono font-bold uppercase tracking-widest"
            >
              Start free — no credit card
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/docs/introduction"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-braun-400 border border-braun-700 hover:border-braun-500 hover:text-white transition-colors text-[11px] font-mono font-bold uppercase tracking-widest"
            >
              Read the docs
            </Link>
          </div>
          <p className="mt-6 text-[10px] font-mono text-braun-700 uppercase tracking-widest">
            14-day trial on Pro · Cancel anytime · SOC 2 certified
          </p>
        </div>
      </div>
    </section>
  )
}
