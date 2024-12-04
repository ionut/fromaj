import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-block_text">
          <p className="label-2 section-subtitle text-center" id="about-label">
            Pentru momente speciale
          </p>
          <p className="body-3 text-center">
            Credem că fiecare masă spune o poveste. De aceea, ne-am propus să
            transformăm evenimentele și sărbătorile tale în experiențe de
            neuitat, prin platouri de brânzeturi create cu pasiune, rafinament
            și atenție la cele mai mici detalii.
          </p>
          <p className="body-3 text-center">
            Fie că pregătești o cină romantică, o aniversare plină de zâmbete
            sau un eveniment mareț, platourile noastre sunt mai mult decât o
            selecție de delicatese – sunt o invitație la bucurie, savoare și
            momente împărtășite.
          </p>
          <p className="body-3 text-center">
            Suntem aici să îți oferim o experiență gourmet de neuitat, perfectă
            pentru toate momentele tale speciale.
          </p>
        </div>

        <div className="hero-block_image">
          <Image
            src="/images/pic-main-new.png"
            width={1000}
            height={1000}
            alt="Fromaj Artisan Cheese Background"
            className="img-cover img-main"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
