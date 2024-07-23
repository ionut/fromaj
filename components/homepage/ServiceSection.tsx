import React from "react";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <section className="section service bg-black-10 text-center">
      <div className="container">
        <p className="section-subtitle label-2"> Fromaj</p>

        <h2 className="headline-1 section-title">
          <span>CHEESE BAR</span>
        </h2>
        <h2 className="headline-2 section-title">
          Într-un decor rustic, asigurăm gustări delicioase invitaților.
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
              <a href="#comanda" className="has-before hover:shine">
                <figure className="card-banner img-holder">
                  <Image
                    src="/images/service-1.png"
                    width="285"
                    height="336"
                    loading="lazy"
                    alt="Breakfast"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#comanda">Cutii</a>
                </h3>

                <a href="#comanda" className="btn-text hover-underline label-2">
                  Comandă
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card">
              <a href="#cere_oferta" className="has-before hover:shine">
                <figure className="card-banner img-holder">
                  <Image
                    src="/images/service-2.png"
                    width="285"
                    height="336"
                    loading="lazy"
                    alt="Appetizers"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#cere_oferta">Catering Corporate</a>
                </h3>

                <a
                  href="#cere_oferta"
                  className="btn-text hover-underline label-2"
                >
                  Cere ofertă
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card">
              <a href="#cere_oferta" className="has-before hover:shine">
                <figure className="card-banner img-holder">
                  <Image
                    src="/images/service-3.png"
                    width="285"
                    height="336"
                    loading="lazy"
                    alt="Drinks"
                    className="img-cover"
                  />
                </figure>
              </a>

              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#cere_oferta">Evenimente</a>
                </h3>

                <a
                  href="#cere_oferta"
                  className="btn-text hover-underline label-2"
                >
                  Cere ofertă
                </a>
              </div>
            </div>
          </li>
        </ul>

        <Image
          src="/images/shape-1.png"
          width="246"
          height="412"
          loading="lazy"
          alt="shape"
          className="shape shape-1 move-anim"
        />
        <Image
          src="/images/shape-2.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
      </div>
    </section>
  );
};

export default ServiceSection;
