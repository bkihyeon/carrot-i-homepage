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

export default function MainAiArchitecture({
  eyebrow = "AI ARCHITECTURE",
  title = (
    <>
      캐롯아이의 <br className={"block tablet:hidden"} /> AI 의사결정 아키텍처
    </>
  ),
  description = (
    <>
      데이터를 예측과 판단까지 하나의 흐름으로{" "}
      <br className={"block tablet:hidden"} />
      연결해 실행 가능한 방향을 제시합니다.
    </>
  ),
  imageSrc = defaultImageSrc,
  mobileImageSrc = defaultMobileImageSrc,
  className = "",
}: AIDecisionArchitectureProps) {
  return (
    <section
      className={`flex w-full flex-col items-start gap-8 bg-gradient-to-b from-accent to-background px-0 pt-24 pb-2xl ${className}`.trim()}
    >
      <div className="flex w-full flex-col items-start gap-xs text-center text-foreground">
        {eyebrow ? (
          <div className="flex w-full items-center justify-center gap-xs text-center">
            <Image
              src="/icon/main/our_icon.svg"
              alt="Our icon"
              width={16}
              height={18}
            />
            <p className="font-sans text-[var(--paragraph-small-font-size,0.875rem)] leading-[var(--paragraph-small-line-height,1.3125rem)] font-bold tracking-[0.00438rem] text-primary">
              {eyebrow}
            </p>
          </div>
        ) : null}
      </div>
      <div className="flex w-full flex-col items-start gap-2 text-center text-foreground">
        <h2 className="w-full break-keep text-center font-heading text-heading-2 leading-[140%] font-bold tracking-[var(--token-text-heading-2-letter-spacing)] text-foreground desktop:text-heading-1 desktop:leading-[125%] desktop:tracking-[var(--token-text-heading-1-letter-spacing)]">
          {title}
        </h2>
        <p className="type-body mx-auto whitespace-pre-line px-md text-center text-foreground">
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
