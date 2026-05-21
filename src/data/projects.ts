export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  highlights: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  status?: "ongoing" | "completed" | "personal";
};

export const projects: Project[] = [
  {
    slug: "review",
    title: "Re:View",
    subtitle: "화장품 리뷰 / 추천 웹 서비스",
    description:
      "사용자 리뷰 흐름을 다듬는 데 집중한 React 기반 웹 서비스. 단순 노출이 아닌 \"리뷰를 읽고 결정하기까지의 경험\"을 어떻게 매끄럽게 만들 수 있을지 고민했다.",
    tags: ["React", "JavaScript", "REST API", "Git"],
    highlights: [
      "사용자 리뷰 화면 UI/UX 개선",
      "API 연동 및 상태관리 적용",
      "Git 기반 팀 협업 및 배포 흐름 경험",
      "실제 사용 흐름 기준으로 반복 개선",
    ],
    links: {
      github: "https://github.com/ksy809/Re_View",
    },
    status: "completed",
  },
  {
    slug: "pomodoro",
    title: "Pomodoro Timer",
    subtitle: "집중을 위한 미니 타이머",
    description:
      "직관적인 UI에 집중한 개인 프로젝트. 화려한 기능보다 \"필요한 순간 바로 쓰는 도구\"를 목표로 단순하게 다듬었다.",
    tags: ["React", "Tailwind CSS", "Netlify"],
    highlights: [
      "Pomodoro 사이클 타이머 구현",
      "키보드/모바일 모두 편한 UI 구성",
      "Netlify 배포 및 도메인 운영 경험",
    ],
    links: {
      github: "https://github.com/ksy809/Pomodoro",
      demo: "https://p0m0d0r0-timer.netlify.app",
    },
    status: "personal",
  },
  {
    slug: "vroom-safety",
    title: "부릉부릉 킥보드 안전교육",
    subtitle: "Unity 기반 인터랙티브 안전교육 게임",
    description:
      "학교 캠퍼스를 배경으로 킥보드를 직접 주행하며 안전 수칙을 익히는 교육용 게임. 화살표를 따라 이동하다 특정 지점에서 안전 퀴즈를 만나고, 정답을 맞혀야 다음 구간으로 넘어가는 단계형 흐름으로 구성했다.",
    tags: ["Unity", "C#", "Game Design", "Interactive Learning"],
    highlights: [
      "캠퍼스 맵을 따라 주행하는 사용자 참여형 교육 콘텐츠 구현",
      "지점별 안전 퀴즈 - 정답 시 진행, 오답 시 재시도하는 학습 사이클",
      "단계형 진행 구조로 몰입감 있는 안전교육 경험 설계",
      "모든 문제 완료 시 엔딩 영상이 재생되며 게임이 마무리되는 흐름",
    ],
    status: "completed",
  },
];
