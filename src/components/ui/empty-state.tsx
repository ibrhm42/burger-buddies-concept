import type { ReactNode } from "react";
import { cn } from "@/lib/styles";

type EmptyStateProps = {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <section
      className={cn(
        "grid place-items-center rounded-[1.5rem] border border-dashed border-border-strong bg-surface-1/65 px-6 py-10 text-center",
        className,
      )}
    >
      <span className="grid size-12 place-items-center rounded-2xl bg-surface-3 text-brand">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-black tracking-[-0.02em] text-text-primary">
        {title}
      </h3>
      <p className="mt-1 max-w-sm text-sm leading-6 text-text-secondary">
        {description}
      </p>
      {action && <div className="mt-5">{action}</div>}
    </section>
  );
}
