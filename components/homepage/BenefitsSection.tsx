import Image from "next/image";
import React from "react";

const BenefitsSection = () => {
  return (
    <section className="section benefits">
      <div className="container">
        <p className="section-subtitle text-center label-2">Misiunea noastră</p>
        <div className="benefits-block">
          <div className="benefits-col">
            <p className="body-3 text-center">
              La Fromaj, misiunea noastră este să fim alături de tine la fiecare
              moment special, transformând evenimentele în experiențe
              memorabile, prin eleganță, savoare și un strop de magie gourmet.
            </p>
            <p className="body-3 text-center">
              Fie că organizezi o nuntă de vis, un botez emoționant sau o
              aniversare plină de bucurie, suntem aici să creăm acel CheeseBar
              spectaculos care să surprindă invitații și să adauge un plus de
              rafinament fiecărei ocazii. Înțelegem cât de important este să ai
              alături parteneri de încredere, de aceea ne dedicăm fiecărui
              detaliu, asigurându-ne că produsele noastre sunt nu doar
              delicioase, ci și o adevărată încântare vizuală.
            </p>
            <p className="body-3 text-center">
              Suntem mai mult decât o firmă de catering – suntem prietenii care
              îți aduc bucuria gustului la orice eveniment, adaptându-ne mereu
              dorințelor tale. Pentru noi, fiecare poveste este unică, iar
              platourile și CheeseBar-urile noastre sunt create cu grijă, pentru
              a reflecta esența momentului pe care îl sărbătorești.
            </p>
            <p className="body-3 text-center">
              Fromaj – pentru momente speciale, alături de oameni speciali.
            </p>
          </div>
          <div className="benefits-col">
            <Image
              src={"/images/platou-no-back.png"}
              width={574}
              height={574}
              alt="Platouri"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
