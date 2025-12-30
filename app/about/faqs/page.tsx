import { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQs | Sharp Plumbing | Independence, MO',
  description: 'Frequently asked questions about Sharp Plumbing services in Independence, MO. Learn about our plumbing, HVAC, and gas line services.',
  openGraph: {
    title: 'FAQs | Sharp Plumbing',
    description: 'Frequently asked questions about our plumbing and HVAC services.',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What types of plumbing and HVAC services do you provide?',
    answer: "At Sharp Plumbing, we offer a comprehensive range of home comfort solutions designed to keep your systems running smoothly year-round. Our experienced team provides expert plumbing repairs, drain cleaning, water heater installation, gas line services, and complete HVAC maintenance, repair, and installation. Whether you're dealing with a leaking pipe, a broken furnace, or an inefficient air conditioner, our technicians have the knowledge and equipment to get the job done right. Homeowners looking for reliable local plumbers in Independence, MO can count on Sharp Plumbing for fast, professional service backed by decades of experience.",
  },
  {
    question: 'How soon can you respond to service requests or emergencies?',
    answer: "We understand that plumbing and HVAC issues often arise unexpectedly, which is why Sharp Plumbing is committed to prompt response times. Our team offers same-day services for many repairs and installations, ensuring your comfort systems are restored as quickly as possible. If you experience an emergency—such as a burst pipe, gas leak, or complete HVAC failure—our crew is ready to assist right away. Because we're a family- and woman-owned company, we take pride in delivering personal attention and reliability to every household we serve. That's what sets our local plumbers in Independence, MO apart from the rest.",
  },
  {
    question: 'Do you work with both residential and commercial properties?',
    answer: "Yes. Sharp Plumbing proudly serves both homeowners and businesses throughout the Independence, MO Area. We understand that commercial plumbing and HVAC systems often face heavier use and require specialized attention. Whether you operate a small retail store, restaurant, or office space, we can handle installation, maintenance, and repair services to keep your property running efficiently. Our skilled team is equally equipped to manage residential systems, providing the same level of care and professionalism on every job. As local plumbers in Independence, MO, we're known for dependable solutions that meet the needs of local homes and businesses alike.",
  },
  {
    question: 'What factors affect the cost of plumbing or HVAC repairs?',
    answer: "Several factors can influence the cost of your repair or replacement project. The type of system, the severity of the issue, and the materials required all play a role in determining final pricing. Sharp Plumbing offers free estimates to help you make informed decisions before any work begins. Our team also provides upfront pricing, so there are no hidden fees or unexpected surprises. We understand that HVAC and plumbing repairs can be stressful, so we work with you to find cost-effective options that restore comfort and functionality without straining your budget. For residents seeking honest guidance, our local plumbers in Independence, MO are always transparent and ready to help.",
  },
  {
    question: 'How can I tell if my heating or cooling system needs professional attention?',
    answer: "There are several warning signs that indicate your HVAC system might need service. If you notice inconsistent temperatures, unusual noises, poor airflow, or a sudden spike in your energy bills, it's time to call in the professionals. Sharp Plumbing's technicians can perform detailed inspections to identify underlying problems and recommend the best solution, whether it's a repair or full replacement. Routine maintenance is also key to extending the lifespan of your system and maintaining energy efficiency. Homeowners who work with local plumbers in Independence, MO benefit from fast diagnostics and preventive care that keeps their homes comfortable year-round.",
  },
  {
    question: 'What should I do if my air conditioner stops working suddenly?',
    answer: "If your air conditioner stops working, first check your thermostat settings and circuit breaker to rule out simple issues. If those are functioning properly, it's best to contact Sharp Plumbing for professional assistance. Our team can quickly identify the problem, whether it's a refrigerant leak, electrical failure, or a malfunctioning component. Attempting DIY repairs can often make the problem worse, so relying on experienced professionals ensures a safe and lasting solution. With decades of experience serving the Independence, MO, area, our local plumbers in Independence, MO, provide reliable AC repair and replacement services to help you restore comfort fast. Make sure to reach out today! We look forward to hearing from you!",
  },
]

export default function FAQsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sharp-navy py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sharp-gold font-semibold uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 text-lg">
              Find answers to common questions about our plumbing, HVAC, and gas line services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="section-heading mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our friendly team is here to help. Contact us today and we&apos;ll be happy to answer any questions you have about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8162073561" className="btn-primary text-lg">
              Call (816) 207-3561
            </a>
            <Link href="/contact" className="btn-secondary text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

