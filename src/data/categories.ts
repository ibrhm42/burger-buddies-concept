import type { Category } from "@/types/ordering";

export const categories = [
  { id: "popular", name: "Popular", searchTerms: ["popular", "featured"] },
  { id: "burgers", name: "Burgers", searchTerms: ["burger", "burgers"] },
  { id: "pizza", name: "Pizza", searchTerms: ["pizza", "pizzas"] },
  { id: "deals", name: "Deals", searchTerms: ["deal", "deals", "combo"] },
  { id: "pasta", name: "Pasta", searchTerms: ["pasta"] },
  { id: "sides", name: "Sides", searchTerms: ["side", "sides", "fries"] },
  { id: "drinks", name: "Drinks", searchTerms: ["drink", "drinks"] },
] as const satisfies readonly Category[];

export const defaultCategoryId = categories[0].id;

export function getCategoryById(id: string) {
  return categories.find((category) => category.id === id);
}
