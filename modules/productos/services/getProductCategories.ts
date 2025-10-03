import { CategoryData } from "../types";

export const getProductCategories = async (): Promise<CategoryData[]> => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/product-categories?populate[subcategories][populate]=*`,
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
    return null as unknown as CategoryData[];
  }
};
