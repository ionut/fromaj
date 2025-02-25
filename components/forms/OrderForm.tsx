import React, { useEffect, useState } from "react";
import { useActionState } from "react";
import { createOrder } from "@/app/action";
import { Cart } from "@/utils/types";
import { Input } from "@/components/forms/common/Input";
import { redirect } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { clearCart } from "@/lib/slice/cartSlice";

const initialState = {
  message: "",
};

const OrderForm = ({ cart }: { cart: Cart[] }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [apartament, setApartament] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const dispatch = useAppDispatch();
  const [state, formAction, pending] = useActionState(
    createOrder,
    initialState
  );
  useEffect(() => {
    if (state.status === "Success!") {
      dispatch(clearCart());
      redirect(`/congratulations?userName=${state.userName}&type=comanda`);
    }
  }, [state.status, state.userName, dispatch]);
  return (
    <form
      action={formAction}
      className="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16"
    >
      <div className="mx-auto max-w-lg lg:max-w-none">
        <section aria-labelledby="contact-info-heading">
          <h2
            id="contact-info-heading"
            className="text-lg font-medium text-gray-900"
          >
            Contact information
          </h2>

          <div className="mt-6">
            <Input
              type="text"
              name="fullName"
              placeholder="Numele dumneavoastră"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <Input
              type="email"
              name="email"
              placeholder="Adresă de email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <Input
              type="tel"
              name="phone"
              placeholder="Numărul de telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </section>

        <section aria-labelledby="shipping-heading" className="mt-10">
          <h2
            id="shipping-heading"
            className="text-lg font-medium text-gray-900"
          >
            Shipping address
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
            <div className="sm:col-span-3">
              <Input
                type="text"
                name="street"
                placeholder="Stradă"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                type="text"
                name="apartment"
                placeholder="Apartament, bloc, etc."
                value={apartament}
                onChange={(e) => setApartament(e.target.value)}
              />
            </div>

            <div>
              <Input
                type="text"
                name="city"
                placeholder="Oras"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <Input
                type="date"
                name="date"
                placeholder="Data"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <Input
                type="time"
                name="time"
                placeholder="Ora"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          </div>
        </section>

        <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-end">
          <button
            className="text-white outline outline-1 outline-white rounded-2xl text-xl font-bold flex justify-center items-center p-3 shadow-lg bg-green hover:transition-colors hover:bg-davys-grey hover:outline-davys-grey focus:outline-2 xl:text-2xl xl:px-6"
            aria-disabled={pending}
            disabled={pending}
          >
            Trimite comandă
          </button>
        </div>
      </div>
      {state?.message && <p className="body-2">{state.message}</p>}
    </form>
  );
};

export default OrderForm;
