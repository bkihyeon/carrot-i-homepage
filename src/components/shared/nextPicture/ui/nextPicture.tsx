import type { ReactNode } from "react";
import Image from "next/image";
import { OpenInquiryButton } from "@/components/shared/modal/ui/modal-trigger";

export type NextPictureProps = {
  className?: string;
  columnsClassName?: string;
  title?: ReactNode;
  description?: ReactNode;
  descriptionClassName?: string;
  inquiryDes?: ReactNode;
  inquiryDescriptionClassName?: string;
};

export default function NextPicture({
  className = "",
  columnsClassName = "tablet:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] desktop:grid-cols-[minmax(0,648.8px)_minmax(320px,431.2px)]",
  title = null,
  description = null,
  descriptionClassName = "font-sans text-[1.125rem] leading-[140%] font-light uppercase text-foreground",
  inquiryDes = null,
  inquiryDescriptionClassName = "font-sans text-[0.875rem] leading-[1.3125rem] font-medium tracking-[0.00438rem] text-foreground desktop:text-[1rem]",
}: NextPictureProps) {
  return (
    <section
      className={`flex flex-col overflow-hidden border border-border bg-background tablet:grid ${columnsClassName} ${className}`.trim()}
    >
      <div className="flex flex-col items-start gap-xs p-xl text-foreground tablet:min-h-[220px] tablet:p-2xl desktop:min-h-[240px] desktop:p-3xl">
        <h2 className="break-keep font-heading-3 text-[1.5rem] tablet:font-heading  tablet:text-[1.75rem] leading-[1.4] font-black tracking-[-1px] tablet:text-[1.5rem] tablet:leading-[140%] tablet:font-black tablet:tracking-[-0.0625rem] desktop:text-[2.125rem] desktop:leading-[140%] desktop:font-black desktop:tracking-[-0.0625rem]">
          {title}
        </h2>
        <p className={descriptionClassName}>{description}</p>
      </div>

      <div className="flex flex-col items-start gap-xl border-t border-border p-xl tablet:min-h-[220px] tablet:gap-2xl tablet:border-t-0 tablet:border-l tablet:p-3xl desktop:-ml-px desktop:min-h-[240px] desktop:gap-4xl desktop:p-3xl">
        <p className={inquiryDescriptionClassName}>{inquiryDes}</p>

        <OpenInquiryButton className="inline-flex min-h-[36px] items-center justify-center gap-xs rounded-xl bg-secondary px-md py-xs text-secondary-foreground transition-colors hover:bg-accent">
          <span className="type-body font-medium">문의하기</span>
          <span aria-hidden className="text-[14px] leading-none">
            <Image
              src={"icon/main/inquiring.svg"}
              alt={"문의하기"}
              width={13.25}
              height={13.25}
            />
          </span>
        </OpenInquiryButton>
      </div>
    </section>
  );
}
