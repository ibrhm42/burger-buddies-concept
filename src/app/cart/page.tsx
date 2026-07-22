import type { Metadata } from "next";
import { CartExperience } from "@/components/cart/cart-experience";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Your Order",
  description:
    "Review an unofficial Burger Buddies concept order and prepare a WhatsApp preview.",
};

export default function CartPage() {
  return (
    <PageShell activeNav="cart" showMobileNav={false} mainClassName="bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-36 pt-5 sm:px-6 md:px-8 md:pb-12 md:pt-8 lg:px-10">
        <CartExperience />
      </div>
    </PageShell>
  );
}
