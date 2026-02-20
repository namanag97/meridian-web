import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import Testimonials from '@/components/landing/Testimonials'
import Stats from '@/components/landing/Stats'
import Pricing from '@/components/landing/Pricing'
import FAQ from '@/components/landing/FAQ'
import CTA from '@/components/landing/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Stats />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
