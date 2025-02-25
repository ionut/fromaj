"use client";
import React, { useState } from "react";
import { useActionState } from "react";
import { createReservation } from "@/app/action";
import { Input } from "@/components/forms/common/Input";
import { redirect } from "next/navigation";

const initialState = {
  message: "",
};

const ReservationForm = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [personsNumber, setPersonsNumber] = useState("");
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("Buna ziua...");

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
        <Input
          type="text"
          name="fullName"
          placeholder="Numele dumneavoastră"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Numărul de telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Input
          type="number"
          name="personsNumber"
          placeholder="Număr de persoane"
          value={personsNumber}
          onChange={(e) => setPersonsNumber(e.target.value)}
        />
        <Input
          type="text"
          name="eventType"
          placeholder="Tipul de eveniment"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Input
          type="time"
          name="time"
          placeholder="Ora"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <Input
          type="date"
          name="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-2">
        <button
          className="text-white outline outline-1 outline-white rounded-2xl text-xl font-bold flex justify-center items-center p-3 shadow-lg bg-green hover:transition-colors hover:bg-davys-grey hover:outline-davys-grey focus:outline-2 xl:text-2xl xl:px-6"
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
