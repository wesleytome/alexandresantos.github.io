import { SEO } from '@/components/SEO'
import { HeaderSection } from '@/components/sections/HeaderSection'
import { AlexandreQuote } from '@/components/sections/AlexandreQuote'
import { StatisticsSection } from '@/components/sections/StatisticsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PatientJourney } from '@/components/sections/PatientJourney'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { ClinicDifferentials } from '@/components/sections/ClinicDifferentials'
import { FAQSection } from '@/components/sections/FAQSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { LocationMap } from '@/components/sections/LocationMap'
import { TopSection } from '@/components/layout/TopSection'
import { Menu } from '@/components/layout/Menu'
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
        <Menu transparent />
        <HeaderSection />
      </TopSection>
      <AlexandreQuote />
      <StatisticsSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ClinicDifferentials />
      <PatientJourney />
      <Testimonials />
      <FAQSection />
      {/* <FinalCTA /> */}
      <LocationMap />
    </>
  )
}

