/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,fs: false, 
    };

    return config;
  },
};
module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
}