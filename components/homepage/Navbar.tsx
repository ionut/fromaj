"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuLinks } from "@/utils/dataPlaceholder";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ul className="navbar-list">
      {menuLinks.map((item) => {
        const { href, name } = item;
        return (
          <li key={name} className="navbar-item">
            <Link
              href={href}
              className={`navbar-link hover-underline ${
                pathname === href ? "active" : ""
              }`}
            >
              <div className="separator"></div>
              <span className="span">{name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
