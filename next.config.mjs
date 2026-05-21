/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // static export — outputs plain HTML/CSS/JS to ./out
  // works on any static host (Netlify, GitHub Pages, S3, etc.)
  output: "export",
  // folder-style URLs (`/about/`), friendly with static hosts
  trailingSlash: true,
  // required when using static export with <Image />
  images: { unoptimized: true },
};

export default nextConfig;
