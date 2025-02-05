/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // We'll handle type checking in pre-commit hooks
  },
}

module.exports = nextConfig
