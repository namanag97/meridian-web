'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Most teams connect their first data source and see a live process map within 30 minutes. No consulting engagement or multi-month implementation required.',
  },
  {
    q: 'What data sources do you support?',
    a: 'Any system that produces event logs — SAP, Salesforce, ServiceNow, Jira, custom databases, and CSV/Parquet uploads. We provide pre-built connectors for the most common platforms and a REST API for everything else.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II certified, GDPR compliant, and offer single-tenant deployment for Enterprise customers.',
  },
  {
    q: 'Can I try it before committing?',
    a: 'Absolutely. The Free tier is free forever with 10,000 events per month. Pro plans include a 14-day trial with full access to all features. No credit card required to start.',
  },
  {
    q: 'What happens when I exceed my event limit?',
    a: 'We never drop your data. Events beyond your plan limit are queued and processed when capacity frees up, or you can upgrade instantly from the dashboard.',
  },
  {
    q: 'Do you offer custom integrations?',
    a: 'Enterprise plans include custom integration development with our engineering team. We also provide webhooks and a comprehensive REST API for self-service integration on all paid plans.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="border-b border-braun-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <FadeIn>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            {/* Left: header */}
            <div>
              <SectionLabel index="05" label="FAQ" className="mb-5" />
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-braun-900 leading-tight">
                Common<br />questions.
              </h2>
              <p className="text-sm text-braun-500 leading-relaxed mt-4 max-w-sm">
                Can&apos;t find what you&apos;re looking for? Reach out to our team — we respond within 24 hours.
              </p>
            </div>

            {/* Right: accordion */}
            <div className="divide-y divide-braun-200 border-t border-b border-braun-200">
              {faqs.map((faq, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <div>
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                      aria-expanded={openIndex === i}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-question-${i}`}
                    >
                      <span className="text-sm font-medium text-braun-900 group-hover:text-braun-orange transition-colors duration-200">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={14}
                        className={cn(
                          'shrink-0 mt-1 text-braun-400 transition-transform duration-300',
                          openIndex === i && 'rotate-180 text-braun-900'
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        openIndex === i ? 'max-h-[500px] pb-5' : 'max-h-0'
                      )}
                    >
                      <p className="text-xs text-braun-500 leading-relaxed pr-8">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
