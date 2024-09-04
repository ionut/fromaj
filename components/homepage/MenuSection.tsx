"use client";
import Image from "next/image";
import React from "react";
import MenuItem from "../cart/MenuItem";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/utils/query";
import { Products } from "@/utils/types";

const MenuSection = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (error)
    return (
      <h2>
        Vă rugăm sunați la numărul <a href="tel:0754 404 000">0754 404 000</a>
      </h2>
    );
  if (loading) return <h2>Loading...</h2>;

  return (
    <section className="section menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Selecție Specială
        </p>

        <h2 className="headline-1 section-title text-center">Cutii</h2>

        <ul className="grid-list products">
          {data?.products?.data?.map((item: Products) => {
            return (
              <MenuItem
                key={item.productName}
                item={item.attributes}
                id={item.id}
              />
            );
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
