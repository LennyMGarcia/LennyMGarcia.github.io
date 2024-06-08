/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  output: "export", 
  basePath: "/my-portfolio",
  reactStrictMode: true,
};

module.exports =  nextConfig

