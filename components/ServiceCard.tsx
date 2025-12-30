import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <div className="card service-card group hover:border-sharp-gold border-2 border-transparent">
      <div className="flex flex-col h-full">
        {icon && (
          <div className="w-16 h-16 bg-sharp-gold/10 rounded-full flex items-center justify-center mb-4 service-icon transition-transform duration-300">
            <div className="text-sharp-gold">{icon}</div>
          </div>
        )}
        <h3 className="text-xl font-bold text-sharp-navy mb-3 group-hover:text-sharp-gold transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center text-sharp-gold font-semibold hover:underline"
        >
          Learn More
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

