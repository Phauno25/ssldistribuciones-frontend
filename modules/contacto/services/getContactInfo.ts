import { ContactInfoData } from "../types";

export const getContactInfo = async (): Promise<ContactInfoData> => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/contact-info?populate=*`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Contact Info");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    return null as unknown as ContactInfoData;
  }
};
