type SolutionsIntroProps = {
  title?: string;
};

export default function SolutionsIntro({
  title = "MES부터 상권 분석, 금융까지 \n캐롯아이의 다양한 솔루션을 만나보세요",
}: SolutionsIntroProps) {
  return (
    <section className="flex w-full flex-col items-start gap-xs border border-border border-t-0 bg-secondary p-xl tablet:p-2xl desktop:p-3xl">
      <h2 className="w-full whitespace-pre-line break-keep text-[1.75rem] leading-[1.4] font-bold tracking-[-1px] text-foreground tablet:text-[2rem] desktop:text-[36px]">
        {title}
      </h2>
    </section>
  );
}
