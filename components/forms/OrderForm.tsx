import React, { useEffect } from "react";
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
            />
          </div>

          <div className="mt-6">
            <Input type="email" name="email" placeholder="Adresă de email" />
          </div>
          <div className="mt-6">
            <Input type="tel" name="phone" placeholder="Numărul de telefon" />
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
              <Input type="text" name="street" placeholder="Stradă" />
            </div>

            <div className="sm:col-span-3">
              <Input
                type="text"
                name="apartment"
                placeholder="Apartament, bloc, etc."
              />
            </div>

            <div>
              <Input type="text" name="city" placeholder="Oras" />
            </div>

            <div>
              <Input type="date" name="date" placeholder="Data" />
            </div>

            <div>
              <Input type="time" name="time" placeholder="Ora" />
            </div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          </div>
        </section>

        <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-end">
          <button
            className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
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
