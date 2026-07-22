import Link from "next/link";
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
  return (
    <nav aria-label="Menu categories" className={className}>
      <ul className="hide-scrollbar flex gap-2 overflow-x-auto py-1">
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
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onSelect(category.id)}
                  className={styles}
                >
                  {category.name}
                </button>
              ) : linkToMenu ? (
                <Link
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
