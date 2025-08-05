// next.config.ts
import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5001",
      },
      {
        protocol: "https",
        hostname: "api.nammatvk.com",
      },
    ],
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
