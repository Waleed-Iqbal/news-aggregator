const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["placehold.co", "randomuser.me"],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'], // to allow other files to be used in pages folder
};

module.exports = nextConfig;
