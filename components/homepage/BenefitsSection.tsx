import Image from "next/image";
import React from "react";

const BenefitsSection = () => {
  return (
    <section className="section benefits">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Alegere sănătoasă
        </p>

        <h2 className="headline-1 section-title text-center">
          <span>Beneficii</span>
        </h2>
        <div className="benefits-block">
          <div className="benefits-col">
            <p className="section-text">
              Brânza naturală din lapte este bogată în vitamine și minerale și
              săracă în colesterol. De asemenea, este recomandată persoanelor
              care au o digestie lentă și într-o recuperare mai rapidă.
            </p>
            <ul className="benefits-list">
              <li className="title-1 benefits-item">
                <Image
                  src={"/images/eyesight.webp"}
                  width={50}
                  height={50}
                  alt="Îmbunătățește vederea"
                />
                Îmbunătățește vederea
              </li>
              <li className="title-1 benefits-item">
                <Image
                  src={"/images/joins.webp"}
                  width={50}
                  height={50}
                  alt="Articulații"
                />
                Articulații sănătoase
              </li>
              <li className="title-1 benefits-item">
                <Image
                  src={"/images/skin.webp"}
                  width={50}
                  height={50}
                  alt="Piele"
                />
                Oferă protecție pielii
              </li>
              <li className="title-1 benefits-item">
                <Image
                  src={"/images/stomach.webp"}
                  width={50}
                  height={50}
                  alt="Ulcer"
                />
                Previne ulcerele
              </li>
            </ul>
          </div>
          <div className="benefits-col">
            <Image
              src={"/images/benefits-cheese.jpg"}
              width={300}
              height={400}
              alt="Vederea"
              className="benefits-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
