import ProductPage from "@/modules/productos/components/ProductPage";
import ProductPageSkeleton from "@/modules/productos/components/ui/ProductPageSkeleton";
import { getProductCategories } from "@/modules/productos/services/getProductCategories";
import { getProductsLite } from "@/modules/productos/services/getProductsLite";

export default async function Home() {
  const data = await getProductsLite(false);
  const categories = await getProductCategories();
  return data ? (
    <ProductPage products={data} categories={categories} />
  ) : (
    <ProductPageSkeleton />
  );
}
