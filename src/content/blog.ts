import type { ContentBlock } from './types'
export type { ContentBlock } from './types'

export interface BlogPost {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string
  author: { name: string; role: string }
  readTime: number
  featured?: boolean
  content: ContentBlock[]
}

export const posts: BlogPost[] = [
  {
    slug: 'introducing-meridian-2',
    title: 'Introducing Meridian 2.0: Process Intelligence at Scale',
    category: 'Product',
    excerpt:
      "Today we're announcing Meridian 2.0 — rebuilt from the ground up with real-time conformance checking, automated root cause analysis, and a redesigned automation studio.",
    date: '2026-02-10',
    author: { name: 'Naman Agarwal', role: 'Founder & CEO' },
    readTime: 6,
    featured: true,
    content: [
      {
        type: 'p',
        text: "Two years ago, we set out to build the process intelligence platform we wished existed. One that doesn't require a six-month consulting engagement to configure, treats conformance as an operational metric rather than a quarterly audit, and gives engineers the same visibility into business processes that APM tools give into code. Today, we're releasing Meridian 2.0.",
      },
      { type: 'h2', text: "What's new in 2.0" },
      {
        type: 'p',
        text: 'Meridian 2.0 introduces three major capabilities that fundamentally change how teams understand and optimize their processes.',
      },
      { type: 'h3', text: 'Real-time conformance checking' },
      {
        type: 'p',
        text: 'Every case is now evaluated against your reference model in real time. Deviations are flagged immediately — not hours later in a batch report. This changes when you intervene: you act while a case is still in progress, not after it closes.',
      },
      { type: 'h3', text: 'Automated root cause analysis' },
      {
        type: 'p',
        text: "When a case deviates, Meridian 2.0 automatically identifies the most likely root cause using a combination of process variant analysis and ML-based attribution. It surfaces the specific sequence of activities that led to the deviation — no manual drill-down required.",
      },
      { type: 'h3', text: 'Automation Studio v2' },
      {
        type: 'p',
        text: 'Build automation workflows directly on top of your process model. Trigger alerts, route cases, escalate exceptions, and invoke external APIs — all through a visual, no-code interface that understands process state.',
      },
      { type: 'h2', text: 'Availability' },
      {
        type: 'p',
        text: 'Meridian 2.0 is available today for all Pro and Enterprise customers. Free tier users will get access to real-time conformance checking on March 1, 2026.',
      },
    ],
  },
  {
    slug: 'bauhaus-design-analytics',
    title: 'Why We Chose Bauhaus Design Principles for Our Analytics Platform',
    category: 'Design',
    excerpt:
      "Data-dense analytics interfaces tend toward visual noise. We took the opposite direction — here's why Bauhaus minimalism makes complex data more legible, not less.",
    date: '2026-01-28',
    author: { name: 'Alex Chen', role: 'Head of Design' },
    readTime: 8,
    featured: false,
    content: [
      {
        type: 'p',
        text: "When we started designing Meridian, the obvious references were other analytics platforms — dense dashboards, rainbow color palettes, notification bells everywhere. We went a different direction entirely.",
      },
      { type: 'h2', text: 'The Bauhaus argument' },
      {
        type: 'p',
        text: "The Bauhaus school (1919–1933) unified art and industrial design under a single principle: form follows function. Every element must earn its place. Ornament is not decoration — it's noise that competes with the signal you're trying to communicate.",
      },
      {
        type: 'p',
        text: "For a process analytics platform, this translates directly. Every pixel either conveys information or gets in the way of information. We chose to remove anything that wasn't data.",
      },
      { type: 'h2', text: 'Practical implications' },
      {
        type: 'list',
        items: [
          'No drop shadows — borders communicate structure without adding depth illusion',
          'No rounded corners — sharp edges feel precise, like a measurement instrument should',
          'Monospace font for all numeric data — JetBrains Mono aligns numbers and makes scanning faster',
          'One accent color (orange) — used exclusively for interactive or active states',
          'Zero gradients in UI chrome — gradients only appear in data visualizations where they encode meaning',
          'Uppercase tracking-widest for labels — creates hierarchy without relying on weight alone',
        ],
      },
      { type: 'h2', text: 'The result' },
      {
        type: 'p',
        text: "Users consistently describe Meridian as 'easier to read' than competing tools despite handling more data. That's the Bauhaus principle at work — remove friction, let the data speak.",
      },
    ],
  },
  {
    slug: 'techcorp-case-study',
    title: 'From Manual to Automated: How TechCorp Reduced Resolution Time by 47%',
    category: 'Case Study',
    excerpt:
      "TechCorp's operations team was spending 40% of their time on exception handling. Here's how they used Meridian's automation studio to reclaim it.",
    date: '2026-01-15',
    author: { name: 'Priya Sharma', role: 'Customer Success Lead' },
    readTime: 5,
    featured: false,
    content: [
      {
        type: 'p',
        text: "TechCorp processes 15,000 purchase orders per month across 12 regional offices. Before Meridian, their operations team manually reviewed every exception case flagged by their ERP system — a process that consumed 40% of analyst time.",
      },
      { type: 'h2', text: 'The problem' },
      {
        type: 'p',
        text: "Most exceptions followed predictable patterns. The same root causes appeared in roughly 80% of cases. Yet each one required a human to open the case, diagnose it, and route it for resolution — often only to find it was the same issue they'd seen yesterday.",
      },
      { type: 'h2', text: 'The approach' },
      {
        type: 'p',
        text: "Using Meridian's variant analysis, the team identified 6 exception patterns that accounted for 78% of all deviations. They built automation workflows for each one: automatic routing, approval triggers, and escalation rules based on SLA thresholds.",
      },
      { type: 'h2', text: 'Results after 90 days' },
      {
        type: 'list',
        items: [
          '47% reduction in average case resolution time',
          '78% of exceptions now handled without manual review',
          'Analyst time redirected to complex edge cases and process improvement',
          '12% reduction in overall process cycle time',
        ],
      },
      {
        type: 'note',
        text: '"We knew there were patterns, but we couldn\'t see them. Meridian made the invisible visible — and then automatable." — Head of Operations, TechCorp',
      },
    ],
  },
  {
    slug: 'conformance-aware-workflows',
    title: 'Building Conformance-Aware Workflows in Enterprise Systems',
    category: 'Engineering',
    excerpt:
      "A deep dive into how Meridian's conformance engine works, and how to design workflows that remain aligned to your reference model under real-world conditions.",
    date: '2025-12-22',
    author: { name: 'Naman Agarwal', role: 'Founder & CEO' },
    readTime: 10,
    featured: false,
    content: [
      {
        type: 'p',
        text: "Conformance checking is often treated as a post-hoc audit function — you run it on historical logs to understand what happened. Meridian takes a different view: conformance should be part of the operational loop, not a retrospective report.",
      },
      { type: 'h2', text: 'How conformance checking works' },
      {
        type: 'p',
        text: "At its core, conformance checking compares an observed process execution (event log) against a reference model (process model). The degree of fit is expressed as a conformance score between 0 and 1.",
      },
      {
        type: 'code',
        lang: 'typescript',
        text: `// Conformance score computation (simplified)
function computeConformance(trace: Event[], model: ProcessModel): number {
  const alignment = computeAlignment(trace, model)
  const deviationCost = alignment.moves.filter(
    m => m.type !== 'synchronous'
  ).length
  const maxCost = trace.length + model.transitions.length
  return 1 - deviationCost / maxCost
}`,
      },
      { type: 'h2', text: 'Designing conformance-aware workflows' },
      {
        type: 'p',
        text: "The key insight is to treat your reference model as a first-class operational artifact — version-controlled, reviewed, and maintained alongside your procedures and automation rules.",
      },
      {
        type: 'list',
        items: [
          'Version your process models alongside your code in source control',
          'Set conformance thresholds per process, not globally — invoice processing tolerates less deviation than employee onboarding',
          'Use variant analysis to distinguish structural deviations (wrong path) from timing deviations (right path, wrong speed)',
          'Instrument your automation to emit events that feed back into the conformance engine for closed-loop measurement',
        ],
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
