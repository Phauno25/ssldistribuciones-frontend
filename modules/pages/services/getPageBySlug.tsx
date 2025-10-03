export const getPageBySlug = async (slug: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/pages?filters[slug]=${slug}&populate[body][populate]=*`,
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
    return null as unknown as any;
  }
};
