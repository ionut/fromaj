"use client";
import { Events } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";

const SingleEvent = ({ event }: { event: Events }) => {
  const { location, persons, eventType, date, pictures } = event.attributes;
  const [mainImage, setMainImage] = useState(pictures.data[0].attributes.url);

  const handleClick = (id: number): void => {
    setMainImage(pictures.data[id].attributes.url);
  };

  return (
    <>
      <section className="container">
        <div className="single-type">
          <div className="single-type-block_col">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${mainImage}`}
              width={320}
              height={320}
              loading="lazy"
              alt={`${location} - ${persons} persoane`}
              className="img-cover"
            />
            <div className="row gap-10 overflow-scroll w-full">
              {pictures?.data?.map((picture: any, index: number) => {
                return (
                  <Image
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${picture.attributes.url}`}
                    width={200}
                    height={200}
                    alt={`${location} - ${persons} persoane`}
                    className="other-images"
                    onClick={() => handleClick(index)}
                  />
                );
              })}
            </div>
          </div>
          <div className="single-type-block_col">
            <h2 className="headline-1 section-title">
              <span>{location}</span>
            </h2>
            <div className="product-attributes">
              <div className="product-attribute">
                <p className="title-2">Numar de persoane:</p>
                <p className="title-2 product-attribute_detail">
                  {persons} persoane
                </p>
              </div>
              <div className="product-attribute">
                <p className="title-2">Tip Eveniment:</p>
                <p className="title-2 product-attribute_detail">{eventType}</p>
              </div>
              <div className="product-attribute">
                <p className="title-2">Data:</p>
                <p className="title-2 product-attribute_detail">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleEvent;
