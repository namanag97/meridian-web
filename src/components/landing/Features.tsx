'use client'

import { Activity, CheckCircle, GitBranch, LayoutDashboard, Users, Lock } from 'lucide-react'
import { SectionLabel } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'

const features = [
  {
    icon: Activity,
    title: 'Real-time monitoring',
    description: 'Every case evaluated as it runs. Deviations surface in milliseconds — not in the next batch report. Intervene while the case is still open.',
  },
  {
    icon: CheckCircle,
    title: 'Conformance checking',
    description: 'Measure how closely each execution aligns with your reference model. Set thresholds per process; get alerts the moment a case crosses them.',
  },
  {
    icon: GitBranch,
    title: 'Root cause analysis',
    description: 'When a case deviates, the cause is identified automatically — using variant analysis and ML attribution. No manual drill-down required.',
  },
  {
    icon: LayoutDashboard,
    title: 'Custom dashboards',
    description: 'Compose views from our chart library: process maps, conformance timelines, variant tables, KPI grids. Embed anywhere via signed iframe.',
  },
  {
    icon: Users,
    title: 'Team collaboration',
    description: 'Annotate cases, assign investigations, share dashboards. Process intelligence is a team sport — tooling should reflect that.',
  },
  {
    icon: Lock,
    title: 'Enterprise security',
    description: 'SOC 2 Type II certified. Single-tenant deployment available. SSO, RBAC, and full audit logs on all paid plans.',
  },
]

export default function Features() {
  return (
    <section id="features" className="border-b border-braun-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Section header */}
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-8 mb-16 pb-10 border-b border-braun-200">
            <div>
              <SectionLabel index="02" label="Capabilities" className="mb-5" />
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-braun-900 leading-tight">
                Everything you need<br />to operate with clarity.
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-sm text-braun-500 leading-relaxed max-w-sm lg:ml-auto">
                From raw event data to automated exception handling — without stitching
                together six different tools or waiting on a consulting engagement.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-braun-100">
          {features.map(({ icon: Icon, title, description }, i) => (
            <FadeIn key={title} delay={i * 80} direction="up">
              <div className="bg-white p-8 group cursor-default h-full">
                <div className="w-9 h-9 border border-braun-200 flex items-center justify-center mb-6 group-hover:border-braun-900 group-hover:bg-braun-900 transition-colors duration-300">
                  <Icon size={15} className="text-braun-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-braun-900 mb-2 tracking-tight">{title}</h3>
                <p className="text-xs text-braun-500 leading-relaxed">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
