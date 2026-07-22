import { describe, expect, it } from "vitest";
import { defaultBranch } from "@/data/branches";
import { products } from "@/data/products";
import {
  loadBranchStorage,
  persistBranchStorage,
} from "@/lib/branch-storage";
import {
  buildCartLine,
  createCartLineIdentity,
} from "@/lib/cart";
import {
  CART_STORAGE_VERSION,
  loadCartStorage,
  parseCartStorage,
  persistCartStorage,
  serializeCartStorage,
} from "@/lib/cart-storage";
import { validateCustomerDetails } from "@/lib/customer-validation";
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

const cheeseOption: SelectedProductOption = {
  groupId: "extras",
  groupName: "Add something extra",
  optionId: "extra-cheese",
  optionName: "Extra cheese",
  priceAdjustment: 80,
};

const sauceOption: SelectedProductOption = {
  groupId: "extras",
  groupName: "Add something extra",
  optionId: "extra-sauce",
  optionName: "Extra sauce",
  priceAdjustment: 50,
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

  it("rejects unavailable products, invalid or duplicate options, and excessive quantities", () => {
    const validLine = buildCartLine({
      product: products[0],
      selectedOptions: [mealOption],
      quantity: 2,
    });
    const envelope = (line: unknown) =>
      JSON.stringify({ version: CART_STORAGE_VERSION, lines: [line] });

    const unavailableLine = buildCartLine({
      product: products[9],
      selectedOptions: [],
      quantity: 1,
    });
    expect(parseCartStorage(envelope(unavailableLine))).toEqual([]);

    expect(
      parseCartStorage(
        envelope({
          ...validLine,
          selectedOptions: [{ ...mealOption, optionId: "removed-option" }],
        }),
      ),
    ).toEqual([]);
    expect(
      parseCartStorage(
        envelope({
          ...validLine,
          selectedOptions: [mealOption, mealOption],
        }),
      ),
    ).toEqual([]);
    expect(
      parseCartStorage(envelope({ ...validLine, quantity: 999 })),
    ).toEqual([]);
  });

  it("keeps in-memory behavior safe when storage access throws", () => {
    const throwingStorage = {
      getItem: () => {
        throw new Error("blocked");
      },
      setItem: () => {
        throw new Error("blocked");
      },
    };
    const line = buildCartLine({
      product: products[0],
      selectedOptions: [mealOption],
      quantity: 1,
    });

    expect(loadCartStorage(throwingStorage)).toEqual([]);
    expect(persistCartStorage(throwingStorage, [line])).toBe(false);
    expect(loadBranchStorage(throwingStorage)).toEqual(defaultBranch);
    expect(persistBranchStorage(throwingStorage, defaultBranch.id)).toBe(false);
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

describe("customer validation", () => {
  it("trims valid customer data and preserves delivery details", () => {
    const result = validateCustomerDetails({
      fulfilmentType: "delivery",
      fullName: "  Demo Customer  ",
      phone: " 0300-1234567 ",
      address: "  A sufficiently detailed demo address  ",
      landmark: "  Demo landmark  ",
      notes: "  Please call first  ",
    });

    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.normalized).toEqual({
        fulfilmentType: "delivery",
        fullName: "Demo Customer",
        phone: "+923001234567",
        address: "A sufficiently detailed demo address",
        landmark: "Demo landmark",
        notes: "Please call first",
      });
    }
  });

  it("ignores retained delivery fields for pickup and identifies the first invalid field", () => {
    const pickup = validateCustomerDetails({
      fulfilmentType: "pickup",
      fullName: "Demo Customer",
      phone: "03001234567",
      address: "x",
      landmark: "",
      notes: "",
    });
    expect(pickup.valid).toBe(true);

    const invalid = validateCustomerDetails({
      fulfilmentType: "delivery",
      fullName: " ",
      phone: "123",
      address: "short",
      landmark: "",
      notes: "",
    });
    expect(invalid.valid).toBe(false);
    if (!invalid.valid) expect(invalid.firstInvalidField).toBe("fullName");
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
    selectedOptions: [mealOption, cheeseOption, sauceOption],
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
    expect(message).toContain("2 × Al-Arabi Burger — Rs. 2,040");
    expect(message).toContain("Meal: Make it a meal");
    expect(message).toContain("Extras: Extra cheese, Extra sauce");
    expect(message).toContain("Instructions: No onions");
    expect(message).not.toContain("Choose your option");
    expect(message).not.toContain("Add something extra");
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

  it("defaults missing release configuration to safe demo behavior", () => {
    const config = resolveWhatsAppConfig({
      demoModeValue: undefined,
      destinationValue: undefined,
    });

    expect(config).toMatchObject({
      demoMode: true,
      destination: null,
      canContinueExternally: false,
    });
    expect(createWhatsAppUrl(config, "Test")).toBeNull();
  });

  it("never creates a URL from the placeholder even outside demo mode", () => {
    const config = resolveWhatsAppConfig({
      demoModeValue: "false",
      destinationValue: "923XXXXXXXXX",
    });

    expect(config.canContinueExternally).toBe(false);
    expect(config.destination).toBeNull();
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
