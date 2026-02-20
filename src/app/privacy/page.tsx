import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function PrivacyPage() {
  return (
    <div className="pt-14 min-h-screen bg-braun-50">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-[10px] font-mono uppercase tracking-widest text-braun-500 mb-6">
          Legal
        </div>
        <h1 className="text-3xl lg:text-4xl font-light tracking-tight text-braun-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-[10px] font-mono text-braun-500 uppercase tracking-widest mb-12">
          Last updated: February 1, 2026
        </p>
        <div className="bg-white border border-braun-200 p-8 lg:p-12 space-y-8 text-sm text-braun-600 leading-relaxed">
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-braun-900 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly, such as account registration details (name, email, organization), data you upload for process analysis, and usage telemetry to improve product quality. We do not sell personal data to third parties.</p>
          </section>
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-braun-900 mb-3">2. How We Use Your Data</h2>
            <p>Your data is used to provide and improve Meridian&apos;s process intelligence services. Event logs and process models are analyzed solely within your tenant. We use aggregated, anonymized usage patterns to improve product features.</p>
          </section>
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-braun-900 mb-3">3. Data Storage & Security</h2>
            <p>All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Infrastructure is hosted on SOC 2 Type II certified providers. Enterprise customers can choose single-tenant deployment in their preferred region.</p>
          </section>
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-braun-900 mb-3">4. GDPR Compliance</h2>
            <p>For EU-based users: you have the right to access, correct, delete, and port your data. Data Processing Agreements (DPAs) are available for all paid plans. Contact privacy@meridian.io for GDPR-related requests.</p>
          </section>
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-braun-900 mb-3">5. Contact</h2>
            <p>For privacy-related inquiries, contact us at <a href="mailto:privacy@meridian.io" className="text-braun-900 underline hover:text-braun-orange transition-colors">privacy@meridian.io</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
