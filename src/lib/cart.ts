import type {
  CartLine,
  Product,
  SelectedProductOption,
} from "@/types/ordering";
import {
  calculateLineTotal,
  calculateUnitPrice,
} from "@/lib/pricing";

export const MIN_CART_QUANTITY = 1;
export const MAX_CART_QUANTITY = 20;

export function normalizeInstructions(value: string) {
  return value.trim().replace(/\r\n/g, "\n").replace(/[ \t]+/g, " ");
}

function hashString(value: string) {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(36);
}

export function createCartLineIdentity(
  productId: string,
  selectedOptions: readonly SelectedProductOption[],
  specialInstructions: string,
) {
  const optionKey = [...selectedOptions]
    .sort((left, right) =>
      `${left.groupId}:${left.optionId}`.localeCompare(
        `${right.groupId}:${right.optionId}`,
      ),
    )
    .map((option) => `${option.groupId}:${option.optionId}`)
    .join("|");
  const instructionKey = normalizeInstructions(specialInstructions);
  return `line-${productId}-${hashString(`${optionKey}::${instructionKey}`)}`;
}

export function buildCartLine({
  product,
  selectedOptions,
  quantity,
  specialInstructions = "",
}: {
  product: Product;
  selectedOptions: readonly SelectedProductOption[];
  quantity: number;
  specialInstructions?: string;
}): CartLine {
  const safeQuantity = Math.min(
    MAX_CART_QUANTITY,
    Math.max(MIN_CART_QUANTITY, Math.trunc(quantity)),
  );
  const normalizedInstructions = normalizeInstructions(specialInstructions);
  const orderedOptions = [...selectedOptions];
  const unitPrice = calculateUnitPrice(product.basePrice, orderedOptions);

  return {
    identity: createCartLineIdentity(
      product.id,
      orderedOptions,
      normalizedInstructions,
    ),
    product: {
      id: product.id,
      slug: product.slug,
      name: product.name,
      imageSrc: product.imageSrc,
      imageClassName: product.imageClassName,
      basePrice: product.basePrice,
    },
    selectedOptions: orderedOptions,
    quantity: safeQuantity,
    specialInstructions: normalizedInstructions,
    unitPrice,
    lineTotal: calculateLineTotal(unitPrice, safeQuantity),
  };
}

export function withCartLineQuantity(line: CartLine, quantity: number): CartLine {
  const safeQuantity = Math.min(
    MAX_CART_QUANTITY,
    Math.max(MIN_CART_QUANTITY, Math.trunc(quantity)),
  );
  return {
    ...line,
    quantity: safeQuantity,
    lineTotal: calculateLineTotal(line.unitPrice, safeQuantity),
  };
}
