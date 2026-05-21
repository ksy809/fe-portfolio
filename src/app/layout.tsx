import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
