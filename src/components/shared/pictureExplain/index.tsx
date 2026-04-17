import type { ReactNode } from "react";

type PictureExplainProps = {
  media: ReactNode;
  title: ReactNode;
  description: ReactNode;
  className?: string;
  mediaClassName?: string;
  bodyClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function PictureExplain({
  media,
  title,
  description,
  className = "",
  mediaClassName = "",
  bodyClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: PictureExplainProps) {
  return (
    <section
      className={`grid w-full max-w-none grid-cols-[10rem_minmax(0,13rem)] items-center justify-start gap-xl overflow-hidden border border-border bg-background px-md py-xl tablet:flex tablet:flex-col tablet:gap-0 tablet:p-0 desktop:w-[216px] desktop:max-w-[216px] ${className}`.trim()}
    >
      <div className={`relative h-[10rem] w-[10rem] shrink-0 self-center justify-self-start tablet:aspect-square tablet:h-auto tablet:w-full ${mediaClassName}`.trim()}>
        {media}
      </div>

      <div
        className={`flex min-w-0 flex-col items-start gap-xs py-sm tablet:w-full tablet:flex-[1_0_0] tablet:p-xl desktop:p-2xl ${bodyClassName}`.trim()}
      >
        <div className={`type-heading-4 w-full text-foreground ${titleClassName}`.trim()}>
          {title}
        </div>
        <div
          className={`type-body w-full text-foreground-alt ${descriptionClassName}`.trim()}
        >
          {description}
        </div>
      </div>
    </section>
  );
}
