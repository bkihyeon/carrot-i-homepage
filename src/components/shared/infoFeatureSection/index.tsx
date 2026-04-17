import Image from "next/image";
import type { ReactNode } from "react";

type InfoFeatureSectionProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  paragraphs: readonly ReactNode[];
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

export default function InfoFeatureSection({
  eyebrow,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  className = "",
}: InfoFeatureSectionProps) {
  return (
    <section
      className={`flex flex-col border-x border-border border-b-0 bg-background tablet:flex-row tablet:items-start tablet:justify-center ${className}`.trim()}
    >
      <div className="flex w-full flex-col items-start justify-between gap-3xl p-3xl tablet:h-[38.125rem] tablet:w-[380px]">
        <div className="flex w-full flex-col items-start gap-xs">
          <p className="text-[14px] leading-[21px] tracking-[0.07px] font-bold text-foreground">
            {eyebrow}
          </p>
          <h2 className="type-heading-3 break-keep font-bold text-foreground">
            {title}
          </h2>
          <div className="type-body-medium text-foreground">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`info-feature-section-paragraph-${index}`}
                className={index > 0 ? "mt-md" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-end">
          <div className="relative h-10 w-10 border border-border bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,#d4d4d8_50%,transparent_51%)]" />
          </div>
          <div className="relative h-10 w-10 border border-l-0 border-border bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,#d4d4d8_50%,transparent_51%)]" />
          </div>
        </div>
      </div>

      <div className="flex min-w-px flex-[1_0_0] flex-col items-start overflow-hidden bg-background p-2xl">
        <div className="relative h-[38.125rem] w-full overflow-hidden rounded-2xl  bg-background ">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
