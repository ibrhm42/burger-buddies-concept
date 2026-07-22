"use client";

import { Check, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogSheet } from "@/components/ui/dialog-sheet";
import { cn } from "@/lib/styles";
import { useBranch } from "@/providers/branch-provider";

type BranchSelectorProps = {
  compact?: boolean;
  className?: string;
};

export function BranchSelector({
  compact = false,
  className,
}: BranchSelectorProps) {
  const [open, setOpen] = useState(false);
  const { branch, selectBranch } = useBranch();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "flex min-w-0 items-center gap-2 rounded-xl border border-border-subtle bg-surface-1 px-3 py-2 text-left transition hover:border-border-strong hover:bg-surface-2",
          className,
        )}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <MapPin className="size-4 shrink-0 text-brand" aria-hidden="true" />
        <span className="min-w-0 flex-1">
          {!compact && (
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.15em] text-text-tertiary">
              Selected branch
            </span>
          )}
          <span className="block truncate text-xs font-extrabold text-text-primary sm:text-sm">
            {branch.name}
          </span>
        </span>
        <ChevronDown
          className="size-3.5 shrink-0 text-text-tertiary"
          aria-hidden="true"
        />
      </button>

      <DialogSheet
        open={open}
        onOpenChange={setOpen}
        title="Choose a branch"
        description="The concept currently demonstrates ordering for the Mirpurkhas branch."
      >
        <div className="rounded-2xl border border-brand/40 bg-brand/8 p-4">
          <div className="flex items-start gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-brand-ink">
              <MapPin className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="font-black text-text-primary">{branch.name}</p>
                <Check className="size-4 text-brand" aria-hidden="true" />
              </div>
              <p className="mt-1 text-sm leading-6 text-text-secondary">
                Selected for this experience
              </p>
            </div>
          </div>
        </div>
        <Button
          className="mt-5 w-full"
          onClick={() => {
            selectBranch("branch-mirpurkhas");
            setOpen(false);
          }}
        >
          Continue with Mirpurkhas
        </Button>
      </DialogSheet>
    </>
  );
}
