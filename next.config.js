const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "https://gaudi.tech"
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/home",
  //     },
  //   ];
  // },
};

module.exports = withContentlayer(nextConfig);
