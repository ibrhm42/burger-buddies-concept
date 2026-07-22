"use client";

import {
  AlertCircle,
  CheckCircle2,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { DialogSheet } from "@/components/ui/dialog-sheet";
import type { WhatsAppConfig } from "@/lib/whatsapp";

export function WhatsAppPreview({
  open,
  onOpenChange,
  message,
  config,
  externalUrl,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: string;
  config: WhatsAppConfig;
  externalUrl: string | null;
}) {
  return (
    <DialogSheet
      open={open}
      onOpenChange={onOpenChange}
      title="Review WhatsApp order"
      description="Review the exact message before any deliberate external continuation."
    >
      <div
        id="whatsapp-availability-reason"
        role="status"
        className="flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand/7 p-3.5"
      >
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
        <p className="text-xs leading-5 text-text-secondary">{config.reason}</p>
      </div>

      <section aria-label="Generated WhatsApp message" className="mt-4">
        <div className="flex items-center gap-2 rounded-t-[1.4rem] border-b border-[#98cbaa] bg-[#dff7e7] px-4 pt-4 text-[#153c25] sm:px-5 sm:pt-5">
          <MessageCircle className="size-4 text-[#168a45]" aria-hidden="true" />
          <p className="pb-3 text-sm font-black">Order message preview</p>
        </div>
        <pre className="max-h-[45vh] overflow-y-auto whitespace-pre-wrap rounded-b-[1.4rem] bg-[#dff7e7] p-4 pt-3 font-sans text-[0.76rem] leading-5 text-[#153c25] shadow-inner sm:p-5 sm:pt-4 sm:text-sm sm:leading-6">
          {message}
        </pre>
      </section>

      {!externalUrl && (
        <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-text-tertiary">
          <AlertCircle className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          <p>No external WhatsApp conversation can be opened from this preview.</p>
        </div>
      )}

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="inline-flex h-11 items-center justify-center rounded-2xl border border-border-strong bg-surface-2 text-sm font-extrabold text-text-primary"
        >
          Back to edit
        </button>
        {externalUrl ? (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#25d366] text-sm font-black text-[#063919]"
          >
            <CheckCircle2 className="size-4" aria-hidden="true" />
            Continue to WhatsApp
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-describedby="whatsapp-availability-reason"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-border-strong bg-surface-2 px-3 text-center text-sm font-black leading-5 text-text-tertiary disabled:cursor-not-allowed"
          >
            <LockKeyhole className="size-4 shrink-0" aria-hidden="true" />
            {config.demoMode
              ? "WhatsApp unavailable in demo mode"
              : "WhatsApp unavailable"}
          </button>
        )}
      </div>
    </DialogSheet>
  );
}
