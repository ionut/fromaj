import Image from "next/image";
import Container from "../ui/common/Container";
import SectionTitle from "../ui/common/SectionTitle";

const HeroSection = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="col-span-1 flex flex-col items-center justify-center gap-6 order-2 md:order-1">
            <SectionTitle title="Pentru momente speciale" />
            <p className="paragraph">
              Credem că fiecare masă spune o poveste. De aceea, ne-am propus să
              transformăm evenimentele și sărbătorile tale în experiențe de
              neuitat, prin platouri de brânzeturi create cu pasiune, rafinament
              și atenție la cele mai mici detalii.
            </p>
            <p className="paragraph">
              Fie că pregătești o cină romantică, o aniversare plină de zâmbete
              sau un eveniment mareț, platourile noastre sunt mai mult decât o
              selecție de delicatese – sunt o invitație la bucurie, savoare și
              momente împărtășite.
            </p>
            <p className="paragraph">
              Suntem aici să îți oferim o experiență gourmet de neuitat,
              perfectă pentru toate momentele tale speciale.
            </p>
          </article>

          <div className="col-span-1 order-1 md:order-2">
            <Image
              src="/images/pic-main-new.webp"
              width={468}
              height={544}
              priority
              quality={75}
              alt="Fromaj Artisan Cheese Background"
              className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
