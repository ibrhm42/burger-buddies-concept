"use client";

import { CircleHelp, MessageCircle, ReceiptText, ShoppingBag } from "lucide-react";
import Link from "next/link";
import {
  useRef,
  useState,
  type FormEvent,
} from "react";
import { CartItem } from "@/components/cart/cart-item";
import { WhatsAppPreview } from "@/components/cart/whatsapp-preview";
import { ConceptDisclaimer } from "@/components/brand/concept-disclaimer";
import { DemoPriceNotice } from "@/components/menu/demo-price-notice";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { Button, buttonStyles } from "@/components/ui/button";
import { DialogSheet } from "@/components/ui/dialog-sheet";
import { EmptyState } from "@/components/ui/empty-state";
import { InputField, TextareaField } from "@/components/ui/form-field";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { Skeleton } from "@/components/ui/skeleton";
import { validateCustomerDetails } from "@/lib/customer-validation";
import { formatPkr } from "@/lib/pricing";
import {
  createWhatsAppUrl,
  generateWhatsAppMessage,
} from "@/lib/whatsapp";
import { useBranch } from "@/providers/branch-provider";
import { useCart } from "@/providers/cart-provider";
import type {
  CustomerDetails,
  CustomerErrors,
  CustomerField,
  FulfilmentType,
} from "@/types/ordering";

const initialCustomerDetails: CustomerDetails = {
  fulfilmentType: "delivery",
  fullName: "",
  phone: "",
  address: "",
  landmark: "",
  notes: "",
};

