import Image from "next/image";

type WhyAIIssuesPanelProps = {
  className?: string;
};

const whyAiItems = [
  {
    icon: "/icon/whyAI/database_off.svg",
    title: "데이터의 문제",
    description:
      "데이터는 있지만, 구조화되어 있지 않습니다. 수집된 데이터가 분산되어 있고 기준이 없어 분석 가능한 형태로 활용되지 못합니다",
  },
  {
    icon: "/icon/whyAI/conversion_path_off.svg",
    title: "연결되지 않은 AI",
    description:
      "AI는 있지만, 운영과 연결되지 않습니다. 모델은 존재하지만 실제 업무 프로세스와 분리되어 의사결정에 직접적인 영향을 주지 못합니다",
  },
  {
    icon: "/icon/whyAI/bar_chart_off.svg",
    title: "실행되지 않는 분석",
    description:
      "분석은 있지만, 실행되지 않습니다. 인사이트는 도출되지만 자동화나 실행 체계가 없어 현장에서는 여전히 경험과 감각에 의존합니다",
  },
];

export default function WhyAIIssuesPanel({
  className = "",
}: WhyAIIssuesPanelProps) {
  return (
    <section
      className={`flex w-full flex-col items-start gap-sm bg-transparent tablet:pt-25 tablet:pb-5xl ${className}`.trim()}
    >
      {whyAiItems.map((item) => (
        <article
          key={item.title}
          className="flex w-full items-start gap-md rounded-xl border border-ring bg-background px-xl py-xl tablet:min-h-[8.75rem] tablet:gap-lg tablet:px-2xl tablet:py-xl desktop:px-3xl"
        >
          <Image src={item.icon} alt="" width={24} height={24} aria-hidden />

          <div className="flex min-w-0 flex-1 flex-col items-start gap-xs text-foreground">
            <h3 className="type-heading-4 w-full">{item.title}</h3>
            <p className="w-full min-w-0 break-keep text-[14px] leading-[21px] tracking-[0.07px] text-foreground">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
