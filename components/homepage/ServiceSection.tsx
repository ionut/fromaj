import React from "react";
import Image from "next/image";
import Container from "../ui/common/Container";
import SectionTitle from "../ui/common/SectionTitle";
import GridGallery from "../ui/common/GridGallery";

const ServiceSection = () => {
  return (
    <div className="relative">
      <Container>
        <div>
          <SectionTitle title="Fromaj" />
          <h2 className="text-center text-4xl font-bold mb-6">CheeseBar</h2>
          <p className="max-w-[40vw] text-center mx-auto text-lg lg:text-xl font-normal mb-10">
            Dăruiește o notă specială evenimentului tău. Oferim servicii de
            catering pentru orice tip de eveniment. Pentru mai multe detalii și
            oferte folosește căsuța de mai jos &quot;Consultanță Online&quot;
            sau sună-ne la numărul de telefon specificat mai sus!
          </p>

          <GridGallery />

          <Image
            src="/images/shape-1.png"
            width={246}
            height={620}
            alt="Fromaj forma"
            className="absolute top-0 left-0 -z-10"
          />
          <Image
            src="/images/shape-2.png"
            width={343}
            height={506}
            alt="Fromaj forma"
            className="absolute top-0 right-0 -z-10"
          />
        </div>
      </Container>
    </div>
  );
};

export default ServiceSection;
