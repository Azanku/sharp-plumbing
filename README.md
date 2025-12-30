# Sharp Plumbing Website

A modern, SEO-optimized website for Sharp Plumbing, a local plumbing and HVAC company serving Independence, MO and the Kansas City Metropolitan Area since 1970.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **SEO**: Built-in Next.js metadata API, JSON-LD structured data, auto-generated sitemap

## Features

- **50+ Service Pages**: Comprehensive coverage of all plumbing, HVAC, and gas line services
- **SEO Optimized**: Unique metadata, structured data, sitemap, and semantic HTML
- **Responsive Design**: Mobile-first design that works on all devices
- **Fast Performance**: Static site generation for optimal loading speed
- **Accessible**: Semantic HTML and proper heading hierarchy
- **Contact Forms**: Visual contact forms on multiple pages

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd sharp-plumbing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
sharp-plumbing/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── about/              # About section pages
│   ├── contact/            # Contact section pages
│   ├── services/           # Service pages (dynamic routes)
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt configuration
├── components/             # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ContactForm.tsx
│   └── ...
├── data/                   # Content data
│   └── services.ts         # All service content
├── lib/                    # Utility functions
│   └── seo.ts              # SEO utilities
└── public/                 # Static assets
    └── images/             # Image assets
```

## Service Categories

1. AC Services
2. Appliances Installation
3. Boiler and Radiator Plumbing
4. Drains and Pipes
5. Drain and Pump Services
6. Gas Line Services
7. Heating Services
8. Septic and Outdoor Services
9. Sewer Services
10. Specialized Plumbing Services
11. Water Heater and Treatment Services
12. Water Heater Services

## SEO Features

- **Metadata**: Unique title and description for every page
- **Structured Data**: LocalBusiness, Service, and FAQPage JSON-LD schemas
- **Sitemap**: Auto-generated sitemap.xml with all 50+ pages
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Open Graph**: Social sharing metadata

## Contact Information

- **Phone**: (816) 207-3561
- **Service Area**: Independence, MO and Kansas City Metropolitan Area
- **Business Hours**: Mon-Fri 8am-6pm, Sat 8am-5pm

## License

This project is proprietary. All content is owned by Sharp Plumbing.

