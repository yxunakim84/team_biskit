// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;

// next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "team_biskit"; // 레포 이름

const nextConfig = {
  output: "export", // 정적 내보내기 활성화
  images: { unoptimized: true }, // GH Pages에서 이미지 최적화 비활성화
  trailingSlash: true, // 404 이슈 방지
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : undefined,
};
module.exports = nextConfig;
