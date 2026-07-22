"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultBranch, getBranchById } from "@/data/branches";
import {
  BRANCH_STORAGE_KEY,
  parseBranchStorage,
  serializeBranchStorage,
} from "@/lib/branch-storage";
import { clientWhatsAppConfig, type WhatsAppConfig } from "@/lib/whatsapp";
import type { Branch } from "@/types/ordering";

type BranchContextValue = Readonly<{
  branch: Branch;
  hydrated: boolean;
  whatsappConfig: WhatsAppConfig;
  selectBranch: (branchId: string) => void;
}>;

const BranchContext = createContext<BranchContextValue | null>(null);

export function BranchProvider({ children }: { children: ReactNode }) {
  const [branch, setBranch] = useState<Branch>(defaultBranch);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let storedBranch: Branch = defaultBranch;
    try {
      storedBranch = parseBranchStorage(
        window.localStorage.getItem(BRANCH_STORAGE_KEY),
      );
    } catch {
      storedBranch = defaultBranch;
    }
    queueMicrotask(() => {
      setBranch(storedBranch);
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(
        BRANCH_STORAGE_KEY,
        serializeBranchStorage(branch.id),
      );
    } catch {
      // Storage may be unavailable in private or restricted browsing contexts.
    }
  }, [branch.id, hydrated]);

  const selectBranch = useCallback((branchId: string) => {
    setBranch(getBranchById(branchId) ?? defaultBranch);
  }, []);

  const value = useMemo<BranchContextValue>(
    () => ({
      branch,
      hydrated,
      whatsappConfig: clientWhatsAppConfig,
      selectBranch,
    }),
    [branch, hydrated, selectBranch],
  );

  return (
    <BranchContext.Provider value={value}>{children}</BranchContext.Provider>
  );
}

export function useBranch() {
  const context = useContext(BranchContext);
  if (!context) throw new Error("useBranch must be used inside BranchProvider.");
  return context;
}
