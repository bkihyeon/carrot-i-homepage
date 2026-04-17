type WordBannerProps = {
  word: string;
  type: "mes" | "cast" | "financial";
};

const wordBannerTheme = {
  mes: {
    backgroundClassName: "bg-primary-foreground",
    textClassName: "text-primary",
  },
  cast: {
    backgroundClassName: "bg-[#FAF5FF]",
    textClassName: "text-[#9333EA]",
  },
  financial: {
    backgroundClassName: "bg-[#F0FDF4]",
    textClassName: "text-[#16A34A]",
  },
} as const;

export default function WordBanner({ word, type }: WordBannerProps) {
  const theme = wordBannerTheme[type];

  return (
    <section
      className={`flex h-[5.625rem] border border-border items-center justify-center text-center shadow-card tablet:h-[7.5rem] desktop:h-[10rem] ${theme.backgroundClassName}`.trim()}
    >
      <p className={`type-heading-2 ${theme.textClassName}`.trim()}>{word}</p>
    </section>
  );
}
