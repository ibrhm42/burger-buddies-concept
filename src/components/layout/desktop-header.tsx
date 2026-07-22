"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import { BranchSelector } from "@/components/branch/branch-selector";
import { formatPkr } from "@/lib/pricing";
import { useCart } from "@/providers/cart-provider";

const navigation = [
  { label: "Home", href: "/", key: "home" },
  { label: "Menu", href: "/menu", key: "menu" },
  { label: "Deals", href: "/menu?category=deals", key: "deals" },
];

type DesktopHeaderProps = {
  active?: "home" | "menu" | "deals" | "cart";
};

export function DesktopHeader({ active = "home" }: DesktopHeaderProps) {
  const { totalQuantity, subtotal } = useCart();
  return (
    <header className="sticky top-0 z-40 hidden border-b border-border-subtle/80 bg-background/88 backdrop-blur-xl md:block">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-8 lg:px-10">
        <BrandMark className="mr-auto" />
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-1 rounded-full border border-border-subtle bg-surface-1 p-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-flex h-10 items-center rounded-full px-4 text-xs font-extrabold transition ${
                    active === item.key
                      ? "bg-surface-3 text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <BranchSelector compact className="min-w-40" />
        <span className="relative flex items-center gap-2">
          {totalQuantity > 0 && (
            <span className="text-right text-[0.65rem] font-bold leading-4 text-text-tertiary">
              <span className="block text-text-secondary">{totalQuantity} items</span>
              <span className="block">{formatPkr(subtotal)}</span>
            </span>
          )}
          <Link
            href="/cart"
            aria-label={`Cart, ${totalQuantity} ${totalQuantity === 1 ? "item" : "items"}`}
            className={`inline-flex size-11 items-center justify-center rounded-full border transition ${
              active === "cart"
                ? "border-brand bg-brand text-brand-ink"
                : "border-border-subtle bg-surface-2 text-text-primary hover:border-border-strong hover:bg-surface-3"
            }`}
          >
            <ShoppingBag className="size-4" aria-hidden="true" />
          </Link>
          <span className="pointer-events-none absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-brand text-[0.58rem] font-black text-brand-ink">
            {totalQuantity > 99 ? "99+" : totalQuantity}
          </span>
        </span>
      </div>
    </header>
  );
}
