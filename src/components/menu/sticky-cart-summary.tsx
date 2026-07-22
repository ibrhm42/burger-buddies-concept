"use client";

import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { formatPkr } from "@/lib/pricing";
import { useCart } from "@/providers/cart-provider";

export function StickyCartSummary() {
  const { hydrated, totalQuantity, subtotal } = useCart();
  if (!hydrated || totalQuantity === 0) return null;

  return (
    <aside
      aria-label="Current order summary"
      className="fixed inset-x-3 bottom-[4.7rem] z-40 mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-border-strong bg-surface-2/96 p-2.5 pl-3.5 shadow-[0_18px_55px_rgb(0_0_0_/_0.48)] backdrop-blur-xl md:hidden"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface-3 text-brand">
        <ShoppingBag className="size-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.62rem] font-black uppercase tracking-[0.12em] text-text-tertiary">
          Your Order
        </span>
        <span className="block text-sm font-black text-text-primary">
          {totalQuantity} {totalQuantity === 1 ? "item" : "items"} · {formatPkr(subtotal)}
        </span>
      </span>
      <Link
        href="/cart"
        className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-brand px-3 text-xs font-black text-brand-ink"
      >
        View Cart
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </Link>
    </aside>
  );
}
