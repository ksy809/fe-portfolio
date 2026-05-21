import SectionHeading from "./SectionHeading";

const PARAGRAPHS = [
  "원광대학교 디지털콘텐츠공학과에서 공부하다 프론트엔드 개발에 빠졌습니다. React와 Next.js로 작은 프로젝트들을 만들며 API 연동, 반응형 UI, Git 기반 협업을 익혀왔습니다.",
  "기능을 단순히 동작하게 만드는 것보다, 사용자가 그 화면을 어떻게 따라가는지를 먼저 떠올리는 편입니다. 버튼 위치 하나, 로딩 한 줄에도 다음 행동이 달라진다고 믿고 작은 디테일을 다듬는 데 시간을 씁니다.",
  "지금은 AI 기반 점자 접근성 플랫폼에서 프론트엔드 인턴으로 일하며, 접근성과 사용자 중심 개발을 실제 코드로 옮겨보는 연습을 하고 있습니다.",
];

const FACTS = [
  { k: "Edu", v: "원광대 · 디지털콘텐츠공학" },
  { k: "Now", v: "Frontend Intern @ Orinu" },
  { k: "Stack", v: "React · Next.js · TS" },
  { k: "Cert", v: "SQLD" },
  { k: "Belief", v: "디테일이 경험을 만든다" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="about"
          index="01."
          title="About"
          description="신입 프론트엔드 개발자 김시연의 작업 방식과 관심사를 짧게 정리했습니다."
        />

        <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          <div className="space-y-5 text-[15px] leading-relaxed text-zinc-300">
            {PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="rounded-xl border border-line bg-bg-card p-5 lg:-mt-3">
            <div className="mb-4 flex items-center justify-between border-b border-line pb-3 font-mono text-xs text-zinc-500">
              <span>profile.json</span>
              <span className="text-accent">●</span>
            </div>
            <dl className="space-y-3 font-mono text-sm">
              {FACTS.map((f) => (
                <div key={f.k} className="flex items-start justify-between gap-4">
                  <dt className="text-zinc-500">{f.k.toLowerCase()}</dt>
                  <dd className="text-right text-zinc-200">{f.v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 rounded-md border border-line bg-bg-soft p-3 font-mono text-[12px] leading-relaxed text-zinc-400">
              <span className="text-accent">$</span> currently learning
              <br />
              <span className="text-zinc-200">
                next.js patterns · accessibility · clean component design
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
