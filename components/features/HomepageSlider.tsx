"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { sliderItems } from "@/utils/dataPlaceholder";

const HomepageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handlePreviousClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    currentSlide == 0
      ? setCurrentSlide(sliderItems.length - 1)
      : setCurrentSlide((curr) => curr - 1);
  };
  const handleNextClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    currentSlide == sliderItems.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  return (
    <>
      <ul className="hero-slider">
        {sliderItems.map((item, index) => {
          const { image, subtitle, title, buttonText } = item;
          return (
            <li
              key={index}
              className={`slider-item ${
                currentSlide === index ? "active" : ""
              }`}
            >
              <div className="slider-bg">
                <Image
                  src={image}
                  width="1880"
                  height="950"
                  alt={title}
                  className="img-cover"
                  loading="lazy"
                />
              </div>

              <p className="label-2 section-subtitle slider-reveal">
                {subtitle}
              </p>

              <h1 className="display-1 hero-title slider-reveal">{title}</h1>

              <p className="body-2 hero-text slider-reveal"></p>

              <a href="#comanda" className="btn  slider-reveal">
                <span className="text text-1">{buttonText}</span>

                <span className="text text-2" aria-hidden="true">
                  {buttonText}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        data-prev-btn
        onClick={handlePreviousClick}
      >
        <IoChevronBack />
      </button>

      <button
        className="slider-btn next"
        aria-label="slide to next"
        data-next-btn
        onClick={handleNextClick}
      >
        <IoChevronForward />
      </button>
    </>
  );
};

export default HomepageSlider;
