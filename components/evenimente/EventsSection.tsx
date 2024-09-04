"use client";
import React from "react";
import Event from "./Event";
import { useQuery } from "@apollo/client";
import { Events } from "@/utils/types";
import { GET_EVENTS } from "@/utils/query";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="events-section">
      <div className="container events-section-block">{children}</div>
    </section>
  );
};

const EventsSection = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (error)
    return (
      <Layout>
        <h2>
          Vă rugăm sunați la numărul <a href="tel:0754 404 000">0754 404 000</a>
        </h2>
      </Layout>
    );
  if (loading)
    return (
      <Layout>
        <h2>Loading...</h2>
      </Layout>
    );

  return (
    <Layout>
      {data?.evenimentes?.data?.map((event: Events) => (
        <Event key={event.id} event={event} />
      ))}
    </Layout>
  );
};

export default EventsSection;
