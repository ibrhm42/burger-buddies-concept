import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/styles";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-brand bg-brand text-brand-ink shadow-[0_10px_28px_rgb(255_163_26_/_0.18)] hover:border-brand-hover hover:bg-brand-hover active:bg-brand-active",
  secondary:
    "border-border-strong bg-surface-2 text-text-primary hover:border-text-tertiary hover:bg-surface-3 active:bg-surface-1",
  ghost:
    "border-transparent bg-transparent text-text-secondary hover:bg-surface-2 hover:text-text-primary active:bg-surface-1",
  danger:
    "border-danger/35 bg-danger/12 text-[#ffb3aa] hover:bg-danger/18 active:bg-danger/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 rounded-xl px-3.5 text-xs",
  md: "h-11 rounded-[0.9rem] px-4 text-sm",
  lg: "h-13 rounded-2xl px-5 text-[0.94rem]",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 border font-extrabold tracking-[-0.01em] transition duration-200 disabled:pointer-events-none disabled:opacity-45",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}
