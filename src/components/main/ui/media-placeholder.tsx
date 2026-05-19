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
  main: {
    src: "/image/hero/mainWord.svg",
    alt: "main hero wordmark",
    width: 300,
    height: 100,
  },
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

function HeroImage({ variant }: { variant: MediaPlaceholderVariant }) {
  const heroImage = heroImages[variant];
  const isMain = variant === "main";
  const isFinancial = variant === "financial";
  const wordmark = heroWordmark[variant];
  const wordmarkClassName = isMain
    ? "h-12 w-auto max-w-full object-contain tablet:h-16 desktop:h-[6.25rem]"
    : "h-auto w-full max-w-[20rem] object-contain tablet:max-w-[30rem] desktop:max-w-[36rem]";

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
      {isMain ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-xl tablet:p-2xl desktop:p-3xl">
          <Image
            src={wordmark.src}
            alt={wordmark.alt}
            width={wordmark.width}
            height={wordmark.height}
            sizes="(max-width: 799px) 24rem, (max-width: 1279px) 36rem, 56rem"
            className={wordmarkClassName}
          />
        </div>
      ) : isFinancial ? (
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
