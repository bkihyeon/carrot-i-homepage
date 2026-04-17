import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";

type NextPictureProps = {
  className?: string;
  inquiryHref?: string;
  title?: ReactNode;
  description?: ReactNode;
  inquiry_des?: ReactNode;
};

export default function NextPicture({
  className = "",
  inquiryHref = "/#inquiry",
  title = null,
  description = null,
  inquiry_des = null,
}: NextPictureProps) {
  return (
    <section
      className={`flex flex-col overflow-hidden border border-border bg-background tablet:grid tablet:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] desktop:grid-cols-[minmax(0,648.8px)_minmax(320px,431.2px)] ${className}`.trim()}
    >
      <div className="flex min-h-[180px] flex-col items-start gap-xs p-xl text-foreground tablet:min-h-[220px] tablet:p-2xl desktop:min-h-[240px] desktop:p-3xl">
        <h2 className="break-keep font-heading text-[1.75rem] leading-[1.4] font-black tracking-[-1px] tablet:max-w-[15.75rem] tablet:text-[2.125rem] tablet:leading-[140%] tablet:font-black tablet:tracking-[-0.0625rem] desktop:max-w-[31rem] desktop:text-[2.125rem] desktop:leading-[140%] desktop:font-black desktop:tracking-[-0.0625rem]">
          {title}
        </h2>
        <p className="font-sans text-[1rem] leading-[140%] font-light uppercase text-foreground tablet:max-w-[22rem] tablet:text-[1.125rem] desktop:max-w-[22rem] desktop:text-[1.125rem] desktop:font-light">
          {description}
        </p>
      </div>

      <div className="flex min-h-[180px] flex-col items-start gap-xl border-t border-border p-xl tablet:min-h-[220px] tablet:gap-2xl tablet:border-t-0 tablet:border-l tablet:p-3xl desktop:min-h-[240px] desktop:gap-4xl desktop:p-3xl">
        <p className="type-body font-medium text-foreground">{inquiry_des}</p>

        <Link
          href={inquiryHref}
          className="inline-flex min-h-[36px] items-center justify-center gap-xs rounded-xl bg-secondary px-md py-xs text-secondary-foreground transition-colors hover:bg-accent"
        >
          <span className="type-body font-medium">문의하기</span>
          <span aria-hidden className="text-[14px] leading-none">
            <Image
              src={"icon/main/inquiring.svg"}
              alt={"문의하기"}
              width={13.25}
              height={13.25}
            />
          </span>
        </Link>
      </div>
    </section>
  );
}
