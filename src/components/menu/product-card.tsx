"use client";

import { ArrowRight, Check, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ResilientImage } from "@/components/ui/resilient-image";
import { formatPkr } from "@/lib/pricing";
import { cn } from "@/lib/styles";
import { useCart } from "@/providers/cart-provider";
import type { Product } from "@/types/ordering";

type ProductCardProps = {
  product: Product;
  variant?: "discovery" | "menu";
  badge?: string;
  className?: string;
};

function ProductAction({ product }: { product: Product }) {
  const { quickAddProduct } = useCart();
  const [added, setAdded] = useState(false);

  if (!product.available) {
    return (
      <span className="inline-flex min-h-9 items-center rounded-full border border-border-strong bg-surface-2 px-3 text-[0.62rem] font-black text-text-tertiary">
        Currently unavailable
      </span>
    );
  }

  const styles =
    "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-brand px-3 text-[0.65rem] font-black text-brand-ink transition hover:bg-brand-hover";

  if (!product.quickAddEligible) {
    return (
      <Link href={`/menu/${product.slug}`} className={styles}>
        Customize
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={styles}
      aria-live="polite"
      onClick={() => {
        if (!quickAddProduct(product)) return;
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1800);
      }}
      aria-label={`Add ${product.name} to your order`}
    >
      {added ? "Added" : "Add"}
      {added ? (
        <Check className="size-3.5" aria-hidden="true" />
      ) : (
        <Plus className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}

export function ProductCard({
  product,
  variant = "discovery",
  badge,
  className,
}: ProductCardProps) {
  const cardBadge = badge ?? (!product.quickAddEligible ? "Customizable" : undefined);

  if (variant === "menu") {
    return (
      <article
        className={cn(
          "grid grid-cols-[6.8rem_1fr] gap-3 rounded-[1.35rem] border border-border-subtle bg-surface-1 p-2.5 md:grid-cols-[7.3rem_1fr] lg:block lg:overflow-hidden lg:p-0",
          className,
        )}
      >
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-2 lg:rounded-none lg:rounded-t-[1.3rem]">
          <ResilientImage
            src={product.imageSrc}
            alt={`Temporary crop representing ${product.name}`}
            fill
            sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, (max-width: 1280px) 25vw, 300px"
            className={cn("object-cover", product.imageClassName)}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-surface-1/85 to-transparent lg:h-16" />
        </div>
        <div className="flex min-w-0 flex-col py-1 pr-1 lg:min-h-[12.25rem] lg:p-4">
          {cardBadge && (
            <span className="mb-1 w-fit rounded-full bg-brand/12 px-2 py-1 text-[0.6rem] font-black uppercase tracking-[0.12em] text-brand">
              {cardBadge}
            </span>
          )}
          <h3 className="break-words text-sm font-black leading-5 text-text-primary lg:text-base">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-text-tertiary">
            {product.description}
          </p>
          <div className="mt-auto flex items-end justify-between gap-2 pt-2">
            <p className="shrink-0 text-sm font-black text-text-primary">
              <span className="block text-[0.58rem] uppercase tracking-[0.12em] text-text-tertiary">
                Starting from
              </span>
              {formatPkr(product.basePrice)}
            </p>
            <ProductAction product={product} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[1.35rem] border border-border-subtle bg-surface-1 shadow-[0_14px_35px_rgb(0_0_0_/_0.18)]",
        className,
      )}
    >
      <div className="relative aspect-[1.12/1] overflow-hidden bg-surface-2">
        <ResilientImage
          src={product.imageSrc}
          alt={`Temporary crop representing ${product.name}`}
          fill
          sizes="(max-width: 768px) 48vw, 280px"
          className={cn("object-cover transition duration-500", product.imageClassName)}
        />
        {cardBadge && (
          <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-background/80 px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-[0.12em] text-text-primary backdrop-blur-sm">
            {cardBadge}
          </span>
        )}
      </div>
      <div className="p-3 sm:p-3.5">
        <h3 className="line-clamp-2 break-words text-sm font-black leading-5 text-text-primary">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 min-h-9 text-[0.7rem] leading-[1.1rem] text-text-tertiary sm:min-h-10 sm:text-xs sm:leading-5">
          {product.description}
        </p>
        <div className="mt-2.5 flex flex-wrap items-end justify-between gap-2 sm:mt-3 sm:flex-nowrap">
          <p className="text-sm font-black text-text-primary">
            <span className="block text-[0.56rem] uppercase tracking-[0.12em] text-text-tertiary">
              Starting from
            </span>
            {formatPkr(product.basePrice)}
          </p>
          <ProductAction product={product} />
        </div>
      </div>
    </article>
  );
}
