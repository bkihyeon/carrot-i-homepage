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

function SolutionVisual({
  slide,
  compact = false,
}: {
  slide: SolutionSlide;
  compact?: boolean;
}) {
  const visualHeight = compact
    ? "h-[14rem] tablet:h-[22rem]"
    : "h-[501px]";
  const titleSize = slide.id === "financial-system"
    ? "text-[4rem] tablet:text-[5.5rem]"
    : "text-[4.5rem] tablet:text-[7rem]";

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
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-none font-black lowercase tracking-normal text-white/50 ${titleSize}`.trim()}
      >
        {slide.id === "financial-system" ? (
          <>
            <div>Financial</div>
            <div>System</div>
          </>
        ) : (
          <>
            <span>preci</span>
            <span className="uppercase">
              .{slide.id === "mes" ? "MES" : "CAST"}
            </span>
          </>
        )}
      </div>
      <Link
        href={slide.href}
        aria-label={`${slide.title} 페이지로 이동`}
        className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center border border-border bg-white/40 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span aria-hidden className="text-xl leading-none text-foreground">
          ↗
        </span>
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
            ? "flex flex-col gap-xl border-t-2 border-border p-xl tablet:grid tablet:grid-cols-[minmax(0,1fr)_20rem] tablet:gap-0 tablet:p-2xl"
            : "flex h-[240px] border-t-2 border-border p-3xl"
        }
      >
        <div className="flex flex-[1_0_0] flex-col items-start gap-xs text-white">
          <h3 className="text-[2rem] leading-[1.25] font-black tracking-[-1px] tablet:text-[34px] tablet:leading-[1.4]">
            {slide.title}
          </h3>
          <p className="text-[1.125rem] leading-[1.4] font-bold tablet:text-[20px]">
            {slide.subtitle}
          </p>
        </div>

        <div
          className={
            compact
              ? "border-t border-border pt-xl tablet:border-t-0 tablet:border-l tablet:pt-0 tablet:pl-2xl"
              : "w-[400px] border-l border-border pl-2xl"
          }
        >
          <p className="type-body-medium text-white">{slide.description}</p>
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
        <div className="overflow-visible">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".solution-carousel-prev",
              nextEl: ".solution-carousel-next",
            }}
            spaceBetween={0}
            slidesPerView={"auto"}
            className="!overflow-visible pr-[220px]"
          >
            {solutionSlides.map((slide) => (
              <SwiperSlide key={slide.id} className="!w-[1080px]">
                <SolutionCard slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex border border-border bg-secondary p-md">
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
