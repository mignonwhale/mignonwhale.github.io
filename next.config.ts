/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio-gallery' : '', // 깃허브 저장소 이름
  // basePath: '/portfolio-gallery', // 깃허브 저장소 이름
  // assetPrefix: '/portfolio-gallery/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
