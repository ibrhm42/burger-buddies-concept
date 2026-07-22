import { buildCartLine } from "@/lib/cart";
import { getProductById } from "@/data/products";
import type { CartLine, SelectedProductOption } from "@/types/ordering";

/** Versioned local persistence for validated cart-line snapshots. */
export const CART_STORAGE_KEY = "burger-buddies.cart";
export const CART_STORAGE_VERSION = 1;

export type CartStorageEnvelope = Readonly<{
  version: typeof CART_STORAGE_VERSION;
  lines: readonly CartLine[];
}>;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readSelectedOptions(
  value: unknown,
  productId: string,
): SelectedProductOption[] | null {
  if (!Array.isArray(value)) return null;
  const product = getProductById(productId);
  if (!product) return null;

  const options: SelectedProductOption[] = [];
  const seen = new Set<string>();
  for (const candidate of value) {
    if (!isRecord(candidate)) return null;
    const groupId = candidate.groupId;
    const optionId = candidate.optionId;
    if (typeof groupId !== "string" || typeof optionId !== "string") return null;

    const group = product.optionGroups.find((entry) => entry.id === groupId);
    const option = group?.options.find((entry) => entry.id === optionId);
    if (!group || !option) return null;
    const key = `${groupId}:${optionId}`;
    if (seen.has(key)) return null;
    seen.add(key);

    options.push({
      groupId: group.id,
      groupName: group.name,
      optionId: option.id,
      optionName: option.name,
      priceAdjustment: option.priceAdjustment,
    });
  }
  return options;
}

function readLine(value: unknown): CartLine | null {
  if (!isRecord(value) || !isRecord(value.product)) return null;
  const productId = value.product.id;
  if (typeof productId !== "string") return null;
  const product = getProductById(productId);
  if (!product || !product.available) return null;

  if (
    typeof value.quantity !== "number" ||
    !Number.isInteger(value.quantity) ||
    value.quantity < 1 ||
    value.quantity > 20 ||
    typeof value.specialInstructions !== "string" ||
    value.specialInstructions.length > 180
  ) {
    return null;
  }

  const selectedOptions = readSelectedOptions(value.selectedOptions, productId);
  if (!selectedOptions) return null;

  for (const group of product.optionGroups) {
    const selectionCount = selectedOptions.filter(
      (option) => option.groupId === group.id,
    ).length;
    if (
      selectionCount < group.minSelections ||
      selectionCount > group.maxSelections
    ) {
      return null;
    }
  }

  return buildCartLine({
    product,
    selectedOptions,
    quantity: value.quantity,
    specialInstructions: value.specialInstructions,
  });
}

export function serializeCartStorage(lines: readonly CartLine[]) {
  const envelope: CartStorageEnvelope = {
    version: CART_STORAGE_VERSION,
    lines,
  };
  return JSON.stringify(envelope);
}

export function parseCartStorage(raw: string | null): CartLine[] {
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      !isRecord(parsed) ||
      parsed.version !== CART_STORAGE_VERSION ||
      !Array.isArray(parsed.lines)
    ) {
      return [];
    }

    const lines: CartLine[] = [];
    for (const value of parsed.lines) {
      const line = readLine(value);
      if (!line) return [];
      lines.push(line);
    }
    return lines;
  } catch {
    return [];
  }
}

type StorageReader = Pick<Storage, "getItem">;
type StorageWriter = Pick<Storage, "setItem">;

export function loadCartStorage(storage: StorageReader) {
  try {
    return parseCartStorage(storage.getItem(CART_STORAGE_KEY));
  } catch {
    return [];
  }
}

export function persistCartStorage(
  storage: StorageWriter,
  lines: readonly CartLine[],
) {
  try {
    storage.setItem(CART_STORAGE_KEY, serializeCartStorage(lines));
    return true;
  } catch {
    return false;
  }
}
