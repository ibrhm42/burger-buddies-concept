import Link from "next/link";
import { ArrowLeft, UtensilsCrossed } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { buttonStyles } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageShell showMobileNav={false} mainClassName="bg-background">
      <section className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-2xl place-items-center px-4 py-16 text-center sm:px-6">
        <div>
          <span className="mx-auto grid size-14 place-items-center rounded-2xl border border-border-subtle bg-surface-2 text-brand">
            <UtensilsCrossed className="size-6" aria-hidden="true" />
          </span>
          <p className="mt-6 text-[0.68rem] font-black uppercase tracking-[0.18em] text-brand">
            Page not found
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.045em] text-text-primary sm:text-4xl">
            This page is not on the menu.
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-text-secondary">
            The link may be outdated, or the page may not be part of this ordering concept.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/menu" className={buttonStyles({ size: "lg" })}>
              Browse Menu
            </Link>
            <Link
              href="/"
              className={buttonStyles({ variant: "secondary", size: "lg" })}
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
