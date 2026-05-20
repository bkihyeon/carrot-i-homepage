import type { OurPropsType } from "../model/main.data";
import Image from "next/image";

export default function OurComponent({
  ourProps,
  title,
  subtitle,
  children,
}: OurPropsType) {
  return (
    <section className={"flex flex-col gap-3"}>
      <div className="flex gap-2">
        <Image
          src={"/icon/main/our_icon.svg"}
          alt={"Our icon"}
          width={16}
          height={18}
        />
        <p className="font-sans text-body-small leading-[var(--token-text-body-small-line-height)] font-bold tracking-[0.00438rem] text-primary">
          OUR {ourProps}
        </p>
      </div>
      <div className={"flex flex-col gap-xl"}>
        <div className={"flex flex-col gap-(--spacing-2xs)"}>
          <h1 className="text-heading-4 leading-[var(--token-text-heading-4-line-height)] font-bold tracking-[var(--token-text-heading-4-letter-spacing)] tablet:text-heading-2 tablet:leading-[140%] tablet:tracking-[var(--token-text-heading-2-letter-spacing)]">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-body-regular font-normal">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
