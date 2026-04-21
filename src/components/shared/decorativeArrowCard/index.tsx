import Image from "next/image";

type DecorativeArrowCardProps = {
  className?: string;
};

export default function DecorativeArrowCard({
  className = "",
}: DecorativeArrowCardProps) {
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
          src="/icon/main/_레이어_1.svg"
          alt=""
          width={39.17}
          height={44.17}
          style={{ width: "auto", height: "auto" }}
          aria-hidden
        />
        <Image
          src="/icon/main/Polygon 42.svg"
          alt=""
          width={23.09}
          height={20}
          style={{ width: "auto", height: "auto" }}
          aria-hidden
        />
      </div>
    </div>
  );
}
