import { StrapiApiResponse } from "@/types/types";

export async function getData<T>(url: string, apiEntity: string) {
  try {
    const endpoint = `${
      process.env.NEXT_PUBLIC_URL
    }/api/${apiEntity}?query=${encodeURIComponent(url)}&method=GET`;
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const parsedData: StrapiApiResponse<T> = await response.json();
    return parsedData.data as T;
  } catch (err: any) {
    console.error("Error: ", err);
    return;
  }
}
