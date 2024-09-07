"use server";
import { postQuery } from "@/utils/query";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  fullName: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string(),
  street: z.string(),
  city: z.string(),
  date: z.string().date(),
  time: z.string(),
  cart: z.string(),
});

export default async function createOrder(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    street: formData.get("street"),
    city: formData.get("city"),
    date: formData.get("date"),
    time: formData.get("time"),
    cart: formData.get("cart"),
  });
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: "Vă rugăm completați toate câmpurile!",
    };
  }

  // Mutate data
  try {
    const data = validatedFields;

    const order = {
      ...data,
      cart: data.data.cart,
    };

    await postQuery("/orders", order);

    redirect("/congratulations");
  } catch (error) {
    return { message: "Something went wrong" };
  }
}
