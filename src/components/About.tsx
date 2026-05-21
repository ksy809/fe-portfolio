import SectionHeading from "./SectionHeading";

const PARAGRAPHS = [
  "React 기반 프로젝트로 프론트엔드를 시작했고, 단순히 화면을 그리는 것보다 \"사용자가 어떻게 흐름을 따라가는지\"를 먼저 떠올리는 편입니다. UI 한 줄을 바꾸기 전에 그 변경이 사용자의 다음 행동을 자연스럽게 만드는지부터 점검합니다.",
  "팀에서는 Git 기반 협업, API 연동, SQL과 데이터 처리, Netlify 배포까지 한 사이클을 직접 다뤄봤습니다. 기능을 \"동작하게 만드는 것\"과 \"꾸준히 유지보수할 수 있게 만드는 것\"이 다르다는 점을 코드 리뷰와 실수를 거치며 체감했습니다.",
  "현재는 AI 기반 점자 접근성 플랫폼 회사에서 프론트엔드 인턴으로 일하고 있습니다. WSL2 · Docker · Remote SSH · DBeaver 같은 실무 환경을 직접 세팅하면서, 접근성과 사용자 중심 개발에 대한 관심을 실제 코드와 사용자 경험으로 옮기는 연습을 하고 있습니다.",
  "\"작은 디테일이 사용자 경험을 바꾼다\"는 말을 좋아합니다. 화려한 기술보다, 누가 써도 막히지 않는 인터페이스를 만드는 프론트엔드 개발자로 천천히, 그러나 꾸준히 성장하고 싶습니다.",
];

const FACTS = [
  { k: "Now", v: "Frontend Intern @ Orinu" },
  { k: "Focus", v: "UX · Accessibility · DX" },
  { k: "Habit", v: "주차별 성장 기록 / 회고" },
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

        <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-zinc-300">
            {PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="rounded-xl border border-line bg-bg-card p-5">
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
