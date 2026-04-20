import Image from "next/image";
import type { ReactNode } from "react";

export type InfoFeatureSectionProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  paragraphs: readonly ReactNode[];
  imageSrc: string;
  imageAlt: string;
  className?: string;
  imageClassName?: string;
  showBottomBorder?: boolean;
};

export default function InfoFeatureSection({
  eyebrow,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  className = "",
  imageClassName = "object-cover object-left",
  showBottomBorder = false,
}: InfoFeatureSectionProps) {
  const leftPanelPaddingClassName = showBottomBorder
    ? "px-3xl pt-3xl pb-0"
    : "p-3xl";
  const rightPanelPaddingClassName = showBottomBorder
    ? "px-2xl pt-2xl pb-0"
    : "p-2xl";

  return (
    <section
      className={`flex flex-col border-x border-border bg-background tablet:grid tablet:grid-cols-[minmax(16rem,380px)_minmax(0,1fr)] tablet:items-start ${showBottomBorder ? "border-b" : ""} ${className}`.trim()}
    >
      <div
        className={`flex w-full min-w-0 flex-col items-start justify-between gap-3xl tablet:h-[38.125rem] tablet:max-w-[380px] ${leftPanelPaddingClassName}`.trim()}
      >
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

        <div className="hidden items-end tablet:flex">
          <div className="relative h-10 w-10 border border-border bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,#d4d4d8_50%,transparent_51%)]" />
          </div>
          <div className="relative h-10 w-10 border border-l-0 border-border bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,#d4d4d8_50%,transparent_51%)]" />
          </div>
        </div>
      </div>

      <div
        className={`flex min-w-0 w-full flex-col items-start overflow-hidden bg-background tablet:max-w-[644px] ${rightPanelPaddingClassName}`.trim()}
      >
        <div className="relative h-[38.125rem] w-full overflow-hidden rounded-2xl  bg-background ">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 799px) calc(100vw - 4rem), (max-width: 1279px) calc(100vw - 380px - 4rem), 700px"
            className={imageClassName}
          />
        </div>
      </div>
    </section>
  );
}
