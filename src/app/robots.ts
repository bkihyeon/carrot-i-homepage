import type { MetadataRoute } from "next";

// Vercel 배포(VERCEL=1)에서는 색인을 막고, 실제 운영(EC2)에서만 색인을 허용한다.
// next.config.ts의 X-Robots-Tag noindex 처리와 동일한 정책.
const isVercel = process.env.VERCEL === "1";

export default function robots(): MetadataRoute.Robots {
  if (isVercel) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.carrot-i.com/sitemap.xml",
  };
}
