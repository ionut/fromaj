"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  IoCallOutline,
  IoCloseOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";
import Link from "next/link";
import NavbarList from "../homepage/Navbar";
import Button from "../ui/Button";

const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [blur, setBlur] = useState(false);

  const handleClick = () => {
    setShowMobileNavbar((show) => !show);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBlur(false);
        } else {
          setBlur(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);
  return (
    <div ref={divRef}>
      <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <IoLocationOutline />

            <span className="span">Iași, România</span>
          </address>

          <div className="separator"></div>

          <div className="topbar-item link">
            <a href="tel:+40754404000" className="topbar-item link">
              <IoCallOutline />

              <span className="span">0754 404 000</span>
            </a>
          </div>

          <div className="separator"></div>

          <div className="topbar-item item-2 link">
            <a href="mailto:contact@fromaj.ro" className="topbar-item link">
              <IoMailOutline />

              <span className="span">contact@fromaj.ro</span>
            </a>
          </div>
          <div className="topbar-item">
            <a
              href="https://wa.me/40754404000"
              className="topbar-item link"
              target="_blank"
            >
              <IoLogoWhatsapp />

              <span className="span">WhatsApp</span>
            </a>
          </div>

          <div className="separator"></div>

          <a
            href="https://www.facebook.com/Fromaj.Iasi"
            className="topbar-item link"
            target="_blank"
          >
            <IoLogoFacebook />

            <span className="span">Fromaj - Artisan Cheese Boards</span>
          </a>

          <div className="separator"></div>

          <a
            href="https://www.instagram.com/fromaj.iasi/"
            className="topbar-item link"
            target="_blank"
          >
            <IoLogoInstagram />

            <span className="span">fromaj.iasi</span>
          </a>
        </div>
      </div>

      <header className={`header${blur ? " active" : ""}`}>
        <div className="container">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.png"
              width="160"
              height="50"
              alt="Fromaj - Artisan Cheese Boards"
              loading="lazy"
              className="img-cover"
            />
          </Link>

          <nav className={`navbar ${showMobileNavbar ? "active" : ""}`}>
            <button className="close-btn" onClick={handleClick}>
              <IoCloseOutline />
            </button>

            <Link href="/" className="logo">
              <Image
                src="/images/logo.png"
                width="180"
                height="60"
                alt="Fromaj - Artisan Cheese Boards"
                loading="lazy"
                className="img-cover"
              />
            </Link>

            <NavbarList />

            <div className="text-center">
              <p className="headline-1 navbar-title">Despre</p>

              <address className="body-4">Iași, România</address>

              <a
                href="https://www.facebook.com/Fromaj.Iasi"
                className="body-4 sidebar-link"
                target="_blank"
              >
                Facebook: Fromaj - Artisan Cheese Boards
              </a>

              <a
                href="https://www.instagram.com/fromaj.iasi/"
                className="body-4 sidebar-link"
                target="_blank"
              >
                Instagram: fromaj.iasi
              </a>
              <a
                href="https://wa.me/40754404000"
                className="body-4 sidebar-link"
              >
                WhatsApp
              </a>

              <div className="separator"></div>

              <a href="mailto:contact@fromaj.ro" className="contact-label">
                contact@fromaj.ro
              </a>

              <a
                href="tel:+40754404000"
                className="body-1 contact-number hover-underline"
              >
                +40754404000
              </a>
            </div>
          </nav>
          <Button goTo="/rezervare" text="Rezervă" />
          <button className="nav-open-btn" onClick={handleClick}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          <div className="overlay"></div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
