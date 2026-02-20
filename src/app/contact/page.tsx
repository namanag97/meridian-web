import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Meridian team. Questions, feedback, sales inquiries, or partnership opportunities.',
}

export default function ContactPage() {
  return (
    <div className="pt-14 min-h-screen bg-braun-50">
      {/* Page header */}
      <div className="border-b border-braun-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-braun-400 mb-4">
            Contact
          </div>
          <h1 className="text-3xl lg:text-4xl font-light tracking-tight text-braun-900 mb-3 leading-tight">
            Get in touch.
          </h1>
          <p className="text-sm text-braun-500 max-w-sm leading-relaxed">
            Questions, feedback, or partnership inquiries — we&apos;d love to
            hear from you.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12">
          {/* Form card */}
          <div className="bg-white border border-braun-200 p-8">
            <form>
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-braun-900 uppercase tracking-wide mb-1.5 block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full bg-braun-50 border border-braun-200 px-4 py-3 text-sm text-braun-900 placeholder:text-braun-400 focus:border-braun-900 focus:ring-0 focus:outline-none font-sans"
                  />
                </div>

                {/* Work email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-braun-900 uppercase tracking-wide mb-1.5 block"
                  >
                    Work email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full bg-braun-50 border border-braun-200 px-4 py-3 text-sm text-braun-900 placeholder:text-braun-400 focus:border-braun-900 focus:ring-0 focus:outline-none font-sans"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="text-xs font-medium text-braun-900 uppercase tracking-wide mb-1.5 block"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company name"
                    className="w-full bg-braun-50 border border-braun-200 px-4 py-3 text-sm text-braun-900 placeholder:text-braun-400 focus:border-braun-900 focus:ring-0 focus:outline-none font-sans"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="text-xs font-medium text-braun-900 uppercase tracking-wide mb-1.5 block"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="w-full bg-braun-50 border border-braun-200 px-4 py-3 text-sm text-braun-900 placeholder:text-braun-400 focus:border-braun-900 focus:ring-0 focus:outline-none font-sans appearance-none"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                    }}
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="general">General inquiry</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-braun-900 uppercase tracking-wide mb-1.5 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full bg-braun-50 border border-braun-200 px-4 py-3 text-sm text-braun-900 placeholder:text-braun-400 focus:border-braun-900 focus:ring-0 focus:outline-none font-sans resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-braun-900 text-white border border-braun-900 hover:bg-braun-800 font-mono font-bold uppercase tracking-widest text-[11px] px-5 py-3 transition-colors"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Office */}
            <div className="border-t border-braun-200 pt-6">
              <div className="text-xs font-medium text-braun-900 uppercase tracking-wide mb-2">
                Office
              </div>
              <div className="text-sm text-braun-500 leading-relaxed">
                <p>San Francisco, CA</p>
                <p>548 Market Street, Suite 42</p>
                <p>San Francisco, CA 94104</p>
              </div>
            </div>

            {/* Email */}
            <div className="border-t border-braun-200 pt-6">
              <div className="text-xs font-medium text-braun-900 uppercase tracking-wide mb-2">
                Email
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-braun-900 underline hover:text-braun-orange transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Support hours */}
            <div className="border-t border-braun-200 pt-6">
              <div className="text-xs font-medium text-braun-900 uppercase tracking-wide mb-2">
                Support hours
              </div>
              <div className="text-sm text-braun-500 leading-relaxed">
                <p>Monday&ndash;Friday, 9AM&ndash;6PM PST</p>
                <p>Enterprise: 24/7 dedicated support</p>
              </div>
            </div>

            {/* Response time */}
            <div className="border-t border-braun-200 pt-6">
              <div className="text-xs font-medium text-braun-900 uppercase tracking-wide mb-2">
                Response time
              </div>
              <p className="text-sm text-braun-500 leading-relaxed">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
