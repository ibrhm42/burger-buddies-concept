"use client";

import Link from "next/link";
import { useEffect, useRef, type KeyboardEvent } from "react";
import type { Category, MenuCategorySlug } from "@/types/ordering";
import { cn } from "@/lib/styles";

type CategoryTabsProps = {
  categories: readonly Category[];
  selected?: MenuCategorySlug;
  onSelect?: (category: MenuCategorySlug) => void;
  linkToMenu?: boolean;
  className?: string;
};

export function CategoryTabs({
  categories,
  selected = categories[0]?.id ?? "popular",
  onSelect,
  linkToMenu = false,
  className,
}: CategoryTabsProps) {
  const categoryRefs = useRef<
    Partial<Record<MenuCategorySlug, HTMLButtonElement | HTMLAnchorElement | null>>
  >({});

  useEffect(() => {
    const selectedCategory = categoryRefs.current[selected];
    selectedCategory?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [selected]);

  function handleCategoryKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    categoryId: MenuCategorySlug,
  ) {
    if (!onSelect) return;
    const currentIndex = categories.findIndex((category) => category.id === categoryId);
    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % categories.length;
    else if (event.key === "ArrowLeft")
      nextIndex = (currentIndex - 1 + categories.length) % categories.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = categories.length - 1;
    else return;

    event.preventDefault();
    const nextCategory = categories[nextIndex];
    onSelect(nextCategory.id);
    window.requestAnimationFrame(() => categoryRefs.current[nextCategory.id]?.focus());
  }

  return (
    <nav aria-label="Menu categories" className={cn("min-w-0 max-w-full", className)}>
      <ul className="hide-scrollbar flex max-w-full touch-pan-x gap-2 overflow-x-auto overscroll-x-contain scroll-px-4 px-1 py-1 pr-3">
        {categories.map((category) => {
          const isSelected = category.id === selected;
          const styles = cn(
            "inline-flex h-10 items-center whitespace-nowrap rounded-full border px-4 text-xs font-extrabold transition",
            isSelected
              ? "border-brand bg-brand text-brand-ink"
              : "border-border-subtle bg-surface-1 text-text-secondary hover:border-border-strong hover:text-text-primary",
          );
          return (
            <li key={category.id}>
              {onSelect ? (
                <button
                  ref={(node) => {
                    categoryRefs.current[category.id] = node;
                  }}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onSelect(category.id)}
                  onKeyDown={(event) => handleCategoryKeyDown(event, category.id)}
                  className={styles}
                >
                  {category.name}
                </button>
              ) : linkToMenu ? (
                <Link
                  ref={(node) => {
                    categoryRefs.current[category.id] = node;
                  }}
                  href={`/menu?category=${category.id}`}
                  aria-current={isSelected ? "page" : undefined}
                  className={styles}
                >
                  {category.name}
                </Link>
              ) : (
                <span aria-current={isSelected ? "page" : undefined} className={styles}>
                  {category.name}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
