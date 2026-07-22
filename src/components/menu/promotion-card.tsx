import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { ResilientImage } from "@/components/ui/resilient-image";
import { cn } from "@/lib/styles";

type PromotionCardProps = {
  imageSrc: string;
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  href?: string;
  imageClassName?: string;
  className?: string;
};

export function PromotionCard({
  imageSrc,
  eyebrow = "Concept deal",
  title,
  description,
  ctaLabel = "Explore menu",
  href = "#popular-products",
  imageClassName,
  className,
}: PromotionCardProps) {
  return (
    <article
      id="featured-combo"
      className={cn(
        "relative isolate min-h-[11.5rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#efa01d] shadow-[var(--shadow-card)] md:min-h-[15rem]",
        className,
      )}
    >
      <div className="absolute inset-y-0 right-0 w-[62%] overflow-hidden md:w-[58%]">
        <ResilientImage
          src={imageSrc}
          alt="Temporary social-post crop showing a Burger Buddies food selection"
          fill
          sizes="(max-width: 768px) 62vw, (max-width: 1280px) 58vw, 740px"
          className={cn("object-cover", imageClassName)}
          preload
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#efa01d_0%,rgba(239,160,29,0.72)_18%,rgba(239,160,29,0.04)_58%)]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(239,160,29,1)_0%,rgba(239,160,29,0.97)_43%,rgba(239,160,29,0.02)_76%)]" />
      <div className="relative flex min-h-[11.5rem] max-w-[68%] flex-col justify-center p-5 sm:p-6 md:min-h-[15rem] md:max-w-[54%] md:p-8">
        <p className="flex items-center gap-1.5 text-[0.65rem] font-black uppercase tracking-[0.16em] text-[#5a2a00]">
          <Sparkles className="size-3.5" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-black leading-none tracking-[-0.045em] text-[#241306] sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mt-2 max-w-sm text-xs font-bold leading-5 text-[#5a2a00] sm:text-sm">
          {description}
        </p>
        <Link
          href={href}
          className="mt-4 inline-flex h-9 w-fit items-center gap-2 rounded-full bg-[#241306] px-4 text-xs font-black text-[#fff4df] transition hover:bg-[#3a210e]"
        >
          {ctaLabel}
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
