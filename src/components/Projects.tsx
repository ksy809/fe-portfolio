import SectionHeading from "./SectionHeading";
import { projects, type Project } from "@/data/projects";

const STATUS_LABEL: Record<NonNullable<Project["status"]>, string> = {
  ongoing: "ongoing",
  completed: "completed",
  personal: "personal",
};

const STATUS_STYLE: Record<NonNullable<Project["status"]>, string> = {
  ongoing: "border-accent/40 text-accent",
  completed: "border-line text-zinc-400",
  personal: "border-cyan-500/30 text-cyan-300",
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="projects"
          index="03."
          title="Projects"
          description={`기능 자체보다 "사용자 흐름"과 "실무 경험"에 초점을 둔 프로젝트들입니다.`}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-line bg-bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent/30">
      <header className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-zinc-100">
            {project.title}
          </h3>
          <p className="mt-0.5 text-xs text-zinc-500">{project.subtitle}</p>
        </div>
        {project.status && (
          <span
            className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${STATUS_STYLE[project.status]}`}
          >
            {STATUS_LABEL[project.status]}
          </span>
        )}
      </header>

      <p className="mb-4 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <ul className="mb-4 space-y-1.5 text-sm text-zinc-300">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2">
            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-3">
        <ul className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded border border-line bg-bg-soft px-2 py-0.5 font-mono text-[11px] text-zinc-400"
            >
              {t}
            </li>
          ))}
        </ul>

        {(project.links?.github || project.links?.demo) && (
          <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-line bg-bg-soft px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <span aria-hidden>{"<>"}</span> GitHub
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-line bg-bg-soft px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <span aria-hidden>↗</span> Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
