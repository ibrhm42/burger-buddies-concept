"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import { BranchSelector } from "@/components/branch/branch-selector";
import { useCart } from "@/providers/cart-provider";

export function MobileHeader() {
  const { totalQuantity } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle/80 bg-background/94 px-4 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex h-[4.25rem] max-w-md items-center justify-between gap-3">
        <BrandMark compact />
        <BranchSelector compact className="min-w-0 flex-1" />
        <Link
          href="/cart"
          aria-label={`Cart, ${totalQuantity} ${totalQuantity === 1 ? "item" : "items"}`}
          className="relative grid size-10 shrink-0 place-items-center rounded-full border border-border-subtle bg-surface-1 text-text-secondary transition hover:border-border-strong hover:bg-surface-2 hover:text-text-primary"
        >
          <ShoppingBag className="size-4" aria-hidden="true" />
          <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-brand text-[0.58rem] font-black text-brand-ink">
            {totalQuantity > 99 ? "99+" : totalQuantity}
          </span>
        </Link>
      </div>
    </header>
  );
}
