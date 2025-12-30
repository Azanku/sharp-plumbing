'use client'

import { useState } from 'react'

interface ContactFormProps {
  variant?: 'hero' | 'page' | 'sidebar'
}

export default function ContactForm({ variant = 'page' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Visual only - no backend
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className={`bg-white rounded-2xl shadow-xl p-8 border border-gray-100 ${variant === 'hero' ? 'lg:max-w-md' : ''}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-sharp-navy mb-2">Thank you for contacting us.</h3>
          <p className="text-gray-600">We will get back to you as soon as possible.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-6 border border-gray-100 ${variant === 'hero' ? 'lg:max-w-md' : ''}`}>
      <h3 className="text-xl font-bold text-sharp-navy mb-6">Request Call Back</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name:"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone:"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email:"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="">Services</option>
            <option value="ac-services">AC Services</option>
            <option value="appliances-installation">Appliances Installation</option>
            <option value="boiler-radiator">Boiler and Radiator Plumbing</option>
            <option value="drains-pipes">Drains and Pipes</option>
            <option value="drain-pump">Drain and Pump Services</option>
            <option value="gas-line">Gas Line Services</option>
            <option value="heating">Heating Services</option>
            <option value="septic-outdoor">Septic and Outdoor Services</option>
            <option value="sewer">Sewer Services</option>
            <option value="specialized">Specialized Plumbing Services</option>
            <option value="water-heater-treatment">Water Heater and Treatment Services</option>
            <option value="water-heater">Water Heater Services</option>
          </select>
        </div>
        {variant !== 'sidebar' && (
          <div>
            <textarea
              name="message"
              placeholder="Message (optional):"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="input-field resize-none"
            />
          </div>
        )}
        <button type="submit" className="btn-primary w-full text-lg">
          Submit
        </button>
      </form>
    </div>
  )
}
