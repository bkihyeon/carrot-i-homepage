import type { Metadata } from "next";
import Footer from "@/components/footer/ui/footer";
import Header from "@/components/header/ui/header";
import "./globals.css";

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
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col pt-16 tablet:pt-[6.25rem]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
