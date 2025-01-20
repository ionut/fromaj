import Image from "next/image";
import React from "react";
import Container from "../ui/common/Container";
import SectionTitle from "../ui/common/SectionTitle";

const HowItStartSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="space-y-4">
          <SectionTitle title="Fromaj - Povestea noastră" />
          <p className="text-center text-xl">
            Fromaj a luat naștere din pasiunea pentru gusturi elegante, arome
            îmbibate în vin și miresme puternice. Din dorința de a oferi tonul
            de unicitate evenimentelor de mare însemnătate, fie că e zi de
            naștere, botez sau nuntă, Fromaj vrea să fie alături de tine. Vom fi
            motivul în plus pentru care invitații tăi vor rămâne cu amintiri
            încântătoare din acea zi.
          </p>
        </div>

        <div className="relative">
          <Image
            src="@/public/images/catering-corporate.jpg"
            width={500}
            height={500}
            loading="lazy"
            alt="Platouri Branzeturi"
            className="rounded-full"
          />
          <figure className="absolute top-0 right-0">
            <Image
              src="@/public/images/badge-2.png"
              width={130}
              height={130}
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
