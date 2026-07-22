"use client";

import { Search, X } from "lucide-react";
import type { FormEvent } from "react";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/lib/styles";

type SearchBarProps = {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  onSubmit?: (value: string) => void;
};

export function SearchBar({
  className,
  value,
  onChange,
  onClear,
  onSubmit,
}: SearchBarProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(value.trim());
  }

  return (
    <form
      className={cn("flex gap-2", className)}
      role="search"
      onSubmit={handleSubmit}
    >
      <label className="relative flex h-12 min-w-0 flex-1 items-center gap-2.5 rounded-2xl border border-border-subtle bg-surface-input px-3.5 transition focus-within:border-brand sm:gap-3 sm:px-4">
        <Search className="size-4 shrink-0 text-text-tertiary" aria-hidden="true" />
        <span className="sr-only">Search the menu</span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="peer min-w-0 flex-1 appearance-none bg-transparent text-[0.78rem] text-text-primary outline-none sm:text-sm"
          autoComplete="off"
        />
        {!value && (
          <span className="pointer-events-none absolute left-10 right-4 truncate text-[0.78rem] text-text-tertiary sm:left-11 sm:text-sm">
            <span className="sm:hidden">Search the menu</span>
            <span className="hidden sm:inline">Search burgers, pizzas and deals</span>
          </span>
        )}
      </label>
      {value && (
        <IconButton
          aria-label="Clear search"
          onClick={() => {
            onClear?.();
            if (!onClear) onChange("");
          }}
        >
          <X className="size-4" aria-hidden="true" />
        </IconButton>
      )}
    </form>
  );
}
