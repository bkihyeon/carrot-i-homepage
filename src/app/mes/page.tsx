import type { Metadata } from "next";

import MesPage from "@/components/mes/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/mes" },
};

export default function Mes() {
  return (
    <section className="content-shell flex flex-col px-xs pt-md tablet:px-2xl tablet:pt-xl desktop:px-0 desktop:pt-2xl">
      <div>
        <MesPage />
      </div>
    </section>
  );
}
