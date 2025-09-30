import ProductDetailsPage from "@/modules/productos/components/ProductDetailsPage";
import ProductPageSkeleton from "@/modules/productos/components/ui/ProductPageSkeleton";
import { getProductBySlug } from "@/modules/productos/services/getProductBySlug";
import { PageProps } from "@/types/types";

export default async function Page({ params }: PageProps) {
  const data = await getProductBySlug(params.slug);
  return data ? <ProductDetailsPage product={data} /> : <ProductPageSkeleton />;
}
