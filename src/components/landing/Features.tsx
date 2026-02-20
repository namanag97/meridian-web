'use client'

import { Activity, CheckCircle, GitBranch, LayoutDashboard, Users, Lock } from 'lucide-react'
import { SectionLabel } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'
import { siteConfig } from '@/config/site'

const featureIcons = [Activity, CheckCircle, GitBranch, LayoutDashboard, Users, Lock]

export default function Features() {
  const { sectionIndex, sectionLabel, title, subtitle, items } = siteConfig.features
  const [titleLine1, titleLine2] = title.split('\n')

  return (
    <section id="features" className="border-b border-braun-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Section header */}
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-8 mb-16 pb-10 border-b border-braun-200">
            <div>
              <SectionLabel index={sectionIndex} label={sectionLabel} className="mb-5" />
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-braun-900 leading-tight">
                {titleLine1}<br />{titleLine2}
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-sm text-braun-500 leading-relaxed max-w-sm lg:ml-auto">
                {subtitle}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-braun-100">
          {items.map((feature, i) => {
            const Icon = featureIcons[i] ?? Activity
            return (
              <FadeIn key={feature.title} delay={i * 80} direction="up">
                <div className="bg-white p-8 group cursor-default h-full">
                  <div className="w-9 h-9 border border-braun-200 flex items-center justify-center mb-6 group-hover:border-braun-900 group-hover:bg-braun-900 transition-colors duration-300">
                    <Icon size={15} className="text-braun-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-braun-900 mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-xs text-braun-500 leading-relaxed">{feature.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
