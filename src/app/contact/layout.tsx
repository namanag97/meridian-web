import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Meridian team. Questions, feedback, sales inquiries, or partnership opportunities.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
