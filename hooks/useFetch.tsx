import { useEffect, useState } from "react";
import { StrapiApiResponse } from "../types/types";

function useFetch<T>(
  query: string,
  apiEntity: string,
  method?: "GET" | "POST"
) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/${apiEntity}?query=${encodeURIComponent(query)}&method=${
            method ?? "GET"
          }`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const parsedData: StrapiApiResponse<T> = await response.json();
        setData(parsedData.data as T);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {};
  }, [query, apiEntity, method]);

  return { data, loading, error };
}

export default useFetch;
