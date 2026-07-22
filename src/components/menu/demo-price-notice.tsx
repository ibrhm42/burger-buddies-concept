import { Info } from "lucide-react";
import { cn } from "@/lib/styles";

export function DemoPriceNotice({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Demo price notice"
      className={cn(
        "flex items-start gap-2.5 rounded-2xl border border-brand/20 bg-brand/7 px-3.5 py-3 text-xs leading-5 text-text-secondary",
        className,
      )}
    >
      <Info className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden="true" />
      <p>
        Concept prices are for demonstration only. Final availability, price,
        and delivery charges are confirmed on WhatsApp.
      </p>
    </aside>
  );
}

