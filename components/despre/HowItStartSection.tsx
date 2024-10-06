import Image from "next/image";
import React from "react";

const HowItStartSection = () => {
  return (
    <section className="section about text-center">
      <div className="container align-center">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">
            Fromaj - Povestea noastră
          </p>

          <h2 className="headline-1 section-title">Cum a inceput totul</h2>

          <p className="section-text">
            Fromaj a luat naștere din pasiunea pentru gusturi elegante, arome
            îmbibate în vin și miresme puternice. Din dorința de a oferi tonul
            de unicitate evenimentelor de mare însemnătate, fie că e zi de
            naștere, botez sau nuntă, Fromaj vrea să fie alături de tine. Vom fi
            motivul în plus pentru care invitații tăi vor rămâne cu amintiri
            încântătoare din acea zi.
          </p>
        </div>

        <div className="about-banner h-36">
          <Image
            src="/images/catering-corporate.jpg"
            width="570"
            height="570"
            loading="lazy"
            alt="Platouri Branzeturi"
            className="w-100"
          />
          <figure className="abs-img abs-img-2 has-before">
            <Image
              src="/images/badge-2.png"
              width="133"
              height="134"
              loading="lazy"
              alt="Artisan Cheese Boards"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HowItStartSection;
