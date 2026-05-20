import Image from "next/image";

type MediaPlaceholderVariant = "main" | "mes" | "cast" | "financial";

type MediaPlaceholderProps = {
  label?: string;
  className?: string;
  variant?: MediaPlaceholderVariant;
};

const heroImages = {
  main: {
    src: "/image/hero/mainHero.png",
    alt: "캐롯아이 메인 히어로 이미지",
  },
  mes: {
    src: "/image/hero/mesHero.png",
    alt: "캐롯 MES 히어로 이미지",
  },
  cast: {
    src: "/image/hero/castHero.png",
    alt: "캐롯 CAST 히어로 이미지",
  },
  financial: {
    src: "/image/hero/financialHero.png",
    alt: "캐롯 금융 시스템 히어로 이미지",
  },
} as const;

const heroWordmark = {
  mes: {
    src: "/image/hero/mesWord.png",
    alt: "mes hero wordmark",
    width: 4312,
    height: 2304,
  },
  cast: {
    src: "/image/hero/castWord.png",
    alt: "cast hero wordmark",
    width: 4312,
    height: 2304,
  },
  financial: {
    src: "/image/hero/financialWord.png",
    alt: "financial hero wordmark",
    width: 2113,
    height: 1000,
  },
} as const;

const heroImageSizes =
  "(max-width: 799px) 100vw, (max-width: 1279px) 100vw, 2160px";

function MainHeroImage() {
  const heroImage = heroImages.main;

  return (
    <div className="relative h-[28.75rem] w-full overflow-hidden border-y border-border bg-background tablet:h-[41.25rem] desktop:aspect-[5120/2640] desktop:h-auto">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        preload
        quality={100}
        sizes="100vw"
        className="object-cover object-[58%_center] tablet:object-center"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 flex h-full items-center justify-center desktop:h-[min(100%,calc(100dvh-6.25rem))]">
        <div className="content-shell px-lg tablet:px-2xl desktop:px-0">
          <div className="flex w-full max-w-[20rem] flex-col gap-md text-foreground tablet:max-w-none tablet:gap-lg">
            <h1 className="break-keep font-sans text-[1.875rem] leading-[1.18] tracking-[0] tablet:text-[2.625rem] desktop:text-[3.375rem]">
              <span className="font-normal">결정으로 이어주는</span>
              <br />
              <span className="font-black">AI 데이터 플로우</span>
            </h1>
            <p className="break-keep font-sans text-[0.875rem] leading-[1.55] font-medium tracking-[0] tablet:text-[1rem]">
              캐롯아이는 다양한 데이터를 수집·정제해
              <br className="tablet:hidden" /> AI가 활용할 수 있는 구조로 연결하고,
              <br />
              예측·시뮬레이션·설명까지 하나의 흐름으로 이어
              <br className="tablet:hidden" />
              실행 가능한 결과를 만듭니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroImage({ variant }: { variant: MediaPlaceholderVariant }) {
  if (variant === "main") {
    return <MainHeroImage />;
  }

  const heroImage = heroImages[variant];
  const isFinancial = variant === "financial";
  const wordmark = heroWordmark[variant];

  return (
    <div className="relative h-[21rem] w-full overflow-hidden border border-border bg-background tablet:h-[28rem] desktop:h-[43.75rem]">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        preload
        quality={100}
        sizes={heroImageSizes}
        className="object-cover object-center"
      />
      {isFinancial ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-xl tablet:p-2xl desktop:p-3xl">
          <Image
            src={wordmark.src}
            alt={wordmark.alt}
            width={wordmark.width}
            height={wordmark.height}
            sizes="(max-width: 799px) 15rem, (max-width: 1279px) 24rem, 33rem"
            className="h-auto w-full max-w-[20rem] object-contain tablet:max-w-[30rem] desktop:max-w-[42rem]"
          />
        </div>
      ) : (
        <Image
          src={wordmark.src}
          alt={wordmark.alt}
          fill
          sizes={heroImageSizes}
          className="pointer-events-none object-cover object-center"
        />
      )}
    </div>
  );
}

export default function MediaPlaceholder({
  label = "JPG placeholder / height 43.75rem",
  className = "",
  variant = "main",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`flex self-stretch flex-col items-center justify-center ${className}`.trim()}
    >
      <HeroImage variant={variant} />
      <span className="sr-only">{label}</span>
    </div>
  );
}
