import type { Metadata } from "next";

import MainPage from "@/components/main/ui/main";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <div >
    <MainPage />
  </div>
}
