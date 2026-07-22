import { ConceptDisclaimer } from "@/components/brand/concept-disclaimer";
import { DesktopHeader } from "@/components/layout/desktop-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { MobileHeader } from "@/components/layout/mobile-header";
import { CategoryTabs } from "@/components/menu/category-tabs";
import { HomeMenuSearch } from "@/components/menu/home-menu-search";
import { ProductCard } from "@/components/menu/product-card";
import { PromotionCard } from "@/components/menu/promotion-card";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { featuredPromotion } from "@/data/promotions";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <MobileHeader />
      <DesktopHeader />

      <main className="pb-24 md:pb-0">
        <section className="mx-auto max-w-7xl px-4 pb-2 pt-4 sm:px-6 md:px-8 md:pb-4 md:pt-7 lg:px-10">
          <div className="items-end gap-8 md:grid md:grid-cols-[minmax(0,1fr)_minmax(23rem,30rem)]">
            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-brand">
                Mirpurkhas menu
              </p>
              <h1 className="mt-1 text-2xl font-black tracking-[-0.045em] text-text-primary sm:text-3xl">
                What are you craving?
              </h1>
            </div>
            <HomeMenuSearch className="mt-3 md:mt-0" />
          </div>

          <PromotionCard
            className="mt-4 md:mt-6"
            imageSrc={featuredPromotion.imageSrc}
            imageClassName={featuredPromotion.imageClassName}
            eyebrow={featuredPromotion.eyebrow}
            title={featuredPromotion.title}
            description={featuredPromotion.description}
            ctaLabel={featuredPromotion.ctaLabel}
            href={featuredPromotion.href}
          />

          <div className="mt-4 flex items-end justify-between gap-4 md:mt-6">
            <div>
              <p className="text-sm font-black text-text-primary">Full Menu</p>
              <p className="mt-0.5 text-xs text-text-tertiary">
                Pick a category to start.
              </p>
            </div>
          </div>
          <CategoryTabs className="mt-2" categories={categories} linkToMenu />
        </section>

        <section
          id="popular-products"
          aria-labelledby="popular-products-title"
          className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-8 pt-4 sm:px-6 md:px-8 md:pb-12 md:pt-6 lg:px-10"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-brand">
                Popular
              </p>
              <h2
                id="popular-products-title"
                className="mt-1 text-xl font-black tracking-[-0.035em] text-text-primary sm:text-2xl"
              >
                Food worth exploring
              </h2>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {products.filter((product) => product.featured).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <footer className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 md:px-8 md:pb-10 lg:px-10">
          <ConceptDisclaimer compact />
        </footer>
      </main>

      <MobileBottomNav />
    </div>
  );
}
