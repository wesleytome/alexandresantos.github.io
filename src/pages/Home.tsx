import { SEO } from '@/components/SEO'
import { Hero } from '@/components/sections/Hero'
import { AboutAlexandre } from '@/components/sections/AboutAlexandre'
import { AlexandreQuote } from '@/components/sections/AlexandreQuote'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PatientJourney } from '@/components/sections/PatientJourney'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { ClinicDifferentials } from '@/components/sections/ClinicDifferentials'
import { FAQSection } from '@/components/sections/FAQSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { LocationMap } from '@/components/sections/LocationMap'
import { TopSection } from '@/components/layout/TopSection'
import { Header } from '@/components/layout/Header'
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
      <TopSection>
        <Header transparent />
        <Hero />
      </TopSection>
      <AboutAlexandre />
      <AlexandreQuote />
      <ServicesSection />
      <PatientJourney />
      <BeforeAfterSection />
      <ClinicDifferentials />
      <FAQSection />
      <Testimonials />
      <FinalCTA />
      <LocationMap />
    </>
  )
}

