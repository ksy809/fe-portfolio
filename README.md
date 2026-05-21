# 김시연 · Frontend Developer Portfolio

[![Live](https://img.shields.io/badge/Live-siyeon--portfolio.netlify.app-34d399?style=flat-square&logo=netlify&logoColor=white)](https://siyeon-portfolio.netlify.app/)

12주 인턴십 동안 매주 업데이트되는 **성장형 포트폴리오**입니다.
Next.js (App Router) + TypeScript + Tailwind CSS 기반 한 페이지 구조.

---

## 시작하기

```bash
npm install
npm run dev
# http://localhost:3000
```

정적 빌드:

```bash
npm run build
# → ./out 디렉토리에 정적 사이트가 생성됩니다
```

프로덕션 배포는 [Netlify](https://siyeon-portfolio.netlify.app/)로 자동화되어 있어,
`main` 브랜치에 push하면 자동으로 재배포됩니다.

---

## 폴더 구조 (추천)

```
profile/
├─ public/                  # 정적 이미지, og 이미지 등
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx         # 전역 레이아웃 / 메타데이터
│  │  ├─ page.tsx           # 섹션 조립 (한 페이지 구조)
│  │  └─ globals.css        # Tailwind + 전역 스타일
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Internship.tsx
│  │  ├─ Contact.tsx
│  │  └─ SectionHeading.tsx
│  └─ data/                 # 모든 콘텐츠는 여기서만 수정
│     ├─ profile.ts
│     ├─ skills.ts
│     ├─ projects.ts
│     ├─ internship.ts
│     └─ weeklyLogs.ts
├─ tailwind.config.ts
├─ next.config.mjs
└─ tsconfig.json
```

> 컴포넌트는 **뷰만**, 데이터는 `src/data/*` 모듈에서만 관리합니다.
> "콘텐츠 수정 = 데이터 파일 한 곳만 수정"이 핵심 원칙.

---

## 컴포넌트 구조 (의도)

| 컴포넌트 | 역할 | 한 줄 설명 |
|---|---|---|
| `Navbar` | 상단 고정 메뉴 | 스크롤 시 배경 등장, 모바일 햄버거 메뉴 |
| `Hero` | 첫인상 | 이름 / 직무 / 타이핑 효과 / 액션 버튼 |
| `About` | 자기소개 | 글 + 우측 `profile.json` 카드 |
| `Skills` | 카테고리별 스킬 | 4분류 카드, 태그형 표시 |
| `Projects` | 프로젝트 카드 | Re:View / Pomodoro (개인·팀 결과물 중심) |
| `Internship` | 인턴십 여정 | Orinu 인트로 패널 + 진행률 바 + 주차 타임라인 |
| `Contact` | 마무리 | 이메일, GitHub, 마무리 한 줄 |
| `SectionHeading` | 공용 헤더 | `01. // about` 같은 dev 느낌 |

원칙:
- 한 컴포넌트는 한 섹션 하나만 책임집니다.
- 상태가 필요한 경우(`Navbar`, `Hero`)만 `"use client"` 선언.
- 그 외는 모두 서버 컴포넌트로 두고 번들 사이즈를 줄입니다.

---

## 콘텐츠 수정 방법

### 새 주차 로그 추가 (Internship 섹션)
`src/data/weeklyLogs.ts` 배열에 새 항목만 추가하면 Internship 섹션의 타임라인과 진행률 바가 자동으로 갱신됩니다.

```ts
{
  week: 2,
  title: "코드베이스 적응 & 첫 PR",
  date: "2026-W22",
  summary: "...",
  items: ["...", "..."],
  status: "in-progress", // "done" | "in-progress" | "planned"
}
```

진행률 바 (`completed / 12 weeks`)는 `status: "done"` 개수로 자동 계산됩니다.

### 새 프로젝트 추가
`src/data/projects.ts` 에 객체 하나 추가.
`status`는 `"ongoing" | "completed" | "personal"` 중 선택 → 카드 상단 배지 색이 자동으로 바뀝니다.

### 인턴십 인트로 (회사/역할/포커스/환경)
`src/data/internship.ts` — Internship 섹션 상단 인트로 패널의 모든 텍스트.

### 스킬 / 프로필
- 스킬: `src/data/skills.ts`
- 이름 · 이메일 · 깃허브: `src/data/profile.ts`

---

## 디자인 가이드

- **색상**: `bg` 계열은 검정 톤(`#0a0a0b` ~ `#111114`), 강조색은 `accent (#34d399)` 한 가지만.
- **폰트**: 본문은 시스템 산세리프, 메타·코드 느낌은 `font-mono`.
- **간격**: 섹션 사이 `py-24 sm:py-28`. 카드 내부 `p-5 ~ p-6`.
- **애니메이션**: hover 시 `-translate-y-0.5`와 `border-accent/30` 정도만. 과한 모션 X.
- **반응형**: 기본 모바일, `sm` (640) / `md` (768) / `lg` (1024) 기준으로 그리드를 한 단계씩 늘림.

---

## 추후 확장 아이디어

가벼운 것부터 무거운 순:

1. **OG 이미지 / favicon** — `public/og.png`, `app/icon.png` 추가
2. **다크/라이트 토글** — 라이트 테마 보조용 (현재는 다크 단일)
3. **블로그 / 회고 페이지** — `app/blog/[slug]/page.tsx` + MDX
4. **프로젝트 상세 페이지** — `app/projects/[slug]/page.tsx`로 동적 라우팅
5. **태그 필터** — 프로젝트/로그에 태그 필터 UI 추가
6. **i18n** — 한/영 토글 (`next-intl`)
7. **CMS 연동** — Notion / Contentlayer / MDX 중 하나로 콘텐츠 분리
8. **방문자 분석** — Vercel Analytics 또는 Plausible
9. **댓글 / 방명록** — Giscus (GitHub Discussions)

---

## 만든 사람

김시연 · Frontend Developer · `ss741219@daum.net`
Crafted with **Claude Code**.
