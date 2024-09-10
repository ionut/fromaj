"use server";
import { postData, telegramNotification } from "@/utils/query";
import { z } from "zod";

const orderSchema = z.object({
  fullName: z.string().min(1, { message: "Nume prea scurt!" }),
  email: z.string().email({ message: "Adresă de email invalidă!" }),
  phone: z.string().min(8, { message: "Număr de telefon prea scurt!" }),
  street: z.string().min(4, { message: "Adresă de livrare prea scurtă!" }),
  city: z.string().min(1, { message: "Numele orasului este prea scurt!" }),
  date: z.string().date(),
  time: z.string(),
  cart: z.string(),
});

const reservationSchema = z.object({
  fullName: z.string().min(1, { message: "Nume prea scurt!" }),
  phone: z.string().min(8, { message: "Număr de telefon prea scurt!" }),
  date: z.string().date(),
  time: z.string(),
  personsNumber: z
    .number()
    .gt(10, { message: "Evenimentul trebuie să fie mai mare de 10 persoane!" }),
  eventType: z.string(),
  message: z.string(),
});

export async function createOrder(prevState: any, formData: FormData) {
  const validatedFields = orderSchema.safeParse({
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
      message: validatedFields.error?.issues[0].message,
    };
  }

  // Mutate data
  try {
    const data = validatedFields;

    const order = {
      ...data,
    };

    const telegramMessage: string = `Comanda de la ${order.data.fullName} si nr. de telefon ${order.data.phone}!`;
    await postData("/orders", order);
    await telegramNotification(telegramMessage);
    return { status: "Success!", userName: order.data.fullName };
  } catch (error) {
    return { message: "Something went wrong" };
  }
}

export async function createReservation(prevState: any, formData: FormData) {
  console.log();
  const validatedFields = reservationSchema.safeParse({
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    personsNumber: Number(formData.get("personsNumber")),
    eventType: formData.get("eventType"),
    date: formData.get("date"),
    time: formData.get("time"),
    message: formData.get("message"),
  });
  console.log(validatedFields.error?.issues);
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: validatedFields.error?.issues[0].message,
    };
  }

  // Mutate data
  try {
    const data = validatedFields;

    const reservation = {
      ...data,
    };

    const telegramMessage: string = `Rezervare pentru un eveniment de la ${reservation.data.fullName} si nr. de telefon ${reservation.data.phone}!`;
    await postData("/reservations", reservation);
    await telegramNotification(telegramMessage);
    return { status: "Success!", userName: reservation.data.fullName };
  } catch (error) {
    return { message: "Something went wrong" };
  }
}
