/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sharpplumbingkc.com',
      },
      {
        protocol: 'https',
        hostname: 'sharpplumbingkc.com',
      },
    ],
  },
}

module.exports = nextConfig

