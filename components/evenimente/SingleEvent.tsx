"use client";
import { Events } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";

const SingleEvent = ({ event }: { event: Events }) => {
  const { location, personNumber, type, pictures, date } = event;
  const [mainImage, setMainImage] = useState(pictures[0]);

  const handleClick = (id: number): void => {
    setMainImage(pictures[id]);
  };

  return (
    <>
      <section className="product-section">
        <div className="container product-section-block">
          <div className="product-section-block_col">
            <Image
              src={mainImage}
              width="285"
              height="336"
              loading="lazy"
              alt={location}
              className="img-cover"
            />
            <div className="row gap-10 overflow-scroll w-full">
              {pictures.map((picture, index) => {
                return (
                  <Image
                    key={index}
                    src={picture}
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
                  {personNumber} persoane
                </p>
              </div>
              <div className="product-attribute">
                <p className="title-2">Tip Eveniment:</p>
                <p className="title-2 product-attribute_detail">{type}</p>
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
