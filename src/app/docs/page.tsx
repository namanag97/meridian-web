import type { Metadata } from 'next'
import Link from 'next/link'
import { navigation } from '@/content/docs'
import { BookOpen, Cpu, Code2, Compass } from 'lucide-react'

export const metadata: Metadata = { title: 'Documentation' }

const sectionIcons = [BookOpen, Cpu, Code2, Compass]

const sectionDescriptions: Record<string, string> = {
  'Getting Started': 'Set up your account, install the collector SDK, and emit your first process event in under 5 minutes.',
  'Core Concepts': 'Understand process mining, conformance checking, and case management — the foundations of process intelligence.',
  'API Reference': 'Complete reference for the REST API and webhook integrations. Authenticate, ingest events, and query cases.',
  'Guides': 'Step-by-step walkthroughs for integrations, custom dashboards, and advanced configuration.',
}

export default function DocsIndexPage() {
  return (
    <div className="px-8 lg:px-16 py-16">
      {/* Header */}
      <div className="mb-12 pb-8 border-b border-braun-200">
        <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-4">
          Reference
        </div>
        <h1 className="text-2xl lg:text-3xl font-light tracking-tight text-braun-900 mb-3">
          Documentation
        </h1>
        <p className="text-sm text-braun-500 font-light leading-relaxed max-w-lg">
          Everything you need to get started with Meridian — from installation to building custom dashboards and automation workflows.
        </p>
      </div>

      {/* Section cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-braun-200">
        {navigation.map((section, i) => {
          const Icon = sectionIcons[i]
          const firstPage = section.pages[0]
          const href = `/docs/${firstPage.slug.join('/')}`

          return (
            <div key={section.title} className="bg-white p-8 group">
              {/* Icon */}
              <div className="w-9 h-9 border border-braun-200 flex items-center justify-center mb-5 group-hover:border-braun-900 group-hover:bg-braun-900 transition-colors duration-300">
                <Icon size={15} className="text-braun-500 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Section title */}
              <h2 className="text-sm font-semibold text-braun-900 tracking-tight mb-2">
                {section.title}
              </h2>

              {/* Description */}
              <p className="text-xs text-braun-500 leading-relaxed mb-5">
                {sectionDescriptions[section.title]}
              </p>

              {/* Page links */}
              <ul className="space-y-1.5 mb-6">
                {section.pages.map(page => (
                  <li key={page.slug.join('/')}>
                    <Link
                      href={`/docs/${page.slug.join('/')}`}
                      className="text-xs text-braun-400 hover:text-braun-900 transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-braun-200 shrink-0" />
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Section CTA */}
              <Link
                href={href}
                className="text-[10px] font-mono font-bold uppercase tracking-widest text-braun-500 hover:text-braun-900 transition-colors duration-200"
              >
                Start reading &rarr;
              </Link>
            </div>
          )
        })}
      </div>

      {/* Quick links footer */}
      <div className="mt-8 pt-6 border-t border-braun-200 flex flex-wrap gap-6">
        <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400">
          Quick links
        </div>
        <Link
          href="/docs/quick-start"
          className="text-[10px] font-mono uppercase tracking-widest text-braun-500 hover:text-braun-900 transition-colors"
        >
          Quick Start
        </Link>
        <Link
          href="/docs/api/rest"
          className="text-[10px] font-mono uppercase tracking-widest text-braun-500 hover:text-braun-900 transition-colors"
        >
          REST API
        </Link>
        <Link
          href="/docs/guides/integrations"
          className="text-[10px] font-mono uppercase tracking-widest text-braun-500 hover:text-braun-900 transition-colors"
        >
          Integrations
        </Link>
      </div>
    </div>
  )
}
