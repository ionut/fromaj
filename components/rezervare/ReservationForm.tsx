"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createReservation } from "@/app/action";
import Input from "../ui/Input";
const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn-order" aria-disabled={pending}>
      Rezervă
    </button>
  );
}

const ReservationForm = () => {
  const [state, formAction] = useFormState(createReservation, initialState);
  console.log(state);
  return (
    <form action={formAction} className="form-left">
      <h2 className="headline-1 text-center">Consultanță Online</h2>

      <p className="form-text text-center">
        Cere o ofertă pentru evenimentul tău la{" "}
        <a href="tel:+40754404000" className="link">
          +40 754 404 000
        </a>{" "}
        <br />
        sau completează formularul de mai jos și te contactăm noi!
      </p>
      <Input
        type="text"
        name="fullName"
        placeholder="Numele dumneavoastră"
        className="input-field"
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Numărul de telefon"
        className="input-field"
      />

      <div className="input-wrapper">
        <Input
          type="number"
          name="personsNumber"
          className="input-field"
          placeholder="Număr de persoane"
        />
        <Input
          type="text"
          name="eventType"
          className="input-field"
          placeholder="Tipul de eveniment"
        />
      </div>
      <div className="input-wrapper">
        <input type="date" name="date" className="input-field " />
        <input type="time" name="time" className="input-field " />
      </div>
      <textarea
        name="message"
        placeholder="Mesaj"
        className="input-field"
      ></textarea>

      <div className="mb-2">
        <SubmitButton />
      </div>
      {state?.message && <p className="body-2">{state.message}</p>}
    </form>
  );
};

export default ReservationForm;
