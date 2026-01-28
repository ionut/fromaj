import { unstable_noStore as noStore } from "next/cache";

export async function getQuery(query: string) {
  noStore();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api${query}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (!data.data) {
      throw new Error(data.error?.message || "No data available");
    }

    return data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Unknown error");
  }
}

export async function postData(query: string, formData: any) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api${query}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_TOKEN_SALT}`, // Include the Authorization header
        },
        body: JSON.stringify({ data: formData.data }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Error data from Strapi:", errorData);
      throw new Error(errorData.message || "Network response was not ok");
    }
  } catch (error) {
    const err = error as Error;
    console.warn("Error posting data:", err);
    return { error: err.message };
  }
}

export async function telegramNotification(message: string) {
  try {
    const encodedMessage = encodeURIComponent(message);
    const response = await fetch(
      `https://api.telegram.org/${process.env.TELEGRAM_API_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${encodedMessage}`,
      {
        method: "POST",
      },
    );
    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(errorData.description || "Network response was not ok");
    }
  } catch (error) {
    const err = error as Error;
    console.warn("Error sending Telegram notification:", err);
    return { error: err.message };
  }
}
