import React from "react";
import Image from "next/image";
import Container from "../ui/common/Container";
import SectionTitle from "../ui/common/SectionTitle";

const AboutSection = () => {
  return (
    <div className="bg-green md:clip-top">
      <Container className="pt-[15%] lg:pt-[10%]">
        <div>
          <SectionTitle title="Misiunea noastră" />
          <div className="grid md:grid-cols-2 items-center mt-10">
            <div className="col-span-1 pr-6 space-y-4">
              <p className="text-lg lg:text-xl font-normal">
                La Fromaj, misiunea noastră este să fim alături de tine la
                fiecare moment special, transformând evenimentele în experiențe
                memorabile, prin eleganță, savoare și un strop de magie gourmet.
              </p>
              <p className="text-lg lg:text-xl font-normal">
                Fie că organizezi o nuntă de vis, un botez emoționant sau o
                aniversare plină de bucurie, suntem aici să creăm acel CheeseBar
                spectaculos care să surprindă invitații și să adauge un plus de
                rafinament fiecărei ocazii. Înțelegem cât de important este să
                ai alături parteneri de încredere, de aceea ne dedicăm fiecărui
                detaliu, asigurându-ne că produsele noastre sunt nu doar
                delicioase, ci și o adevărată încântare vizuală.
              </p>
              <p className="text-lg lg:text-xl font-normal">
                Suntem mai mult decât o firmă de catering – suntem prietenii
                care îți aduc bucuria gustului la orice eveniment, adaptându-ne
                mereu dorințelor tale. Pentru noi, fiecare poveste este unică,
                iar platourile și CheeseBar-urile noastre sunt create cu grijă,
                pentru a reflecta esența momentului pe care îl sărbătorești.
              </p>
              <p className="text-lg lg:text-xl font-normal">
                Fromaj – pentru momente speciale, alături de oameni speciali.
              </p>
            </div>
            <div className="col-span-1">
              <Image
                src="/images/misiunea-noastra.webp"
                width={736}
                height={736}
                alt="Platou premium Fromaj cu selecție de brânzeturi fine, mezeluri artizanale și decorațiuni pentru evenimente speciale"
                className="aspect-square w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
