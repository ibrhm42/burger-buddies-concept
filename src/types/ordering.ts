export type ProductCategoryId =
  | "burgers"
  | "pizza"
  | "deals"
  | "pasta"
  | "sides"
  | "drinks";

export type MenuCategorySlug = "popular" | ProductCategoryId;

export type Branch = Readonly<{
  id: string;
  slug: string;
  name: string;
  city: string;
  available: boolean;
}>;

export type Category = Readonly<{
  id: MenuCategorySlug;
  name: string;
  searchTerms: readonly string[];
}>;

export type ProductOption = Readonly<{
  id: string;
  name: string;
  description?: string;
  priceAdjustment: number;
}>;

export type ProductOptionGroup = Readonly<{
  id: string;
  name: string;
  selectionType: "single" | "multiple";
  minSelections: number;
  maxSelections: number;
  options: readonly ProductOption[];
}>;

export type Product = Readonly<{
  id: string;
  slug: string;
  name: string;
  description: string;
  categoryId: ProductCategoryId;
  imageSrc: string;
  imageClassName: string;
  basePrice: number;
  available: boolean;
  quickAddEligible: boolean;
  featured: boolean;
  optionGroups: readonly ProductOptionGroup[];
}>;

export type Promotion = Readonly<{
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageClassName: string;
  href: string;
  ctaLabel: string;
}>;

export type SelectedProductOption = Readonly<{
  groupId: string;
  groupName: string;
  optionId: string;
  optionName: string;
  priceAdjustment: number;
}>;

export type CartProductSnapshot = Readonly<{
  id: string;
  slug: string;
  name: string;
  imageSrc: string;
  imageClassName: string;
  basePrice: number;
}>;

export type CartLine = Readonly<{
  identity: string;
  product: CartProductSnapshot;
  selectedOptions: readonly SelectedProductOption[];
  quantity: number;
  specialInstructions: string;
  unitPrice: number;
  lineTotal: number;
}>;

export type FulfilmentType = "delivery" | "pickup";

export type CustomerDetails = Readonly<{
  fulfilmentType: FulfilmentType;
  fullName: string;
  phone: string;
  address: string;
  landmark: string;
  notes: string;
}>;

export type CustomerField =
  | "fullName"
  | "phone"
  | "address"
  | "landmark"
  | "notes";

export type CustomerErrors = Partial<Record<CustomerField, string>>;
