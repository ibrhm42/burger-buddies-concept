"use client";

import { cn } from "@/lib/styles";

type Segment = {
  label: string;
  value: string;
};

type SegmentedControlProps = {
  label: string;
  value: string;
  segments: Segment[];
  onValueChange: (value: string) => void;
  className?: string;
};

export function SegmentedControl({
  label,
  value,
  segments,
  onValueChange,
  className,
}: SegmentedControlProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "grid grid-flow-col auto-cols-fr rounded-2xl border border-border-subtle bg-surface-1 p-1",
        className,
      )}
    >
      {segments.map((segment) => {
        const selected = segment.value === value;
        return (
          <button
            key={segment.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onValueChange(segment.value)}
            className={cn(
              "h-10 rounded-xl px-4 text-sm font-extrabold transition",
              selected
                ? "bg-surface-3 text-text-primary shadow-sm"
                : "text-text-tertiary hover:text-text-primary",
            )}
          >
            {segment.label}
          </button>
        );
      })}
    </div>
  );
}
