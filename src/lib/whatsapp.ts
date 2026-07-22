import { formatPkr } from "@/lib/pricing";
import type {
  Branch,
  CartLine,
  CustomerDetails,
} from "@/types/ordering";

const WHATSAPP_DESTINATION = /^923\d{9}$/;

export type WhatsAppConfig = Readonly<{
  demoMode: boolean;
  destination: string | null;
  canContinueExternally: boolean;
  reason: string;
}>;

export function validateWhatsAppDestination(value: string | undefined) {
  if (!value || /x/i.test(value)) return null;
  const digits = value.trim().replace(/[\s\-()]/g, "").replace(/^\+/, "");
  return WHATSAPP_DESTINATION.test(digits) ? digits : null;
}

export function resolveWhatsAppConfig({
  demoModeValue,
  destinationValue,
}: {
  demoModeValue: string | undefined;
  destinationValue: string | undefined;
}): WhatsAppConfig {
  const demoMode = demoModeValue?.trim().toLowerCase() !== "false";
  const destination = validateWhatsAppDestination(destinationValue);

  if (demoMode) {
    return {
      demoMode,
      destination,
      canContinueExternally: false,
      reason:
        "Demo mode is active, so this preview cannot open an external WhatsApp conversation.",
    };
  }
  if (!destination) {
    return {
      demoMode,
      destination: null,
      canContinueExternally: false,
      reason: "A valid WhatsApp test destination has not been configured.",
    };
  }
  return {
    demoMode,
    destination,
    canContinueExternally: true,
    reason: "WhatsApp continuation is available after deliberate review.",
  };
}

export const clientWhatsAppConfig = resolveWhatsAppConfig({
  demoModeValue: process.env.NEXT_PUBLIC_DEMO_MODE,
  destinationValue: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
});

const customerFacingOptionLabels: Readonly<Record<string, string>> = {
  serving: "Meal",
  size: "Size",
  extras: "Extras",
};

function optionLabel(groupId: string, groupName: string) {
  const knownLabel = customerFacingOptionLabels[groupId];
  if (knownLabel) return knownLabel;
  if (/choose|add something|required selection/i.test(groupName)) return "Option";
  return groupName;
}

function formatLine(line: CartLine) {
  const rows = [
    `${line.quantity} × ${line.product.name} — ${formatPkr(line.lineTotal)}`,
  ];

  const groupedOptions = new Map<
    string,
    { label: string; names: string[] }
  >();
  for (const option of line.selectedOptions) {
    const existing = groupedOptions.get(option.groupId);
    if (existing) {
      existing.names.push(option.optionName);
    } else {
      groupedOptions.set(option.groupId, {
        label: optionLabel(option.groupId, option.groupName),
        names: [option.optionName],
      });
    }
  }
  for (const group of groupedOptions.values()) {
    rows.push(`- ${group.label}: ${group.names.join(", ")}`);
  }
  if (line.specialInstructions) {
    rows.push(`- Instructions: ${line.specialInstructions}`);
  }
  return rows.join("\n");
}

export function generateWhatsAppMessage({
  branch,
  customer,
  lines,
  subtotal,
}: {
  branch: Branch;
  customer: CustomerDetails;
  lines: readonly CartLine[];
  subtotal: number;
}) {
  const orderType =
    customer.fulfilmentType === "delivery" ? "Delivery" : "Pickup";
  const contactRows = [
    `Customer: ${customer.fullName}`,
    `Phone: ${customer.phone}`,
  ];
  if (customer.fulfilmentType === "delivery") {
    contactRows.push(`Address: ${customer.address}`);
    if (customer.landmark) contactRows.push(`Landmark: ${customer.landmark}`);
  }
  if (customer.notes) contactRows.push(`Order notes: ${customer.notes}`);

  const deliveryNote =
    customer.fulfilmentType === "delivery"
      ? "Delivery charges: To be confirmed"
      : "Delivery charges: Not applicable for pickup";

  return [
    "Assalamualaikum Burger Buddies,",
    "I would like to place a new order.",
    `Branch: ${branch.name}`,
    `Order type: ${orderType}`,
    lines.map(formatLine).join("\n\n"),
    `Subtotal: ${formatPkr(subtotal)} (concept price)`,
    deliveryNote,
    `Estimated total: ${formatPkr(subtotal)} (concept price)`,
    contactRows.join("\n"),
    "Please confirm availability, final price, delivery charges where applicable, and timing.",
  ].join("\n\n");
}

export function createWhatsAppUrl(
  config: WhatsAppConfig,
  message: string,
) {
  if (!config.canContinueExternally || !config.destination) return null;
  return `https://wa.me/${config.destination}?text=${encodeURIComponent(message)}`;
}
