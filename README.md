# 포트폴리오 갤러리

- 포트폴리오 갤러리는 다양한 포트폴리오를 한 곳에서 볼 수 있는 공간입니다. 각 포트폴리오는 프로젝트의 개요, 기술 스택, 사용된 도구 등을 포함하고 있습니다.


# 개발환경
- React
- Next.js
- Tailwind CSS
- github pages
- github actions


# 깃헙 블로그
## 레파지토리 생성

## github Action 설정 (자동배포설정)
1. next.config.js 파일 업데이트 
```
/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export',
basePath: '/portfolio-gallery', // 깃허브 저장소 이름
images: {
unoptimized: true,
},
};

module.exports = nextConfig;
```
2. .github/workflows/deploy.yml 생성
3. .gitignore에 빌드결과 폴더 넣기
```
out/
```
4. main 브랜치에 push 하면 자동 배포

## git pages 설정
1. GitHub 저장소 > Settings > Pages
2. Source: Deploy from branch 선택 -> branch: gh-pages, folder: /root 선택
3. 몇 분 안에 자동으로 배포됨
확인 URL:
https://mignonwhale.github.io/portfolio-gallery/

   

# 포트폴리오

## 2025년
- [Calendar Booking App](https://calendar-booking-app-nine.vercel.app/calendar/mignonwhale)
- [AI Dashboard](https://ai-dashboard-beta-mocha.vercel.app/)
