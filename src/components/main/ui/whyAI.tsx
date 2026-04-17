type WhyAIProps = {
  className?: string;
};

export default function WhyAI({ className = "" }: WhyAIProps) {
  return (
    <section
      className={`flex w-full flex-col items-start gap-5 border border-border bg-secondary p-3xl tablet:min-h-[420px] tablet:justify-between tablet:gap-0 tablet:p-2xl desktop:h-[510px] desktop:max-w-[431px] desktop:p-3xl ${className}`.trim()}
    >
      <p className="break-keep text-[1.5rem] leading-[140%] font-bold tracking-[-0.0625rem] text-foreground tablet:text-[2rem] desktop:text-[1.875rem]">
        왜 데이터와 AI는 <br />
        실제로 작동하지 않을까?
      </p>

      <div className="hidden items-start tablet:flex">
        <div className="relative h-10 w-10 border border-border bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,#d4d4d8_50%,transparent_51%)]" />
        </div>
        <div className="relative h-10 w-10 border border-l-0 border-border bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,#d4d4d8_50%,transparent_51%)]" />
        </div>
      </div>
    </section>
  );
}
