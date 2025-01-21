import Image from "next/image";
import Container from "../ui/common/Container";
import Link from "next/link";
import { lora } from "@/styles/fonts";
import { PhoneIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  return (
    <div className="bg-green md:clip-custom">
      <Container className="border-t border-white pb-24 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(400px,_max-content)] gap-5 md:gap-10 lg:gap-20">
          <article className="flex flex-col justify-center gap-6 order-2 md:order-1">
            <h1
              className={`text-3xl md:text-5xl font-medium text-center md:text-left ${lora.className}`}
            >
              Pentru momente speciale
            </h1>
            {/* <p className="paragraph">
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
            </p> */}
            <p className="text-lg text-center md:text-xl font-normal md:text-left">
              Suntem aici să îți oferim o experiență gourmet de neuitat,
              perfectă pentru toate momentele tale speciale.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                href="tel:+40747241177"
                className="text-white outline outline-1 outline-white rounded-2xl text-xl font-bold flex justify-center items-center p-3 shadow-lg hover:transition-colors hover:bg-davys-grey hover:outline-davys-grey focus:outline-2"
              >
                Contactează
                <PhoneIcon width={20} height={20} className="ml-2" />
              </a>
              <Link
                href="/despre"
                className="font-bold text-xl underline p-3 text-center"
              >
                Despre
              </Link>
            </div>
          </article>

          <div className="order-1 md:order-2 mx-auto">
            <Image
              src="/images/platou-no-back.webp"
              width={468}
              height={544}
              priority
              alt="Fromaj Artisan Cheese Background"
              className="object-cover drop-shadow-image md:animate-spin-slow"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
