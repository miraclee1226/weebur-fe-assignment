# 💫 Table of contents

- 🚀 실행 방법
- 🛠️ 기술 스택
- 📁 폴더 구조</code>
- ✨ 주요 구현 내용</code>

<br />
<br />

# 🚀 실행 방법

### 패키지 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm run dev
```

### 접속

```bash
http://localhost:3000
```

### 배포 사이트

- [🔗 Deploy URL](https://weebur-fe-assignment.vercel.app/)

<br />
<br />

# 🛠️ 기술 스택

- Language

  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

- Library & Framework

  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/TanStack%20Query-ff5a1f?style=for-the-badge&logo=react-query&logoColor=white">
  <img src="https://img.shields.io/badge/React%20Hook%20Form-61dafb?style=for-the-badge&logo=react-hook-form&logoColor=black">
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=for-the-badge">

<br />
<br />

# 📁 폴더 구조

```
📦public                    // 정적 파일
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┗ 📂images
 ┗ 📂fonts
📦src
 ┣ 📂api                    // API 호출 관련 함수
 ┣ 📂app
 ┃ ┣ 📜layout.tsx           // 루트 레이아웃
 ┃ ┣ 📜page.tsx             // 상품 리스트 페이지
 ┃ ┣ 📜globals.css          // 전역 스타일
 ┃ ┗ 📜providers.tsx        // Tanstack Query Provider
 ┣ 📂components
 ┃ ┣ 📂common               // 공통 UI 컴포넌트
 ┃ ┃ ┣ 📂Card               // Card 컴포넌트
 ┃ ┃ ┣ 📂ErrorResetBoundary // ErrorResetBoundary 컴포넌트
 ┃ ┃ ┗ 📂Fallback           // ErrorBoundary Fallback UI 컴포넌트
 ┃ ┗ 📂pages
 ┃   ┗ 📂main               // 상품 리스트 페이지 컴포넌트
 ┃     ┣ 📂hooks            // 상품 리스트 페이지 커스텀 훅
 ┃     ┣ 📂skeleton         // 상품 리스트 페이지 Skeleton 컴포넌트
 ┃     ┣ 📜GridView.tsx     // 그리드 뷰 컴포넌트
 ┃     ┗...
 ┣ 📂constant               // 상수 정의
 ┣ 📂hooks                  // 전역 커스텀 훅
 ┣ 📂lib                    // 라이브러리 함수
 ┣ 📂schemas                // zod 스키마
 ┣ 📂types                  // 전역 타입 정의
 ┗ 📂utils                  // 유틸리티 함수
```

<br />
<br />

# ✨ 주요 구현 내용

## 1. 컴파운드 패턴을 활용하여 Card 공통 컴포넌트 구현

- 컴포넌트의 재사용성을 높이기 위해 Card 컴포넌트를 컴파운드 패턴으로 설계했습니다.
- 동일한 패턴을 Skeleton UI에도 적용하여 코드 일관성을 유지했습니다.

```
const Card = Object.assign(Item, {
  Image,
  Rating,
  Title,
  Content,
  Review,
  Skeleton,
});

export default Card;

```

## 2. 무한 스크롤 구현

- Intersection Observer API를 활용해 사용자가 페이지 하단에 도달했을 때 데이터가 추가로 로드되도록 구현했습니다.
- 로딩 중에는 "로딩 중.."을, 더 이상 불러올 데이터가 없을 경우에는 "더 이상 불러올 수 없습니다." 문구를 표시했습니다.

## 3. 검색 및 정렬 기능 구현

- 검색어 및 정렬 조건을 URL 쿼리 파라미터로 관리하여 페이지를 새로고침하거나 공유해도 동일한 상태를 유지할 수 있도록 설계했습니다.
- 이를 위해 useCustomSearchParams라는 커스텀 훅을 구현하여 URL 쿼리 상태를 쉽게 읽고 업데이트할 수 있도록 했습니다.

## 4. localStorage를 활용한 view 방식 관리

- Grid/List View 방식은 50% 확률로 랜덤 결정되고 결정된 값은 localStorage에 저장됩니다.
- 저장된 값은 24시간 동안 유지되고 이후 새롭게 랜덤 결정되도록 구현했습니다.

## 5. Suspense와 ErrorBoundary 활용

- Suspense

  - Tanstack Query의 useSuspenseInfiniteQuery를 활용하여 데이터 로딩 상태를 Suspense로 처리했습니다.
  - View 방식(Grid/List)에 따라 각각 다른 Skeleton UI를 렌더링하여 로딩 중에도 일관된 사용자 경험을 제공했습니다

- ErrorBoundary

  - 데이터 요청 중 발생할 수 있는 오류를 감지하여 fallback UI를 보여주도록 ErrorBoundary를 구현했습니다.
  - 사용자는 resetErrorBoundary()를 통해 오류 상태를 리셋하고 재시도할 수 있습니다.

## 6. 이미지 최적화

- 외부 이미지 로드 실패 시 대체 이미지를 표시하는 onError 핸들러를 구현했습니다.
- 첫 화면에 노출되는 이미지에 priority 속성을 부여하여 다른 이미지보다 먼저 로드되도록 했습니다.
