import React from "react";
import Image from "next/image";
import Container from "../ui/common/Container";
import SectionTitle from "../ui/common/SectionTitle";

const AboutSection = () => {
  return (
    <Container>
      <div>
        <SectionTitle title="Misiunea noastră" />
        <div className="grid md:grid-cols-2 items-center mt-10">
          <div className="col-span-1 pr-6 space-y-4">
            <p className="paragraph">
              La Fromaj, misiunea noastră este să fim alături de tine la fiecare
              moment special, transformând evenimentele în experiențe
              memorabile, prin eleganță, savoare și un strop de magie gourmet.
            </p>
            <p className="paragraph">
              Fie că organizezi o nuntă de vis, un botez emoționant sau o
              aniversare plină de bucurie, suntem aici să creăm acel CheeseBar
              spectaculos care să surprindă invitații și să adauge un plus de
              rafinament fiecărei ocazii. Înțelegem cât de important este să ai
              alături parteneri de încredere, de aceea ne dedicăm fiecărui
              detaliu, asigurându-ne că produsele noastre sunt nu doar
              delicioase, ci și o adevărată încântare vizuală.
            </p>
            <p className="paragraph">
              Suntem mai mult decât o firmă de catering – suntem prietenii care
              îți aduc bucuria gustului la orice eveniment, adaptându-ne mereu
              dorințelor tale. Pentru noi, fiecare poveste este unică, iar
              platourile și CheeseBar-urile noastre sunt create cu grijă, pentru
              a reflecta esența momentului pe care îl sărbătorești.
            </p>
            <p className="paragraph">
              Fromaj – pentru momente speciale, alături de oameni speciali.
            </p>
          </div>
          <div className="col-span-1">
            <Image
              src="/images/platou-no-back.png"
              width={574}
              height={574}
              alt="Platouri"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
