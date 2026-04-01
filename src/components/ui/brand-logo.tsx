import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
  priority?: boolean;
};

export const BrandLogo = ({
  className,
  imageClassName,
  labelClassName,
  showLabel = true,
  priority = false,
}: BrandLogoProps) => {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative block h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[0_10px_24px_rgba(0,0,0,0.22)]",
          imageClassName,
        )}
      >
        <Image
          src="/voltaLOGO.png"
          alt="VOLTA"
          fill
          priority={priority}
          sizes="40px"
          className="object-cover"
        />
      </span>
      {showLabel && (
        <span
          className={cn(
            "font-headline text-lg font-bold tracking-[-0.05em] text-white md:text-xl",
            labelClassName,
          )}
        >
          VOLTA
        </span>
      )}
    </span>
  );
};
