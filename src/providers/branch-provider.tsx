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
  loadBranchStorage,
  persistBranchStorage,
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
    const storedBranch = loadBranchStorage(window.localStorage);
    queueMicrotask(() => {
      setBranch(storedBranch);
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    persistBranchStorage(window.localStorage, branch.id);
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
