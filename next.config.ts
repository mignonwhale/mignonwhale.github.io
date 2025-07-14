/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: 'https://mignonwhale.github.io/portfolio-gallery/', // 깃허브 저장소 이름
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
