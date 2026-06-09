/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bristolbr.com.ar',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: process.env.WP_HOSTNAME || 'bristolbr.com.ar',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/wp-json/:path*',
        destination: `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
