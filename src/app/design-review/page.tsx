import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { DesignFoundationReview } from "@/components/review/design-foundation-review";

export const metadata: Metadata = {
  title: "Design Foundation Review",
  description:
    "Temporary internal visual-review surface for the Burger Buddies Ordering Concept.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DesignReviewPage() {
  return (
    <PageShell>
      <DesignFoundationReview />
    </PageShell>
  );
}
