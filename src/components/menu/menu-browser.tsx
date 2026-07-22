"use client";

import { SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import { CategoryTabs } from "@/components/menu/category-tabs";
import { ProductCard } from "@/components/menu/product-card";
import { SearchBar } from "@/components/menu/search-bar";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { MenuCategorySlug } from "@/types/ordering";

function productMatchesSearch(product: (typeof products)[number], query: string) {
  if (!query) return true;
  const category = categories.find((entry) => entry.id === product.categoryId);
  const searchable = [
    product.name,
    product.description,
    category?.name ?? "",
    ...(category?.searchTerms ?? []),
  ]
    .join(" ")
    .toLocaleLowerCase();
  return searchable.includes(query);
}

export function MenuBrowser({
  initialCategory = "popular",
  initialQuery = "",
}: {
  initialCategory?: MenuCategorySlug;
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategorySlug>(initialCategory);
  const normalizedQuery = query.trim().toLocaleLowerCase();

  const visibleProducts = useMemo(
    () =>
      products.filter((product) => {
        const categoryMatches =
          selectedCategory === "popular"
            ? product.featured
            : product.categoryId === selectedCategory;
        return categoryMatches && productMatchesSearch(product, normalizedQuery);
      }),
    [normalizedQuery, selectedCategory],
  );

  function clearFilters() {
    setQuery("");
    setSelectedCategory("popular");
  }

  return (
    <>
      <header className="grid items-end gap-4 md:grid-cols-[minmax(0,1fr)_minmax(24rem,31rem)] md:gap-8">
        <div>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-brand">
            Mirpurkhas Menu
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-[-0.05em] text-text-primary sm:text-4xl">
            Full Menu
          </h1>
          <p className="mt-1.5 max-w-xl text-sm leading-6 text-text-secondary">
            Browse Burger Buddies favourites and customize your order.
          </p>
        </div>
        <SearchBar
          value={query}
          onChange={setQuery}
          onClear={() => setQuery("")}
        />
      </header>

      <CategoryTabs
        className="mt-4 md:mt-6"
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <section aria-labelledby="menu-products-title" className="mt-6 md:mt-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-brand">
              {categories.find((category) => category.id === selectedCategory)?.name}
            </p>
            <h2
              id="menu-products-title"
              className="mt-1 text-xl font-black tracking-[-0.035em] text-text-primary sm:text-2xl"
            >
              Choose something delicious
            </h2>
          </div>
          <p
            className="text-xs font-bold text-text-tertiary"
            aria-live="polite"
            aria-atomic="true"
          >
            {visibleProducts.length} {visibleProducts.length === 1 ? "item" : "items"}
          </p>
        </div>

        {visibleProducts.length === 0 ? (
          <EmptyState
            className="mt-4 min-h-[22rem]"
            icon={<SearchX className="size-5" aria-hidden="true" />}
            title="Nothing matches that search"
            description="Try another product name or clear the selected category."
            action={
              <Button variant="secondary" onClick={clearFilters}>
                Clear search and filters
              </Button>
            }
          />
        ) : (
          <div className="mt-4 grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="menu" />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
