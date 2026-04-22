import Image from "next/image";

type DecorativeArrowCardProps = {
  className?: string;
  variant?: "mes" | "cast" | "financial";
};

const decorativeArrowCardAssets = {
  mes: {
    cubeSrc: "/icon/main/_레이어_1.svg",
    arrowSrc: "/icon/main/Polygon 42.svg",
    cubeWidth: 39.17,
    cubeHeight: 44.17,
    arrowWidth: 23.09,
    arrowHeight: 20,
  },
  cast: {
    cubeSrc: "/icon/main/_레이어_1_b.svg",
    arrowSrc: "/icon/main/Polygon 42_b.svg",
    cubeWidth: 39.17,
    cubeHeight: 44.17,
    arrowWidth: 23.09,
    arrowHeight: 20,
  },
  financial: {
    cubeSrc: "/icon/main/_레이어_1_g.svg",
    arrowSrc: "/icon/main/Polygon 42_g.svg",
    cubeWidth: 39.17,
    cubeHeight: 44.17,
    arrowWidth: 23.09,
    arrowHeight: 20,
  },
} as const;

export default function DecorativeArrowCard({
  className = "",
  variant = "mes",
}: DecorativeArrowCardProps) {
  const assets = decorativeArrowCardAssets[variant];

  return (
    <div
      className={`relative flex h-[22.7rem] w-full shrink-0 overflow-hidden border border-border bg-secondary tablet:h-full tablet:aspect-auto desktop:h-[386px] desktop:w-[216px] desktop:aspect-[216/386] ${className}`.trim()}
    >
      <div className="absolute inset-0 bg-secondary" />
      <div
        className="absolute inset-0 bg-background"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div className="absolute right-[16%] bottom-[10%] flex flex-col items-center gap-2 desktop:right-[28px] desktop:bottom-[27px]">
        <Image
          src={assets.cubeSrc}
          alt=""
          width={assets.cubeWidth}
          height={assets.cubeHeight}
          style={{ width: "auto", height: "auto" }}
          aria-hidden
        />
        <Image
          src={assets.arrowSrc}
          alt=""
          width={assets.arrowWidth}
          height={assets.arrowHeight}
          style={{ width: "auto", height: "auto" }}
          aria-hidden
        />
      </div>
    </div>
  );
}
