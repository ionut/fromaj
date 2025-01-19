import Image from "next/image";
import React from "react";
import Container from "../ui/common/Container";
import SectionTitle from "../ui/common/SectionTitle";

const HowItStartSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="about-content">
          <SectionTitle title="Fromaj - Povestea noastră" />

          <p className="section-text">
            Fromaj a luat naștere din pasiunea pentru gusturi elegante, arome
            îmbibate în vin și miresme puternice. Din dorința de a oferi tonul
            de unicitate evenimentelor de mare însemnătate, fie că e zi de
            naștere, botez sau nuntă, Fromaj vrea să fie alături de tine. Vom fi
            motivul în plus pentru care invitații tăi vor rămâne cu amintiri
            încântătoare din acea zi.
          </p>
        </div>

        <div className="about-banner">
          <Image
            src="/images/catering-corporate.jpg"
            width={500}
            height={500}
            loading="lazy"
            alt="Platouri Branzeturi"
            className=""
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
    </Container>
  );
};

export default HowItStartSection;
