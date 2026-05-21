import type { Metadata } from "next";
import "./globals.css";
import BackgroundFX from "@/components/BackgroundFX";

export const metadata: Metadata = {
  title: "김시연 · Frontend Developer",
  description:
    "사용자 경험과 접근성을 고민하는 프론트엔드 개발자 김시연의 성장형 포트폴리오.",
  openGraph: {
    title: "김시연 · Frontend Developer",
    description:
      "사용자 경험과 접근성을 고민하는 프론트엔드 개발자 김시연의 성장형 포트폴리오.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-bg text-zinc-200 antialiased">
        {/* atmosphere layers — all fixed, pointer-events: none, behind content */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-20 bg-dots"
        />
        <BackgroundFX />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-noise opacity-[0.04] mix-blend-overlay"
        />

        {children}
      </body>
    </html>
  );
}
