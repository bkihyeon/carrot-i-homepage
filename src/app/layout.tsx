import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Footer from "@/components/footer/ui/footer";
import Header from "@/components/header/ui/header";
import ModalProvider from "@/components/shared/modal/ui/modal-provider";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
  subsets: ["latin"],
  variable: "--font-brand-sans",
});

// Vercel 배포(VERCEL=1)에서는 검색 색인을 막는다. (next.config.ts / robots.ts와 동일 정책)
const isVercel = process.env.VERCEL === "1";

const SITE_URL = "https://www.carrot-i.com";
const SITE_NAME = "Carrot-i";
const SITE_TITLE = "Carrot-i | AI 데이터 플로우 솔루션";
const SITE_DESCRIPTION =
  "캐롯아이는 데이터 수집·정제부터 예측·시뮬레이션·설명까지 하나의 흐름으로 연결하는 AI 솔루션 기업입니다. MES·재무·CAST 등 산업별 솔루션을 제공합니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Carrot-i",
    "캐롯아이",
    "AI 솔루션",
    "AI 데이터 플로우",
    "데이터 분석",
    "예측 시뮬레이션",
    "MES",
    "스마트팩토리",
    "재무 시스템",
    "CAST",
    "의사결정 지원",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: isVercel
    ? { index: false, follow: false, googleBot: { index: false, follow: false } }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
      },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/image/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - AI 데이터 플로우`,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/image/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pt-16 tablet:pt-[6.25rem]">
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
