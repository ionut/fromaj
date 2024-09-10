import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      {/* <section className="hero">
        <div className="container hero-block">
          <div className="hero-block_col">
            <p
              className="label-2 section-subtitle text-center"
              id="about-label"
            >
              Fromaj
            </p>
            <h2 className="headline-1 section-title text-center">
              <span>Lorem Ipsum</span>
            </h2>
            <p className="section-text text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              ratione aliquam veritatis sapiente quidem maxime consequuntur
              voluptatem, aliquid ea nam vel distinctio esse rem, hic tempora,
              debitis tenetur accusantium fugiat.
            </p>
          </div>

          <div className="service-card">
            <Image
              src="/images/service-1.png"
              width="285"
              height="336"
              loading="lazy"
              alt="Breakfast"
              className="img-cover"
            />
          </div>
        </div>
      </section> */}
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-block_text">
            <p
              className="label-2 section-subtitle text-center"
              id="about-label"
            >
              Fromaj
            </p>
            <h2 className="headline-1 section-title text-center">
              <span>Lorem Ipsum</span>
            </h2>
            <p className="section-text text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              ratione aliquam veritatis sapiente quidem maxime consequuntur
              voluptatem, aliquid ea nam vel distinctio esse rem, hic tempora,
              debitis tenetur accusantium fugiat.
            </p>
          </div>

          <div className="hero-block_image">
            <Image
              src="/images/service-1.png"
              width="285"
              height="336"
              loading="lazy"
              alt="Breakfast"
              className="img-cover"
            />
          </div>
        </div>
      </section>
      <section>
        <Image
          src="/images/wave-hero.svg"
          width={100}
          height={100}
          alt="Wave"
          className="wave"
        />
      </section>
    </>
  );
};

export default HeroSection;
