/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio-gallery' : '', // 깃허브 저장소 이름
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
