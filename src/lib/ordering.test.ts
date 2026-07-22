import { describe, expect, it } from "vitest";
import { defaultBranch } from "@/data/branches";
import { products } from "@/data/products";
import {
  buildCartLine,
  createCartLineIdentity,
} from "@/lib/cart";
import {
  CART_STORAGE_VERSION,
  parseCartStorage,
  serializeCartStorage,
} from "@/lib/cart-storage";
import { normalizePakistaniPhone } from "@/lib/phone";
import {
  calculateCartSubtotal,
  calculateConfiguredTotal,
  calculateLineTotal,
  calculateUnitPrice,
  formatPkr,
} from "@/lib/pricing";
import {
  createWhatsAppUrl,
  generateWhatsAppMessage,
  resolveWhatsAppConfig,
  validateWhatsAppDestination,
} from "@/lib/whatsapp";
import type { CustomerDetails, SelectedProductOption } from "@/types/ordering";

const mealOption: SelectedProductOption = {
  groupId: "serving",
  groupName: "Choose your option",
  optionId: "make-it-a-meal",
  optionName: "Make it a meal",
  priceAdjustment: 270,
};

describe("pricing", () => {
  it("formats integer Pakistani rupee values", () => {
    expect(formatPkr(2350)).toBe("Rs. 2,350");
  });

  it("calculates configuration, quantity, line, and subtotal totals", () => {
    expect(calculateUnitPrice(620, [mealOption])).toBe(890);
    expect(calculateConfiguredTotal(620, [mealOption], 2)).toBe(1780);
    expect(calculateLineTotal(890, 2)).toBe(1780);

    const first = buildCartLine({
      product: products[0],
      selectedOptions: [mealOption],
      quantity: 2,
    });
    const second = buildCartLine({
      product: products[7],
      selectedOptions: [],
      quantity: 1,
    });
    expect(calculateCartSubtotal([first, second])).toBe(2370);
  });
});

describe("cart identity and storage", () => {
  it("uses deterministic configuration identity and treats instructions as material", () => {
    const first = createCartLineIdentity(products[0].id, [mealOption], "No onions");
    const repeated = createCartLineIdentity(products[0].id, [mealOption], "No onions");
    const changed = createCartLineIdentity(products[0].id, [mealOption], "Extra sauce");
    expect(repeated).toBe(first);
    expect(changed).not.toBe(first);
  });

  it("round-trips the current storage version and rejects malformed or stale data", () => {
    const line = buildCartLine({
      product: products[0],
      selectedOptions: [mealOption],
      quantity: 2,
      specialInstructions: "No onions",
    });
    expect(parseCartStorage(serializeCartStorage([line]))).toEqual([line]);
    expect(parseCartStorage("not-json")).toEqual([]);
    expect(
      parseCartStorage(
        JSON.stringify({ version: CART_STORAGE_VERSION + 1, lines: [line] }),
      ),
    ).toEqual([]);
    expect(
      parseCartStorage(
        JSON.stringify({
          version: CART_STORAGE_VERSION,
          lines: [{ ...line, product: { ...line.product, id: "unknown" } }],
        }),
      ),
    ).toEqual([]);
  });
});

describe("Pakistani phone normalization", () => {
  it.each([
    ["0300-1234567", "+923001234567"],
    ["300 1234567", "+923001234567"],
    ["+923001234567", "+923001234567"],
    ["92300 1234567", "+923001234567"],
  ])("normalizes %s", (input, expected) => {
    expect(normalizePakistaniPhone(input)).toBe(expected);
  });

  it("rejects obviously invalid input", () => {
    expect(normalizePakistaniPhone("021-1234567")).toBeNull();
  });
});

describe("WhatsApp safety and message generation", () => {
  const customer: CustomerDetails = {
    fulfilmentType: "delivery",
    fullName: "Ibrahim",
    phone: "+923001234567",
    address: "A demonstration address in Mirpurkhas",
    landmark: "Near a familiar landmark",
    notes: "Please call on arrival",
  };
  const line = buildCartLine({
    product: products[0],
    selectedOptions: [mealOption],
    quantity: 2,
    specialInstructions: "No onions",
  });

  it("generates the structured order from real input data", () => {
    const message = generateWhatsAppMessage({
      branch: defaultBranch,
      customer,
      lines: [line],
      subtotal: line.lineTotal,
    });
    expect(message).toContain("Branch: Mirpurkhas");
    expect(message).toContain("2 × Al-Arabi Burger — Rs. 1,780");
    expect(message).toContain("Choose your option: Make it a meal");
    expect(message).toContain("Special instructions: No onions");
    expect(message).toContain("Customer: Ibrahim");
    expect(message).toContain("Delivery charges: To be confirmed");
    expect(message).toContain("Please confirm availability, final price");
  });

  it("rejects placeholders and disables continuation in demo mode", () => {
    expect(validateWhatsAppDestination("923XXXXXXXXX")).toBeNull();
    const config = resolveWhatsAppConfig({
      demoModeValue: "true",
      destinationValue: "923001234567",
    });
    expect(config.canContinueExternally).toBe(false);
    expect(createWhatsAppUrl(config, "Test")).toBeNull();
  });

  it("creates an encoded URL only for a valid non-demo destination", () => {
    const config = resolveWhatsAppConfig({
      demoModeValue: "false",
      destinationValue: "+923001234567",
    });
    expect(config.canContinueExternally).toBe(true);
    expect(createWhatsAppUrl(config, "Hello & goodbye\nOrder 1")).toBe(
      "https://wa.me/923001234567?text=Hello%20%26%20goodbye%0AOrder%201",
    );
  });
});
