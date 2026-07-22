"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { formatPkr } from "@/lib/pricing";
import { cn } from "@/lib/styles";
import { useCart } from "@/providers/cart-provider";
import type { CartLine } from "@/types/ordering";

export function CartItem({ line }: { line: CartLine }) {
  const { setQuantity, removeLine } = useCart();
  const optionSummary = line.selectedOptions
    .map((option) => option.optionName)
    .join(" · ");

  return (
    <article className="grid grid-cols-[4.8rem_1fr] gap-3 rounded-[1.4rem] border border-border-subtle bg-surface-1 p-3 sm:grid-cols-[6.5rem_1fr] sm:gap-4 sm:p-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-2">
        <Image
          src={line.product.imageSrc}
          alt={`Temporary crop representing ${line.product.name}`}
          fill
          sizes="104px"
          className={cn("object-cover", line.product.imageClassName)}
        />
      </div>
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-black leading-5 text-text-primary sm:text-base">
            {line.product.name}
          </h3>
          <p className="shrink-0 text-sm font-black text-text-primary">
            {formatPkr(line.lineTotal)}
          </p>
        </div>
        {optionSummary && (
          <p className="mt-1 text-xs leading-5 text-text-secondary">{optionSummary}</p>
        )}
        {line.specialInstructions && (
          <p className="mt-0.5 line-clamp-2 text-xs leading-5 text-text-tertiary">
            Instructions: {line.specialInstructions}
          </p>
        )}

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
          <QuantitySelector
            value={line.quantity}
            onChange={(quantity) => setQuantity(line.identity, quantity)}
            compact
            label={`Quantity for ${line.product.name}`}
          />
          <div className="flex items-center gap-1">
            <Link
              href={`/menu/${line.product.slug}?edit=${encodeURIComponent(line.identity)}`}
              className="inline-flex h-9 items-center gap-1.5 rounded-xl px-2 text-xs font-extrabold text-text-secondary transition hover:bg-surface-2 hover:text-text-primary"
            >
              <Pencil className="size-3.5" aria-hidden="true" />
              Edit
            </Link>
            <button
              type="button"
              onClick={() => removeLine(line.identity)}
              className="grid size-9 place-items-center rounded-xl text-[#ff9b90] transition hover:bg-danger/10"
              aria-label={`Remove ${line.product.name}`}
            >
              <Trash2 className="size-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
