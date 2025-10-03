import { ProductData } from "../types";

export const getProductBySlug = async (
  slug: string
): Promise<ProductData | null> => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/products?filters[slug][$eq]=${slug}&&populate=*`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    return data.data[0] || null;
  } catch (error) {
    return null;
  }
};
