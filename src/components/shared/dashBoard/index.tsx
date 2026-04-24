import Image from "next/image";
import type { ReactNode } from "react";

export type DashBoardProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt?: string;
  className?: string;
  mobileImageHeightClassName?: string;
  mobileImageClassName?: string;
  mobileImageWidth?: number;
  mobileImageHeight?: number;
};

export default function DashBoard({
  eyebrow = "대시보드",
  title = "AI 데이터 플로우로 분석하고 운영을 최적화합니다",
  description = "생산 데이터를 기반으로 수율을 실시간 분석하고, 변화 흐름과 이상 패턴을 직관적으로 파악할 수 있습니다. 데이터 기반 의사결정으로 생산 효율을 지속적으로 개선합니다.",
  imageSrc,
  mobileImageSrc,
  imageAlt = "MES 대시보드 이미지",
  className = "",
  mobileImageHeightClassName = "h-[25rem]",
  mobileImageClassName = "object-cover object-center",
  mobileImageWidth,
  mobileImageHeight,
}: DashBoardProps) {
  const hasMobileIntrinsicImage =
    mobileImageSrc !== undefined &&
    mobileImageWidth !== undefined &&
    mobileImageHeight !== undefined;

  return (
    <section
      className={`flex flex-col items-start border-x border-b border-border bg-background text-foreground ${className}`.trim()}
    >
      <div className="flex w-full items-start justify-between gap-2xl pt-3xl px-3xl">
        <div className="flex max-w-[46.25rem] flex-col items-start gap-xs text-foreground">
          <p className="text-[14px] leading-[21px] tracking-[0.07px] font-bold text-foreground">
            {eyebrow}
          </p>
          <h2 className="type-heading-3 break-keep font-bold text-foreground">
            {title}
          </h2>
          <p className="type-body-medium text-foreground">{description}</p>
        </div>

        {/*사각형 장식*/}
        <div className="mt-xs hidden items-end tablet:flex">
          <div className="relative h-10 w-10 border border-border bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,#d4d4d8_50%,transparent_51%)]" />
          </div>
          <div className="relative h-10 w-10 border border-l-0 border-border bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,#d4d4d8_50%,transparent_51%)]" />
          </div>
        </div>
      </div>

      <div className="mx-2xl mt-2xl self-stretch overflow-hidden rounded-2xl bg-background">
        {hasMobileIntrinsicImage ? (
          <Image
            src={mobileImageSrc}
            alt={imageAlt}
            width={mobileImageWidth}
            height={mobileImageHeight}
            sizes="(max-width: 799px) calc(100vw - 4rem)"
            className={`tablet:hidden ${mobileImageClassName}`.trim()}
          />
        ) : (
          <div
            className={`relative w-full overflow-hidden tablet:hidden ${mobileImageHeightClassName}`.trim()}
          >
            <Image
              src={mobileImageSrc ?? imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 799px) calc(100vw - 4rem)"
              className={mobileImageClassName}
            />
          </div>
        )}
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={675}
          className="hidden h-auto w-full object-cover tablet:block"
        />
      </div>
    </section>
  );
}
