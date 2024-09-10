import ReservationForm from "@/components/rezervare/ReservationForm";
import React from "react";

const ReservationPage = () => {
  return (
    <section className="reservation">
      <div className="container">
        <div className="form reservation-form bg-black-10">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
};

export default ReservationPage;
