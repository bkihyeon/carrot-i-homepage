"use client";

import { useRef, useState } from "react";

type HistoryEntry = {
  title: string;
};

type HistoryYear = {
  year: string;
  entries: HistoryEntry[];
};

const companyHistory: HistoryYear[] = [
  {
    year: "2025 ~ 2026",
    entries: [
      {
        title: "롯데 코리아세븐 데이터파이프라인 구축",
      },
      {
        title: "서민금융진흥원 권한시스템 고도화",
      },
      {
        title: "26년 1월 . 서민금융진흥원 청년미래적금 사업 개발",
      },
      { title: "대상 주식회사 MES 서비스 개발" },
      { title: "칠갑농산 MES 서비스 공급" },
      { title: "AI기반의 수요예측 솔루션  NIPA 'AI허브' 등록" },
      { title: "상표등록 ‘RUNNOTE’" },
    ],
  },
  {
    year: "2023 ~ 2024",
    entries: [
      { title: "직무발명인증" },
      { title: "온라인 유통 플랫폼(웹앱)  서비스 개발" },
      { title: "온라인 유통 플랫폼 서비스 공급 및 운영" },
    ],
  },
  {
    year: "2021 ~ 2022",
    entries: [
      { title: "식품분야MES 서비스 개발" },
      { title: "SmartHACCP 서비스 개발" },
      { title: "식품제조업체 MES 시스템 공급 및 운영" },
    ],
  },
  {
    year: "2015 ~ 2020",
    entries: [
      { title: "중부지방고용노동청 표창" },
      { title: "SK플래닛 협력사 등록" },
      { title: "SK플래닛 IDMS시스템 개발" },
      { title: "연구진구성" },
      { title: "기업부설연구소 지정" },
      { title: "DIMS 솔루션 개발" },
      { title: "고양신문 지역기업 인터뷰 보도" },
      { title: "SKM&S 협력사 등록" },
      { title: "LS일렉트릭 협력사 등록" },
      { title: "캐롯아이 법인설립" },
    ],
  },
];

export default function CompanyHistory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeYear, setActiveYear] = useState(companyHistory[0]?.year ?? "");

  const scrollHistoryTopIntoView = () => {
    const section = sectionRef.current;
    if (!section) return;

    const headerHeight =
      document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop >= headerHeight) return;

    requestAnimationFrame(() => {
      window.scrollTo({
        top: window.scrollY + sectionTop - headerHeight - 1,
        behavior: "smooth",
      });
    });
  };

  const handleYearClick = (year: string) => {
    setActiveYear(year);
    scrollHistoryTopIntoView();
  };

  return (
    <section
      ref={sectionRef}
      className="w-full border border-border border-t-0 bg-background"
    >
      <div className="flex flex-col items-stretch">
        {companyHistory.map((item) => {
          const isActive = item.year === activeYear;
          const panelId = `company-history-panel-${item.year.replace(/\s+/g, "-")}`;

          return (
            <div key={item.year} className="flex flex-col items-stretch">
              <button
                type="button"
                onClick={() => handleYearClick(item.year)}
                className={`flex w-full cursor-pointer self-stretch items-center gap-xs border-b border-border p-md text-left transition-colors tablet:px-2xl tablet:py-xl ${isActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}`.trim()}
                aria-expanded={isActive}
                aria-controls={panelId}
              >
                <span className="font-sans text-[0.875rem] leading-[1.3125rem] font-bold tracking-[0.00438rem] tablet:font-heading tablet:text-[1.875rem] tablet:leading-[140%] tablet:tracking-[var(--token-text-heading-2-letter-spacing)]">
                  {item.year}
                </span>
              </button>

              {isActive && (
                <div
                  id={panelId}
                  className="flex flex-col items-start self-stretch"
                >
                  {item.entries.length > 0 ? (
                    item.entries.map((entry, index) => (
                      <article
                        key={`${item.year}-history-entry-${index}`}
                        className="flex self-stretch flex-col items-start gap-xs border-b border-border px-2xl py-xl"
                      >
                        <p className="font-sans text-[1rem] leading-[1.5rem] font-bold tracking-[0] text-foreground tablet:font-heading tablet:text-[1.5rem] tablet:leading-[140%] tablet:tracking-[var(--token-text-heading-3-letter-spacing)]">
                          {entry.title}
                        </p>
                      </article>
                    ))
                  ) : (
                    <div className="flex min-h-[24rem] items-center px-xl py-3xl tablet:px-2xl">
                      <p className="type-body text-muted-foreground">
                        {item.year} 연혁 내용은 아직 정리 중입니다.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
