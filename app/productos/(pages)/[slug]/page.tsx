import ProductDetailsPage from "@/modules/productos/components/ProductDetailsPage";
import ProductPageSkeleton from "@/modules/productos/components/ui/ProductPageSkeleton";
import { getProductBySlug } from "@/modules/productos/services/getProductBySlug";
import { PageProps } from "@/types/types";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const p = await getProductBySlug(params.slug);
  const title = `${p?.category} ${p?.subcategory} ${p?.name}`;
  return {
    title,
    description: p?.resumen ?? `Ficha técnica de ${p?.name}`,
    alternates: { canonical: `/productos/${params.slug}` },
    openGraph: {
      title,
      description: p?.resumen,
      images: p?.cover.url
        ? [{ url: p.cover.url, width: 1200, height: 630 }]
        : undefined,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const data = await getProductBySlug(params.slug);
  return data ? <ProductDetailsPage product={data} /> : <ProductPageSkeleton />;
}
