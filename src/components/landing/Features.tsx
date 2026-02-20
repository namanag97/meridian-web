import {
  Activity,
  CheckCircle,
  GitBranch,
  LayoutDashboard,
  Users,
  Lock,
} from 'lucide-react'

const features = [
  {
    icon: Activity,
    title: 'Real-time monitoring',
    description:
      'Observe every case as it executes. Deviations surface immediately — not in the next batch report.',
    tag: 'Live',
  },
  {
    icon: CheckCircle,
    title: 'Conformance checking',
    description:
      'Measure how closely each case aligns with your reference model. Set thresholds per process, get alerts on breach.',
    tag: 'Core',
  },
  {
    icon: GitBranch,
    title: 'Root cause analysis',
    description:
      'When a case deviates, Meridian identifies the most likely cause automatically using variant analysis and ML attribution.',
    tag: 'AI',
  },
  {
    icon: LayoutDashboard,
    title: 'Custom dashboards',
    description:
      'Compose views from our chart library: process maps, conformance timelines, variant tables, KPI grids.',
    tag: 'Analytics',
  },
  {
    icon: Users,
    title: 'Team collaboration',
    description:
      'Annotate cases, assign investigations, share dashboards. Process intelligence as a team sport.',
    tag: 'Collab',
  },
  {
    icon: Lock,
    title: 'Enterprise security',
    description:
      'SOC 2 Type II certified. Single-tenant deployment available. SSO, RBAC, audit logs included on all paid plans.',
    tag: 'Security',
  },
]

export default function Features() {
  return (
    <section id="features" className="border-b border-braun-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="flex items-start justify-between mb-12 pb-6 border-b border-braun-100">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-3">
              02 — Capabilities
            </div>
            <h2 className="text-2xl font-bold text-braun-900 max-w-sm leading-tight">
              Everything you need to operate with clarity.
            </h2>
          </div>
          <p className="hidden md:block text-sm text-braun-500 max-w-xs leading-relaxed text-right">
            From raw event data to automated exception handling — without stitching together six different tools.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-braun-100">
          {features.map(({ icon: Icon, title, description, tag }) => (
            <div key={title} className="bg-white p-8 group">
              <div className="flex items-start justify-between mb-5">
                <div className="w-9 h-9 border border-braun-200 flex items-center justify-center group-hover:border-braun-900 group-hover:bg-braun-900 transition-colors">
                  <Icon size={15} className="text-braun-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-braun-300 border border-braun-100 px-2 py-0.5">
                  {tag}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-braun-900 mb-2">{title}</h3>
              <p className="text-xs text-braun-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
