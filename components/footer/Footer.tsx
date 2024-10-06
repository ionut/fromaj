import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="row justify-between">
          <div className="col-sm-12 col-md-6">
            <ul className="footer-terms">
              <li>
                <Link href="/terms">Termeni și condiții</Link>
              </li>
              <li>
                <Link href="/gdpr">Datele personale</Link>
              </li>
              <li>
                <Link href="/cookies">Despre Cookies</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="copyright-anpc">
              <a
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
                target="_blank"
              >
                <Image
                  src="/images/anpc-sal.png"
                  alt="ANPC Logo"
                  loading="lazy"
                  width={200}
                  height={200}
                />
              </a>
              <a href="https://anpc.ro/ce-este-sal/" target="_blank">
                <Image
                  src="/images/anpc-sal-2.png"
                  alt="ANPC Logo"
                  width={200}
                  height={200}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">
          <span>&copy; Copyright (c) 2024 Crafted by WebRender |</span>
          <a href="tel:+40747241177">0747241177</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
