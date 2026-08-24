type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
  priority?: boolean;
};

export const BrandLogo = ({
  className = "",
  imageClassName = "",
  labelClassName = "",
  showLabel = true,
}: BrandLogoProps) => {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-primary/25 bg-primary/[0.08] shadow-[0_10px_30px_rgba(0,245,138,0.08)] ${imageClassName}`}
      >
        <span className="absolute inset-[3px] rounded-[0.62rem] border border-white/8 bg-[#07110d]" />
        <span className="relative font-headline text-[0.92rem] font-black tracking-[-0.12em] text-primary">V</span>
        <span className="absolute bottom-[7px] right-[7px] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,245,138,0.9)]" />
      </span>
      {showLabel && (
        <span className={`font-headline text-lg font-bold tracking-[-0.05em] text-white md:text-xl ${labelClassName}`}>
          VOLTA
        </span>
      )}
    </span>
  );
};
