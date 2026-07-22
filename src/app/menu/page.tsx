import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { DemoPriceNotice } from "@/components/menu/demo-price-notice";
import { MenuBrowser } from "@/components/menu/menu-browser";
import { StickyCartSummary } from "@/components/menu/sticky-cart-summary";
import { categories, defaultCategoryId } from "@/data/categories";
import type { MenuCategorySlug } from "@/types/ordering";

export const metadata: Metadata = {
  title: "Mirpurkhas Menu",
  description:
    "Browse an unofficial Burger Buddies menu and customize a concept order.",
};

type MenuPageProps = {
  searchParams: Promise<{
    category?: string | string[];
    query?: string | string[];
  }>;
};

function readFirst(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const query = await searchParams;
  const requestedCategory = readFirst(query.category);
  const initialCategory = (
    categories.some((category) => category.id === requestedCategory)
      ? requestedCategory
      : defaultCategoryId
  ) as MenuCategorySlug;
  const initialQuery = readFirst(query.query)?.slice(0, 80) ?? "";

  return (
    <PageShell activeNav="menu" mainClassName="bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-44 pt-5 sm:px-6 md:px-8 md:pb-12 md:pt-8 lg:px-10">
        <MenuBrowser
          initialCategory={initialCategory}
          initialQuery={initialQuery}
        />
        <DemoPriceNotice className="mt-6" />
      </div>
      <StickyCartSummary />
    </PageShell>
  );
}
