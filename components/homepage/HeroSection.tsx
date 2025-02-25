import Image from "next/image";
import Container from "../ui/common/Container";
import Link from "next/link";
import { lora } from "@/styles/fonts";
import { PhoneIcon } from "@heroicons/react/24/solid";

const images = {
  mobile: "/images/platou-no-back-mobile.webp",
  desktop: "/images/platou-no-back.webp",
};

const HeroSection = () => {
  return (
    <div className="bg-green md:clip-bottom">
      <Container className="border-t border-white">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[1fr_minmax(400px,_max-content)] md:gap-10 lg:gap-20">
          <article className="flex flex-col justify-center gap-6 order-2 md:order-1">
            <h1
              className={`text-3xl  font-medium text-center md:text-5xl md:text-left xl:text-6xl xl:font-semibold ${lora.className}`}
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
            <p className="text-lg text-center font-normal md:text-left md:text-2xl ">
              Suntem aici să îți oferim o experiență gourmet de neuitat,
              perfectă pentru toate momentele tale speciale.
            </p>
            <p className="text-lg text-center font-normal md:text-left md:text-2xl ">
              Ne-am propus să transformăm evenimentele și sărbătorile tale în
              experiențe de neuitat, prin platouri de brânzeturi create cu
              pasiune, rafinament și atenție la cele mai mici detalii.
            </p>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                href="tel:+40754404000"
                className="text-white outline outline-1 outline-white rounded-2xl text-xl font-bold flex justify-center items-center p-3 shadow-lg hover:transition-colors hover:bg-davys-grey hover:outline-davys-grey focus:outline-2 xl:text-2xl xl:px-6"
              >
                Contactează
                <PhoneIcon width={20} height={20} className="ml-2" />
              </a>
              <Link
                href="/despre"
                className="font-bold text-xl underline p-3 text-center xl:text-2xl xl:px-6"
              >
                Despre
              </Link>
            </div>
          </article>

          <div className="order-1 md:order-2">
            <Image
              src={images.mobile}
              alt="Platou premium rotativ Fromaj cu selecție de brânzeturi fine, fructe proaspete și garnituri elegante pentru evenimente speciale și catering de lux"
              width={468}
              height={544}
              priority
              className="object-cover drop-shadow-image aspect-square md:animate-spin-slow"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
