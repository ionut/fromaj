import React from "react";
import Event from "./Event";
import { Events } from "@/utils/types";
import { getQuery } from "@/utils/query";

const EventsSection = async () => {
  const { error, data: events } = await getQuery("/evenimentes?populate=*");
  if (error) {
    return "Not found!";
  }
  return (
    <section className="events-section">
      <div className="container events-section-block">
        {events?.map((event: Events) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
