import { NextResponse } from "next/server";

type RequestInitWithDuplex = {
  duplex?: string;
} & RequestInit;

export const POST = async (req: Request) => {
  const { url } = req;
  const { searchParams } = new URL(url);

  const query = searchParams.get("query");
  const token = process.env.API_TOKEN_FORM_SUBMIT;
  const apiUrl = `${process.env.API_URL}${query}`;

  // Para obtener el body de la req es necesario usar el .json()
  const body = await req.json();

  try {
    const response = await fetch(apiUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // Es necesario wrappearlo en un {data: } porqe asi lo pide strapi.
      body: JSON.stringify({ data: body }),
      duplex: "half",
    } as RequestInitWithDuplex);

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
};
