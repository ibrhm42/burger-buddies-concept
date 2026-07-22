import { Info } from "lucide-react";
import { cn } from "@/lib/styles";

type ConceptDisclaimerProps = {
  className?: string;
};

export function ConceptDisclaimer({ className }: ConceptDisclaimerProps) {
  return (
    <footer
      aria-label="Concept disclaimer"
      className={cn(
        "border-t border-border-subtle/70 bg-background-deep/45 px-4 pb-[calc(6.25rem+env(safe-area-inset-bottom))] pt-5 text-text-tertiary md:px-8 md:pb-7 md:pt-6",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl items-start gap-2.5 text-xs leading-5">
        <Info className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden="true" />
        <p>
          Unofficial ordering concept created for demonstration purposes. Burger
          Buddies has not commissioned or endorsed this prototype.
        </p>
      </div>
    </footer>
  );
}
