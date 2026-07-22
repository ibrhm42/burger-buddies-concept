import type { CartLine, SelectedProductOption } from "@/types/ordering";

function assertRupees(value: number, label: string) {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new RangeError(`${label} must be a non-negative integer rupee value.`);
  }
}

export function formatPkr(value: number) {
  assertRupees(value, "Price");
  return `Rs. ${new Intl.NumberFormat("en-PK", {
    maximumFractionDigits: 0,
  }).format(value)}`;
}

export function calculateOptionAdjustments(
  selectedOptions: readonly SelectedProductOption[],
) {
  return selectedOptions.reduce((total, option) => {
    assertRupees(option.priceAdjustment, "Option adjustment");
    return total + option.priceAdjustment;
  }, 0);
}

export function calculateUnitPrice(
  basePrice: number,
  selectedOptions: readonly SelectedProductOption[],
) {
  assertRupees(basePrice, "Base price");
  return basePrice + calculateOptionAdjustments(selectedOptions);
}

export function calculateLineTotal(unitPrice: number, quantity: number) {
  assertRupees(unitPrice, "Unit price");
  if (!Number.isSafeInteger(quantity) || quantity < 1) {
    throw new RangeError("Quantity must be a positive integer.");
  }
  return unitPrice * quantity;
}

export function calculateConfiguredTotal(
  basePrice: number,
  selectedOptions: readonly SelectedProductOption[],
  quantity: number,
) {
  return calculateLineTotal(
    calculateUnitPrice(basePrice, selectedOptions),
    quantity,
  );
}

export function calculateCartSubtotal(lines: readonly CartLine[]) {
  return lines.reduce((subtotal, line) => {
    assertRupees(line.lineTotal, "Line total");
    return subtotal + line.lineTotal;
  }, 0);
}
