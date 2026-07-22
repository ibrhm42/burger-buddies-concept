"use client";

import { Minus, Plus } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/lib/styles";

type QuantitySelectorProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
  className?: string;
  compact?: boolean;
};

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 20,
  label = "Quantity",
  className,
  compact = false,
}: QuantitySelectorProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "inline-flex w-fit items-center gap-1 rounded-2xl border border-border-subtle bg-surface-2 p-1",
        compact ? "h-10" : "h-12",
        className,
      )}
    >
      <IconButton
        size="sm"
        tone="ghost"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus className="size-4" aria-hidden="true" />
      </IconButton>
      <output
        aria-live="polite"
        className={cn(
          "text-center text-sm font-black tabular-nums text-text-primary",
          compact ? "min-w-7" : "min-w-9",
        )}
      >
        {value}
      </output>
      <IconButton
        size="sm"
        tone="ghost"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus className="size-4" aria-hidden="true" />
      </IconButton>
    </div>
  );
}
