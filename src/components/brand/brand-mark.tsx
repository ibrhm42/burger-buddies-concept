import Image from "next/image";
import { cn } from "@/lib/styles";

type BrandMarkProps = {
  compact?: boolean;
  className?: string;
};

export function BrandMark({ compact = false, className }: BrandMarkProps) {
  return (
    <div className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <span className="relative block size-10 shrink-0 overflow-hidden rounded-full border border-brand/35 bg-surface-2 shadow-[0_0_0_3px_rgb(255_163_26_/_0.06)]">
        <Image
          src="/references/brand/logo.jpg"
          alt={compact ? "Burger Buddies" : ""}
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </span>
      {!compact && (
        <span className="min-w-0 leading-none">
          <span className="block text-[1.05rem] font-black tracking-[-0.035em] text-text-primary">
            Burger Buddies
          </span>
        </span>
      )}
    </div>
  );
}