export function CartExperience() {
  const { lines, hydrated, totalQuantity, subtotal, clearCart } = useCart();
  const { branch, whatsappConfig } = useBranch();
  const [customer, setCustomer] = useState<CustomerDetails>(initialCustomerDetails);
  const [errors, setErrors] = useState<CustomerErrors>({});
  const [previewMessage, setPreviewMessage] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [clearDialogOpen, setClearDialogOpen] = useState(false);
  const fieldRefs = useRef<Partial<Record<CustomerField, HTMLInputElement | HTMLTextAreaElement | null>>>({});

  function updateCustomer<K extends keyof CustomerDetails>(
    field: K,
    value: CustomerDetails[K],
  ) {
    setCustomer((current) => ({ ...current, [field]: value }));
    if (field !== "fulfilmentType") {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handlePreview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateCustomerDetails(customer);
    if (!validation.valid) {
      setErrors(validation.errors);
      window.requestAnimationFrame(() => {
        fieldRefs.current[validation.firstInvalidField]?.focus();
      });
      return;
    }

    setErrors({});
    setPreviewMessage(
      generateWhatsAppMessage({
        branch,
        customer: validation.normalized,
        lines,
        subtotal,
      }),
    );
    setPreviewOpen(true);
  }

  if (!hydrated) {
    return (
      <div className="mt-6 grid gap-3" aria-label="Loading your order">
        <Skeleton className="h-32" />
        <Skeleton className="h-72" />
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <>
        <header>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-brand">
            Mirpurkhas
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-[-0.05em] text-text-primary sm:text-4xl">
            Your Order
          </h1>
          <p className="mt-1.5 text-sm leading-6 text-text-secondary">
            Your saved selections will appear here.
          </p>
        </header>
        <EmptyState
          className="mt-6 min-h-[27rem]"
          icon={<ShoppingBag className="size-5" aria-hidden="true" />}
          title="Your cart is empty"
          description="Browse the menu and add something you’re craving."
          action={
            <Link href="/menu" className={buttonStyles()}>
              Browse Menu
            </Link>
          }
        />
        <ConceptDisclaimer compact className="mt-6" />
        <MobileBottomNav active="cart" />
      </>
    );
  }

  const externalUrl = createWhatsAppUrl(whatsappConfig, previewMessage);

  return (
    <>
      <header className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-brand">
            Mirpurkhas
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-[-0.05em] text-text-primary sm:text-4xl">
            Your Order
          </h1>
          <p className="mt-1.5 text-sm leading-6 text-text-secondary">
            Review your items and add customer details for the WhatsApp preview.
          </p>
        </div>
        <span
          className="rounded-full border border-border-subtle bg-surface-1 px-3 py-1.5 text-xs font-black text-text-secondary"
          aria-live="polite"
        >
          {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
        </span>
      </header>

      <form
        className="mt-6 grid items-start gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(22rem,0.85fr)] lg:gap-6"
        onSubmit={handlePreview}
        noValidate
      >
        <div className="grid gap-5">
          <section aria-labelledby="cart-items-title">
            <div className="flex items-center justify-between gap-4">
              <h2 id="cart-items-title" className="text-lg font-black text-text-primary">
                Selected items
              </h2>
              <button
                type="button"
                onClick={() => setClearDialogOpen(true)}
                className="rounded-lg px-2 py-1 text-xs font-extrabold text-[#ff9b90] hover:bg-danger/10"
              >
                Clear cart
              </button>
            </div>
            <div className="mt-3 grid gap-3">
              {lines.map((line) => (
                <CartItem key={line.identity} line={line} />
              ))}
            </div>
          </section>

          <section
            aria-labelledby="customer-details-title"
            className="rounded-[1.6rem] border border-border-subtle bg-surface-1 p-4 sm:p-5"
          >
            <div>
              <p className="text-[0.62rem] font-black uppercase tracking-[0.15em] text-brand">
                Order details
              </p>
              <h2
                id="customer-details-title"
                className="mt-1 text-xl font-black tracking-[-0.03em] text-text-primary"
              >
                Customer information
              </h2>
            </div>

            <SegmentedControl
              label="Order type"
              value={customer.fulfilmentType}
              onValueChange={(value) => {
                updateCustomer("fulfilmentType", value as FulfilmentType);
                setErrors((current) => ({ ...current, address: undefined }));
              }}
              segments={[
                { label: "Delivery", value: "delivery" },
                { label: "Pickup", value: "pickup" },
              ]}
              className="mt-4"
            />

            <div className="mt-5 grid gap-4">
              <InputField
                ref={(node) => {
                  fieldRefs.current.fullName = node;
                }}
                label="Full name"
                placeholder="Enter full name"
                autoComplete="name"
                value={customer.fullName}
                onChange={(event) => updateCustomer("fullName", event.target.value)}
                error={errors.fullName}
                maxLength={80}
                required
              />
              <InputField
                ref={(node) => {
                  fieldRefs.current.phone = node;
                }}
                label="Phone number"
                placeholder="03XX-XXXXXXX"
                hint="Pakistani mobile number"
                inputMode="tel"
                autoComplete="tel"
                value={customer.phone}
                onChange={(event) => updateCustomer("phone", event.target.value)}
                error={errors.phone}
                required
              />
              {customer.fulfilmentType === "delivery" && (
                <>
                  <TextareaField
                    ref={(node) => {
                      fieldRefs.current.address = node;
                    }}
                    label="Address for delivery"
                    placeholder="Enter delivery address"
                    autoComplete="street-address"
                    value={customer.address}
                    onChange={(event) => updateCustomer("address", event.target.value)}
                    error={errors.address}
                    maxLength={240}
                    required
                  />
                  <InputField
                    ref={(node) => {
                      fieldRefs.current.landmark = node;
                    }}
                    label="Nearby landmark"
                    placeholder="Optional nearby landmark"
                    hint="Optional"
                    value={customer.landmark}
                    onChange={(event) => updateCustomer("landmark", event.target.value)}
                    error={errors.landmark}
                    maxLength={120}
                  />
                </>
              )}
              <TextareaField
                ref={(node) => {
                  fieldRefs.current.notes = node;
                }}
                label="Order notes"
                placeholder="Optional notes for the order"
                hint={`Optional · ${customer.notes.length}/240`}
                value={customer.notes}
                onChange={(event) => updateCustomer("notes", event.target.value)}
                error={errors.notes}
                maxLength={240}
              />
            </div>
          </section>

          <ConceptDisclaimer compact />
        </div>

        <aside className="rounded-[1.6rem] border border-border-subtle bg-surface-1 p-4 sm:p-5 lg:sticky lg:top-28">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-surface-3 text-brand">
              <ReceiptText className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[0.62rem] font-black uppercase tracking-[0.15em] text-brand">
                Your total
              </p>
              <h2 className="text-lg font-black text-text-primary">Order estimate</h2>
            </div>
          </div>

          <dl className="mt-5 grid gap-3 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-text-secondary">Subtotal</dt>
              <dd className="font-black text-text-primary">{formatPkr(subtotal)}</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-text-secondary">Delivery charges</dt>
              <dd className="max-w-40 text-right text-xs font-black leading-5 text-brand">
                To be confirmed
              </dd>
            </div>
            <div className="mt-1 flex items-end justify-between gap-4 border-t border-border-strong pt-4">
              <dt>
                <span className="block font-black text-text-primary">Estimated total</span>
                <span className="mt-0.5 block text-xs text-text-tertiary">
                  Concept price
                </span>
              </dt>
              <dd className="text-xl font-black text-text-primary">{formatPkr(subtotal)}</dd>
            </div>
          </dl>

          <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-text-tertiary">
            <CircleHelp className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden="true" />
            Final price, availability, delivery charges, and timing are confirmed
            in the WhatsApp conversation.
          </div>
          <DemoPriceNotice className="mt-4" />

          <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-border-strong bg-surface-2/97 px-4 pt-3 shadow-[0_-18px_55px_rgb(0_0_0_/_0.48)] backdrop-blur-xl lg:static lg:mt-5 lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
            <div className="min-w-0 flex-1 lg:hidden">
              <span className="block text-[0.58rem] font-black uppercase tracking-[0.12em] text-text-tertiary">
                Your total
              </span>
              <span className="block text-lg font-black text-text-primary">
                {formatPkr(subtotal)}
              </span>
            </div>
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-brand px-4 text-sm font-black text-brand-ink shadow-[0_10px_28px_rgb(255_163_26_/_0.18)] lg:w-full"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Preview WhatsApp Order
            </button>
          </div>
        </aside>
      </form>

      <DialogSheet
        open={clearDialogOpen}
        onOpenChange={setClearDialogOpen}
        title="Clear your order?"
        description="This removes every item from the cart."
      >
        <div className="grid gap-2 sm:grid-cols-2">
          <Button variant="secondary" onClick={() => setClearDialogOpen(false)}>
            Keep items
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              clearCart();
              setClearDialogOpen(false);
            }}
          >
            Clear cart
          </Button>
        </div>
      </DialogSheet>

      <WhatsAppPreview
        open={previewOpen}
        onOpenChange={setPreviewOpen}
        message={previewMessage}
        config={whatsappConfig}
        externalUrl={externalUrl}
      />
    </>
  );
}
