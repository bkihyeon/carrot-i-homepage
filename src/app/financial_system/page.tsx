import type { Metadata } from "next";

import FinancialSystemPage from "@/components/finance/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/financial_system" },
};

export default function FinancialSystem() {
  return (
    <section className="content-shell flex flex-col px-xs pt-md tablet:px-2xl tablet:pt-xl desktop:px-0 desktop:pt-2xl">
      <div>
        <FinancialSystemPage />
      </div>
    </section>
  );
}
