const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    UMAMI_WEBSITE_ID: "4756f4cf-49a3-47da-8af9-ceca60899260",
  },

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
