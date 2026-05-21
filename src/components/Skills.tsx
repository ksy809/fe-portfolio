import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="skills"
          index="02."
          title="Skills"
          description="실제 사용해보며 손에 익은 도구들만 카테고리별로 정리했습니다."
        />

        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
          {skills.map((category) => (
            <div
              key={category.title}
              className="group flex flex-col rounded-xl border border-line bg-bg-card p-5 transition-colors hover:border-accent/30"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-medium text-zinc-100">
                    {category.title}
                  </h3>
                  {category.note && (
                    <p className="mt-1 font-mono text-[11px] text-zinc-500">
                      {`// ${category.note}`}
                    </p>
                  )}
                </div>
                <span className="font-mono text-[11px] text-zinc-500">
                  {String(category.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-1 flex-wrap content-start gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-bg-soft px-2.5 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
