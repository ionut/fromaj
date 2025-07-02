"use client";
import Container from "@/components/ui/common/Container";
import { notFound, useSearchParams } from "next/navigation";
import React from "react";

const CongratulationsPage = () => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("userName");
  if (!userName) notFound();
  return (
    <Container>
      <h1 className="text-4xl text-center mb-4 text-eerie-black-1">
        Felicitări, {userName}!
      </h1>
      <h2 className="text-3xl text-center text-eerie-black-1">
        Comanda dumneavoastră a fost inregistrată cu succes! Vei fi contactat
        telefonic in cel mai scurt timp pentru confirmare.
      </h2>
    </Container>
  );
};

export default CongratulationsPage;
