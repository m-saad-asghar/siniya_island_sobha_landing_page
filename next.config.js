/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "salescenter-siniyaisland.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
