"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef, type ReactNode } from "react";
import { IconButton } from "@/components/ui/icon-button";

type DialogSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
};

export function DialogSheet({
  open,
  onOpenChange,
  title,
  description,
  children,
}: DialogSheetProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const dialogId = useId();
  const titleId = `${dialogId}-title`;
  const descriptionId = `${dialogId}-description`;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onCancel={(event) => {
        event.preventDefault();
        onOpenChange(false);
      }}
      onClose={() => {
        onOpenChange(false);
        returnFocusRef.current?.focus();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onOpenChange(false);
      }}
      className="fixed inset-0 m-auto h-full w-full overflow-hidden sm:h-auto sm:max-h-[min(720px,calc(100vh-3rem))] sm:max-w-lg sm:rounded-[1.75rem]"
    >
      <section className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-[1.75rem] border border-border-strong bg-surface-1 p-5 shadow-[0_-24px_80px_rgb(0_0_0_/_0.5)] sm:static sm:rounded-[1.75rem] sm:p-6">
        <header className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2
              id={titleId}
              className="text-xl font-black tracking-[-0.03em] text-text-primary"
            >
              {title}
            </h2>
            {description && (
              <p
                id={descriptionId}
                className="mt-1 text-sm leading-6 text-text-secondary"
              >
                {description}
              </p>
            )}
          </div>
          <IconButton aria-label="Close dialog" onClick={() => onOpenChange(false)}>
            <X className="size-4" aria-hidden="true" />
          </IconButton>
        </header>
        {children}
      </section>
    </dialog>
  );
}
