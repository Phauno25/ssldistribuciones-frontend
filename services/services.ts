import { StrapiApiResponse } from "../types/types";

// Estos servicios le pegan unicamente a la API del mismo front

export function getQuery<T>(
  query: string,
  filterValues?: T,
  sort?: string,
  sortDirection?: string,
  page?: number,
  pageSize?: number
) {
  const params = new URLSearchParams();
  const paramArray: string[] = [];
  const sortParam = sort ?? "id";
  const sortDirectionParam = sortDirection ?? "desc";
  const pageParam = page ?? 1;
  const pageSizeParam = pageSize ?? 50;

  if (filterValues !== undefined) {
    for (const [key, value] of Object.entries(filterValues as string[])) {
      if (value) {
        params.append(`filters[${key}][$contains]`, value);
        paramArray.push(`filters[${key}][$contains]=${value}`);
      }
    }
  }

  params.append("pagination[page]", pageParam.toString());
  params.append("pagination[pageSize]", pageSizeParam.toString());
  params.append("sort", `${sortParam}:${sortDirectionParam}`);
  const queryString = `${query}?${paramArray.join("&")}&populate=*`;
  return queryString;
}

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

export async function postData<T>(url: string, body: T) {
  const payload = JSON.stringify(body);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/form?query=${url}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to post data");
    }
    return response;
  } catch (err) {
    return {
      status: 500,
      error: err ?? "Failed to post data",
    };
  }
}
