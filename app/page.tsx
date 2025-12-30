import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSection'
import BrandsSection from '@/components/BrandsSection'
import FAQSection from '@/components/FAQSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PromoSection from '@/components/PromoSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <BrandsSection />
      <AboutSection />
      <FAQSection />
      <TestimonialsSection />
      <PromoSection />
    </>
  )
}
