import Image from "next/image";
import { ReactNode } from "react";

export type AIDecisionArchitectureProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  imageSrc?: string;
  mobileImageSrc?: string;
  className?: string;
};

const defaultImageSrc = "/image/main/Rectangle 49_4x.png";
const defaultMobileImageSrc = "/image/main/ai-architecture-mobile.png";

export default function AIDecisionArchitecture({
  eyebrow,
  title = "캐롯아이의 AI 의사결정 아키텍처",
  description = (
    <>
      데이터를 예측과 판단까지 하나의 흐름으로 연결해 <br />
      실행 가능한 방향을 제시합니다.
    </>
  ),
  imageSrc = defaultImageSrc,
  mobileImageSrc = defaultMobileImageSrc,
  className = "",
}: AIDecisionArchitectureProps) {
  return (
    <section
      className={`flex w-full flex-col items-start gap-md border border-border bg-background px-0 pt-3xl pb-xl tablet:pt-5xl tablet:pb-2xl desktop:pt-[90px] ${className}`.trim()}
    >
      <div className="flex w-full flex-col items-start gap-xs text-center text-foreground">
        {eyebrow ? (
          <p className="type-heading-3 w-full text-center text-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="w-full break-keep text-heading-3 tablet:text-heading-2 leading-[1.3] font-bold tracking-[-0.0625rem] tablet:text-[1.875rem] desktop:text-[2.625rem] desktop:leading-[3rem] desktop:tracking-[-0.09375rem]">
          {title}
        </h2>
        <p
          className="mx-auto max-w-[780px] whitespace-pre-line px-md text-center font-['Noto_Sans_KR'] text-[1rem] desktop:text-[1.25rem] leading-[160%] font-light uppercase tablet:px-2xl desktop:px-0"
          style={{ color: "var(--general-foreground, #09090B)" }}
        >
          {description}
        </p>
      </div>

      <div className="relative mx-auto aspect-[1380/1120] w-full max-w-[calc(100vw-2rem)] pt-md tablet:aspect-auto tablet:h-[32rem] tablet:max-w-none tablet:pt-0 desktop:h-[720px]">
        <Image
          src={mobileImageSrc}
          alt="캐롯아이 AI 의사결정 아키텍처 다이어그램(모바일)"
          fill
          sizes="(max-width: 799px) 100vw"
          unoptimized
          draggable={false}
          className="object-contain tablet:hidden"
        />
        <Image
          src={imageSrc}
          alt="캐롯아이 AI 의사결정 아키텍처 다이어그램"
          fill
          sizes="(max-width: 1279px) 100vw, 1080px"
          unoptimized
          draggable={false}
          className="hidden object-contain tablet:block"
        />
      </div>
    </section>
  );
}
