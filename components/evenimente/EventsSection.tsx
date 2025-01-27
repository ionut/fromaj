import React from "react";
import Event from "./Event";
import { Events } from "@/utils/types";
import { getQuery } from "@/utils/query";
import Image from "next/image";

const EventsSection = async () => {
  const { error, data: events } = await getQuery("/evenimente?populate=*");

  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${events.attributes.poze.data[0].attributes.url}?format=webp`;
  if (error) {
    return "Not found!";
  }
  return (
    <section className="events-section">
      <div className="container events-section-block">
        <Image src={imageUrl} alt="image" width={550} height={560} />
      </div>
    </section>
  );
};

export default EventsSection;
