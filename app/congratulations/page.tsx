"use client";
import { notFound, useSearchParams } from "next/navigation";
import React from "react";

const CongratulationsPage = () => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("userName");
  if (!userName) notFound();
  return (
    <section className="events-section">
      <div className="container">
        <h1 className="title-1">Felicitări, {userName}!</h1>
        <p className="body-1">
          Comandă dumneavoastră a fost inregistrată cu succes!
        </p>
      </div>
    </section>
  );
};

export default CongratulationsPage;
