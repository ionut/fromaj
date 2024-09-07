import Image from "next/image";
import React from "react";
import MenuItem from "../cart/MenuItem";
import { Products } from "@/utils/types";
import { getQuery } from "@/utils/query";

const MenuSection = async () => {
  const { data } = await getQuery("/products?populate=*");

  return (
    <section className="section menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Selecție Specială
        </p>

        <h2 className="headline-1 section-title text-center">Cutii</h2>

        <ul className="grid-list products">
          {!data.length ? (
            <h2 className="title-2">
              Comandați la numărul <a href="tel:0754 404 000">0754 404 000</a>
            </h2>
          ) : (
            data?.map((item: Products) => {
              return <MenuItem key={item.attributes.productName} item={item} />;
            })
          )}
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
