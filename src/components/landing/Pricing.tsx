'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui'
import { siteConfig } from '@/config/site'

export default function Pricing() {
  const { sectionIndex, sectionLabel, title, footnote, tiers } = siteConfig.pricing

  return (
    <section id="pricing" className="border-b border-braun-200 bg-braun-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <FadeIn>
          <div className="mb-12 pb-8 border-b border-braun-200">
            <SectionLabel index={sectionIndex} label={sectionLabel} className="mb-5" />
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-braun-900">
              {title}
            </h2>
          </div>
        </FadeIn>

        {/* Tier grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-braun-200 divide-y md:divide-y-0 md:divide-x divide-braun-200">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 120} direction="up">
              <div
                className={`flex flex-col p-8 h-full ${tier.featured ? 'bg-braun-900' : 'bg-white'}`}
              >
                {tier.featured && (
                  <div className="text-[9px] font-mono uppercase tracking-widest text-braun-orange border border-braun-orange/40 px-2 py-0.5 self-start mb-5">
                    Most popular
                  </div>
                )}

                {/* Name */}
                <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${tier.featured ? 'text-braun-500' : 'text-braun-400'}`}>
                  {tier.name}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-4xl font-mono font-light tabular-nums ${tier.featured ? 'text-white' : 'text-braun-900'}`}>
                    {tier.monthlyPrice}
                  </span>
                  {tier.period && (
                    <span className={`text-xs font-mono ${tier.featured ? 'text-braun-500' : 'text-braun-400'}`}>
                      {tier.period}
                    </span>
                  )}
                </div>

                <p className={`text-xs leading-relaxed mb-7 ${tier.featured ? 'text-braun-400' : 'text-braun-500'}`}>
                  {tier.description}
                </p>

                <Link
                  href={tier.cta.href}
                  className={[
                    'px-4 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest border text-center transition-colors mb-8 block',
                    tier.featured
                      ? 'bg-white text-braun-900 border-white hover:bg-braun-100'
                      : 'bg-braun-900 text-white border-braun-900 hover:bg-braun-800',
                  ].join(' ')}
                >
                  {tier.cta.label}
                </Link>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mt-auto">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={12}
                        className={`mt-0.5 shrink-0 ${tier.featured ? 'text-braun-orange' : 'text-braun-900'}`}
                      />
                      <span className={`text-xs leading-relaxed ${tier.featured ? 'text-braun-400' : 'text-braun-600'}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-center text-[10px] font-mono text-braun-400 uppercase tracking-widest">
          All plans include SSL encryption, automatic backups, and GDPR-compliant processing.
        </p>
      </div>
    </section>
  )
}
