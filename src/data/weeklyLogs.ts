export type WeeklyLog = {
  week: number;
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
  // 이후 주차는 아래 형식으로 계속 추가하기만 하면 됩니다.
  // {
  //   week: 2,
  //   title: "...",
  //   date: "2026-W22",
  //   summary: "...",
  //   items: ["...", "..."],
  //   status: "in-progress",
  // },
];
