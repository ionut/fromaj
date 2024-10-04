import { unstable_noStore as noStore } from "next/cache";

export async function getQuery(query: string) {
  noStore();
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

export async function postData(query: string, formData: any) {
  try {
    const response = await fetch(`${process.env.STRAPI_URL}/api${query}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN_SALT}`, // Include the Authorization header
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

export async function telegramNotification(message: string) {
  try {
    const response = await fetch(
      `https://api.telegram.org/${process.env.TELEGRAM_API_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${message}`,
      {
        method: "POST",
      }
    );
    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(errorData.description || "Network response was not ok");
    }
  } catch (error) {
    const err = error as Error;
    return { error: err.message };
  }
}
