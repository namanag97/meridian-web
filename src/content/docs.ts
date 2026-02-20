export type { ContentBlock } from './types'

export interface DocPage {
  slugParts: string[]
  title: string
  description: string
  content: ContentBlock[]
}

export interface NavSection {
  title: string
  pages: Array<{ title: string; slug: string[] }>
}

export const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    pages: [
      { title: 'Introduction', slug: ['introduction'] },
      { title: 'Quick Start', slug: ['quick-start'] },
      { title: 'Installation', slug: ['installation'] },
    ],
  },
  {
    title: 'Core Concepts',
    pages: [
      { title: 'Process Mining', slug: ['concepts', 'process-mining'] },
      { title: 'Conformance Checking', slug: ['concepts', 'conformance'] },
      { title: 'Case Management', slug: ['concepts', 'cases'] },
    ],
  },
  {
    title: 'API Reference',
    pages: [
      { title: 'REST API', slug: ['api', 'rest'] },
      { title: 'Webhooks', slug: ['api', 'webhooks'] },
    ],
  },
  {
    title: 'Guides',
    pages: [
      { title: 'Integrations', slug: ['guides', 'integrations'] },
      { title: 'Custom Dashboards', slug: ['guides', 'dashboards'] },
    ],
  },
]

const docPages: DocPage[] = [
  {
    slugParts: ['introduction'],
    title: 'Introduction',
    description: 'Learn what Meridian is and how process intelligence can help your team.',
    content: [
      {
        type: 'p',
        text: 'Meridian is a process intelligence platform that helps operations and engineering teams understand, monitor, and improve their business processes using event data from the systems they already run.',
      },
      { type: 'h2', text: 'Key capabilities' },
      {
        type: 'list',
        items: [
          'Process discovery — automatically reconstruct your actual process from event logs',
          'Conformance checking — measure how closely execution aligns with your reference model in real time',
          'Root cause analysis — identify why cases deviate and what drives performance variance',
          'Automation Studio — build no-code workflows triggered by process events and conformance thresholds',
          'Real-time monitoring — observe cases as they execute, not just after the fact',
        ],
      },
      { type: 'h2', text: 'How it works' },
      {
        type: 'p',
        text: 'Meridian ingests event data from your operational systems (ERP, CRM, BPM, or custom apps) via our event collector SDK or REST API. It reconstructs process instances (cases), compares them against your reference models, and surfaces insights through dashboards, alerts, and APIs.',
      },
      {
        type: 'note',
        text: 'Meridian is not a BPM execution engine — it observes and analyzes processes but does not run them. Think of it as deep instrumentation for your existing operational systems.',
      },
      { type: 'h2', text: 'Who is it for?' },
      {
        type: 'list',
        items: [
          'Operations teams who need visibility into process performance and exceptions',
          'Process analysts who want to move from spreadsheet analysis to live dashboards',
          'Engineering teams building automation on top of business processes',
          'Compliance teams who need to demonstrate process adherence',
        ],
      },
    ],
  },
  {
    slugParts: ['quick-start'],
    title: 'Quick Start',
    description: 'Get Meridian up and running in under 5 minutes.',
    content: [
      {
        type: 'p',
        text: 'This guide will walk you through connecting your first data source, uploading a process model, and viewing your first conformance dashboard.',
      },
      { type: 'h2', text: '1. Create a project' },
      {
        type: 'p',
        text: 'Log in to the Meridian dashboard and click "New Project". Give it a name and select your industry template (or start blank).',
      },
      { type: 'h2', text: '2. Install the collector' },
      {
        type: 'code',
        lang: 'bash',
        text: `npm install @meridian/collector

# Initialize in your app
import { MeridianCollector } from '@meridian/collector'

const collector = new MeridianCollector({
  apiKey: process.env.MERIDIAN_API_KEY,
  projectId: 'your-project-id',
})`,
      },
      { type: 'h2', text: '3. Emit your first event' },
      {
        type: 'code',
        lang: 'typescript',
        text: `// Emit a process event
await collector.event({
  caseId: 'INV-2026-001',      // unique identifier for this process instance
  activity: 'Invoice Created',  // what happened
  timestamp: new Date(),
  attributes: {
    amount: 15000,
    vendor: 'Acme Corp',
    region: 'EMEA',
  },
})`,
      },
      { type: 'h2', text: '4. Upload your process model' },
      {
        type: 'p',
        text: 'Upload a BPMN 2.0 file via the dashboard, or define your reference model using the visual model editor. Meridian will immediately start evaluating incoming cases against it.',
      },
      {
        type: 'note',
        text: "Don't have a model yet? Meridian can discover a process model from your event data automatically using the Process Discovery feature.",
      },
    ],
  },
  {
    slugParts: ['installation'],
    title: 'Installation',
    description: 'Detailed installation and configuration instructions for all environments.',
    content: [
      { type: 'h2', text: 'Requirements' },
      {
        type: 'list',
        items: [
          'Node.js 18+ (for the JavaScript SDK)',
          'A Meridian account (free tier available)',
          'API key from the dashboard → Settings → API Keys',
        ],
      },
      { type: 'h2', text: 'JavaScript / TypeScript' },
      {
        type: 'code',
        lang: 'bash',
        text: `npm install @meridian/collector
# or
yarn add @meridian/collector`,
      },
      { type: 'h2', text: 'Python' },
      {
        type: 'code',
        lang: 'bash',
        text: `pip install meridian-collector`,
      },
      { type: 'h2', text: 'Go' },
      {
        type: 'code',
        lang: 'bash',
        text: `go get github.com/meridian-platform/collector-go`,
      },
      { type: 'h2', text: 'Environment variables' },
      {
        type: 'code',
        lang: 'bash',
        text: `MERIDIAN_API_KEY=mk_live_xxxxxxxxxxxx
MERIDIAN_PROJECT_ID=proj_xxxxxxxxxxxx
MERIDIAN_ENDPOINT=https://ingest.meridian.io  # optional, defaults to hosted`,
      },
      {
        type: 'warning',
        text: 'Never commit your API key to source control. Use environment variables or a secrets manager.',
      },
    ],
  },
  {
    slugParts: ['concepts', 'process-mining'],
    title: 'Process Mining',
    description: 'Understand how Meridian discovers and analyzes your business processes.',
    content: [
      {
        type: 'p',
        text: "Process mining is a family of techniques that extract process knowledge from event logs — the digital traces left by your operational systems. Meridian uses process mining to give you a ground-truth view of how your processes actually run, rather than how you think they run.",
      },
      { type: 'h2', text: 'Event logs' },
      {
        type: 'p',
        text: 'An event log is a collection of events, where each event records: a case ID (which process instance this belongs to), an activity name (what happened), a timestamp, and optional attributes.',
      },
      { type: 'h2', text: 'Process discovery' },
      {
        type: 'p',
        text: "Meridian's discovery algorithm analyzes your event log and constructs a process model that represents the actual flow of activities — including all variants, loops, and parallel paths. This is your 'as-is' process.",
      },
      { type: 'h2', text: 'Process variants' },
      {
        type: 'p',
        text: "A variant is a unique sequence of activities observed in your log. Most processes have a 'happy path' (the most common variant) and a long tail of exception variants. Variant analysis helps you understand where most of your cases go, and where they deviate.",
      },
    ],
  },
  {
    slugParts: ['concepts', 'conformance'],
    title: 'Conformance Checking',
    description: 'Measure how closely your process executions align with your reference model.',
    content: [
      {
        type: 'p',
        text: "Conformance checking compares an observed process execution against a reference model and quantifies the deviation. The result is a conformance score between 0 (completely different from model) and 1 (perfect alignment).",
      },
      { type: 'h2', text: 'Alignment-based conformance' },
      {
        type: 'p',
        text: "Meridian uses alignment-based conformance, which finds the optimal 'alignment' between the observed trace and the model — the minimum-cost sequence of moves that transforms one into the other. Moves that appear in both the trace and model are synchronous (conformant). Moves only in the trace are log moves (deviation). Moves only in the model are model moves (skipped steps).",
      },
      { type: 'h2', text: 'Setting thresholds' },
      {
        type: 'p',
        text: "Every process has a different tolerance for deviation. Meridian lets you set conformance thresholds per process. Cases below the threshold trigger alerts and automation rules.",
      },
      {
        type: 'note',
        text: 'Start with a loose threshold (e.g., 0.75) and tighten it as you understand your baseline conformance. Setting it too strict initially will generate alert noise.',
      },
    ],
  },
  {
    slugParts: ['concepts', 'cases'],
    title: 'Case Management',
    description: 'How Meridian groups events into cases and tracks them through your process.',
    content: [
      {
        type: 'p',
        text: "A case is a single instance of a process — one invoice, one customer order, one support ticket. Meridian groups events into cases using the case ID you provide when emitting events.",
      },
      { type: 'h2', text: 'Case lifecycle' },
      {
        type: 'list',
        items: [
          'Open — the case has received at least one event and has not yet completed',
          'Completed — the case has reached a configured end activity',
          'Deviated — the case has a conformance score below your threshold',
          'SLA breach — the case exceeded its configured time limit',
        ],
      },
      { type: 'h2', text: 'Case attributes' },
      {
        type: 'p',
        text: "Attributes are key-value pairs attached to events that Meridian aggregates at the case level. Use them to filter, segment, and analyze cases — by region, amount, priority, or any dimension that matters to your process.",
      },
    ],
  },
  {
    slugParts: ['api', 'rest'],
    title: 'REST API',
    description: 'Complete reference for the Meridian REST API.',
    content: [
      {
        type: 'p',
        text: 'The Meridian REST API lets you ingest events, query cases, retrieve conformance scores, and manage your process models programmatically.',
      },
      { type: 'h2', text: 'Base URL' },
      {
        type: 'code',
        lang: 'text',
        text: 'https://api.meridian.io/v1',
      },
      { type: 'h2', text: 'Authentication' },
      {
        type: 'p',
        text: 'All API requests require a Bearer token. Pass your API key in the Authorization header.',
      },
      {
        type: 'code',
        lang: 'bash',
        text: `curl https://api.meridian.io/v1/cases \\
  -H "Authorization: Bearer mk_live_xxxxxxxxxxxx"`,
      },
      { type: 'h2', text: 'Ingest an event' },
      {
        type: 'code',
        lang: 'bash',
        text: `POST /v1/events

{
  "projectId": "proj_xxxx",
  "caseId": "INV-2026-001",
  "activity": "Invoice Created",
  "timestamp": "2026-02-10T09:15:00Z",
  "attributes": {
    "amount": 15000,
    "vendor": "Acme Corp"
  }
}`,
      },
      { type: 'h2', text: 'Query cases' },
      {
        type: 'code',
        lang: 'bash',
        text: `GET /v1/cases?projectId=proj_xxxx&status=deviated&limit=50`,
      },
    ],
  },
  {
    slugParts: ['api', 'webhooks'],
    title: 'Webhooks',
    description: 'Receive real-time notifications when process events occur.',
    content: [
      {
        type: 'p',
        text: 'Webhooks let Meridian push notifications to your systems when important process events occur — case deviations, SLA breaches, conformance threshold crossings, and more.',
      },
      { type: 'h2', text: 'Configuring a webhook' },
      {
        type: 'p',
        text: "Navigate to Settings → Webhooks in the dashboard. Add your endpoint URL and select the event types you want to receive. Meridian will send a POST request to your endpoint for each matching event.",
      },
      { type: 'h2', text: 'Webhook payload' },
      {
        type: 'code',
        lang: 'json',
        text: `{
  "id": "wh_01ABCDEF",
  "type": "case.deviated",
  "projectId": "proj_xxxx",
  "timestamp": "2026-02-10T09:20:00Z",
  "data": {
    "caseId": "INV-2026-001",
    "conformanceScore": 0.61,
    "deviationActivities": ["Approval Skipped"],
    "attributes": { "amount": 15000 }
  }
}`,
      },
      { type: 'h2', text: 'Verifying signatures' },
      {
        type: 'p',
        text: 'Every webhook includes an X-Meridian-Signature header. Verify it against your webhook secret to ensure the request originated from Meridian.',
      },
      {
        type: 'code',
        lang: 'typescript',
        text: `import { createHmac } from 'crypto'

function verifyWebhook(body: string, signature: string, secret: string): boolean {
  const expected = createHmac('sha256', secret).update(body).digest('hex')
  return \`sha256=\${expected}\` === signature
}`,
      },
    ],
  },
  {
    slugParts: ['guides', 'integrations'],
    title: 'Integrations',
    description: 'Connect Meridian to your existing operational systems.',
    content: [
      {
        type: 'p',
        text: "Meridian integrates with the systems your processes already run on. You can connect via our native connectors, the event collector SDK, or direct API calls.",
      },
      { type: 'h2', text: 'SAP' },
      {
        type: 'p',
        text: "Use the Meridian SAP connector to stream events directly from SAP S/4HANA or SAP ECC. The connector maps SAP change documents to Meridian events automatically.",
      },
      { type: 'h2', text: 'Salesforce' },
      {
        type: 'p',
        text: "The Salesforce connector uses Platform Events to capture CRM process milestones. Configure which objects and field changes should generate Meridian events.",
      },
      { type: 'h2', text: 'Custom integrations' },
      {
        type: 'p',
        text: "For systems without a native connector, use the event collector SDK (JavaScript, Python, Go) or call the REST API directly. Any system that can make an HTTP request can send events to Meridian.",
      },
      {
        type: 'note',
        text: 'Enterprise plan includes dedicated integration support and custom connector development.',
      },
    ],
  },
  {
    slugParts: ['guides', 'dashboards'],
    title: 'Custom Dashboards',
    description: 'Build tailored views of your process data for different audiences.',
    content: [
      {
        type: 'p',
        text: "Meridian's dashboard builder lets you compose views from our chart library — KPI cards, process maps, conformance timelines, variant tables, and more. Dashboards can be scoped to specific processes, teams, or time ranges.",
      },
      { type: 'h2', text: 'Creating a dashboard' },
      {
        type: 'list',
        items: [
          'Navigate to Dashboards → New Dashboard',
          'Select a layout template or start with a blank canvas',
          'Drag widgets from the panel and configure their data sources',
          'Set filters (process, date range, attribute conditions)',
          'Save and share with your team or embed via iframe',
        ],
      },
      { type: 'h2', text: 'Embedding dashboards' },
      {
        type: 'p',
        text: "Embed any dashboard in your internal tools using a signed iframe URL. The URL includes an expiring token so you don't need to expose API credentials.",
      },
      {
        type: 'code',
        lang: 'bash',
        text: `GET /v1/dashboards/{dashboardId}/embed-url

Response:
{
  "url": "https://app.meridian.io/embed/dash_xxxx?token=...",
  "expiresAt": "2026-02-10T10:00:00Z"
}`,
      },
    ],
  },
]

export function getDocPage(slugParts: string[]): DocPage | undefined {
  return docPages.find(
    p =>
      p.slugParts.length === slugParts.length &&
      p.slugParts.every((s, i) => s === slugParts[i])
  )
}

export function getAllDocSlugs(): string[][] {
  return docPages.map(p => p.slugParts)
}
