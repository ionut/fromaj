export async function getQuery(query: string) {
  try {
    const response = await fetch(`${process.env.STRAPI_URL}/api${query}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    const err = error as Error;
    return { error: err.message };
  }
}
