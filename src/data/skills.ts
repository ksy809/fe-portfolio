export type SkillCategory = {
  title: string;
  note?: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    note: "주력 영역",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend / Database",
    note: "프로젝트 시 보조로 사용",
    items: ["Java", "Spring Boot", "SQL", "Oracle"],
  },
  {
    title: "Tools",
    note: "일상 작업·협업 도구",
    items: ["Git", "GitHub", "VSCode", "Postman", "Figma"],
  },
  {
    title: "Deployment",
    note: "개인 프로젝트 배포",
    items: ["Netlify"],
  },
];
