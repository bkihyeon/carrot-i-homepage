import Image from "next/image";

type MediaPlaceholderVariant = "main" | "mes" | "cast" | "financial";

type MediaPlaceholderProps = {
  label?: string;
  className?: string;
  variant?: MediaPlaceholderVariant;
};

const heroWordmark = {
  main: {
    src: "/image/hero/mainWord.svg",
    alt: "main hero wordmark",
    width: 300,
    height: 100,
  },
  mes: {
    src: "/image/hero/mesWord.svg",
    alt: "mes hero wordmark",
    width: 405,
    height: 208,
  },
  cast: {
    src: "/image/hero/castWord.svg",
    alt: "cast hero wordmark",
    width: 440,
    height: 208,
  },
  financial: {
    src: "/image/hero/financialWord.svg",
    alt: "financial hero wordmark",
    width: 357,
    height: 176,
  },
} as const;

const mainHeroRows = Array.from({ length: 7 }, (_, rowIndex) =>
  Array.from({ length: 22 }, (_, columnIndex) => ({
    key: `${rowIndex}-${columnIndex}`,
  })),
);

function HeroGrid({ variant }: { variant: MediaPlaceholderVariant }) {
  const isMain = variant === "main";
  const wordmark = heroWordmark[variant];
  const wordmarkClassName = isMain
    ? "h-12 w-auto max-w-full object-contain tablet:h-16 desktop:h-[6.25rem]"
    : "h-auto w-full max-w-[20rem] object-contain tablet:max-w-[30rem] desktop:max-w-[36rem]";

  return (
    <div
      className={`relative flex h-[21rem] w-full flex-col items-start overflow-hidden border border-border tablet:h-[28rem] desktop:h-[43.75rem] ${isMain ? "bg-primary" : "bg-background"}`.trim()}
    >
      {mainHeroRows.map((row, rowIndex) => (
        <div
          key={`main-hero-row-${rowIndex}`}
          className="flex h-12 items-start self-stretch border-b border-border last:border-b-0 tablet:h-16 desktop:h-[6.25rem]"
        >
          {row.map((cell) => (
            <div
              key={cell.key}
              className={`h-full flex-[1_0_0] border-r border-border last:border-r-0 ${isMain ? "bg-primary" : "bg-background"}`.trim()}
            />
          ))}
        </div>
      ))}

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
      <HeroGrid variant={variant} />
      <span className="sr-only">{label}</span>
    </div>
  );
}
