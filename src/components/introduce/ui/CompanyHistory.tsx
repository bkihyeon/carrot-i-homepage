"use client";

import { useState } from "react";

type HistoryEntry = {
  month: string;
  title: string;
};

type HistoryYear = {
  year: string;
  entries: HistoryEntry[];
};

const companyHistory: HistoryYear[] = [
  {
    year: "2026",
    entries: [
      {
        month: "2026.03",
        title: "서민금융진흥원 통합 플랫폼 구축 프로젝트",
      },
      {
        month: "2026.02",
        title: "대상 순창 간장공장 MES 구축 프로젝트",
      },
      {
        month: "2026.01",
        title:
          "LS산전 “Smart MV 프로젝트 설정 화면 및 반응형 웹 화면 개발” 프로젝트 수행",
      },
    ],
  },
  { year: "2025", entries: [] },
  { year: "2024", entries: [] },
  { year: "2023", entries: [] },
  { year: "2022", entries: [] },
  { year: "2021", entries: [] },
  { year: "2015 ~ 2020", entries: [] },
];

export default function CompanyHistory() {
  const [activeYear, setActiveYear] = useState(companyHistory[0]?.year ?? "");

  const activeHistory =
    companyHistory.find((item) => item.year === activeYear) ??
    companyHistory[0];

  return (
    <section className="w-full border border-border border-t-0 bg-background">
      <div className="flex flex-row items-stretch">
        <div className="flex w-[7.5rem] shrink-0 flex-col items-start border-r border-b border-border tablet:w-[15rem] desktop:border-b-0">
          {companyHistory.map((item) => {
            const isActive = item.year === activeYear;

            return (
              <button
                key={item.year}
                type="button"
                onClick={() => setActiveYear(item.year)}
                className={`flex w-full self-stretch items-center gap-xs border-b border-border px-2xl py-xl text-left transition-colors last:border-b-0  ${isActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}`.trim()}
                aria-pressed={isActive}
              >
                <span className="font-sans text-[0.875rem] leading-[1.3125rem] font-bold tracking-[0.00438rem] tablet:font-heading tablet:text-[1.875rem] tablet:leading-[140%] tablet:tracking-[var(--token-text-heading-2-letter-spacing)]">
                  {item.year}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex min-h-[24rem] flex-[1_0_0] flex-col items-start self-stretch">
          {activeHistory.entries.length > 0 ? (
            activeHistory.entries.map((entry, index) => (
              <article
                key={`${entry.month}-${index}`}
                className="flex self-stretch flex-col items-start gap-xs border-b border-border px-2xl py-xl "
              >
                <p className="font-sans text-[1rem] leading-[1.5rem] font-bold tracking-[0] text-foreground">
                  {entry.month}
                </p>
                <p className="font-sans text-[1rem] leading-[1.5rem] font-bold tracking-[0] text-foreground tablet:font-heading tablet:text-[1.5rem] tablet:leading-[140%] tablet:tracking-[var(--token-text-heading-3-letter-spacing)]">
                  {entry.title}
                </p>
              </article>
            ))
          ) : (
            <div className="flex min-h-[24rem] items-center px-xl py-3xl tablet:px-2xl">
              <p className="type-body text-muted-foreground">
                {activeHistory.year} 연혁 내용은 아직 정리 중입니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
