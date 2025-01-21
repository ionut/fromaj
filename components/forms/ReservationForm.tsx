"use client";
import React from "react";
import { useActionState } from "react";
import { createReservation } from "@/app/action";
import { Input } from "@/components/forms/common/Input";
import { redirect } from "next/navigation";

const initialState = {
  message: "",
};

const ReservationForm = () => {
  const [state, formAction, pending] = useActionState(
    createReservation,
    initialState
  );

  if (state.status === "Success!") {
    redirect(`/congratulations?userName=${state.userName}&type=rezervare`);
  }
  return (
    <form
      action={formAction}
      className="max-w-2xl mx-auto space-y-4 p-6 bg-green rounded-lg"
    >
      <div className="grid grid-cols-2 gap-2">
        <Input type="text" name="fullName" placeholder="Numele dumneavoastră" />
        <Input type="tel" name="phone" placeholder="Numărul de telefon" />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Input
          type="number"
          name="personsNumber"
          placeholder="Număr de persoane"
        />
        <Input type="text" name="eventType" placeholder="Tipul de eveniment" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Input type="time" name="time" placeholder="Data" />
        <Input type="date" name="date" placeholder="Ora" />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xl font-medium text-white"
        >
          Add your message
        </label>
        <div className="mt-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-eerie-black-1 outline outline-1 -outline-offset-1 outline-green placeholder:text-quick-silver focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green"
            defaultValue={"Buna ziua..."}
          />
        </div>
      </div>
      <div className="mb-2">
        <button
          className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
          aria-disabled={pending}
          disabled={pending}
        >
          Trimite comandă
        </button>
      </div>
      {state?.message && <p className="body-2">{state.message}</p>}
    </form>
  );
};

export default ReservationForm;
