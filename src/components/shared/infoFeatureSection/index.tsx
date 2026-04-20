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
      className={`flex flex-col border-x border-border border-b-0 bg-background tablet:grid tablet:grid-cols-[minmax(16rem,380px)_minmax(0,1fr)] tablet:items-start ${className}`.trim()}
    >
      <div className="flex w-full min-w-0 flex-col items-start justify-between gap-3xl p-3xl tablet:h-[38.125rem] tablet:max-w-[380px]">
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

      <div className="flex min-w-0 w-full flex-col items-start overflow-hidden bg-background p-2xl tablet:max-w-[644px]">
        <div className="relative h-[38.125rem] w-full overflow-hidden rounded-2xl  bg-background ">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 799px) calc(100vw - 4rem), (max-width: 1279px) calc(100vw - 380px - 4rem), 700px"
            className="object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
