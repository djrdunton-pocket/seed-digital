/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Retire the transform subdomain: send all of its traffic to the main site.
      // Takes effect once transform.seed-digital.ai is pointed at this Vercel project.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'transform.seed-digital.ai' }],
        destination: 'https://seed-digital.ai/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
