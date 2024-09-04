"use client";
import { Events } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";
import { getUrl } from "@/utils/utils";

const SingleEvent = ({ event }: { event: Events }) => {
  const { location, persons, eventType, date, pictures } = event.attributes;
  const [mainImage, setMainImage] = useState(pictures.data[0].attributes.url);

  const handleClick = (id: number): void => {
    setMainImage(pictures.data[id].attributes.url);
  };

  return (
    <>
      <section className="product-section">
        <div className="container product-section-block">
          <div className="product-section-block_col">
            <Image
              src={`${getUrl()}${mainImage}`}
              width="285"
              height="336"
              loading="lazy"
              alt={location}
              className="img-cover"
            />
            <div className="row gap-10 overflow-scroll w-full">
              {pictures?.data?.map((picture: any, index: number) => {
                return (
                  <Image
                    key={index}
                    src={`${getUrl()}${picture.attributes.url}`}
                    width={200}
                    height={100}
                    alt="image"
                    className="other-images"
                    onClick={() => handleClick(index)}
                  />
                );
              })}
            </div>
          </div>
          <div className="product-section-block_col">
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
