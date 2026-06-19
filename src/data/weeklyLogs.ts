export type WeeklyLog = {
  week: number;
  /** 여러 주차를 하나로 묶을 때 마지막 주차 (예: week 2~4 → week:2, weekEnd:4) */
  weekEnd?: number;
  title: string;
  date?: string;
  summary?: string;
  items: string[];
  status: "done" | "in-progress" | "planned";
};

export const weeklyLogs: WeeklyLog[] = [
  {
    week: 1,
    title: "개발 환경 세팅 & 프로젝트 온보딩",
    date: "2026-W21",
    summary:
      "실무에서 쓰이는 환경을 처음부터 직접 구성하고, 프로젝트 구조를 파악하기 시작한 주차.",
    items: [
      "WSL2 개발환경 세팅",
      "Docker Desktop 설치",
      "GitHub SSH 인증 설정",
      "Remote SSH 연결",
      "PostgreSQL + DBeaver 연결",
      "Next.js 프로젝트 로컬 실행",
      "실무 프로젝트 구조 파악 시작",
    ],
    status: "done",
  },
  {
    week: 2,
    weekEnd: 4,
    title: "다국어(i18n) 로케일 구축",
    date: "2026-W22 ~ W24",
    summary:
      "확장 가능한 다국어 구조로 i18n을 이관하고, 언어별 로케일을 직접 번역·검수하며 추가한 3주간의 작업.",
    items: [
      "i18n을 locale 파일 패턴으로 이관 (언어 추가가 쉬운 구조)",
      "일본어(ja) 로케일 16/16 번역 + 검수",
      "스페인어(es) 로케일 추가",
      "힌디어(hi) 로케일 추가",
      "언어별 줄바꿈/오버플로 등 CSS 깨짐 대응",
      "팀원·CEO 영문 이름 로마자 표기 확정",
      "언어별 PR 분리 작성 → 리뷰 → 머지",
    ],
    status: "done",
  },
  // 이후 주차는 아래 형식으로 계속 추가하기만 하면 됩니다.
  // {
  //   week: 5,
  //   title: "...",
  //   date: "2026-W25",
  //   summary: "...",
  //   items: ["...", "..."],
  //   status: "in-progress",
  // },
];
