import type { MetadataRoute } from "next";

const BASE_URL = "https://www.carrot-i.com";

// 현재 유효한 페이지만 노출한다. /financial-system(하이픈)은 /financial_system로
// 리다이렉트되는 alias이므로 canonical 경로만 포함한다.
const routes = [
  "",
  "/company_introduce",
  "/cast",
  "/mes",
  "/financial_system",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
