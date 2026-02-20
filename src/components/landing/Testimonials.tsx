'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui'
import { siteConfig } from '@/config/site'

export default function Testimonials() {
  const { sectionIndex, sectionLabel, title, logoStripLabel, logos, items } = siteConfig.testimonials
  const [titleLine1, titleLine2] = title.split('\n')

  return (
    <section className="border-b border-braun-200 bg-braun-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Logo strip */}
        <FadeIn>
          <div className="mb-16 pb-10 border-b border-braun-200">
            <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-8 text-center">
              {logoStripLabel}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {logos.map(name => (
                <span
                  key={name}
                  className="text-sm font-mono font-bold uppercase tracking-widest text-braun-400 hover:text-braun-600 transition-colors duration-300"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Section header */}
        <FadeIn>
          <div className="mb-14">
            <SectionLabel index={sectionIndex} label={sectionLabel} className="mb-5" />
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-braun-900">
              {titleLine1}<br />{titleLine2}
            </h2>
          </div>
        </FadeIn>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-braun-200">
          {items.map((t, i) => (
            <FadeIn key={t.name} delay={i * 120} direction="up">
              <div className="bg-white p-8 flex flex-col h-full hover-lift">
                <blockquote className="text-sm text-braun-600 leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="pt-5 border-t border-braun-100">
                  <div className="text-xs font-semibold text-braun-900">{t.name}</div>
                  <div className="text-[10px] font-mono text-braun-400 uppercase tracking-widest mt-0.5">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
