import type { Promotion } from "@/types/ordering";

export const promotions = [
  {
    id: "promotion-featured-combo",
    eyebrow: "Concept selection",
    title: "Featured combo",
    description: "Choose a Burger Buddies favourite and build your order.",
    imageSrc: "/references/products/beef-burger.jpg",
    imageClassName:
      "scale-[1.3] object-[54%_64%] md:scale-[1.15] md:object-[57%_64%]",
    href: "/menu?category=deals",
    ctaLabel: "Full Menu",
  },
] as const satisfies readonly Promotion[];

export const featuredPromotion = promotions[0];
