export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
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
    items: ["Java", "Spring Boot", "SQL", "Prisma"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VSCode", "Docker", "DBeaver", "Postman", "Figma"],
  },
  {
    title: "Deployment / Environment",
    items: ["Netlify", "WSL2", "Linux (Ubuntu)", "Remote SSH"],
  },
];
