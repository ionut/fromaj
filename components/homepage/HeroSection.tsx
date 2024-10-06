import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-block_text">
          <p className="label-2 section-subtitle text-center" id="about-label">
            Fromaj
          </p>
          <h2 className="headline-1 section-title text-center">
            <span>Lorem Ipsum</span>
          </h2>
          <p className="section-text text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ratione
            aliquam veritatis sapiente quidem maxime consequuntur voluptatem,
            aliquid ea nam vel distinctio esse rem, hic tempora, debitis tenetur
            accusantium fugiat.
          </p>
        </div>

        <div className="hero-block_image">
          <Image
            src="/images/img-main-2.jpg"
            width="285"
            height="336"
            alt="Fromaj Artisan Cheese Background"
            loading="lazy"
            className="img-cover img-main"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
