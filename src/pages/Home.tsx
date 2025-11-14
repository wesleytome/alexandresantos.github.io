import { SEO } from '@/components/SEO'
import { Hero } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { LocationMap } from '@/components/sections/LocationMap'
import { businessInfo } from '@/data/businessInfo'

export function Home() {
  return (
    <>
      <SEO
        title={`Início | ${businessInfo.name} - Odontologia e Estética`}
        description={businessInfo.description}
        canonical="/"
        ogTitle={`Início | ${businessInfo.name}`}
        ogDescription={businessInfo.description}
      />
      <Hero />
      <ServicesSection />
      <Testimonials />
      <LocationMap />
    </>
  )
}

