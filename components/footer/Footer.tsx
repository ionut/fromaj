import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section>
        <Image
          src="/images/wave-footer.svg"
          width={100}
          height={100}
          alt="Wave"
          className="wave"
        />
      </section>
      <footer className="footer section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <li className="footer-terms">
                <ul>
                  <Link href="/terms">Termeni și condiții</Link>
                </ul>
                <ul>
                  <Link href="/gdpr">Datele personale</Link>
                </ul>
                <ul>
                  <Link href="/cookies">Despre Cookies</Link>
                </ul>
              </li>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="copyright-anpc">
                <a
                  href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
                  target="_blank"
                >
                  <Image
                    src="/images/anpc-sal.png"
                    alt="anpc"
                    loading="lazy"
                    width={200}
                    height={200}
                  />
                </a>
                <a href="https://anpc.ro/ce-este-sal/" target="_blank">
                  <Image
                    src="/images/anpc-sal-2.png"
                    alt="anpc-2"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
          <p className="copyright">
            &copy; Copyright (c) 2022 Crafted by Entourage Addict SRL |{" "}
            <a href="tel:+40747241177">0747241177</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
