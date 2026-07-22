"use client";

import { Bell, Flame, SearchX, ShoppingBag, Sparkles } from "lucide-react";
import { useState } from "react";
import { ConceptDisclaimer } from "@/components/brand/concept-disclaimer";
import { CategoryTabs } from "@/components/menu/category-tabs";
import { ProductCard } from "@/components/menu/product-card";
import { PromotionCard } from "@/components/menu/promotion-card";
import { SearchBar } from "@/components/menu/search-bar";
import { Button } from "@/components/ui/button";
import { ChoiceControl } from "@/components/ui/choice-control";
import { DialogSheet } from "@/components/ui/dialog-sheet";
import { EmptyState } from "@/components/ui/empty-state";
import { InputField, TextareaField } from "@/components/ui/form-field";
import { IconButton } from "@/components/ui/icon-button";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { Skeleton } from "@/components/ui/skeleton";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

function ReviewSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.6rem] border border-border-subtle bg-surface-1 p-4 sm:p-6">
      <p className="text-[0.62rem] font-black uppercase tracking-[0.17em] text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-xl font-black tracking-[-0.035em] text-text-primary">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function DesignFoundationReview() {
  const [quantity, setQuantity] = useState(2);
  const [fulfilment, setFulfilment] = useState("delivery");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [reviewSearch, setReviewSearch] = useState("");

  return (
    <div className="page-grid min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-8 md:py-12 lg:px-10">
        <header className="mb-8 max-w-3xl">
          <span className="inline-flex rounded-full border border-promotion/35 bg-promotion/10 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#ffaca2]">
            Temporary · internal · noindex
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.055em] text-text-primary sm:text-5xl">
            Phase 1 design foundation
          </h1>
          <p className="mt-3 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
            A focused review surface for visual tokens and shared primitives. It is
            intentionally absent from customer navigation and must be removed before
            final release.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          <ReviewSection eyebrow="Actions" title="Buttons and icon controls">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Remove</Button>
              <IconButton aria-label="Notification preview">
                <Bell className="size-4" aria-hidden="true" />
              </IconButton>
              <IconButton aria-label="Brand action preview" tone="brand">
                <Sparkles className="size-4" aria-hidden="true" />
              </IconButton>
              <Button disabled>Disabled</Button>
            </div>
          </ReviewSection>

          <ReviewSection eyebrow="Discovery" title="Search and categories">
            <SearchBar value={reviewSearch} onChange={setReviewSearch} />
            <CategoryTabs
              className="mt-4"
              categories={categories.slice(0, 4)}
            />
          </ReviewSection>

          <ReviewSection eyebrow="Selection" title="Quantity and segmented controls">
            <div className="grid gap-5">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <SegmentedControl
                label="Fulfilment presentation"
                value={fulfilment}
                onValueChange={setFulfilment}
                segments={[
                  { label: "Delivery", value: "delivery" },
                  { label: "Pickup", value: "pickup" },
                ]}
              />
              <div className="grid gap-2">
                <ChoiceControl
                  type="radio"
                  name="size-preview"
                  label="Regular"
                  description="Representative option styling"
                  meta="Included"
                  defaultChecked
                />
                <ChoiceControl
                  type="radio"
                  name="size-preview"
                  label="Large"
                  description="Concept-price adjustment preview"
                  meta="+ Rs. 180"
                />
              </div>
            </div>
          </ReviewSection>

          <ReviewSection eyebrow="Inputs" title="Form and validation states">
            <div className="grid gap-4">
              <InputField
                label="Customer name"
                placeholder="Enter a demo name"
                hint="Use demonstration details only."
              />
              <InputField
                label="Required selection"
                placeholder="Choose an option"
                error="Select one option to continue."
              />
              <TextareaField
                label="Order note"
                placeholder="Add a demo instruction"
              />
            </div>
          </ReviewSection>

          <ReviewSection eyebrow="Overlays" title="Dialog and bottom sheet">
            <p className="mb-4 text-sm leading-6 text-text-secondary">
              The same native dialog appears as a bottom sheet on mobile and a
              centred panel on larger screens.
            </p>
            <Button onClick={() => setDialogOpen(true)}>Open review dialog</Button>
            <DialogSheet
              open={dialogOpen}
              onOpenChange={setDialogOpen}
              title="Review dialog"
              description="Focus, Escape dismissal, backdrop dismissal, and focus return use native dialog behaviour."
            >
              <ChoiceControl
                type="checkbox"
                label="Example choice"
                description="Presentation only; no checkout state is stored."
                defaultChecked
              />
              <Button className="mt-4 w-full" onClick={() => setDialogOpen(false)}>
                Confirm preview
              </Button>
            </DialogSheet>
          </ReviewSection>

          <ReviewSection eyebrow="Feedback" title="Empty, loading and unavailable">
            <EmptyState
              icon={<SearchX className="size-5" aria-hidden="true" />}
              title="No demo items found"
              description="A calm, direct empty state for future search and category results."
              action={<Button variant="secondary">Clear preview</Button>}
            />
            <div className="mt-4 grid grid-cols-[5rem_1fr] gap-3 rounded-2xl border border-border-subtle bg-surface-2 p-3">
              <Skeleton className="aspect-square" />
              <div className="grid content-center gap-2">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          </ReviewSection>
        </div>

        <section className="mt-4">
          <PromotionCard
            imageSrc="/references/products/crown-pizza.jpg"
            imageClassName="scale-[1.55] object-[72%_66%]"
            eyebrow="Demo composition"
            title="Promotion without a false claim."
            description="The surface demonstrates emphasis and contrast while avoiding an invented discount, date, or availability statement."
          />
        </section>

        <section className="mt-4 rounded-[1.6rem] border border-border-subtle bg-surface-1 p-4 sm:p-6">
          <p className="text-[0.62rem] font-black uppercase tracking-[0.17em] text-brand">
            Cards
          </p>
          <h2 className="mt-1 text-xl font-black tracking-[-0.035em] text-text-primary">
            Discovery and menu variants
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.1fr]">
            <ProductCard
              product={products[1]}
              badge="Demo item"
            />
            <ProductCard
              product={products[7]}
              badge="Demo item"
            />
            <div className="grid content-start gap-3">
              <ProductCard
                variant="menu"
                product={products[9]}
                badge="Static preview"
              />
              <div className="flex items-center gap-3 rounded-2xl border border-border-subtle bg-surface-2 p-4 text-sm text-text-secondary">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-surface-3 text-brand">
                  <ShoppingBag className="size-4" aria-hidden="true" />
                </span>
                Cart and checkout behaviour are deferred to later phases.
              </div>
            </div>
          </div>
        </section>

        <ConceptDisclaimer className="mt-4" />
        <p className="mt-4 flex items-center gap-2 text-xs leading-5 text-text-tertiary">
          <Flame className="size-4 shrink-0 text-brand" aria-hidden="true" />
          Existing social-post crops are temporary Phase 1 review assets, not
          final-quality product photography.
        </p>
      </div>
    </div>
  );
}
