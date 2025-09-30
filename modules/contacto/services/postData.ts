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
