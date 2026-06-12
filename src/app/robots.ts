import type { MetadataRoute } from "next";

// Vercel 배포(VERCEL=1)에서는 색인을 막고, 실제 운영(EC2)에서만 색인을 허용한다.
// next.config.ts의 X-Robots-Tag noindex 처리와 동일한 정책.
const isVercel = process.env.VERCEL === "1";

export default function robots(): MetadataRoute.Robots {
  if (isVercel) {
    // 일부러 disallow하지 않는다.
    // 이미 색인된 프리뷰 URL을 빼려면 크롤러가 페이지에 들어와
    // X-Robots-Tag/메타의 noindex를 "읽을 수" 있어야 한다.
    // robots.txt로 막으면 크롤러 진입이 차단돼 noindex를 못 읽고 색인이 그대로 남는다.
    return {
      rules: { userAgent: "*", allow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.carrot-i.com/sitemap.xml",
  };
}
