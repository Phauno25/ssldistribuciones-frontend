import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  // Extract the Strapi query from the URL parameters
  const query = searchParams.get("query");

  const token = process.env.API_TOKEN;
  const apiUrl = `${process.env.API_URL}${query}`;

  try {
    const response = await fetch(apiUrl, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", details: "Error" },
      { status: 500 }
    );
  }
};
