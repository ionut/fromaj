import Image from "next/image";
import React from "react";
import Container from "../ui/common/Container";
import SectionTitle from "../ui/common/SectionTitle";

const HowItStartSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-flow-col lg:auto-cols-max items-center gap-4">
        <div className="space-y-4">
          <SectionTitle
            title="Fromaj - Povestea noastră"
            className="text-eerie-black-1"
          />
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
            src="/images/catering.webp"
            width={500}
            height={500}
            loading="lazy"
            alt="Platouri premium cu brânzeturi fine și mezeluri artizanale pentru evenimente și catering de lux în România"
            className="rounded-t-full"
          />

          <Image
            src="/images/badge-2.png"
            width={130}
            height={130}
            alt="Fromaj - Furnizor specializat de platouri cu brânzeturi artizanale pentru evenimente"
            className="absolute top-0 right-0"
          />

          <Image
            src="/images/badge-2-bg.png"
            width={130}
            height={130}
            alt="Sigla decorativă Fromaj - Servicii premium de catering cu brânzeturi fine"
            className="animate-spin-slow duration-1000 absolute top-0 right-0"
          />
        </div>
      </div>
    </Container>
  );
};

export default HowItStartSection;
