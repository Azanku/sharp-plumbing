import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sharp-navy': '#1e3a5f',
        'sharp-navy-dark': '#152a45',
        'sharp-navy-light': '#2d4a6f',
        'sharp-gold': '#f6b93b',
        'sharp-gold-dark': '#e5a82a',
        'sharp-blue': '#1e56a0',
        'sharp-blue-light': '#3b7dd8',
        'sharp-light-blue': '#e8f4fc',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
