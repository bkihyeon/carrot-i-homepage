import type { Metadata } from "next";

import IntroducePage from "@/components/introduce/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/company_introduce" },
};

export default function CompanyIntroduce() {
  return (
    <section className="content-shell flex flex-col px-xs pt-md tablet:px-2xl tablet:pt-xl desktop:px-0 desktop:pt-2xl">
      <div>
        <IntroducePage />
      </div>
    </section>
  );
}
