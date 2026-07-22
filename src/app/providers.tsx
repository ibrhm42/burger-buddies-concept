"use client";

import type { ReactNode } from "react";
import { BranchProvider } from "@/providers/branch-provider";
import { CartProvider } from "@/providers/cart-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <BranchProvider>
      <CartProvider>{children}</CartProvider>
    </BranchProvider>
  );
}
