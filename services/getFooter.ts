import { FooterData } from "@/components/layout";

export const getFooter = async (): Promise<FooterData> => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/footer?populate[logo][populate]=*&populate[menu][populate][menuItem][populate]=*&populate[mediaLinks][populate]=*`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch footer Data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    return null as unknown as FooterData;
  }
};
