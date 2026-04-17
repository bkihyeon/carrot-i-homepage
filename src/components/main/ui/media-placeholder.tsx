type MediaPlaceholderProps = {
  label?: string;
  className?: string;
};

export default function MediaPlaceholder({
  label = "JPG placeholder / height 43.75rem",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`flex self-stretch flex-col items-center justify-center ${className}`.trim()}
    >
      <div className="flex h-[21rem] w-full items-center justify-center border border-white/10 bg-orange-400 py-2xl text-center text-white/80 shadow-card tablet:h-[28rem] desktop:h-[43.75rem]">
        <span className="type-body-bold text-white">{label}</span>
      </div>
    </div>
  );
}
