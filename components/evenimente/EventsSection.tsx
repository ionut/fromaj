import React from "react";
import Event from "./Event";
import { events } from "@/utils/dataPlaceholder";

const EventsSection = () => {
  return (
    <section className="events-section">
      <div className="container events-section-block">
        {events.map((event) => {
          return <Event key={event.id} event={event} />;
        })}
      </div>
    </section>
  );
};

export default EventsSection;
