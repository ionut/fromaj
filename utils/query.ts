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

export async function postQuery(query: string, formData: any) {
  try {
    const response = await fetch(`${process.env.STRAPI_URL}/api${query}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`, // Include the Authorization header
      },
      body: JSON.stringify({ data: formData.data }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Network response was not ok");
    }
  } catch (error) {
    const err = error as Error;
    return { error: err.message };
  }
}
