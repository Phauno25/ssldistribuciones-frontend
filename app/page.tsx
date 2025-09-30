import HeroSkeleton from "@/components/layout/hero/HeroSkeleton";
import HomePage from "@/modules/home/components/HomePage";
import { getHomePage } from "@/modules/home/services/getHomePage";
import { getProductsLite } from "@/modules/productos/services/getProductsLite";

export default async function Home() {
  const data = await getHomePage();
  const productData = await getProductsLite(true);

  return data ? <HomePage data={data} products={productData} /> : <HeroSkeleton />;
}
