import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageCustom from "../ui/ImageCustom";
import Container from "../ui/common/Container";
import SectionTitle from "../ui/common/SectionTitle";

const ServiceSection = () => {
  return (
    <Container>
      <div>
        <SectionTitle title="Fromaj" />
        <h2 className="text-center text-4xl font-bold mb-6">CheeseBar</h2>
        <p className="max-w-[40vw] text-center mx-auto text-lg lg:text-xl font-normal mb-10">
          Dăruiește o notă specială evenimentului tău. Oferim servicii de
          catering pentru orice tip de eveniment. Pentru mai multe detalii și
          oferte folosește căsuța de mai jos &quot;Consultanță Online&quot; sau
          sună-ne la numărul de telefon specificat mai sus!
        </p>

        <ul className="grid grid-cols-4 items-center gap-x-4 gap-y-4">
          <li className="col-span-2">
            <div className="service-card flex flex-col text-center">
              <ImageCustom href="/produse/cutie-standard-mare">
                <Image
                  src="/images/cutii.jpg"
                  width="285"
                  height="336"
                  alt="Fromaj Cutie Standard Mare"
                  className="img-cover"
                />
              </ImageCustom>

              <div className="card-content">
                <Link
                  href="/produse/cutie-standard-mare"
                  className="btn-text hover-underline label-2"
                >
                  Cere ofertă
                </Link>
              </div>
            </div>
          </li>

          <li className="col-span-2">
            <div className="service-card flex flex-col text-center">
              <ImageCustom href="/rezervare">
                <Image
                  src="/images/cheese.jpg"
                  width="285"
                  height="336"
                  alt="Fromaj Boards"
                  className="aspect-square w-full h-full object-cover"
                />
              </ImageCustom>

              <div className="card-content">
                <Link
                  href="/rezervare"
                  className="btn-text hover-underline label-2"
                >
                  Cere ofertă
                </Link>
              </div>
            </div>
          </li>

          <li className="col-start-2 col-span-2">
            <div className="service-card flex flex-col text-center">
              <ImageCustom href="/rezervare">
                <Image
                  src="/images/eveniment.jpg"
                  width="285"
                  height="336"
                  alt="Fromaj Evenimente"
                  className="img-cover"
                />
              </ImageCustom>

              <div className="card-content">
                <Link
                  href="/rezervare"
                  className="btn-text hover-underline label-2"
                >
                  Cere ofertă
                </Link>
              </div>
            </div>
          </li>
        </ul>

        <Image
          src="/images/shape-1.png"
          width="246"
          height="412"
          loading="lazy"
          alt="Fromaj forme"
          className="shape shape-1 move-anim"
        />
        <Image
          src="/images/shape-2.png"
          width="343"
          height="345"
          loading="lazy"
          alt="Fromaj forme"
          className="shape shape-2 move-anim"
        />
      </div>
    </Container>
  );
};

export default ServiceSection;
