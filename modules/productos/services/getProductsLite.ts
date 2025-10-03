import { ProductData } from "../types";

export const getProductsLite = async (
  limit: boolean
): Promise<ProductData[]> => {
  try {
    const response = await fetch(
      `${
        process.env.API_URL
      }/products?fields=name,slug,resumen&populate[details][populate]=*&populate[cover][fields][0]=url&populate[category][fields][0]=name&populate[subcategory][fields][0]=name&populate[collection][fields][0]=name${
        limit ? "&pagination[limit]=10" : ""
      }`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch lite Products");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    return null as unknown as ProductData[];
  }
};
