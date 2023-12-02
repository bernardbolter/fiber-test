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
        loader: 'custom',
        loaderFile: './src/providers/imageProvider.js'
      },
}

module.exports = nextConfig
