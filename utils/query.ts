import { unstable_noStore as noStore } from "next/cache";

export async function getQuery(query: string) {
  noStore();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api${query}`,
  );

  if (!response.ok) {
    return { data: null, error: `HTTP error! status: ${response.status}` };
  }

  const result = await response.json();

  if (!result.data) {
    return { data: null, error: result.error?.message || "No data available" };
  }

  return { data: result.data, error: null };
}

export async function postData(query: string, formData: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api${query}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN_SALT}`,
      },
      body: JSON.stringify({ data: formData.data }),
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.log("Error data from Strapi:", errorData);
    return { error: errorData.message || "Network response was not ok" };
  }

  return { error: null };
}

export async function telegramNotification(message: string) {
  const encodedMessage = encodeURIComponent(message);
  const response = await fetch(
    `https://api.telegram.org/${process.env.TELEGRAM_API_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${encodedMessage}`,
    {
      method: "POST",
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.warn("Error sending Telegram notification:", errorData);
    return { error: errorData.description || "Network response was not ok" };
  }

  return { error: null };
}
