import SectionHeading from "./SectionHeading";
import { weeklyLogs, type WeeklyLog } from "@/data/weeklyLogs";
import { internship } from "@/data/internship";

const TOTAL_WEEKS = 12;

const STATUS_STYLE: Record<WeeklyLog["status"], string> = {
  done: "border-accent/40 bg-accent/10 text-accent",
  "in-progress": "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  planned: "border-line bg-bg-soft text-zinc-500",
};

const STATUS_LABEL: Record<WeeklyLog["status"], string> = {
  done: "done",
  "in-progress": "in progress",
  planned: "planned",
};

export default function Internship() {
  const lastLoggedWeek = Math.max(
    ...weeklyLogs.map((l) => l.weekEnd ?? l.week),
  );
  const progress = Math.round((lastLoggedWeek / TOTAL_WEEKS) * 100);

  return (
    <section id="internship" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="internship"
          index="04."
          title="Internship Journey"
          description={`12주 동안의 인턴 적응 과정을 한 곳에 모았습니다. "프로젝트 결과물"보다 "실무에서 무엇을 어떻게 배웠는지"에 가까운 기록입니다.`}
        />

        {/* intro panel */}
        <div className="mb-8 rounded-xl border border-line bg-bg-card p-6 transition-colors hover:border-accent/30">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              currently
            </span>
            <h3 className="text-lg font-semibold text-zinc-100">
              {internship.role} @ {internship.company}
            </h3>
            <span className="ml-auto font-mono text-xs text-zinc-500">
              {internship.companyDescription} · {internship.duration}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
            {internship.summary}
          </p>

          <div className="mt-5 grid gap-5 border-t border-line pt-5 sm:grid-cols-2">
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                focus areas
              </p>
              <ul className="space-y-1.5 text-sm text-zinc-300">
                {internship.focusAreas.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                environment
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {internship.environment.map((s) => (
                  <li
                    key={s}
                    className="rounded border border-line bg-bg-soft px-2 py-0.5 font-mono text-[11px] text-zinc-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* progress strip */}
        <div className="mb-10 rounded-xl border border-line bg-bg-card p-5">
          <div className="mb-3 flex items-center justify-between font-mono text-xs text-zinc-500">
            <span>internship.progress</span>
            <span className="text-zinc-300">
              {lastLoggedWeek} / {TOTAL_WEEKS} weeks
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-bg-soft">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-400 transition-all"
              style={{ width: `${progress}%` }}
              aria-label={`Internship progress ${progress}%`}
            />
          </div>
        </div>

        {/* weekly timeline */}
        <div className="mb-4 flex items-baseline justify-between">
          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            weekly logs
          </h3>
          <span className="font-mono text-[11px] text-zinc-600">
            매주 갱신 예정
          </span>
        </div>
        <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
          {weeklyLogs.map((log) => (
            <LogItem key={log.week} log={log} />
          ))}

          {lastLoggedWeek < TOTAL_WEEKS && (
            <li className="relative">
              <span className="absolute -left-[33px] top-2 grid h-4 w-4 place-items-center sm:-left-[41px]">
                <span className="h-2 w-2 rounded-full border border-dashed border-zinc-600" />
              </span>
              <div className="rounded-xl border border-dashed border-line bg-bg-card/40 p-5 text-sm text-zinc-500">
                <span className="font-mono text-xs text-zinc-600">
                  week {lastLoggedWeek + 1} ~ {TOTAL_WEEKS}
                </span>
                <p className="mt-1">
                  매주 새로운 학습 / 회고 / 작은 개선 기록을 이어서 추가할
                  예정입니다.
                </p>
              </div>
            </li>
          )}
        </ol>
      </div>
    </section>
  );
}

function LogItem({ log }: { log: WeeklyLog }) {
  return (
    <li className="relative">
      <span className="absolute -left-[33px] top-2 grid h-4 w-4 place-items-center sm:-left-[41px]">
        <span className="absolute h-4 w-4 rounded-full bg-accent/20" />
        <span className="relative h-2 w-2 rounded-full bg-accent" />
      </span>

      <article className="rounded-xl border border-line bg-bg-card p-5 transition-colors hover:border-accent/30">
        <header className="mb-3 flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-accent">
            week {String(log.week).padStart(2, "0")}
            {log.weekEnd ? ` – ${String(log.weekEnd).padStart(2, "0")}` : ""}
          </span>
          <span
            className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${STATUS_STYLE[log.status]}`}
          >
            {STATUS_LABEL[log.status]}
          </span>
          {log.date && (
            <span className="ml-auto font-mono text-[11px] text-zinc-500">
              {log.date}
            </span>
          )}
        </header>

        <h3 className="text-base font-semibold text-zinc-100">{log.title}</h3>
        {log.summary && (
          <p className="mt-1 text-sm text-zinc-400">{log.summary}</p>
        )}

        <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {log.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-zinc-300"
            >
              <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}
