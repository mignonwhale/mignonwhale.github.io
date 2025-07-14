/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-gallery', // 깃허브 저장소 이름
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
