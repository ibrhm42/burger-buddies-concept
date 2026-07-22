import { cn } from "@/lib/styles";

export function Skeleton({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block animate-pulse rounded-xl bg-[linear-gradient(100deg,var(--surface-2)_20%,var(--surface-3)_40%,var(--surface-2)_60%)] bg-[length:200%_100%]",
        className,
      )}
    />
  );
}
