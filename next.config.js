/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
