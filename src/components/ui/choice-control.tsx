import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/styles";

type ChoiceControlProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  type: "checkbox" | "radio";
  label: string;
  description?: string;
  meta?: ReactNode;
};

export function ChoiceControl({
  type,
  label,
  description,
  meta,
  className,
  ...props
}: ChoiceControlProps) {
  return (
    <label
      className={cn(
        "flex min-h-14 items-center gap-3 rounded-2xl border border-border-subtle bg-surface-1 px-3.5 py-3 transition hover:border-border-strong",
        className,
      )}
    >
      <input
        type={type}
        className="size-4 shrink-0 accent-brand"
        {...props}
      />
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-text-primary">{label}</span>
        {description && (
          <span className="mt-0.5 block text-xs leading-5 text-text-tertiary">
            {description}
          </span>
        )}
      </span>
      {meta && (
        <span className="shrink-0 text-xs font-extrabold text-text-secondary">
          {meta}
        </span>
      )}
    </label>
  );
}
