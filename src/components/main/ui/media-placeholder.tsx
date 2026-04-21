type MediaPlaceholderProps = {
  label?: string;
  className?: string;
  variant?: "mes" | "cast" | "financial";
};

const mediaPlaceholderTheme = {
  mes: "bg-orange-400",
  cast: "bg-[#9333EA]",
  financial: "bg-[#16A34A]",
} as const;

export default function MediaPlaceholder({
  label = "JPG placeholder / height 43.75rem",
  className = "",
  variant = "mes",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`flex self-stretch flex-col items-center justify-center ${className}`.trim()}
    >
      <div
        className={`flex h-[21rem] w-full items-center justify-center border border-white/10 py-2xl text-center text-white/80 shadow-card tablet:h-[28rem] desktop:h-[43.75rem] ${mediaPlaceholderTheme[variant]}`.trim()}
      >
        <span className="type-body-bold text-white">{label}</span>
      </div>
    </div>
  );
}
