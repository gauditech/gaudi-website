const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
