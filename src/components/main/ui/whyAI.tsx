type WhyAIProps = {
  className?: string;
};

export default function WhyAI({ className = "" }: WhyAIProps) {
  return (
    <section
      className={`flex w-full flex-col items-start tablet:p-3xl justify-start gap-xs bg-transparent text-foreground   ${className}`.trim()}
    >
      <span
        aria-hidden="true"
        className="font-heading text-[3.75rem] leading-[140%] font-bold tracking-[var(--token-text-heading-2-letter-spacing)] text-primary"
      >
        ?
      </span>
      <p className="break-keep font-heading text-[1.625rem] leading-[140%] font-bold tracking-[var(--token-text-heading-2-letter-spacing)] text-foreground tablet:text-[1.625rem] desktop:text-[2.375rem]">
        왜 데이터와 AI는 <br />
        실제로 작동하지 않을까?
      </p>
    </section>
  );
}
