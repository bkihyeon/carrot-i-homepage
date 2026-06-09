import type { NextConfig } from "next";

// Vercel 배포(VERCEL=1)에서만 검색엔진 색인을 차단한다.
// 실제 운영(EC2)에는 해당 환경변수가 없으므로 정상 색인된다.
const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3845",
        pathname: "/assets/**",
      },
    ],
  },
  async headers() {
    if (!isVercel) return [];
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
