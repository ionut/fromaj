import React from "react";
import Image from "next/image";
import { Events } from "@/utils/types";
import Link from "next/link";

const Event = ({ event }: { event: Events }) => {
  const { id, attributes } = event;

  return (
    <div key={id} className="flex flex-col gap-20">
      <Link href={`/evenimente/${id}`}>
        <figure className="card-banner img-holder">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${attributes.pictures.data[0].attributes.url}`}
            width={300}
            height={300}
            alt={`${attributes.location} - ${attributes.persons} persoane`}
            className="w-full "
            loading="lazy"
          />
        </figure>
      </Link>

      <Link
        href={`/evenimente/${id}`}
        className="btn-text hover-underline label-1"
      >
        {attributes.location} - {attributes.persons} persoane
      </Link>
    </div>
  );
};

export default Event;
