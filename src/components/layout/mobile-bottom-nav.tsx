"use client";

import { BadgePercent, House, Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/providers/cart-provider";

const links = [
  { label: "Home", href: "/", icon: House, key: "home" },
  { label: "Menu", href: "/menu", icon: Menu, key: "menu" },
  { label: "Deals", href: "/menu?category=deals", icon: BadgePercent, key: "deals" },
  { label: "Cart", href: "/cart", icon: ShoppingBag, key: "cart" },
];

type MobileBottomNavProps = {
  active?: "home" | "menu" | "deals" | "cart";
};

export function MobileBottomNav({ active = "home" }: MobileBottomNavProps) {
  const { hydrated, totalQuantity } = useCart();

  return (
    <nav
      aria-label="Mobile navigation"
      className="safe-bottom fixed inset-x-0 bottom-0 z-50 border-t border-border-subtle bg-background/94 px-3 pt-2 backdrop-blur-xl md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4 gap-1">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              aria-current={active === item.key ? "page" : undefined}
              className={`flex h-12 flex-col items-center justify-center gap-1 rounded-xl text-[0.62rem] font-extrabold transition ${
                active === item.key
                  ? "bg-brand/10 text-brand"
                  : "text-text-tertiary hover:bg-surface-1 hover:text-text-primary"
              }`}
            >
              <span className="relative">
                <item.icon className="size-4" aria-hidden="true" />
                {item.key === "cart" && hydrated && totalQuantity > 0 && (
                  <span className="absolute -right-3 -top-2 grid min-w-4 place-items-center rounded-full bg-brand px-1 text-[0.5rem] font-black leading-4 text-brand-ink">
                    {totalQuantity > 99 ? "99+" : totalQuantity}
                  </span>
                )}
              </span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
