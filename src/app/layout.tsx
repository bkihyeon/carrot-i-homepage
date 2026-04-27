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

export const metadata: Metadata = {
  metadataBase: new URL("https://carrot-i-homepage.vercel.app/"),
  title: "Carrot-i",
  description: "Carrot-i 서비스 소개 및 솔루션 페이지",
  openGraph: {
    title: "Carrot-i",
    description: "Carrot-i 서비스 소개 및 솔루션 페이지",
    url: "https://carrot-i-homepage.vercel.app/",
    siteName: "Carrot-i",
    images: [
      {
        url: "/image/og-image.png",
        width: 1200,
        height: 630,
        alt: "Carrot-i",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carrot-i",
    description: "Carrot-i 서비스 소개 및 솔루션 페이지",
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
