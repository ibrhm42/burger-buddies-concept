import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/styles";

type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-label"
> & {
  "aria-label": string;
  size?: "sm" | "md" | "lg";
  tone?: "surface" | "ghost" | "brand";
};

export function IconButton({
  className,
  size = "md",
  tone = "surface",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border transition duration-200 disabled:pointer-events-none disabled:opacity-40",
        size === "sm" && "size-9",
        size === "md" && "size-11",
        size === "lg" && "size-13",
        tone === "surface" &&
          "border-border-subtle bg-surface-2 text-text-primary hover:border-border-strong hover:bg-surface-3",
        tone === "ghost" &&
          "border-transparent bg-transparent text-text-secondary hover:bg-surface-2 hover:text-text-primary",
        tone === "brand" &&
          "border-brand bg-brand text-brand-ink hover:bg-brand-hover",
        className,
      )}
      {...props}
    />
  );
}
