import { NavBarData } from "@/components/layout";

export const getNavBar = async (): Promise<NavBarData> => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/navbar?populate[logo][populate]=*&populate[menu][populate][menuItem][populate]=*`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch navbar Data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    return null as unknown as NavBarData;
  }
};
