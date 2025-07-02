import ReservationForm from "@/components/forms/ReservationForm";
import Container from "@/components/ui/common/Container";
import SectionTitle from "@/components/ui/common/SectionTitle";
import React from "react";

const ReservationPage = () => {
  return (
    <Container>
      <SectionTitle title="Consultanță Online" className="text-eerie-black-1" />
      <h3 className="text-2xl text-center max-w-2xl mx-auto mb-4 mt-4 text-eerie-black-1">
        Cere o ofertă pentru evenimentul tău la{" "}
        <a href="tel:+40754404000" className="underline text-green font-bold">
          +40 754 404 000
        </a>{" "}
        sau completează formularul de mai jos și te contactăm noi!
      </h3>
      <ReservationForm />
    </Container>
  );
};

export default ReservationPage;
