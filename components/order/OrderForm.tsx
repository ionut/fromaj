import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import CreateOrder from "@/app/action";
import { Cart } from "@/utils/types";

const initialState = {
  order: {},
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-secondary" aria-disabled={pending}>
      Trimite
    </button>
  );
}

const OrderForm = ({ cart }: { cart: Cart[] }) => {
  const [state, formAction] = useFormState(CreateOrder, initialState);

  return (
    <form action={formAction}>
      <div className="input-wrapper">
        <input
          type="text"
          name="fullName"
          placeholder="Numele dumneavoastră"
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Numărul de telefon"
          className="input-field"
        />

        <input
          type="text"
          name="street"
          placeholder="Adresa dumneavoastră"
          className="input-field"
        />
        <div className="row gap-20">
          <input
            type="text"
            name="city"
            placeholder="Oras"
            className="input-field"
          />
          <input type="date" name="date" className="input-field" />
          <input type="time" name="time" className="input-field" />
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
