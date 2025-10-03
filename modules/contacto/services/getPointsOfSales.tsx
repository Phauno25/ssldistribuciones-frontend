import { ContactInfoData } from "../types";

export const getPointsOfSales = async (): Promise<ContactInfoData[]> => {
 
  try {
    const response = await fetch(
      `${process.env.API_URL}/point-of-sales?populate=*`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Points of Sales");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    return null as unknown as ContactInfoData[];
  }
};
