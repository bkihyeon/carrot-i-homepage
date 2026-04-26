export type TextDashboardProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export default function TextDashboard({
  eyebrow,
  title,
  description,
  className,
}: TextDashboardProps) {
  return (
    <section
      className={`flex flex-col p-3xl items-start gap-2xl border-x border-b border-border bg-background text-foreground ${className}`.trim()}
    >
      <div className="flex w-full items-start justify-between gap-xs">
        <div className="flex max-w-[40rem] flex-col items-start gap-xs">
          <p className="text-[14px] leading-[21px] tracking-[0.07px] font-bold text-foreground">
            {eyebrow}
          </p>
          <h2 className="type-heading-3 font-bold text-foreground">{title}</h2>
          <p className="type-body-medium text-foreground">{description}</p>
        </div>

        <div className="mt-xs hidden items-end tablet:flex">
          <div className="relative h-10 w-10 border border-border bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,#d4d4d8_50%,transparent_51%)]" />
          </div>
          <div className="relative h-10 w-10 border border-l-0 border-border bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,#d4d4d8_50%,transparent_51%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
