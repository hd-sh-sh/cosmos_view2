# 🌌 오늘의 우주 사진 (NASA APOD)

NASA의 Astronomy Picture of the Day (APOD) API를 활용한 우주 사진 뷰어 웹 애플리케이션입니다.

## ✨ 주요 기능

- 📅 오늘의 우주 사진 보기
- 🗓️ 날짜 선택으로 과거의 우주 사진 탐색
- 🖼️ 6개의 랜덤 우주 사진을 보여주는 갤러리
- 📱 반응형 디자인 (모바일/태블릿/데스크톱 지원)
- 🔒 API 키 보안 (서버리스 함수 사용)

## 🚀 로컬 실행

1. 파일을 다운로드하거나 클론합니다
2. `index.html` 파일을 브라우저에서 엽니다

로컬 환경에서는 API 키가 코드에 포함되어 있어 바로 작동합니다.

## 📦 GitHub & Vercel 배포 가이드

### 1. GitHub에 업로드

```bash
# Git 초기화
git init

# 파일 추가
git add .

# 커밋
git commit -m "Initial commit: NASA APOD 웹앱"

# GitHub 레포지토리 연결 (본인의 레포지토리 URL로 변경)
git remote add origin https://github.com/YOUR_USERNAME/nasa-apod.git

# 푸시
git branch -M main
git push -u origin main
```

### 2. Vercel 배포

#### 방법 1: Vercel 웹사이트에서 배포

1. [Vercel](https://vercel.com) 접속 및 GitHub 계정으로 로그인
2. "New Project" 클릭
3. GitHub 레포지토리 선택
4. **Environment Variables 설정 (중요!)**
   - Name: `NASA_API_KEY`
   - Value: `3ZpWN3RhyIixEUngGlXmO8a23VTg7cUyvaIA32wR`
5. "Deploy" 클릭

#### 방법 2: Vercel CLI 사용

```bash
# Vercel CLI 설치
npm i -g vercel

# 로그인
vercel login

# 배포
vercel

# 환경 변수 설정
vercel env add NASA_API_KEY

# 프로덕션 배포
vercel --prod
```

### 3. 환경 변수 설정 확인

Vercel 대시보드에서:
1. 프로젝트 선택
2. Settings → Environment Variables
3. `NASA_API_KEY` 변수가 있는지 확인
4. 없다면 추가:
   - Name: `NASA_API_KEY`
   - Value: `3ZpWN3RhyIixEUngGlXmO8a23VTg7cUyvaIA32wR`
   - Environment: Production, Preview, Development 모두 선택

## 🔐 보안

- 로컬 개발: API 키가 `index.html`에 포함되어 있어 브라우저에서 직접 NASA API를 호출합니다
- 프로덕션: Vercel Serverless Function(`/api/apod.js`)을 통해 API 키를 서버 측에서 관리하여 외부에 노출되지 않습니다

## 📂 프로젝트 구조

```
nasa-apod/
├── index.html          # 메인 웹 페이지
├── api/
│   └── apod.js        # Vercel Serverless Function (API 프록시)
├── vercel.json        # Vercel 배포 설정
├── .gitignore         # Git 무시 파일 목록
├── .env.example       # 환경 변수 예시
└── README.md          # 프로젝트 문서
```

## 🛠️ 기술 스택

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- NASA APOD API
- Vercel Serverless Functions

## 📝 API 정보

이 프로젝트는 NASA의 APOD (Astronomy Picture of the Day) API를 사용합니다.
- API 문서: https://api.nasa.gov/
- APOD API: https://api.nasa.gov/planetary/apod

## 🙏 크레딧

- NASA APOD API
- 우주 사진 제공: NASA

## 📄 라이선스

MIT License

---

Made with ❤️ and 🚀
