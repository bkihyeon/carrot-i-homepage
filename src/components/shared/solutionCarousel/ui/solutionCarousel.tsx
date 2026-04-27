"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  solutionSlides,
  type SolutionSlide,
} from "@/components/shared/solutionCarousel/model/solutionCarousel.data";

import "swiper/css";
import "swiper/css/navigation";

type SolutionCarouselProps = {
  className?: string;
};

const solutionLogoById = {
  mes: {
    src: "/icon/main/solution_mes.png",
    alt: "preci.MES",
    width: 2836,
    height: 628,
    className: "w-[17rem] tablet:w-[30rem]",
  },
  cast: {
    src: "/icon/main/solution_cast.png",
    alt: "preci.CAST",
    width: 3076,
    height: 628,
    className: "w-[18rem] tablet:w-[32rem]",
  },
  "financial-system": {
    src: "/icon/main/solution_financial.png",
    alt: "Financial System",
    width: 2482,
    height: 1172,
    className: "w-[15rem] tablet:w-[24rem]",
  },
} as const;

function SolutionVisual({
  slide,
  compact = false,
}: {
  slide: SolutionSlide;
  compact?: boolean;
}) {
  const visualHeight = compact ? "h-[14rem] tablet:h-[22rem]" : "h-[501px]";
  const logo = solutionLogoById[slide.id as keyof typeof solutionLogoById];

  return (
    <div className={`relative w-full overflow-hidden ${visualHeight}`.trim()}>
      <Image
        src={slide.imageSrc}
        alt={slide.imageAlt}
        fill
        sizes={
          compact
            ? "(max-width: 799px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 4rem), 1080px"
            : "1080px"
        }
        className="object-cover opacity-75"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(212,212,216,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,212,216,0.18)_1px,transparent_1px)] bg-[size:46.91px_100px]" />
      {logo ? (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className={`absolute left-1/2 top-1/2 h-auto max-w-[82%] -translate-x-1/2 -translate-y-1/2 object-contain ${logo.className}`.trim()}
        />
      ) : null}
      <Link
        href={slide.href}
        aria-label={`${slide.title} 페이지로 이동`}
        className="absolute top-5 right-5 hidden h-[3.5rem] w-[3.5rem] items-center justify-center border-[1px] border-white/85 bg-white/20 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tablet:flex"
      >
        <Image
          src={"/icon/main/slider/arrow_outward.svg"}
          alt={"outward arrow icon"}
          width={24}
          height={24}
          className={""}
        />
      </Link>
    </div>
  );
}

function SolutionCard({
  slide,
  compact = false,
}: {
  slide: SolutionSlide;
  compact?: boolean;
}) {
  const titleClassName = compact
    ? "text-[1.25rem] leading-[1.75rem] font-black tracking-[-0.0625rem]"
    : "text-[2rem] leading-[1.25] font-black tracking-[-1px] tablet:text-[34px] tablet:leading-[1.4]";
  const subtitleClassName = compact
    ? "text-[0.875rem] leading-[1.3125rem] font-normal tracking-[0.00438rem]"
    : "text-[1.125rem] leading-[1.4] font-bold tablet:text-[20px]";
  const descriptionClassName = compact
    ? "text-[0.875rem] leading-[1.3125rem] font-medium tracking-[0.00438rem] text-white"
    : "type-body-medium text-white";

  return (
    <article
      className="flex flex-col border border-border"
      style={{ backgroundColor: slide.themeColor }}
    >
      <div className={compact ? "p-md tablet:p-xl" : "p-xl"}>
        <SolutionVisual slide={slide} compact={compact} />
      </div>

      <div
        className={
          compact
            ? "flex flex-col gap-xl border-t-2 border-border p-3xl tablet:grid tablet:grid-cols-[minmax(0,1fr)_20rem] tablet:gap-0"
            : "flex h-[240px] border-t-2 border-border p-3xl"
        }
      >
        <div className=" tablet:mr-2xl flex flex-[1_0_0] flex-col items-start gap-xs break-keep text-white">
          <h3 className={titleClassName}>{slide.title}</h3>
          <p className={subtitleClassName}>{slide.subtitle}</p>
        </div>

        <div
          className={
            compact
              ? "border-l border-border pl-md tablet:pl-2xl"
              : "w-[400px] border-l border-border pl-2xl"
          }
        >
          <p className={descriptionClassName}>{slide.description}</p>
        </div>
      </div>
    </article>
  );
}

export default function SolutionCarousel({
  className = "",
}: SolutionCarouselProps) {
  return (
    <section className={className}>
      <div className="desktop:hidden">
        <div className="flex flex-col">
          {solutionSlides.map((slide) => (
            <SolutionCard key={slide.id} slide={slide} compact />
          ))}
        </div>
      </div>

      <div className="hidden desktop:block">
        {/* 캐러셀만 viewport 기준으로 clip */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-x-clip">
          <div className="mx-auto max-w-[1080px] overflow-visible">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".solution-carousel-prev",
                nextEl: ".solution-carousel-next",
              }}
              spaceBetween={0}
              slidesPerView="auto"
              slidesOffsetAfter={220}
              className="!overflow-visible"
            >
              {solutionSlides.map((slide) => (
                <SwiperSlide key={slide.id} className="!w-[1080px]">
                  <SolutionCard slide={slide} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex border border-border bg-secondary p-md ">
          <div className="flex w-full items-center justify-end gap-xs">
            <button className="solution-carousel-prev flex h-14 w-14 items-center justify-center rounded-none border border-border bg-white/40 text-foreground">
              <span aria-hidden className="text-2xl leading-none">
                <Image
                  src={"/icon/slider/arrow_left.svg"}
                  width={16}
                  height={16}
                  alt={"left arrow"}
                />
              </span>
            </button>
            <button className="solution-carousel-next flex h-14 w-14 items-center justify-center rounded-none border border-border bg-white/40 text-foreground">
              <span aria-hidden className="text-2xl leading-none">
                <Image
                  src={"/icon/slider/arrow_forward.svg"}
                  width={16}
                  height={16}
                  alt={"right arrow"}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
