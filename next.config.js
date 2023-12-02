/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'digitalcityseries.com',
            port: '',
            pathname: '/art/**',
          },
        ],
      },
}

module.exports = nextConfig
