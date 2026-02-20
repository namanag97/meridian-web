import Link from 'next/link'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For individual analysts and small teams getting started with process intelligence.',
    cta: { label: 'Start free', href: '/docs/quick-start' },
    featured: false,
    features: [
      'Up to 10,000 events / month',
      '1 process model',
      '7-day event history',
      'Process discovery',
      'Basic conformance dashboard',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per seat / month',
    description: 'For operations teams that need real-time monitoring and automation.',
    cta: { label: 'Start 14-day trial', href: '/docs/quick-start' },
    featured: true,
    features: [
      'Unlimited events',
      'Up to 20 process models',
      '90-day event history',
      'Real-time conformance checking',
      'Root cause analysis',
      'Automation Studio',
      'Custom dashboards',
      'API + webhooks',
      'Email & Slack support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations with compliance requirements and custom deployment needs.',
    cta: { label: 'Talk to sales', href: '/blog' },
    featured: false,
    features: [
      'Everything in Pro',
      'Unlimited models & history',
      'Single-tenant deployment',
      'SSO / SAML',
      'RBAC & audit logs',
      'Custom data retention',
      'Dedicated Slack channel',
      'SLA guarantee',
      'Custom integrations',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-braun-200 bg-braun-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-braun-200">
          <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-3">
            04 — Pricing
          </div>
          <h2 className="text-2xl font-bold text-braun-900">Simple, transparent pricing.</h2>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-braun-200">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={[
                'p-8 flex flex-col',
                tier.featured
                  ? 'bg-braun-900 text-white border-x border-braun-800 -mx-px relative z-10'
                  : 'bg-white',
                i === 0 ? '' : 'border-l border-braun-200',
              ].join(' ')}
            >
              {tier.featured && (
                <div className="text-[9px] font-mono uppercase tracking-widest text-braun-orange border border-braun-orange px-2 py-0.5 self-start mb-4">
                  Most popular
                </div>
              )}

              <div className="mb-1">
                <span className={`text-[10px] font-mono uppercase tracking-widest ${tier.featured ? 'text-braun-400' : 'text-braun-400'}`}>
                  {tier.name}
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className={`text-3xl font-mono font-bold ${tier.featured ? 'text-white' : 'text-braun-900'}`}>
                  {tier.price}
                </span>
                {tier.price !== 'Custom' && (
                  <span className={`text-xs font-mono ${tier.featured ? 'text-braun-400' : 'text-braun-400'}`}>
                    /{tier.period}
                  </span>
                )}
              </div>
              <p className={`text-xs leading-relaxed mb-6 ${tier.featured ? 'text-braun-400' : 'text-braun-500'}`}>
                {tier.description}
              </p>

              <Link
                href={tier.cta.href}
                className={[
                  'px-4 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest border text-center transition-colors mb-8',
                  tier.featured
                    ? 'bg-white text-braun-900 border-white hover:bg-braun-100'
                    : 'bg-braun-900 text-white border-braun-900 hover:bg-braun-800',
                ].join(' ')}
              >
                {tier.cta.label}
              </Link>

              <ul className="flex flex-col gap-2.5 mt-auto">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={12}
                      className={`mt-0.5 flex-shrink-0 ${tier.featured ? 'text-braun-orange' : 'text-braun-900'}`}
                    />
                    <span className={`text-xs ${tier.featured ? 'text-braun-300' : 'text-braun-600'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-braun-400 font-mono">
          All plans include SSL, automatic backups, and GDPR-compliant data processing.
        </p>
      </div>
    </section>
  )
}
