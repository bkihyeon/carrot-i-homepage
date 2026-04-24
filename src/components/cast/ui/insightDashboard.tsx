import Image from "next/image";
import type { ReactNode } from "react";

type InsightDashboardImage = {
  src: string;
  alt: string;
};

export type InsightDashboardProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  desktopImages: readonly InsightDashboardImage[];
  tabletImages?: readonly InsightDashboardImage[];
  mobileImages?: readonly InsightDashboardImage[];
  className?: string;
};

function ImageStack({
  images,
  className = "",
}: {
  images: readonly InsightDashboardImage[];
  className?: string;
}) {
  return (
    <div className={className}>
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className="relative w-full overflow-hidden  bg-background "
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={675}
            className="h-auto w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function InsightDashboard({
  eyebrow = "대시보드",
  title = "데이터 기반 인사이트로 상권 전략을 제안합니다",
  description = "상권 지표, 고객 특성, 매출 패턴을 통합 분석하여 핵심 고객층과 수요 흐름을 도출하고, 데이터 기반으로 실행 가능한 전략을 제안합니다.",
  desktopImages,
  tabletImages,
  mobileImages,
  className = "",
}: InsightDashboardProps) {
  const resolvedTabletImages = tabletImages ?? desktopImages.slice(-2);
  const resolvedMobileImages = mobileImages ?? desktopImages.slice(-2);

  return (
    <section
      className={`flex flex-col items-start gap-2xl border-x border-b border-border bg-background text-foreground ${className}`.trim()}
    >
      <div className="flex w-full items-start justify-between gap-xl tablet:gap-2xl px-xl pt-xl tablet:px-3xl tablet:pt-3xl">
        <div className="flex max-w-[46.25rem] flex-col items-start gap-xs">
          <p className="text-[14px] leading-[21px] tracking-[0.07px] font-bold text-foreground">
            {eyebrow}
          </p>
          <h2 className="type-heading-3 break-keep font-bold text-foreground">
            {title}
          </h2>
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

      <div className="w-full tablet:px-3xl tablet:pb-3xl">
        <div className="hidden desktop:block">
          <ImageStack
            images={desktopImages}
            className="grid grid-cols-3 items-start gap-xl"
          />
        </div>

        <div className="hidden tablet:block desktop:hidden">
          <ImageStack
            images={resolvedTabletImages}
            className="grid grid-cols-2 items-start gap-xl"
          />
        </div>

        <div className="block tablet:hidden">
          <ImageStack
            images={resolvedMobileImages}
            className="flex flex-col gap-xl"
          />
        </div>
      </div>
    </section>
  );
}
