import Image from "next/image";
import React from "react";
import MenuItem from "../features/MenuItem";
import { products } from "@/utils/dataPlaceholder";

const MenuSection = () => {
  return (
    <section className="section menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Selecție Specială
        </p>

        <h2 className="headline-1 section-title text-center">Cutii</h2>

        <ul className="grid-list products">
          {products.map((item) => {
            return <MenuItem key={item.name} item={item} />;
          })}
        </ul>
        <Image
          src="/images/shape-6.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-3 move-anim"
        />
      </div>
    </section>
  );
};

export default MenuSection;
