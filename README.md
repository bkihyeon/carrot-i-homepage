# Carrot-i Renewal

캐롯아이의 서비스 소개 및 솔루션 랜딩 사이트입니다.  
Next.js App Router 기반으로 메인 소개 페이지와 솔루션 상세 페이지를 구성하고, 문의 모달에서 SMTP 메일 발송까지 처리합니다.

## Overview

- 메인 랜딩 페이지에서 캐롯아이의 AI 데이터 플로우 메시지와 핵심 솔루션을 소개합니다.
- 솔루션 상세 페이지는 `Preci.MES`, `Preci.CAST`, `Financial System` 세 가지 축으로 구성됩니다.
- 공통 헤더, 푸터, 모달, 카드형 섹션 컴포넌트를 조합해 페이지를 구성합니다.
- 문의하기는 Next.js Server Action과 `nodemailer`를 사용해 SMTP로 메일을 발송합니다.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Swiper
- Nodemailer

## Routes

현재 확인되는 주요 라우트는 아래와 같습니다.

- `/` : 메인 페이지
- `/mes` : 제조 공정 실행 관리 시스템 소개
- `/cast` : 상권 분석 및 수요 예측 솔루션 소개
- `/financial_system` : 금융 시스템 설계 및 운영 소개
- `/financial-system` : `/financial_system` 으로 리다이렉트되는 별칭 경로
- `/company_introduce` : 회사 소개

## Project Structure

```text
src/
  app/                          App Router 엔트리
  components/
    main/                       메인 페이지 전용 섹션
    mes/                        MES 페이지 구성
    cast/                       CAST 페이지 구성
    finance/                    Financial System 페이지 구성
    introduce/                  회사 소개 페이지 구성
    header/, footer/            공통 네비게이션
    shared/                     공용 UI, 모달, 캐러셀, 배너 등
```

컴포넌트는 대체로 `model/` 과 `ui/` 로 나뉘어 있습니다.

- `model/` : 텍스트, 이미지 경로, 카드 데이터 같은 정적 데이터 정의
- `ui/` : 실제 렌더링 컴포넌트

## Local Development

### 1. Install

```bash
pnpm install
```

### 2. Configure environment variables

`.env.example` 를 기준으로 `.env.local` 을 작성합니다.

```bash
cp .env.example .env.local
```

필수 SMTP 설정:

- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

선택 설정:

- `SMTP_PORT` : 기본값 `465`
- `SMTP_SECURE` : 기본값 `true`
- `INQUIRY_TO_EMAIL` : 미설정 시 기본 수신자 사용

### 3. Run the development server

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열면 확인할 수 있습니다.

## Available Scripts

### Development

```bash
pnpm dev      # 개발 서버
pnpm build    # 프로덕션 빌드
pnpm start    # 빌드 산출물 실행
pnpm lint     # ESLint
```

### Release / Ops

```bash
pnpm release           # 이미지 빌드 → 푸시 → EC2 배포 (scripts/release.sh)
pnpm release:status    # EC2 컨테이너 상태
pnpm release:logs      # 컨테이너 로그 follow
pnpm release:health    # /api/health 1회 호출
pnpm release:history   # 배포/롤백 이력 (최근 20건)
pnpm release:tunnel    # localhost:3001 → EC2 :3000 SSH 터널
```

## Inquiry Flow

문의 모달 제출은 `src/components/shared/modal/model/inquiry.action.ts` 에서 처리됩니다.

- 폼 데이터를 읽고 유효성을 검사합니다.
- SMTP 설정을 환경 변수에서 불러옵니다.
- `nodemailer` transporter 연결을 검증한 뒤 메일을 발송합니다.
- SMTP 오류는 사용자에게 읽을 수 있는 메시지로 변환해 반환합니다.

메일 제목 형식:

```text
[문의하기] {회사명} / {이름}
```

## Notes

- 금융 페이지의 대표 경로는 `/financial_system` 이고, `/financial-system` 은 별칭 리다이렉트입니다.
- 솔루션 소개 데이터는 각 기능별 `model/*.data.tsx` 파일과 공용 `src/components/shared/solutionCarousel/model/solutionCarousel.data.tsx` 에서 관리합니다.
- 헤더와 푸터에서 같은 솔루션 링크 체계를 사용합니다.

## Deployment

Docker 컨테이너를 EC2에 배포합니다. 이미지는 GitLab Container Registry
(`registry.gitlab.com/carrot-i/carrot-i-homepage`) 에 푸시되고, EC2에서
`/opt/carrot-homepage/deploy.sh` 가 pull → 교체 → 헬스체크 → 필요시 자동 롤백을 수행합니다.

### Prerequisites (1회성)

- Docker Desktop 실행 중 (로컬 Mac)
- `docker login registry.gitlab.com` (본인 GitLab classic PAT, `read_registry` + `write_registry`)
- SSH `carrot-i` 호스트 설정 (`~/.ssh/config`)

### 배포 루틴

```bash
git pull
pnpm release
```

성공 시 `:stable` 태그가 새 이미지로 갱신됩니다.
헬스체크 실패 시 자동 롤백되고 `:stable` 은 유지됩니다 (release.sh exit 2).

### 배포 직후 확인

```bash
pnpm release:status
pnpm release:history
pnpm release:logs    # 이슈 의심 시
```

### 내부 검증 (nginx 전환 전/특정 시점)

```bash
pnpm release:tunnel  # 다른 터미널에서 실행
# 브라우저에서 http://localhost:3001
```

### Checklist

- `.env.production` 이 EC2 `/opt/carrot-homepage/` 에 `0600` 권한으로 존재
- 로컬 tracked 파일에 uncommitted 변경 없음 (release.sh가 자동 가드)
- 문의 모달에서 실제 메일 발송 되는지 주기 점검 (SMTP 자격증명 만료 감지)
