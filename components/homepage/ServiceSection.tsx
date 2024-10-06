import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageCustom from "../ui/ImageCustom";

const ServiceSection = () => {
  return (
    <section className="section service text-center">
      <div className="container">
        <p className="section-subtitle label-2"> Fromaj</p>

        <h2 className="headline-1 section-title">
          <span>CHEESE BAR</span>
        </h2>
        <h2 className="headline-2 section-title">
          Într-un decor rustic, asigurăm gustări delicioase invitaților
        </h2>
        <p className="section-text">
          Dăruiește o notă specială evenimentului tău. Oferim servicii de
          catering pentru orice tip de eveniment. Pentru mai multe detalii și
          oferte folosește căsuța de mai jos &quot;Consultanță Online&quot; sau
          sună-ne la numărul de telefon specificat mai sus!
        </p>

        <ul className="grid-list">
          <li>
            <div className="service-card">
              <ImageCustom href="/produse/cutie-standard-mare">
                <Image
                  src="/images/cutii.jpg"
                  width="285"
                  height="336"
                  loading="lazy"
                  alt="Fromaj Cutie Standard Mare"
                  className="img-cover"
                />
              </ImageCustom>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <Link href="/produse/cutie-standard-mare">Cutii</Link>
                </h3>

                <Link
                  href="/produse/cutie-standard-mare"
                  className="btn-text hover-underline label-2"
                >
                  Comandă
                </Link>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card">
              <ImageCustom href="/rezervare">
                <Image
                  src="/images/catering-corporate.jpg"
                  width="285"
                  height="336"
                  loading="lazy"
                  alt="Fromaj Boards"
                  className="img-cover"
                />
              </ImageCustom>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <Link href="/rezervare">Catering Corporate</Link>
                </h3>

                <Link
                  href="/rezervare"
                  className="btn-text hover-underline label-2"
                >
                  Rezervă
                </Link>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card">
              <ImageCustom href="/rezervare">
                <Image
                  src="/images/eveniment-gradina.jpg"
                  width="285"
                  height="336"
                  loading="lazy"
                  alt="Fromaj Evenimente"
                  className="img-cover"
                />
              </ImageCustom>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <Link href="/rezervare">Evenimente</Link>
                </h3>

                <Link
                  href="/rezervare"
                  className="btn-text hover-underline label-2"
                >
                  Rezervă
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
    </section>
  );
};

export default ServiceSection;
