"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const TYPING_PHRASES = [
  "사용자 경험과 접근성을 고민하는 프론트엔드 개발자",
  "작은 디테일이 사용자 경험을 바꾼다고 믿는 개발자",
  "꾸준히 기록하며 성장하는 프론트엔드 인턴",
];

function useTyping(phrases: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const typingSpeed = deleting ? 30 : 55;

    const t = window.setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          window.setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => window.clearTimeout(t);
  }, [text, deleting, index, phrases]);

  return text;
}

export default function Hero() {
  const typed = useTyping(TYPING_PHRASES);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* background grid */}
      <div className="bg-radial-fade absolute inset-0 -z-10 bg-grid opacity-70" />
      {/* accent glow */}
      <div
        className="absolute -top-32 left-1/2 -z-10 h-[480px] w-[680px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(52,211,153,0.45), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-8">
          <div className="flex items-center gap-2 rounded-full border border-line bg-bg-soft px-3 py-1 font-mono text-xs text-zinc-400 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.status}
          </div>

          <div className="space-y-4 animate-fade-in-up">
            <p className="font-mono text-sm text-accent">
              {"> hello, world"}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
              안녕하세요,{" "}
              <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
                {profile.name}
              </span>
              입니다.
            </h1>
            <p className="font-mono text-lg text-zinc-300 sm:text-xl">
              {profile.role}{" "}
              <span className="text-zinc-600">@ Seoul, KR</span>
            </p>
          </div>

          <p
            className="min-h-[2.5em] max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg animate-fade-in-up"
            aria-live="polite"
          >
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-accent animate-blink" />
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-in-up">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-md border border-line bg-bg-soft px-4 py-2.5 text-sm text-zinc-200 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
            >
              <span aria-hidden>{"<>"}</span>
              GitHub
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm text-accent transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/15"
            >
              <span aria-hidden>★</span>
              Projects
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md border border-line bg-bg-soft px-4 py-2.5 text-sm text-zinc-200 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
            >
              <span aria-hidden>@</span>
              Contact
            </a>
          </div>

          <div className="mt-6 grid w-full grid-cols-2 gap-4 border-t border-line pt-6 font-mono text-xs text-zinc-500 sm:grid-cols-4">
            <Stat label="Role" value="Frontend" />
            <Stat label="Focus" value="UX · A11y" />
            <Stat label="Stack" value="React · Next.js" />
            <Stat label="Status" value="Growing" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-zinc-600">
        {label}
      </div>
      <div className="mt-1 text-sm text-zinc-300">{value}</div>
    </div>
  );
}
