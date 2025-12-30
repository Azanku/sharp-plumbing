import FAQAccordion from './FAQAccordion'

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
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-subheading">FAQs</p>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  )
}
