import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/product-detail";
import { getProductBySlug, products } from "@/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ productSlug: product.slug }));
}

type ProductPageProps = {
  params: Promise<{ productSlug: string }>;
  searchParams: Promise<{ edit?: string | string[] }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: `${product.description} Concept prices and availability are for demonstration only.`,
  };
}

export default async function ProductPage({
  params,
  searchParams,
}: ProductPageProps) {
  const [{ productSlug }, query] = await Promise.all([params, searchParams]);
  const product = getProductBySlug(productSlug);
  if (!product) notFound();
  const requestedEdit = Array.isArray(query.edit) ? query.edit[0] : query.edit;
  const editIdentity = requestedEdit?.slice(0, 160);

  return <ProductDetail product={product} editIdentity={editIdentity} />;
}
