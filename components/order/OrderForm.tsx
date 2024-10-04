import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createOrder } from "@/app/action";
import { Cart } from "@/utils/types";
import Input from "../ui/Input";
import { redirect } from "next/navigation";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn-order" aria-disabled={pending}>
      Trimite comandă
    </button>
  );
}

const OrderForm = ({ cart }: { cart: Cart[] }) => {
  const [state, formAction] = useFormState(createOrder, initialState);

  if (state.status === "Success!") {
    redirect(`/congratulations?userName=${state.userName}&type=comanda`);
  }
  return (
    <form action={formAction}>
      <div className="input-wrapper">
        <Input
          type="text"
          name="fullName"
          placeholder="Numele dumneavoastră"
          className="input-field"
        />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Numărul de telefon"
          className="input-field"
        />

        <Input
          type="text"
          name="street"
          placeholder="Adresa dumneavoastră"
          className="input-field"
        />
        <div className="row gap-20">
          <Input
            type="text"
            name="city"
            placeholder="Oras"
            className="input-field"
          />
          <Input type="date" name="date" className="input-field" />
          <Input type="time" name="time" className="input-field" />
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      </div>
      <div className="mb-2">
        <SubmitButton />
      </div>
      {state?.message && <p className="body-2">{state.message}</p>}
    </form>
  );
};

export default OrderForm;
