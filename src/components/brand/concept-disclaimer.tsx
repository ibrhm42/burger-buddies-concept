import { Info } from "lucide-react";
import { cn } from "@/lib/styles";

type ConceptDisclaimerProps = {
  compact?: boolean;
  className?: string;
};

export function ConceptDisclaimer({
  compact = false,
  className,
}: ConceptDisclaimerProps) {
  return (
    <aside
      aria-label="Concept disclaimer"
      className={cn(
        "flex gap-3 rounded-2xl border border-border-subtle bg-surface-1/80 text-text-secondary",
        compact ? "p-3 text-xs leading-5" : "p-4 text-sm leading-6",
        className,
      )}
    >
      <Info className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
      <p>
        Unofficial concept created to demonstrate a possible Burger Buddies
        ordering experience. Prices and availability are for demonstration only.
      </p>
    </aside>
  );
}
