/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}

export default nextConfig
