'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-sharp-navy pr-4">
              {item.question}
            </h3>
            <div className={`w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === index ? 'bg-sharp-blue' : ''}`}>
              <svg
                className={`w-4 h-4 transition-all duration-300 ${
                  openIndex === index ? 'rotate-180 text-white' : 'text-sharp-blue'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
