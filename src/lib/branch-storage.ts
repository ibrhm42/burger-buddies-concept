import { defaultBranch, getBranchById } from "@/data/branches";

/** Versioned local persistence for the selected demonstrated branch. */
export const BRANCH_STORAGE_KEY = "burger-buddies.branch";
export const BRANCH_STORAGE_VERSION = 1;

export function serializeBranchStorage(branchId: string) {
  return JSON.stringify({ version: BRANCH_STORAGE_VERSION, branchId });
}

export function parseBranchStorage(raw: string | null) {
  if (!raw) return defaultBranch;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !("version" in parsed) ||
      !("branchId" in parsed) ||
      parsed.version !== BRANCH_STORAGE_VERSION ||
      typeof parsed.branchId !== "string"
    ) {
      return defaultBranch;
    }
    return getBranchById(parsed.branchId) ?? defaultBranch;
  } catch {
    return defaultBranch;
  }
}
