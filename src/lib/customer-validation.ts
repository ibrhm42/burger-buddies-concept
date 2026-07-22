import { normalizePakistaniPhone } from "@/lib/phone";
import type {
  CustomerDetails,
  CustomerErrors,
  CustomerField,
} from "@/types/ordering";

export type CustomerValidationResult =
  | Readonly<{
      valid: true;
      errors: CustomerErrors;
      normalized: CustomerDetails;
    }>
  | Readonly<{
      valid: false;
      errors: CustomerErrors;
      firstInvalidField: CustomerField;
    }>;

export function validateCustomerDetails(
  details: CustomerDetails,
): CustomerValidationResult {
  const errors: CustomerErrors = {};
  const fullName = details.fullName.trim();
  const normalizedPhone = normalizePakistaniPhone(details.phone);
  const address = details.address.trim();
  const landmark = details.landmark.trim();
  const notes = details.notes.trim();

  if (fullName.length < 2) errors.fullName = "Enter your full name.";
  else if (fullName.length > 80)
    errors.fullName = "Keep the name to 80 characters or fewer.";

  if (!normalizedPhone)
    errors.phone = "Enter a valid Pakistani mobile number.";

  if (details.fulfilmentType === "delivery") {
    if (address.length < 8)
      errors.address = "Enter a complete delivery address.";
    else if (address.length > 240)
      errors.address = "Keep the address to 240 characters or fewer.";
  }

  if (landmark.length > 120)
    errors.landmark = "Keep the landmark to 120 characters or fewer.";
  if (notes.length > 240)
    errors.notes = "Keep order notes to 240 characters or fewer.";

  const firstInvalidField = (
    ["fullName", "phone", "address", "landmark", "notes"] as const
  ).find((field) => errors[field]);

  if (firstInvalidField) {
    return { valid: false, errors, firstInvalidField };
  }

  return {
    valid: true,
    errors: {},
    normalized: {
      ...details,
      fullName,
      phone: normalizedPhone ?? details.phone,
      address,
      landmark,
      notes,
    },
  };
}
