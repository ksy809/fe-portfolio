import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

const LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "@",
  },
  {
    label: "GitHub",
    value: "github.com/ksy809",
    href: profile.github,
    icon: "<>",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="contact"
          index="05."
          title="Contact"
          description="협업 제안, 피드백, 작은 인사도 환영합니다."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
          <div className="rounded-xl border border-line bg-bg-card p-6">
            <p className="font-mono text-xs text-zinc-500">{"// note"}</p>
            <p className="mt-3 text-lg leading-relaxed text-zinc-200 sm:text-xl">
              꾸준히 배우고 성장하는{" "}
              <span className="text-accent">프론트엔드 개발자</span>가
              되겠습니다.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              읽어 주셔서 감사합니다. 이 페이지는 12주 동안 매주 조금씩
              업데이트될 예정입니다.
            </p>
          </div>

          <ul className="space-y-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    l.href.startsWith("http") ? "noreferrer noopener" : undefined
                  }
                  className="group flex items-center justify-between rounded-xl border border-line bg-bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-md border border-line bg-bg-soft font-mono text-sm text-accent">
                      {l.icon}
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-zinc-500">
                        {l.label}
                      </div>
                      <div className="font-mono text-sm text-zinc-200">
                        {l.value}
                      </div>
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="text-zinc-600 transition-colors group-hover:text-accent"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-16 flex flex-col items-center gap-1 border-t border-line pt-6 text-xs text-zinc-500 sm:flex-row sm:justify-between">
          <span className="font-mono">
            © {new Date().getFullYear()} {profile.name} · built with Next.js +
            Tailwind
          </span>
          <span className="font-mono">crafted with Claude Code</span>
        </footer>
      </div>
    </section>
  );
}
