"use client";

import { Check, Info, ShoppingBag } from "lucide-react";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DemoPriceNotice } from "@/components/menu/demo-price-notice";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { TextareaField } from "@/components/ui/form-field";
import { buildCartLine } from "@/lib/cart";
import {
  calculateConfiguredTotal,
  calculateUnitPrice,
  formatPkr,
} from "@/lib/pricing";
import { cn } from "@/lib/styles";
import { useCart } from "@/providers/cart-provider";
import type {
  Product,
  SelectedProductOption,
} from "@/types/ordering";

const INSTRUCTIONS_LIMIT = 180;

export function ProductConfigurator({
  product,
  editIdentity,
}: {
  product: Product;
  editIdentity?: string;
}) {
  const {
    addLine,
    replaceLine,
    getLine,
    hydrated,
  } = useCart();
  const [selections, setSelections] = useState<Record<string, string[]>>({});
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");
  const [invalidGroups, setInvalidGroups] = useState<readonly string[]>([]);
  const [feedback, setFeedback] = useState("");
  const [editMissing, setEditMissing] = useState(false);
  const initializedEditRef = useRef(false);
  const groupRefs = useRef<Record<string, HTMLFieldSetElement | null>>({});

  useEffect(() => {
    if (!editIdentity || !hydrated || initializedEditRef.current) return;
    initializedEditRef.current = true;
    const line = getLine(editIdentity);
    queueMicrotask(() => {
      if (!line || line.product.id !== product.id) {
        setEditMissing(true);
        return;
      }

      const nextSelections: Record<string, string[]> = {};
      for (const option of line.selectedOptions) {
        nextSelections[option.groupId] = [
          ...(nextSelections[option.groupId] ?? []),
          option.optionId,
        ];
      }
      setSelections(nextSelections);
      setQuantity(line.quantity);
      setInstructions(line.specialInstructions);
    });
  }, [editIdentity, getLine, hydrated, product.id]);

  const selectedOptions = useMemo<SelectedProductOption[]>(
    () =>
      product.optionGroups.flatMap((group) =>
        group.options
          .filter((option) => (selections[group.id] ?? []).includes(option.id))
          .map((option) => ({
            groupId: group.id,
            groupName: group.name,
            optionId: option.id,
            optionName: option.name,
            priceAdjustment: option.priceAdjustment,
          })),
      ),
    [product.optionGroups, selections],
  );

  const missingGroupIds = product.optionGroups
    .filter(
      (group) => (selections[group.id]?.length ?? 0) < group.minSelections,
    )
    .map((group) => group.id);
  const valid = product.available && missingGroupIds.length === 0;
  const unitPrice = calculateUnitPrice(product.basePrice, selectedOptions);
  const configuredTotal = calculateConfiguredTotal(
    product.basePrice,
    selectedOptions,
    quantity,
  );

  function selectOption(groupId: string, optionId: string) {
    const group = product.optionGroups.find((entry) => entry.id === groupId);
    if (!group) return;

    setSelections((current) => {
      const groupSelection = current[groupId] ?? [];
      if (group.selectionType === "single") {
        return { ...current, [groupId]: [optionId] };
      }
      const selected = groupSelection.includes(optionId);
      if (!selected && groupSelection.length >= group.maxSelections) return current;
      return {
        ...current,
        [groupId]: selected
          ? groupSelection.filter((id) => id !== optionId)
          : [...groupSelection, optionId],
      };
    });
    setInvalidGroups((current) => current.filter((id) => id !== groupId));
    setFeedback("");
  }

  function submitConfiguration() {
    if (!product.available) return;
    if (!valid) {
      setInvalidGroups(missingGroupIds);
      const firstInvalid = missingGroupIds[0];
      window.requestAnimationFrame(() => {
        groupRefs.current[firstInvalid]?.focus();
        groupRefs.current[firstInvalid]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
      return;
    }

    const line = buildCartLine({
      product,
      selectedOptions,
      quantity,
      specialInstructions: instructions,
    });
    if (editIdentity && getLine(editIdentity)) {
      replaceLine(editIdentity, line);
      setFeedback("Your item has been updated.");
    } else {
      addLine(line);
      setFeedback("Added to your order.");
    }
  }

  const action = (
    <div className="flex items-center gap-3">
      <div className="min-w-0 flex-1">
        <span className="block text-[0.58rem] font-black uppercase tracking-[0.12em] text-text-tertiary">
          Your total
        </span>
        <span className="block text-lg font-black text-text-primary">
          {formatPkr(configuredTotal)}
        </span>
      </div>
      <button
        type="button"
        onClick={submitConfiguration}
        aria-disabled={!valid}
        className={cn(
          "inline-flex h-12 shrink-0 items-center gap-2 rounded-2xl bg-brand px-5 text-sm font-black text-brand-ink shadow-[0_10px_28px_rgb(255_163_26_/_0.18)]",
          !valid && "opacity-55",
        )}
      >
        <ShoppingBag className="size-4" aria-hidden="true" />
        {editIdentity ? "Update Item" : "Add to Cart"}
      </button>
    </div>
  );

  return (
    <>
      <DemoPriceNotice className="mt-5" />
      {editMissing && (
        <p className="mt-4 rounded-2xl border border-border-strong bg-surface-2 p-3 text-xs leading-5 text-text-secondary">
          That saved cart line is no longer available. You can configure this item
          as a new selection.
        </p>
      )}
      <div className="my-6 h-px bg-border-subtle" />

      <div className="grid gap-6">
        {product.optionGroups.map((group) => {
          const groupSelection = selections[group.id] ?? [];
          const invalid = invalidGroups.includes(group.id);
          return (
            <fieldset
              key={group.id}
              ref={(node) => {
                groupRefs.current[group.id] = node;
              }}
              tabIndex={-1}
              aria-invalid={invalid}
              aria-describedby={invalid ? `${group.id}-error` : undefined}
              className={cn(
                "rounded-[1.35rem] outline-none",
                invalid && "ring-1 ring-danger/70 ring-offset-4 ring-offset-surface-1",
              )}
            >
              <legend className="w-full">
                <span className="flex items-start justify-between gap-4">
                  <span>
                    <span className="block text-base font-black text-text-primary">
                      {group.name}
                    </span>
                    <span className="mt-1 block text-xs text-text-tertiary">
                      {group.selectionType === "single"
                        ? "Choose one"
                        : `Choose up to ${group.maxSelections}`}
                    </span>
                  </span>
                  <span className="text-xs font-bold text-text-tertiary">
                    {group.minSelections > 0 ? "Required" : "Optional"}
                  </span>
                </span>
              </legend>

              <div className="mt-3 grid gap-2">
                {group.options.map((option) => {
                  const selected = groupSelection.includes(option.id);
                  const maxReached =
                    group.selectionType === "multiple" &&
                    groupSelection.length >= group.maxSelections &&
                    !selected;
                  return (
                    <label
                      key={option.id}
                      className={cn(
                        "flex min-h-16 items-center gap-3 rounded-2xl border px-3.5 py-3 transition",
                        selected
                          ? "border-brand/60 bg-brand/8"
                          : "border-border-subtle bg-background-deep/35",
                        maxReached && "opacity-50",
                      )}
                    >
                      <input
                        type={group.selectionType === "single" ? "radio" : "checkbox"}
                        name={`${product.id}-${group.id}`}
                        checked={selected}
                        disabled={maxReached}
                        onChange={() => selectOption(group.id, option.id)}
                        className="sr-only"
                      />
                      <span
                        className={cn(
                          "grid size-5 shrink-0 place-items-center border",
                          group.selectionType === "single" ? "rounded-full" : "rounded-md",
                          selected
                            ? "border-brand bg-brand text-brand-ink"
                            : "border-border-strong bg-surface-2",
                        )}
                      >
                        {selected && (
                          <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-extrabold text-text-primary">
                          {option.name}
                        </span>
                        {option.description && (
                          <span className="mt-0.5 block text-xs leading-5 text-text-tertiary">
                            {option.description}
                          </span>
                        )}
                      </span>
                      <span className="shrink-0 text-xs font-black text-text-secondary">
                        {option.priceAdjustment === 0
                          ? "Included"
                          : `+ ${formatPkr(option.priceAdjustment)}`}
                      </span>
                    </label>
                  );
                })}
              </div>
              {invalid && (
                <p
                  id={`${group.id}-error`}
                  role="alert"
                  className="mt-3 flex items-center gap-2 text-xs font-bold text-[#ff9b90]"
                >
                  <Info className="size-3.5 shrink-0" aria-hidden="true" />
                  Choose one option before adding this item.
                </p>
              )}
            </fieldset>
          );
        })}

        <section className="flex items-center justify-between gap-4 rounded-2xl border border-border-subtle bg-background-deep/35 p-3.5">
          <div>
            <h2 className="text-sm font-black text-text-primary">Quantity</h2>
            <p className="mt-1 text-xs text-text-tertiary">Maximum 20 per item</p>
          </div>
          <QuantitySelector value={quantity} onChange={setQuantity} max={20} />
        </section>

        <div>
          <TextareaField
            label="Special instructions"
            hint={`Optional · ${instructions.length}/${INSTRUCTIONS_LIMIT}`}
            placeholder="No onions, extra sauce, less spicy…"
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
            maxLength={INSTRUCTIONS_LIMIT}
          />
        </div>

        <div className="rounded-2xl border border-border-strong bg-surface-2 p-3 lg:mt-1">
          <div className="mb-3 flex items-center justify-between gap-4 text-xs text-text-tertiary">
            <span>Configured unit price</span>
            <span className="font-black text-text-primary">{formatPkr(unitPrice)}</span>
          </div>
          {action}
        </div>

        <div aria-live="polite" aria-atomic="true" className="min-h-6">
          {feedback && (
            <p className="flex items-center justify-between gap-3 rounded-xl bg-brand/8 px-3 py-2 text-xs font-bold text-text-secondary">
              <span>{feedback}</span>
              <Link href="/cart" className="text-brand underline underline-offset-4">
                View Cart
              </Link>
            </p>
          )}
        </div>
      </div>

      <div className="safe-bottom fixed inset-x-0 bottom-0 z-50 border-t border-border-strong bg-surface-2/97 px-4 pt-3 shadow-[0_-18px_55px_rgb(0_0_0_/_0.5)] backdrop-blur-xl lg:hidden">
        {action}
      </div>
    </>
  );
}
