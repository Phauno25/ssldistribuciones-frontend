import { HomePageProps } from "@/types/types";

export const getHomePage = async (): Promise<HomePageProps> => {
  const response = await fetch(
    `${process.env.API_URL}/home-page?populate[hero][populate]=*&populate[body][populate]=*`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch home Page");
  }
  const data = await response.json();
  return data.data;
};
