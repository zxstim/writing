import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  assetPrefix: '/writing',
  images: {
    // path prefix for Image Optimization API
    path: '/writing/_next/image',
  },
};

export default withMDX(config);
