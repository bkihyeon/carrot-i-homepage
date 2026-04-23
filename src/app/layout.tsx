import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Footer from "@/components/footer/ui/footer";
import Header from "@/components/header/ui/header";
import ModalProvider from "@/components/shared/modal/ui/modal-provider";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
  subsets: ["latin"],
  variable: "--font-brand-sans",
});

export const metadata: Metadata = {
  title: "Carrot-i",
  description: "Carrot-i 서비스 소개 및 솔루션 페이지",
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
