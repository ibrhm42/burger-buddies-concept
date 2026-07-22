import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DesktopHeader } from "@/components/layout/desktop-header";
import { ProductConfigurator } from "@/components/product/product-configurator";
import { ResilientImage } from "@/components/ui/resilient-image";
import { formatPkr } from "@/lib/pricing";
import type { Product } from "@/types/ordering";

export function ProductDetail({
  product,
  editIdentity,
}: {
  product: Product;
  editIdentity?: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <DesktopHeader active="menu" />

      <main className="pb-28 lg:pb-0">
        <div className="mx-auto max-w-7xl lg:grid lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[minmax(0,1.08fr)_minmax(25rem,0.92fr)] lg:gap-8 lg:px-10 lg:py-8">
          <section
            aria-label={`${product.name} image`}
            className="relative h-[25rem] overflow-hidden bg-surface-2 sm:h-[31rem] lg:sticky lg:top-28 lg:h-[calc(100vh-9rem)] lg:min-h-[42rem] lg:rounded-[2rem] lg:border lg:border-border-subtle"
          >
            <ResilientImage
              src={product.imageSrc}
              alt={`Temporary crop representing ${product.name}`}
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 680px"
              className={`object-cover ${product.imageClassName}`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.32)_0%,transparent_25%,transparent_65%,rgba(8,8,8,0.62)_100%)]" />
            <div className="absolute inset-x-0 top-0 z-20 px-4 pt-4 sm:px-6 lg:px-7 lg:pt-7">
              <Link
                href="/menu"
                aria-label="Back to menu"
                className="grid size-11 place-items-center rounded-full border border-white/15 bg-background/78 text-text-primary shadow-lg backdrop-blur-md transition hover:bg-background"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section className="relative z-10 -mt-7 rounded-t-[2rem] border-t border-border-strong bg-surface-1 px-4 pb-8 pt-6 sm:px-6 lg:mt-0 lg:self-start lg:rounded-[2rem] lg:border lg:p-7">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-brand">
              {product.available ? "Customizable" : "Currently unavailable"}
            </p>
            <div className="mt-1 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black tracking-[-0.05em] text-text-primary sm:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
                  {product.description}
                </p>
              </div>
              <p className="shrink-0 text-right text-base font-black text-text-primary">
                <span className="block text-[0.58rem] uppercase tracking-[0.11em] text-text-tertiary">
                  Starting from
                </span>
                {formatPkr(product.basePrice)}
              </p>
            </div>

            <ProductConfigurator product={product} editIdentity={editIdentity} />
          </section>
        </div>
      </main>
    </div>
  );
}
