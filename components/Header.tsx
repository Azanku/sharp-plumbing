'use client'

import { useState } from 'react'
import Link from 'next/link'

const serviceCategories = [
  { name: 'AC Services', href: '/services/ac-services' },
  { name: 'Appliances Installation', href: '/services/appliances-installation' },
  { name: 'Boiler and Radiator Plumbing', href: '/services/boiler-and-radiator-plumbing' },
  { name: 'Drains and Pipes', href: '/services/drains-and-pipes' },
  { name: 'Drain and Pump Services', href: '/services/drain-and-pump-services' },
  { name: 'Gas Line Services', href: '/services/gas-line-services' },
  { name: 'Heating Services', href: '/services/heating-services' },
  { name: 'Septic and Outdoor Services', href: '/services/septic-and-outdoor-services' },
  { name: 'Sewer Services', href: '/services/sewer-services' },
  { name: 'Specialized Plumbing Services', href: '/services/specialized-plumbing-services' },
  { name: 'Water Heater and Treatment Services', href: '/services/water-heater-and-treatment-services' },
  { name: 'Water Heater Services', href: '/services/water-heater-services' },
]

const navigationItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Plumbing and HVAC Services',
    href: '/services',
    megaMenu: true,
  },
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'Finance', href: '/about/finance' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'FAQs', href: '/about/faqs' },
      { name: 'Reviews', href: '/about/reviews' },
      { name: 'Blog', href: '/about/blog' },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
    submenu: [
      { name: 'Request Call Back', href: '/contact/request-call-back' },
      { name: 'Serving Area', href: '/contact/serving-area' },
    ],
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-sharp-navy text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Local, Family Owned Company since 1970</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:8162073561" className="flex items-center gap-2 hover:text-sharp-gold transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">(816) 207-3561</span>
            </a>
            <Link href="/contact/request-call-back" className="hidden sm:inline-block bg-sharp-gold text-sharp-navy px-4 py-1 rounded font-semibold hover:bg-sharp-gold-dark transition-colors">
              Request Call Back
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-sharp-blue">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center py-4 mr-8">
              <div className="flex flex-col items-center">
                <img
                  src="/images/logo.png"
                  alt="Sharp Plumbing"
                  className="h-20 w-auto"
                />
                <span className="text-white text-xs mt-1 hidden sm:block">Local, Family Owned Company since 1970</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-white font-medium hover:bg-white/10 px-4 py-5 transition-colors"
                  >
                    {item.name}
                    {(item.submenu || item.megaMenu) && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Mega Menu for Services */}
                  {item.megaMenu && (
                    <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-0">
                      <div className="bg-sharp-blue shadow-2xl py-6 px-8 min-w-[700px]">
                        <div className="grid grid-cols-3 gap-4">
                          {serviceCategories.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="flex items-center gap-2 text-white hover:text-sharp-gold py-2 transition-colors group/item"
                            >
                              <span>{service.name}</span>
                              <svg className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Regular Submenu */}
                  {item.submenu && (
                    <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-0">
                      <div className="bg-sharp-blue shadow-xl py-2 min-w-[200px]">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-white hover:bg-white/10 hover:text-sharp-gold transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-4 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/20 py-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      if (item.submenu || item.megaMenu) {
                        setOpenSubmenu(openSubmenu === item.name ? null : item.name)
                      } else {
                        setMobileMenuOpen(false)
                      }
                    }}
                    className="flex items-center justify-between w-full py-3 px-2 text-white font-medium"
                  >
                    <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                    {(item.submenu || item.megaMenu) && (
                      <svg
                        className={`w-4 h-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  
                  {/* Mobile Mega Menu */}
                  {item.megaMenu && openSubmenu === item.name && (
                    <div className="pl-4 pb-2 space-y-1">
                      {serviceCategories.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block py-2 text-white/80 hover:text-sharp-gold"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mobile Submenu */}
                  {item.submenu && openSubmenu === item.name && (
                    <div className="pl-4 pb-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block py-2 text-white/80 hover:text-sharp-gold"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 px-2">
                <a href="tel:8162073561" className="btn-primary w-full text-center">
                  Call (816) 207-3561
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
