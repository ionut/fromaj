"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuLinks } from "@/utils/dataPlaceholder";

const NavbarList = () => {
  const pathname = usePathname();

  return (
    <ul className="navbar-list">
      {menuLinks.map((item, index) => {
        const { href, name } = item;
        return (
          <li key={index} className="navbar-item">
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

export default NavbarList;
